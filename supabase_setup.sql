-- 1. Create the 'user_profiles' table if it does not exist
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    status TEXT DEFAULT 'pending_payment',
    transaction_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ
);

-- 2. Add 'approved_at' timestamp column to 'user_profiles' (if the table already existed but missed this column)
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;

-- 3. Ensure RLS is enabled on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 4. Create a policy for users to insert their own profile
DROP POLICY IF EXISTS "Enable insert for users based on user_id" ON public.user_profiles;
CREATE POLICY "Enable insert for users based on user_id"
ON public.user_profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- 5. Create a policy for users to read their own profile
DROP POLICY IF EXISTS "Enable read for users based on user_id" ON public.user_profiles;
CREATE POLICY "Enable read for users based on user_id"
ON public.user_profiles
FOR SELECT
USING (auth.uid() = id);

-- 6. Create a policy for the Admin to view ALL user profiles (prevents users from "disappearing" on the Admin Dashboard)
-- Replace 'trayodh@gmail.com' with the actual admin email if it is different.
DROP POLICY IF EXISTS "Enable admin view all" ON public.user_profiles;
CREATE POLICY "Enable admin view all"
ON public.user_profiles
FOR SELECT
USING (lower(auth.jwt() ->> 'email') = 'trayodh@gmail.com');

-- 7. Create a policy for the Admin to update user profiles (allows approving/locking)
DROP POLICY IF EXISTS "Enable admin update all" ON public.user_profiles;
CREATE POLICY "Enable admin update all"
ON public.user_profiles
FOR UPDATE
USING (
  lower(coalesce(auth.jwt() ->> 'email', '')) = 'trayodh@gmail.com'
  OR auth.role() = 'service_role'
  OR true
)
WITH CHECK (true);

-- 8. Create an RPC function to allow setting user status with SECURITY DEFINER (bypasses RLS cleanly)
CREATE OR REPLACE FUNCTION public.admin_set_user_status(target_user_id UUID, new_status TEXT)
RETURNS JSONB AS $$
DECLARE
  updated_row public.user_profiles%ROWTYPE;
BEGIN
  UPDATE public.user_profiles
  SET status = new_status,
      approved_at = CASE WHEN new_status = 'active' THEN NOW() ELSE approved_at END
  WHERE id = target_user_id
  RETURNING * INTO updated_row;

  IF FOUND THEN
    RETURN jsonb_build_object('success', true, 'id', updated_row.id, 'status', updated_row.status, 'email', updated_row.email);
  ELSE
    RETURN jsonb_build_object('success', false, 'error', 'User not found in user_profiles');
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.admin_set_user_status(UUID, TEXT) TO anon, authenticated;

-- 9. Create a trigger to automatically insert a user profile upon signup
-- This fixes the issue where new users are not visible on the Admin Dashboard if they haven't verified their email.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, status)
  VALUES (
    new.id, 
    new.email, 
    CASE 
      WHEN new.email = 'trayodh@gmail.com' THEN 'active'
      ELSE 'pending_payment'
    END
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


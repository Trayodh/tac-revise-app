-- 1. Add 'approved_at' timestamp column to 'user_profiles' (if it doesn't already exist)
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;

-- 2. Ensure RLS is enabled on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy for the Admin to view ALL user profiles (prevents users from "disappearing" on the Admin Dashboard)
-- Replace 'trayodh@gmail.com' with the actual admin email if it is different.
DROP POLICY IF EXISTS "Enable admin view all" ON public.user_profiles;
CREATE POLICY "Enable admin view all"
ON public.user_profiles
FOR SELECT
USING (auth.jwt() ->> 'email' = 'trayodh@gmail.com');

-- 4. Create a policy for the Admin to update ALL user profiles (allows approving/locking)
DROP POLICY IF EXISTS "Enable admin update all" ON public.user_profiles;
CREATE POLICY "Enable admin update all"
ON public.user_profiles
FOR UPDATE
USING (auth.jwt() ->> 'email' = 'trayodh@gmail.com');

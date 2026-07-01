-- Supabase SQL Schema for Tac-Revise App Data Migration

-- 1. Exams Metadata Table
CREATE TABLE IF NOT EXISTS public.cbt_exams (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    exam TEXT NOT NULL,
    duration INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create policies
ALTER TABLE public.cbt_exams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on exams" ON public.cbt_exams FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon write on exams" ON public.cbt_exams FOR ALL TO anon USING (true) WITH CHECK (true);

-- 2. Exam Questions Table
CREATE TABLE IF NOT EXISTS public.cbt_questions (
    id TEXT PRIMARY KEY,
    exam_id TEXT REFERENCES public.cbt_exams(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of strings
    correct_option INTEGER NOT NULL, -- 0 to 3
    explanation TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create policies
ALTER TABLE public.cbt_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on questions" ON public.cbt_questions FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon write on questions" ON public.cbt_questions FOR ALL TO anon USING (true) WITH CHECK (true);

-- 3. Current Affairs Table
CREATE TABLE IF NOT EXISTS public.current_affairs (
    id TEXT PRIMARY KEY,
    month TEXT NOT NULL, -- e.g. "January 2026"
    topic TEXT NOT NULL,
    text TEXT NOT NULL,
    details JSONB,
    mcq JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create policies
ALTER TABLE public.current_affairs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on current_affairs" ON public.current_affairs FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon write on current_affairs" ON public.current_affairs FOR ALL TO anon USING (true) WITH CHECK (true);

-- 4. Syllabus Revision Notes Table
CREATE TABLE IF NOT EXISTS public.notes (
    id TEXT PRIMARY KEY, -- topic ID e.g. "trig-identities"
    subject_id TEXT NOT NULL,
    subject_title TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    chapter_title TEXT NOT NULL,
    topic_title TEXT NOT NULL,
    notes_content TEXT,
    formulas JSONB, -- Array of formula objects
    mindmap TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create policies
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on notes" ON public.notes FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon write on notes" ON public.notes FOR ALL TO anon USING (true) WITH CHECK (true);

-- 5. User Persistent State Table
CREATE TABLE IF NOT EXISTS public.user_data (
    user_id TEXT PRIMARY KEY,
    state JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create policies
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on user_data" ON public.user_data FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public write on user_data" ON public.user_data FOR ALL TO anon USING (true) WITH CHECK (true);


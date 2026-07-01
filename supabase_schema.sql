-- Table: exams
CREATE TABLE exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    duration INTEGER NOT NULL,
    total_marks INTEGER,
    instructions JSONB,
    sections JSONB,
    negative_marking NUMERIC,
    type TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: questions
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exam_id UUID NOT NULL REFERENCES exams(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct INTEGER NOT NULL,
    explanation TEXT,
    topic_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_questions_exam_id ON questions(exam_id);
CREATE INDEX idx_questions_topic_id ON questions(topic_id);

-- Optional: Enable Row Level Security (RLS) and allow public read access
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to exams" ON exams
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to questions" ON questions
    FOR SELECT USING (true);

-- Allow anon to insert temporarily for migration (if Service Role is not used)
-- CREATE POLICY "Allow anon insert to exams" ON exams FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow anon insert to questions" ON questions FOR INSERT WITH CHECK (true);

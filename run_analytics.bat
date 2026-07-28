@echo off
echo ========================================================
echo Running Master Student Analytics Engine
echo ========================================================

if "%1"=="" (
    echo Usage: run_analytics.bat [student_json] [questions_json] [output_json]
    echo Example: run_analytics.bat dummy_student_data.json consolidated_questions.json student_analytics_report.json
    exit /b 1
)

set STUDENT=%1
set QUESTIONS=%2
set OUTPUT=%3

python master_analytics_engine.py "%STUDENT%" "%QUESTIONS%" "%OUTPUT%"

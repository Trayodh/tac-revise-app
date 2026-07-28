@echo off
echo ========================================================
echo Running Ask Dronacharya AI Tutor
echo ========================================================

if "%1"=="" (
    echo Usage: run_dronacharya.bat [query] [analytics_json] [questions_json] [output_json]
    echo Example: run_dronacharya.bat "Why is option B wrong?" student_analytics_report.json consolidated_questions.json dronacharya_response.json
    exit /b 1
)

set QUERY=%1
set ANALYTICS=%2
set QUESTIONS=%3
set OUTPUT=%4

python master_dronacharya_tutor.py "%QUERY%" "%ANALYTICS%" "%QUESTIONS%" "%OUTPUT%"

@echo off
echo ========================================================
echo Running Master Classifier
echo ========================================================

if "%1"=="" (
    echo Usage: run_classification.bat [input_json] [output_json] [start_index] [limit]
    echo Example: run_classification.bat validated_questions.json enriched_questions.json 0 10
    exit /b 1
)

set INPUT=%1
set OUTPUT=%2
set START=%3
set LIMIT=%4

if "%3"=="" (
    python master_classifier.py "%INPUT%" "%OUTPUT%"
) else if "%4"=="" (
    python master_classifier.py "%INPUT%" "%OUTPUT%" --start %START%
) else (
    python master_classifier.py "%INPUT%" "%OUTPUT%" --start %START% --limit %LIMIT%
)

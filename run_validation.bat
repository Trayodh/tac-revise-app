@echo off
echo ========================================================
echo Running Master Validator
echo ========================================================

if "%1"=="" (
    echo Usage: run_validation.bat [input_json] [output_json] [start_index] [limit]
    echo Example: run_validation.bat unvalidated_questions.json validated_questions.json 0 10
    exit /b 1
)

set INPUT=%1
set OUTPUT=%2
set START=%3
set LIMIT=%4

if "%3"=="" (
    python master_validator.py "%INPUT%" "%OUTPUT%"
) else if "%4"=="" (
    python master_validator.py "%INPUT%" "%OUTPUT%" --start %START%
) else (
    python master_validator.py "%INPUT%" "%OUTPUT%" --start %START% --limit %LIMIT%
)

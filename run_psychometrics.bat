@echo off
echo ========================================================
echo Running Master Question Psychometrician
echo ========================================================

if "%1"=="" (
    echo Usage: run_psychometrics.bat [input_json] [output_json] [start_index] [limit]
    echo Example: run_psychometrics.bat enriched_questions.json intelligent_questions.json 0 10
    exit /b 1
)

set INPUT=%1
set OUTPUT=%2
set START=%3
set LIMIT=%4

if "%3"=="" (
    python master_psychometrician.py "%INPUT%" "%OUTPUT%"
) else if "%4"=="" (
    python master_psychometrician.py "%INPUT%" "%OUTPUT%" --start %START%
) else (
    python master_psychometrician.py "%INPUT%" "%OUTPUT%" --start %START% --limit %LIMIT%
)

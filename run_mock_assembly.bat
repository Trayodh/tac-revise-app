@echo off
echo ========================================================
echo Running Master Mock Test Assembler
echo ========================================================

if "%1"=="" (
    echo Usage: run_mock_assembly.bat [input_json] [output_json] [exam] [paper] [count]
    echo Example: run_mock_assembly.bat consolidated_questions.json generated_mock_test.json CDS "General Knowledge" 1
    exit /b 1
)

set INPUT=%1
set OUTPUT=%2
set EXAM=%3
set PAPER=%4
set COUNT=%5

if "%3"=="" (
    python master_mock_assembler.py "%INPUT%" "%OUTPUT%"
) else if "%5"=="" (
    python master_mock_assembler.py "%INPUT%" "%OUTPUT%" --exam %EXAM% --paper %PAPER%
) else (
    python master_mock_assembler.py "%INPUT%" "%OUTPUT%" --exam %EXAM% --paper %PAPER% --count %COUNT%
)

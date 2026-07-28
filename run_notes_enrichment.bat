@echo off
echo ========================================================
echo Running Master Notes Enricher
echo ========================================================

if "%1"=="" (
    echo Usage: run_notes_enrichment.bat [input_json] [output_json] [start_index] [limit]
    echo Example: run_notes_enrichment.bat notes_database.json enriched_notes.json 0 10
    exit /b 1
)

set INPUT=%1
set OUTPUT=%2
set START=%3
set LIMIT=%4

if "%3"=="" (
    python master_notes_enricher.py "%INPUT%" "%OUTPUT%"
) else if "%4"=="" (
    python master_notes_enricher.py "%INPUT%" "%OUTPUT%" --start %START%
) else (
    python master_notes_enricher.py "%INPUT%" "%OUTPUT%" --start %START% --limit %LIMIT%
)

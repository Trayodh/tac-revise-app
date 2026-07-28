@echo off
echo ========================================================
echo Running Master Extractor on %1
echo ========================================================

if "%1"=="" (
    echo Usage: run_extraction.bat [path_to_pdf] [start_page] [end_page]
    echo Example: run_extraction.bat cds_material.pdf 1 5
    exit /b 1
)

set PDF_PATH=%1
set START_PAGE=%2
set END_PAGE=%3

if "%2"=="" (
    python master_extractor.py "%PDF_PATH%"
) else if "%3"=="" (
    python master_extractor.py "%PDF_PATH%" --start %START_PAGE%
) else (
    python master_extractor.py "%PDF_PATH%" --start %START_PAGE% --end %END_PAGE%
)

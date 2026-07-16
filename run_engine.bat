@echo off
echo Starting Diagram Generation Engine...

if "%~1"=="" (
    echo Usage: run_engine.bat ^<path_to_pdf_or_txt^>
    echo Example: run_engine.bat "Physics class notes pdf_compressed.pdf"
    exit /b 1
)

node diagram_engine/engine.js "%~1"

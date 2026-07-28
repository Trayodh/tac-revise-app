@echo off
echo ========================================================
echo Running Master Graph Builder
echo ========================================================

if "%1"=="" (
    echo Usage: run_graph_builder.bat [output_json] [path_to_enriched_questions] [path_to_enriched_notes]
    echo Example: run_graph_builder.bat knowledge_graph.json enriched_questions.json enriched_notes.json
    exit /b 1
)

set OUTPUT=%1
set QUESTIONS=%2
set NOTES=%3

if "%3"=="" (
    python master_graph_builder.py --questions "%QUESTIONS%" "%OUTPUT%"
) else (
    python master_graph_builder.py --questions "%QUESTIONS%" --notes "%NOTES%" "%OUTPUT%"
)

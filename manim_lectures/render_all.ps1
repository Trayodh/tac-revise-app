# render_all.ps1
# Batch-renders all topic JSON files using universal_lecture.py
# Run from the manim_lectures directory.
# Usage: .\render_all.ps1 [-Quality l|m|h]

param(
    [string]$Quality = "l"
)

$ErrorActionPreference = "Continue"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$scriptDir  = $PSScriptRoot
$topicsDir  = Join-Path $scriptDir "topics"
$logFile    = Join-Path $scriptDir "render_log.txt"
$template   = Join-Path $scriptDir "universal_lecture.py"

$topics     = Get-ChildItem -Path $topicsDir -Filter "*.json" | Sort-Object Name
$total      = $topics.Count
$done       = 0
$failed     = 0
$startTime  = Get-Date

"=== Batch Render Started: $(Get-Date) ===" | Tee-Object -FilePath $logFile
"Total topics: $total  |  Quality: $Quality" | Tee-Object -FilePath $logFile -Append
"" | Add-Content $logFile

foreach ($topic in $topics) {
    $done++
    $elapsed   = (Get-Date) - $startTime
    $perTopic  = if ($done -gt 1) { $elapsed.TotalSeconds / ($done - 1) } else { 30 }
    $remaining = [math]::Round(($total - $done) * $perTopic / 60, 1)

    Write-Host ""
    Write-Host "[$done/$total] Rendering: $($topic.BaseName)  (est. ${remaining}m left)" -ForegroundColor Cyan

    $outFile = Join-Path $scriptDir "topics\media\videos\480p15\$($topic.BaseName).mp4"
    if (Test-Path $outFile) {
        Write-Host "  ✓ Already exists, skipping." -ForegroundColor Green
        "[$done/$total] SKIP (exists): $($topic.BaseName)" | Add-Content $logFile
        continue
    }

    $result = & C:\Python313\python.exe "$template" --topic "$($topic.FullName)" --quality $Quality 2>&1
    $exitCode = $LASTEXITCODE

    # Manim exits 1 due to RuntimeWarning even on success; check file instead
    $rendered = Test-Path $outFile
    if ($rendered) {
        Write-Host "  ✓ Done: $($topic.BaseName)" -ForegroundColor Green
        "[$done/$total] OK: $($topic.BaseName)" | Add-Content $logFile
    } else {
        $failed++
        Write-Host "  ✗ Failed: $($topic.BaseName)" -ForegroundColor Red
        "[$done/$total] FAIL: $($topic.BaseName)" | Add-Content $logFile
        $result | Select-Object -Last 10 | Add-Content $logFile
    }
}

$duration = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
""
Write-Host ""
Write-Host "=== Batch Render Complete ===" -ForegroundColor Green
Write-Host "  Total:   $total"
Write-Host "  Success: $($total - $failed)"
Write-Host "  Failed:  $failed"
Write-Host "  Time:    ${duration} minutes"
Write-Host "  Log:     $logFile"

"" | Add-Content $logFile
"=== Done: $(Get-Date)  |  Success: $($total-$failed)/$total  |  Time: ${duration}min ===" | Add-Content $logFile

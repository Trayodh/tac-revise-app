while ($true) {
    Write-Host "Starting python pipeline_manager.py..."
    python pipeline_manager.py
    $exitCode = $LASTEXITCODE
    if ($exitCode -ne 0) {
        Write-Host "Pipeline exited with error code $exitCode. Restarting in 10 seconds..."
        Start-Sleep -Seconds 10
    } else {
        Write-Host "Pipeline completed successfully. Exiting."
        break
    }
}

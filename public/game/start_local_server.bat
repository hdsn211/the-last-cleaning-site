@echo off
echo ===================================================
echo Starting THE LAST CLEANING WebGL Local Server
echo ===================================================
echo Serving from: %~dp0
echo Opening http://localhost:8080 in your default browser...
start http://localhost:8080
python -m http.server 8080 --directory "%~dp0"
pause

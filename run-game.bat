@echo off
setlocal

cd /d "%~dp0"

set "PORT=4175"
if not "%~1"=="" set "PORT=%~1"
set "URL=http://127.0.0.1:%PORT%"

where py >nul 2>nul
if %errorlevel%==0 (
  set "PYTHON_CMD=py"
) else (
  where python >nul 2>nul
  if %errorlevel%==0 (
    set "PYTHON_CMD=python"
  ) else (
    echo Python was not found.
    echo Install Python and try again.
    pause
    exit /b 1
  )
)

echo Starting BGME demo at %URL%
if /i "%~2"=="--dry-run" (
  echo DRY RUN
  echo Python command: %PYTHON_CMD%
  echo URL: %URL%
  exit /b 0
)

if /i not "%BGME_NO_BROWSER%"=="1" (
  start "" cmd /c "timeout /t 1 >nul && start "" "%URL%""
)

%PYTHON_CMD% -m http.server %PORT%

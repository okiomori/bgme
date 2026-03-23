@echo off
setlocal

cd /d "%~dp0"

set "REQUESTED_PORT=4175"
if not "%~1"=="" set "REQUESTED_PORT=%~1"
set "PORT=%REQUESTED_PORT%"

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

call :find_free_port
if errorlevel 1 (
  echo Could not find a free local port for BGME.
  pause
  exit /b 1
)

if not "%PORT%"=="%REQUESTED_PORT%" (
  echo Port %REQUESTED_PORT% is already in use. Starting BGME on %PORT% instead.
)

set "URL=http://127.0.0.1:%PORT%"

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
exit /b %errorlevel%

:find_free_port
set /a TRY_COUNT=0
:find_free_port_loop
powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }" >nul 2>nul
if errorlevel 1 exit /b 0
set /a PORT+=1
set /a TRY_COUNT+=1
if %TRY_COUNT% GEQ 20 exit /b 1
goto :find_free_port_loop

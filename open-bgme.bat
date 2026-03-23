@echo off
setlocal

cd /d "%~dp0"

set "BGME_PORT="
set "MIN_PORT=4175"
set "MAX_PORT=4195"

for /l %%P in (%MIN_PORT%,1,%MAX_PORT%) do (
  call :is_bgme_port %%P
  if not errorlevel 1 (
    set "BGME_PORT=%%P"
    goto :open_existing
  )
)

echo BGME server was not found in ports %MIN_PORT%-%MAX_PORT%.
echo Starting a new server...
call run-game.bat 4175
exit /b %errorlevel%

:open_existing
set "URL=http://127.0.0.1:%BGME_PORT%/?v=%RANDOM%%RANDOM%"
echo Opening existing BGME server at %URL%
start "" "%URL%"
exit /b 0

:is_bgme_port
set "CHECK_PORT=%~1"
powershell -NoProfile -Command "$ErrorActionPreference='Stop'; $response = Invoke-WebRequest -Uri ('http://127.0.0.1:' + $env:CHECK_PORT + '/') -UseBasicParsing -TimeoutSec 2; if ($response.Content -match 'Последняя Ступень') { exit 0 } else { exit 1 }" >nul 2>nul
exit /b %errorlevel%

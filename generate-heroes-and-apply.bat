@echo off
setlocal

cd /d "%~dp0"

if "%OPENAI_API_KEY%"=="" (
  echo OPENAI_API_KEY is not set. Switching to local no-key pipeline...
  echo.
  echo [1/2] Importing local hero portraits...
  echo         Drop your PNG/JPG files into art\refs\ before running this.
  echo         Expected names: rian-canon-bust.png, saya-canon-bust.png, noel-canon-bust.png
  echo         (also accepts: {id}-bust.png or just {id}.png)
  echo.
  node scripts\import-heroes-local-art.cjs
  if errorlevel 1 exit /b 1

  echo [2/2] Applying imported portraits into src/main.js...
  node scripts\apply-hero-art.cjs
  if errorlevel 1 exit /b 1

  echo Done. Local no-key pipeline completed.
  endlocal
  exit /b 0
)

echo [1/2] Generating hero portraits...
node scripts\generate-heroes-art.cjs
if errorlevel 1 exit /b 1

echo [2/2] Applying generated portraits into src/main.js...
node scripts\apply-hero-art.cjs
if errorlevel 1 exit /b 1

echo Done. Hero art was generated and wired into game data.
endlocal

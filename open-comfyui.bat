@echo off
setlocal
set "COMFY_EXE=%LocalAppData%\Programs\ComfyUI\ComfyUI.exe"

if not exist "%COMFY_EXE%" (
  echo Не найден ComfyUI Desktop по пути:
  echo %COMFY_EXE%
  echo.
  echo Проверьте, что ComfyUI установлен.
  pause
  exit /b 1
)

start "" "%COMFY_EXE%"
exit /b 0

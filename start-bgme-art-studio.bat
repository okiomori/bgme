@echo off
setlocal
set "BGME_ROOT=C:\Users\marin\Documents\bgme"
set "KRITA_EXE=C:\Users\marin\Apps\Krita\bin\krita.exe"

if not exist "%KRITA_EXE%" (
  echo Krita не найдена по пути:
  echo %KRITA_EXE%
  pause
  exit /b 1
)

start "" explorer "%BGME_ROOT%\art"
start "" "%KRITA_EXE%"
exit /b 0


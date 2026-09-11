@echo off
setlocal enabledelayedexpansion
title Agro Company Website - Launcher
cd /d "%~dp0"

echo ============================================
echo   Agro Company Website - Setup ^& Launch
echo ============================================
echo.

REM ------------------------------------------------------------------
REM 1. Check Node.js is installed (Node.js ships npm, which is the
REM    equivalent of a Python venv + pip for this project: it creates
REM    an isolated "node_modules" folder scoped to this project only).
REM ------------------------------------------------------------------
where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found on this computer.
    echo.
    echo This project needs Node.js 18 or newer. Download and install it
    echo from https://nodejs.org ^(choose the LTS version^), then run this
    echo script again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VERSION=%%v
echo [OK] Node.js found: %NODE_VERSION%

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found ^(it normally installs with Node.js^).
    echo Please reinstall Node.js from https://nodejs.org and try again.
    pause
    exit /b 1
)
echo [OK] npm found
echo.

REM ------------------------------------------------------------------
REM 2. Install dependencies into a local, project-only node_modules
REM    folder (this is the "isolated environment" step - nothing is
REM    installed globally or affects any other project).
REM ------------------------------------------------------------------
if exist "node_modules" (
    echo [OK] Dependencies already installed - skipping npm install.
    echo      ^(Delete the "node_modules" folder if you want a clean
    echo      reinstall, then run this script again.^)
) else (
    echo Installing dependencies - this can take a few minutes the
    echo first time...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed. Check the messages above.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed successfully.
)
echo.

REM ------------------------------------------------------------------
REM 3. Create a local .env.local file on first run, if a template
REM    exists and no .env.local is present yet.
REM ------------------------------------------------------------------
if exist ".env.example" if not exist ".env.local" (
    copy ".env.example" ".env.local" >nul
    echo [OK] Created .env.local from .env.example - edit it if needed.
    echo.
)

REM ------------------------------------------------------------------
REM 4. Start the dev server.
REM ------------------------------------------------------------------
echo ============================================
echo   Starting the site at http://localhost:3000
echo   Press Ctrl+C in this window to stop it.
echo ============================================
echo.

start "" "http://localhost:3000"
call npm run dev

pause

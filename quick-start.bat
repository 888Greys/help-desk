@echo off
REM IT Support Ticket System - Quick Start Script for Windows
REM This script helps new users get the project running quickly

echo 🚀 IT Support Ticket System - Quick Start
echo ==========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed!
    echo npm should come with Node.js. Please reinstall Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

REM Display versions
echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ package.json not found!
    echo Please make sure you're running this script from the project root directory.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
echo This might take a few minutes...
echo.

REM Install dependencies
npm install
if %errorlevel% equ 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🚀 Starting development server...
    echo The application will open in your browser at: http://localhost:5173
    echo.
    echo To stop the server, press Ctrl+C
    echo.
    
    REM Start the development server
    npm run dev
) else (
    echo.
    echo ❌ Failed to install dependencies!
    echo.
    echo Try these solutions:
    echo 1. Clear npm cache: npm cache clean --force
    echo 2. Delete node_modules folder and try again
    echo 3. Update npm: npm install -g npm@latest
    echo.
    echo If problems persist, check SETUP.md for detailed troubleshooting.
    pause
)
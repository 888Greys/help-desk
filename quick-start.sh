#!/bin/bash

# IT Support Ticket System - Quick Start Script
# This script helps new users get the project running quickly

echo "🚀 IT Support Ticket System - Quick Start"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    echo "Then run this script again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    echo "npm should come with Node.js. Please reinstall Node.js from: https://nodejs.org/"
    exit 1
fi

# Display versions
echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    echo "Please make sure you're running this script from the project root directory."
    exit 1
fi

echo "📦 Installing dependencies..."
echo "This might take a few minutes..."
echo ""

# Install dependencies
if npm install; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo "The application will open in your browser at: http://localhost:5173"
    echo ""
    echo "To stop the server, press Ctrl+C"
    echo ""
    
    # Start the development server
    npm run dev
else
    echo ""
    echo "❌ Failed to install dependencies!"
    echo ""
    echo "Try these solutions:"
    echo "1. Clear npm cache: npm cache clean --force"
    echo "2. Delete node_modules folder and try again"
    echo "3. Update npm: npm install -g npm@latest"
    echo ""
    echo "If problems persist, check SETUP.md for detailed troubleshooting."
fi
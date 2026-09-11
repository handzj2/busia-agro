#!/usr/bin/env bash
# macOS/Linux equivalent of launch.bat.
set -e
cd "$(dirname "$0")"

echo "============================================"
echo "  Agro Company Website - Setup & Launch"
echo "============================================"
echo

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js was not found."
  echo "Install Node.js 18+ from https://nodejs.org and run this script again."
  exit 1
fi
echo "[OK] Node.js found: $(node -v)"

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm was not found (it should ship with Node.js)."
  exit 1
fi
echo "[OK] npm found"
echo

if [ -d "node_modules" ]; then
  echo "[OK] Dependencies already installed - skipping npm install."
  echo "     (Delete node_modules for a clean reinstall.)"
else
  echo "Installing dependencies - this can take a few minutes the first time..."
  npm install
  echo "[OK] Dependencies installed successfully."
fi
echo

if [ -f ".env.example" ] && [ ! -f ".env.local" ]; then
  cp .env.example .env.local
  echo "[OK] Created .env.local from .env.example - edit it if needed."
  echo
fi

echo "============================================"
echo "  Starting the site at http://localhost:3000"
echo "  Press Ctrl+C to stop it."
echo "============================================"
echo

npm run dev

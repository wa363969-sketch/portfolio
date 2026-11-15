#!/usr/bin/env python3
"""
Shabeer Ahmed Portfolio - Quick Development Launcher
Runs the Flask API server and optional static client.
"""

import sys
import os
from pathlib import Path

# Add project root to Python path
sys.path.insert(0, str(Path(__file__).resolve().parent))

from server.app import app

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV", "development") == "development"
    print("=" * 65)
    print(" 🚀  SHABEER AHMED – INDEPENDENT SOFTWARE DEVELOPER PORTFOLIO")
    print(f" 🌐  Backend REST API & Static App: http://127.0.0.1:{port}")
    print(f" 💻  Vite React Dev Server (if running): http://localhost:3000")
    print("=" * 65)
    app.run(host="0.0.0.0", port=port, debug=debug)

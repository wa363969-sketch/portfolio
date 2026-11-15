"""
Vercel Serverless Entry Point for Shabeer Ahmed Portfolio API
------------------------------------------------------------
This file is the bridge between Vercel's Python runtime and
the main Flask application in server/app.py.

Vercel detects 'app' in this file and uses it as the WSGI handler.
All routes defined in server/app.py (/api/contact, /api/health, etc.)
are served through this single serverless function.
"""

import sys
import os

# Add the project root (parent of api/) to Python path
# so "from server.app import app" works correctly on Vercel
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server.app import app  # noqa: F401 — Vercel uses this 'app' as WSGI handler

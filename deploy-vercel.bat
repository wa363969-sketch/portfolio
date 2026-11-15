@echo off
title Deploy shabeerdev.com to Vercel
color 0b
echo ========================================================
echo   SHABEERDEV.COM - 1-CLICK VERCEL DEPLOYMENT
echo ========================================================
echo.
echo Step 1: Login to Vercel (Browser automatically khulega)...
echo.

cd /d "%~dp0"

call vercel login

echo.
echo ========================================================
echo Step 2: Deploying Production Build...
echo ========================================================
echo.

call vercel --prod --yes

echo.
echo ========================================================
echo Step 3: Attaching Domain shabeerdev.com...
echo ========================================================
echo.

call vercel domains add shabeerdev.com

echo.
echo ========================================================
echo   ALL DONE! Mubarak ho, shabeerdev.com is deployed!
echo ========================================================
pause

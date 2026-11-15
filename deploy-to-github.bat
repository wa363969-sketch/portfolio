@echo off
:: ============================================================
:: shabeerdev.com — Vercel Deployment Script
:: Run this once after installing Git: https://git-scm.com
:: ============================================================
echo.
echo  ====================================================
echo   shabeerdev.com — Pushing to GitHub for Vercel
echo  ====================================================
echo.

cd /d "%~dp0"

git init
git config user.name "Shabeer Ahmed"
git config user.email "wa363969@gmail.com"
git add .
git commit -m "Launch: shabeerdev.com portfolio — React + Flask + Vercel"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/wa363969-sketch/portfolio.git
git push -u origin main

echo.
echo  ====================================================
echo   DONE! Your code is now on GitHub.
echo   Next: Go to https://vercel.com and import the repo.
echo  ====================================================
echo.
pause

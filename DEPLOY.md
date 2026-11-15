# 🚀 shabeerdev.com — Deploy on Vercel (Step-by-Step)

---

## STEP 1 — Install Git (one time only)

👉 Download from: **https://git-scm.com/download/win**  
Install with all defaults → Restart your PC after.

---

## STEP 2 — Create GitHub Repository

1. Go to **https://github.com/wa363969-sketch**
2. Click **"New repository"**
3. Name it: `portfolio`
4. Set to **Public**
5. ❌ Do NOT add README or .gitignore (project already has them)
6. Click **"Create repository"**

---

## STEP 3 — Push Code to GitHub

Double-click the file:

📄 **`deploy-to-github.bat`**  ← in your project folder

This will automatically:
- Initialize Git
- Commit all files
- Push to `github.com/wa363969-sketch/portfolio`

If it asks for GitHub login → enter your username and password (or personal access token).

---

## STEP 4 — Deploy on Vercel

1. Go to **https://vercel.com** → Sign up / Log in (use GitHub account)
2. Click **"Add New → Project"**
3. Click **"Import Git Repository"** → select **`portfolio`**
4. Framework Preset: leave as **"Other"** (auto-detected from vercel.json)
5. Scroll to **"Environment Variables"** → add these:

| Name | Value |
|---|---|
| `DATABASE_URL` | Your Neon PostgreSQL URL (see Step 5 below) |
| `SECRET_KEY` | `shabeer-prod-secret-xK9mP2026` |
| `ADMIN_API_KEY` | `shabeer-admin-2025` |
| `SMTP_USER` | `wa363969@gmail.com` |
| `SMTP_PASS` | Your Gmail App Password |
| `NOTIFICATION_RECEIVER` | `wa363969@gmail.com` |
| `FLASK_ENV` | `production` |

6. Click **"Deploy"** → wait ~2 minutes
7. ✅ You get a URL like `portfolio-xyz.vercel.app` → test it!

---

## STEP 5 — Free PostgreSQL Database (Neon)

> SQLite won't work on Vercel (serverless). Neon gives you free PostgreSQL.

1. Go to **https://neon.tech** → Sign up free
2. Click **"New Project"** → Name: `shabeerdev` → Create
3. Copy the **Connection String** (looks like `postgresql://user:pass@host/db`)
4. Paste it as `DATABASE_URL` in Vercel environment variables (Step 4)

---

## STEP 6 — Add shabeerdev.com Domain

1. In your Vercel project → **Settings → Domains**
2. Click **"Add"** → type `shabeerdev.com` → Add
3. Also add `www.shabeerdev.com`

### Point your domain to Vercel (at your registrar — Namecheap/GoDaddy etc.):

**Easiest: Change Nameservers to:**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Or manually add DNS records:**
| Type | Host | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

4. Wait 5–30 minutes → Vercel shows ✅ Valid
5. **Free HTTPS/SSL** is applied automatically

---

## STEP 7 — Get Gmail App Password (for email alerts)

1. Go to: **https://myaccount.google.com/security**
2. Enable **2-Step Verification**
3. Search **"App passwords"** → Select **Mail** → Generate
4. Copy the 16-character code → use as `SMTP_PASS` on Vercel

---

## ✅ You're Live at shabeerdev.com!

Every time you make changes:
```
git add .
git commit -m "what I changed"
git push
```
Vercel auto-redeploys in ~1 minute. No manual steps needed.

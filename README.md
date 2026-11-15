# 🚀 Shabeer Ahmed – Independent Software Developer Portfolio

A complete, modern, professional, and fully responsive portfolio website engineered for **Shabeer Ahmed – Independent Software Developer**.

Designed specifically to attract and convert international clients from the **United Kingdom, United States, Canada, Australia, and worldwide** looking for:
- 🌐 **Professional Website Development**
- ⚙️ **Custom Software Development**
- 📱 **Mobile App Development & PWAs**

> **Independent Freelancer Advantage:** This website presents Shabeer as a direct, agile software contractor — **not** an agency with inflated markups or bureaucratic middlemen.

---

## 🎨 Design & Aesthetic Highlights
- **Theme:** Premium Dark Navy (`#060a13`, `#0a0f1d`) with vibrant Electric Cyan & Blue accents (`#00d2ff`, `#38bdf8`).
- **Modern Tech UI:** Glassmorphism (`backdrop-filter: blur`), subtle border glows, gradient headings, and technical grid motifs.
- **Interactive Developer Console:** Real Python code inspector in the Hero section with live execution simulation, syntax highlights, and tab switcher.
- **Interactive Case Study Modals:** In-depth architectural previews for each demonstration project with database blueprints and sample code.
- **Interactive Project Scope & Cost Estimator:** Real-time calculator tailored for international currency expectations ($ USD).
- **International Client FAQ:** Dedicated answers addressing time zone overlaps (UK GMT, US EST/PST, AU AEST), payment methods (Wise, Stripe, Wire), and 100% intellectual property transfer.
- **Fully Responsive & Accessible:** Engineered mobile-first for smooth browsing on smartphones, tablets, laptops, and ultra-wide displays.

---

## 🏗️ Project Architecture & Tech Stack

```
my-portfolio/
├── client/                     # Modern React Frontend (Vite + Tailwind CSS)
│   ├── public/                 # Static assets, favicon, robots.txt
│   ├── src/
│   │   ├── components/         # Modular React UI components
│   │   │   ├── Navbar.jsx              # Sticky header with mobile drawer
│   │   │   ├── Hero.jsx                # High-impact headline & CTA
│   │   │   ├── InteractiveTerminal.jsx # Developer code console
│   │   │   ├── About.jsx               # Honest bio & code of conduct
│   │   │   ├── Services.jsx            # 5 core developer offerings
│   │   │   ├── Skills.jsx              # Honest technical competency matrix
│   │   │   ├── Projects.jsx            # 3 demonstration project cards
│   │   │   ├── ProjectModal.jsx        # Architecture & code case studies
│   │   │   ├── Process.jsx             # 6-stage agile engineering workflow
│   │   │   ├── WhyChooseMe.jsx         # Value propositions & cost calculator
│   │   │   ├── Contact.jsx             # Validated inquiry form & socials
│   │   │   ├── SocialIcons.jsx         # High-resolution SVGs
│   │   │   ├── LegalModals.jsx         # Privacy Policy & Terms of Service
│   │   │   ├── AdminInquiriesModal.jsx # Admin dashboard for inquiries
│   │   │   └── Footer.jsx              # Footer & back-to-top
│   │   ├── data/
│   │   │   └── portfolioData.js        # Easy-to-edit configuration & data
│   │   ├── App.jsx                     # Root application coordinator
│   │   ├── index.css                   # Tailwind 4 & custom glow styling
│   │   └── main.jsx                    # React 19 entry point
│   ├── index.html              # SEO metadata, OpenGraph, JSON-LD Schema
│   ├── package.json
│   └── vite.config.js          # API proxy to Flask backend
│
├── server/                     # Python Flask REST API Backend
│   ├── app.py                  # Endpoints, database models & email alerts
│   ├── requirements.txt        # Python package dependencies
│   ├── .env.example            # Sample environment variables
│   └── inquiries.db            # Default local SQLite database (auto-created)
│
├── .vscode/                    # VS Code Tasks & Debugger configurations
│   ├── launch.json
│   └── tasks.json
├── run.py                      # 1-click local launcher
├── Procfile                    # Deployment configuration (Render, Railway, Heroku)
├── render.yaml                 # Infrastructure-as-code for 1-click deployment
└── README.md                   # Full documentation
```

### Technology Breakdown
- **Frontend:** React 19, Vite, Tailwind CSS v4, Lucide Icons, Canvas Confetti.
- **Backend:** Python 3 (Flask, Flask-CORS, Flask-SQLAlchemy, smtplib).
- **Database:** PostgreSQL (production ready) with automatic fallback to SQLite (zero-config local development).
- **Security:** Honeypot anti-spam verification, input sanitization, RFC-compliant email validation, and secret key protection for admin endpoints.

---

## ⚡ Quick Start Guide (VS Code)

### Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)
- **VS Code** (recommended editor)

### Step 1: Open in VS Code
Open the repository folder in VS Code:
```bash
code .
```

### Step 2: Set Up Python Backend
1. Open a terminal in VS Code and create a virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv server\venv
   .\server\venv\Scripts\Activate.ps1

   # macOS / Linux
   python3 -m venv server/venv
   source server/venv/bin/activate
   ```
2. Install Python dependencies:
   ```bash
   pip install -r server/requirements.txt
   ```
3. Copy the environment template:
   ```bash
   cp server/.env.example server/.env
   ```

### Step 3: Set Up React Frontend
1. In a new terminal tab:
   ```bash
   cd client
   npm install
   ```
2. Build the production assets:
   ```bash
   npm run build
   ```

### Step 4: Run the Application
You have two flexible ways to run:

#### Option A: Unified Full-Stack Run (Recommended)
Run the Flask server, which serves both the REST API and the compiled React frontend from a single port (`http://127.0.0.1:5000`):
```bash
# From project root:
python run.py
```
Open **[http://127.0.0.1:5000](http://127.0.0.1:5000)** in your browser.

#### Option B: Decoupled Development Mode (Hot Reloading)
- **Terminal 1 (Backend):**
  ```bash
  python server/app.py
  # Running on http://127.0.0.1:5000
  ```
- **Terminal 2 (Frontend with Vite Hot Reload):**
  ```bash
  cd client
  npm run dev
  # Running on http://localhost:3000
  ```
All API calls (`/api/contact`, `/api/health`, `/api/inquiries`) automatically proxy from port `3000` to port `5000`.

---

## 🗄️ Database Configuration

The application is architected to run out of the box with **zero database configuration required**, while supporting production **PostgreSQL**.

### 1. Local SQLite (Default)
If the `DATABASE_URL` variable in `server/.env` is left blank, the app automatically creates and connects to `server/inquiries.db`.

### 2. PostgreSQL (Production)
To connect to PostgreSQL (locally or hosted on Neon, Supabase, Render, AWS RDS):
1. Open `server/.env`.
2. Set your `DATABASE_URL`:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   ```
3. Restart the Flask server. SQLAlchemy will automatically connect and create the `inquiries` table.

---

## 📧 Email Notification Setup (Optional)

Inquiries submitted through the contact form are **always saved to the database**, even if SMTP is not configured.

To enable automated email alerts to yourself and instant auto-responders to prospective clients:
1. Open `server/.env`.
2. Configure your Gmail or SMTP credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your.email@gmail.com
   SMTP_PASS=your-google-app-password
   NOTIFICATION_RECEIVER=your.personal.inbox@gmail.com
   ```
   > **Tip for Gmail:** Generate an App Password in your Google Account under **Security → 2-Step Verification → App passwords**.

When active:
1. **You** receive an immediate notification with client name, country, budget, and project description with a direct reply link.
2. **The Client** receives an immediate branded auto-responder confirming their inquiry and setting the 24-hour response expectation.

---

## 🔒 Secret Inquiries Admin Dashboard

A discreet administrative console is built into the website for Shabeer to review submitted inquiries without opening a database tool:

1. Scroll to the footer and click **"Admin Inquiries Console"** (or press the lock icon).
2. Enter your `ADMIN_API_KEY` (default in dev: `shabeer-dev-secret-2025`).
3. You can view all inquiries, filter by status, and update statuses from `New` to `Contacted` or `In Discussion`.

You can change this secret key anytime in `server/.env`:
```env
ADMIN_API_KEY=your-custom-secure-secret-key-here
```

---

## 🌐 Production Deployment Guide

### Option 1: Render.com (1-Click Blueprint)
The project includes a ready-to-deploy `render.yaml` specification:
1. Push your repository to **GitHub**.
2. Go to [render.com](https://render.com) → **New** → **Blueprint**.
3. Select your GitHub repository.
4. Render automatically configures:
   - A Web Service with Python & Node build steps (`npm run build`).
   - A free managed PostgreSQL database connected via `DATABASE_URL`.
   - Automatic SSL certificate.

### Option 2: Railway.app
1. Create a new project on [railway.app](https://railway.app) from your GitHub repo.
2. Add a **PostgreSQL** database service in Railway.
3. Link the `DATABASE_URL` reference variable to the web service.
4. Set build command: `pip install -r server/requirements.txt && cd client && npm install && npm run build`
5. Set start command: `gunicorn server.app:app`

### Option 3: Traditional Linux VPS (Ubuntu + Nginx + Gunicorn)
1. Clone repo onto server.
2. Build frontend: `cd client && npm install && npm run build`.
3. Set up systemd service for Gunicorn running `server.app:app`.
4. Point Nginx reverse proxy to port `5000` with Let's Encrypt SSL (`certbot`).

---

## ✏️ Customization & Personalization

All developer details, contact placeholders, links, and services can be edited in a single configuration file:

👉 **[`client/src/data/portfolioData.js`](client/src/data/portfolioData.js)**

- **Social Links:** Update your real WhatsApp number, LinkedIn profile, and GitHub profile.
- **Email:** Change `shabeer.developer.contact@gmail.com` to your preferred inbox.
- **Projects:** Add more demonstration or real commercial projects as you complete them.
- **Skills:** Add or adjust proficiency levels.

---

## 📄 License & Ownership
Copyright © 2026 Shabeer Ahmed. All rights reserved.  
Open-source template released under the [MIT License](LICENSE).

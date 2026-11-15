"""
Shabeer Ahmed - Portfolio Backend Server
Flask REST API with PostgreSQL / SQLite support, inquiry tracking & email notification system.
"""

import os
import re
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime, timezone
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# Load environment variables from .env file if present
load_dotenv()

# Initialize Flask App
# Static folder points to React build output when deployed
BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR.parent / "client" / "dist"

app = Flask(
    __name__,
    static_folder=str(DIST_DIR) if DIST_DIR.exists() else None,
    static_url_path="/"
)

# Configuration
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key-shabeer-portfolio-2025")

# Database URI setup: Supports PostgreSQL (with postgres:// -> postgresql:// fix) or SQLite default
database_url = os.getenv("DATABASE_URL", "").strip()
if database_url:
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
else:
    # Vercel serverless: filesystem is read-only except /tmp (ephemeral)
    # For persistent data, set DATABASE_URL to a PostgreSQL connection string
    is_serverless = bool(os.getenv("VERCEL") or os.getenv("VERCEL_ENV"))
    sqlite_dir = Path("/tmp") if is_serverless else BASE_DIR
    sqlite_path = sqlite_dir / "inquiries.db"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{sqlite_path}"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Enable CORS for local dev and production
CORS(app, resources={r"/api/*": {"origins": "*"}})

db = SQLAlchemy(app)

# ------------------------------------------------------------------------------
# Database Models
# ------------------------------------------------------------------------------
class Inquiry(db.Model):
    __tablename__ = "inquiries"

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(150), nullable=False, index=True)
    country = db.Column(db.String(80), nullable=False)
    project_type = db.Column(db.String(100), nullable=False)
    budget = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(30), default="New", nullable=False)  # New, In Progress, Contacted, Completed, Archived
    client_ip = db.Column(db.String(50), nullable=True)
    user_agent = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "country": self.country,
            "project_type": self.project_type,
            "budget": self.budget,
            "message": self.message,
            "status": self.status,
            "client_ip": self.client_ip,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

# Create tables upon startup
with app.app_context():
    db.create_all()

# ------------------------------------------------------------------------------
# Helper Functions: Email Dispatcher
# ------------------------------------------------------------------------------
def send_notification_email(inquiry: Inquiry):
    """
    Sends email alert to Shabeer and auto-acknowledgment to client.
    Fails gracefully if SMTP is not configured or network fails.
    """
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = os.getenv("SMTP_PORT", 587)
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    receiver_email = os.getenv("NOTIFICATION_RECEIVER", smtp_user)

    if not (smtp_host and smtp_user and smtp_pass and receiver_email):
        print(f"[Email Notification] SMTP not configured. Stored Inquiry #{inquiry.id} from {inquiry.email} successfully in database.")
        return False, "SMTP credentials not configured"

    try:
        # 1. Alert to Shabeer
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"🚀 New Project Inquiry from {inquiry.full_name} ({inquiry.country}) - {inquiry.project_type}"
        msg["From"] = f"Portfolio Inquiry Bot <{smtp_user}>"
        msg["To"] = receiver_email
        msg["Reply-To"] = inquiry.email

        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0b132b; padding: 20px; border-radius: 8px 8px 0 0; color: #ffffff; border-bottom: 3px solid #00d2ff;">
                <h2 style="margin: 0; color: #00d2ff;">New Project Inquiry Received</h2>
                <p style="margin: 5px 0 0; font-size: 14px; color: #94a3b8;">From Shabeer Ahmed Developer Portfolio</p>
            </div>
            <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Client Name:</td><td>{inquiry.full_name}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td><td><a href="mailto:{inquiry.email}" style="color: #2563eb;">{inquiry.email}</a></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Country:</td><td>{inquiry.country}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Project Category:</td><td><span style="background: #e0f2fe; color: #0284c7; padding: 3px 8px; border-radius: 4px; font-weight: 600;">{inquiry.project_type}</span></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Estimated Budget:</td><td><span style="background: #f1f5f9; color: #0f172a; padding: 3px 8px; border-radius: 4px; font-weight: 600;">{inquiry.budget}</span></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Submission Time:</td><td>{inquiry.created_at.strftime('%Y-%m-%d %H:%M:%S UTC')}</td></tr>
                </table>
                <h3 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Project Scope & Description:</h3>
                <div style="background: #f8fafc; border-left: 4px solid #00d2ff; padding: 14px 18px; border-radius: 4px; font-size: 14px; white-space: pre-wrap;">{inquiry.message}</div>
                <div style="margin-top: 24px; text-align: center;">
                    <a href="mailto:{inquiry.email}?subject=Re:%20Your%20Project%20Inquiry%20-%20Shabeer%20Ahmed" style="background: #0284c7; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; display: inline-block;">Reply Directly to {inquiry.full_name}</a>
                </div>
            </div>
        </body>
        </html>
        """
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP(smtp_host, int(smtp_port), timeout=10) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)

        # 2. Friendly client auto-responder
        try:
            client_msg = MIMEMultipart("alternative")
            client_msg["Subject"] = f"Thank you for contacting Shabeer Ahmed – Inquiry Received"
            client_msg["From"] = f"Shabeer Ahmed | shabeerdev.com <{smtp_user}>"
            client_msg["To"] = inquiry.email

            client_html = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: #0a0f1d; padding: 24px; border-radius: 8px 8px 0 0; color: #ffffff; border-bottom: 3px solid #00d2ff;">
                    <h2 style="margin: 0; color: #ffffff;">Hello {inquiry.full_name},</h2>
                    <p style="margin: 6px 0 0; color: #00d2ff; font-weight: 500;">Thank you for reaching out regarding your project.</p>
                </div>
                <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                    <p>I have received your inquiry for <strong>{inquiry.project_type}</strong> (Budget: {inquiry.budget}).</p>
                    <p>I am reviewing your requirements and will reply personally within <strong>24 business hours</strong> with initial thoughts, technical recommendations, and next steps.</p>
                    <div style="background: #f8fafc; border-radius: 6px; padding: 16px; margin: 20px 0; border: 1px dashed #cbd5e1;">
                        <h4 style="margin: 0 0 8px; color: #0f172a;">Your Submitted Details:</h4>
                        <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px;">
                            <li><strong>Project:</strong> {inquiry.project_type}</li>
                            <li><strong>Country:</strong> {inquiry.country}</li>
                            <li><strong>Target Budget:</strong> {inquiry.budget}</li>
                        </ul>
                    </div>
                    <p>If you have urgent documents, wireframes, or specifications to share, feel free to reply directly to this email.</p>
                    <br>
                    <p style="margin: 0; font-weight: 600; color: #0f172a;">Warm regards,</p>
                    <p style="margin: 2px 0 0; color: #0284c7; font-weight: bold;">Shabeer Ahmed</p>
                    <p style="margin: 0; font-size: 13px; color: #64748b;">Independent Software Developer</p>
                </div>
            </body>
            </html>
            """
            client_msg.attach(MIMEText(client_html, "html"))
            with smtplib.SMTP(smtp_host, int(smtp_port), timeout=10) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.send_message(client_msg)
        except Exception as e:
            print(f"[Email Notification] Auto-responder notice: {e}")

        return True, "Email sent successfully"
    except Exception as e:
        print(f"[Email Notification Error] Could not send email via SMTP: {e}")
        return False, str(e)

# ------------------------------------------------------------------------------
# API Routes
# ------------------------------------------------------------------------------
@app.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint to verify API and database connectivity."""
    db_status = "connected"
    engine_name = db.engine.name
    try:
        db.session.execute(db.text("SELECT 1"))
    except Exception as e:
        db_status = f"error: {str(e)}"

    return jsonify({
        "status": "healthy",
        "developer": "Shabeer Ahmed",
        "database": db_status,
        "engine": engine_name,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }), 200

@app.route("/api/contact", methods=["POST"])
def submit_contact_form():
    """
    Handle project inquiry submissions.
    Validates data, prevents spam, saves to database, and triggers email alerts.
    """
    try:
        data = request.get_json() or {}

        # Bot honeypot check: If hidden '_gotcha' field is filled, silently ignore
        if data.get("_gotcha"):
            return jsonify({"success": True, "message": "Inquiry submitted successfully."}), 200

        full_name = str(data.get("full_name", "")).strip()
        email = str(data.get("email", "")).strip().lower()
        country = str(data.get("country", "")).strip()
        project_type = str(data.get("project_type", "")).strip()
        budget = str(data.get("budget", "")).strip()
        message = str(data.get("message", "")).strip()

        # Validation
        errors = {}
        if not full_name or len(full_name) < 2:
            errors["full_name"] = "Full name is required (minimum 2 characters)."
        
        email_regex = r"^[\w\.\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$"
        if not email or not re.match(email_regex, email):
            errors["email"] = "Please provide a valid email address."

        if not country:
            errors["country"] = "Please select or enter your country."

        if not project_type:
            errors["project_type"] = "Please select a project type."

        if not budget:
            errors["budget"] = "Please select an estimated budget range."

        if not message or len(message) < 10:
            errors["message"] = "Project description must be at least 10 characters."

        if errors:
            return jsonify({
                "success": False,
                "message": "Validation failed. Please correct the highlighted fields.",
                "errors": errors
            }), 400

        # Save to database
        client_ip = request.headers.get("X-Forwarded-For", request.remote_addr)
        if client_ip and "," in client_ip:
            client_ip = client_ip.split(",")[0].strip()
        user_agent = request.headers.get("User-Agent", "")[:250]

        inquiry = Inquiry(
            full_name=full_name,
            email=email,
            country=country,
            project_type=project_type,
            budget=budget,
            message=message,
            status="New",
            client_ip=client_ip,
            user_agent=user_agent
        )
        db.session.add(inquiry)
        db.session.commit()

        # Dispatch emails (async / fail-safe)
        email_sent, email_info = send_notification_email(inquiry)

        return jsonify({
            "success": True,
            "message": "Thank you, your inquiry has been received! I will review your requirements and respond within 24 hours.",
            "inquiry_id": inquiry.id,
            "email_notified": email_sent
        }), 201

    except Exception as err:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": "An unexpected error occurred while processing your request. Please try again or reach out via WhatsApp/Email.",
            "error": str(err)
        }), 500

@app.route("/api/inquiries", methods=["GET"])
def get_inquiries():
    """
    View all inquiries (Protected by API Key for Shabeer's admin review).
    Header: X-Admin-Key or Query: ?api_key=...
    """
    admin_key = os.getenv("ADMIN_API_KEY", "shabeer-dev-secret-2025")
    provided_key = request.headers.get("X-Admin-Key") or request.args.get("api_key")

    if not provided_key or provided_key != admin_key:
        return jsonify({"error": "Unauthorized. Provide valid X-Admin-Key."}), 401

    status_filter = request.args.get("status")
    query = Inquiry.query
    if status_filter:
        query = query.filter_by(status=status_filter)

    inquiries = query.order_by(Inquiry.created_at.desc()).all()
    return jsonify({
        "total": len(inquiries),
        "inquiries": [i.to_dict() for i in inquiries]
    }), 200

@app.route("/api/inquiries/<int:inquiry_id>", methods=["PATCH"])
def update_inquiry_status(inquiry_id):
    """
    Update status of an inquiry (New -> Contacted -> Completed -> Archived).
    Protected by API Key.
    """
    admin_key = os.getenv("ADMIN_API_KEY", "shabeer-dev-secret-2025")
    provided_key = request.headers.get("X-Admin-Key") or request.args.get("api_key")

    if not provided_key or provided_key != admin_key:
        return jsonify({"error": "Unauthorized. Provide valid X-Admin-Key."}), 401

    inquiry = Inquiry.query.get_or_404(inquiry_id)
    data = request.get_json() or {}

    if "status" in data:
        inquiry.status = data["status"]
    
    db.session.commit()
    return jsonify({"success": True, "inquiry": inquiry.to_dict()}), 200

# ------------------------------------------------------------------------------
# Static Frontend Serving (For unified deployment)
# ------------------------------------------------------------------------------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    """Serves compiled frontend files or falls back to index.html for client routing."""
    if DIST_DIR.exists():
        target = DIST_DIR / path
        if path != "" and target.exists():
            return send_from_directory(str(DIST_DIR), path)
        return send_from_directory(str(DIST_DIR), "index.html")
    
    # If React client hasn't been built yet, show a clean developer welcome endpoint
    return jsonify({
        "message": "Shabeer Ahmed Portfolio Backend API is Running.",
        "endpoints": {
            "health": "/api/health",
            "contact_submit": "POST /api/contact",
            "inquiries_admin": "GET /api/inquiries"
        },
        "instructions": "Build client via 'cd client && npm run build' to serve frontend directly via Flask."
    }), 200

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV", "development") == "development"
    print(f"[*] Starting Shabeer Ahmed Portfolio Backend on port {port} (Debug: {debug})...")
    app.run(host="0.0.0.0", port=port, debug=debug)

import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Database, 
  CheckCircle, 
  Terminal, 
  Code2, 
  Laptop, 
  ShieldCheck,
  Server,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');

  // Simulated code snippets for each project demonstrating clean engineering
  const projectCodeSnippets = {
    'enterprise-logistics': `# Flask REST API - Real-Time Telemetry & Waypoint Progression
@api.route('/shipments/<int:id>/simulate-telemetry', methods=['POST'])
def advance_shipment_telemetry(id):
    shipment = Shipment.query.get_or_404(id)
    step = random.randint(8, 15)
    shipment.current_progress_pct = min(100, shipment.current_progress_pct + step)
    
    # Coordinate interpolation between origin & destination
    ratio = shipment.current_progress_pct / 100.0
    shipment.current_lat = shipment.origin_lat + (shipment.destination_lat - shipment.origin_lat) * ratio
    shipment.current_lng = shipment.origin_lng + (shipment.destination_lng - shipment.origin_lng) * ratio
    
    # Checkpoint milestone completions
    for i, wp in enumerate(shipment.waypoints):
        wp.is_completed = (i <= int(ratio * len(shipment.waypoints)))
        
    db.session.add(DispatchEvent(
        shipment_id=shipment.id, event_type='TELEMETRY_PING',
        message=f"{shipment.tracking_number} reached {shipment.current_progress_pct}% completion."
    ))
    db.session.commit()
    return jsonify(shipment.to_dict(include_details=True)), 200`,

    'omniflow-saas': `# Multi-Tenant MRR Aggregation & Stripe Webhook Subscription Engine
@api.route('/billing/webhooks/stripe', methods=['POST'])
@validate_stripe_signature
def handle_subscription_webhook():
    payload = request.get_json()
    event_type = payload.get('type')
    
    if event_type == 'invoice.payment_succeeded':
        tenant_id = payload['data']['object']['customer_metadata']['tenant_id']
        amount_cents = payload['data']['object']['amount_paid']
        
        with db.session.begin():
            subscription = TenantSubscription.query.filter_by(tenant_id=tenant_id).first()
            subscription.status = 'ACTIVE'
            subscription.current_period_end = datetime.fromtimestamp(payload['data']['object']['lines']['data'][0]['period']['end'])
            MetricPipeline.record_revenue_event(tenant_id, amount_cents)
            
    return jsonify({"received": True, "tenant_synced": True}), 200`,

    'apex-health': `# HIPAA-Compliant WebRTC Consultation Token & EHR Audit Logging
@api.route('/telehealth/sessions/<int:session_id>/token', methods=['POST'])
@require_hipaa_jwt_auth
def generate_webrtc_session_token(session_id):
    session = ConsultationSession.query.get_or_404(session_id)
    user = get_authenticated_user()
    
    # Enforce role-based patient-doctor confidentiality
    if user.id not in [session.doctor_id, session.patient_id]:
        abort(403, "HIPAA Authorization Violation: Unauthorized Access Attempt")
        
    session_token = WebRTCService.generate_ephemeral_token(
        room_id=f"hipaa-enc-{session.id}", user_id=user.id, role=user.role, expiry_minutes=60
    )
    AuditLogger.log_access(user_id=user.id, resource="VIDEO_ROOM", patient_id=session.patient_id)
    return jsonify({"token": session_token, "protocol": "AES_256_GCM"}), 200`,

    'shopcore-ecommerce': `# Multi-Currency Dynamic Checkout & Inventory Lock
@api.route('/checkout/create-session', methods=['POST'])
@validate_cart_payload
def create_global_checkout():
    currency = request.json.get('currency', 'USD').upper()
    cart_items = request.json.get('items', [])
    fx_rate = CurrencyService.get_live_rate(base='USD', target=currency)
    
    with db.session.begin():
        # Atomically reserve catalog stock
        InventoryService.lock_sku_stock(cart_items)
        line_items = [
            {"price_data": {"currency": currency.lower(), "unit_amount": int(item['price_usd'] * fx_rate * 100), "product_data": {"name": item['name']}}, "quantity": item['qty']}
            for item in cart_items
        ]
        stripe_session = stripe.checkout.Session.create(payment_method_types=['card'], line_items=line_items, mode='payment')
        
    return jsonify({"checkout_url": stripe_session.url, "currency": currency}), 201`
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-navy-950/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">{project.category}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-navy-950/50 px-6 pt-3 border-b border-slate-800 flex gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-xs font-mono font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-electric-400 text-electric-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 text-xs font-mono font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-electric-400 text-electric-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Database
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-xs font-mono font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-electric-400 text-electric-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Sample Backend Logic
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Visual simulated preview banner */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-navy-950 to-navy-800 border border-slate-800 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-electric-400 font-semibold tracking-wider uppercase block mb-1">
                      Project Objective
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Simulated UI metrics */}
                <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-navy-950/70 p-2.5 rounded-lg border border-slate-800/80 text-center">
                      <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
                      <div className="text-sm font-bold text-electric-400 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Features Breakdown */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Technical Features & Functionality
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-950/50 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tag Cloud */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-navy-950 text-electric-400 border border-electric-500/20 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrity Notice */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Engineered specifically by Shabeer Ahmed as a showcase project demonstrating architectural proficiency.</span>
              </div>
            </div>
          )}

          {/* ARCHITECTURE TAB */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-navy-950 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4 text-electric-400" />
                  <span>Architecture Specification</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {project.architecture}
                </p>
              </div>

              {/* Architecture Blueprint Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Data Flow & Request Lifecycle
                </h4>
                
                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 text-electric-400">
                    <span className="w-5 h-5 rounded-full bg-electric-500/20 flex items-center justify-center text-[10px]">1</span>
                    <strong>Client Layer:</strong> Responsive React frontend dispatches asynchronous API fetch requests.
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">2</span>
                    <strong>API Gateway:</strong> Flask REST endpoints validate payload schemas and sanitize client inputs.
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px]">3</span>
                    <strong>ORM & Database:</strong> SQLAlchemy models execute ACID-compliant transactions against relational SQL tables.
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">4</span>
                    <strong>Response:</strong> Formatted JSON payload returned with explicit HTTP status codes & error handling.
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* CODE TAB */}
          {activeTab === 'code' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Sample Backend Implementation (Flask / Python)</span>
                <span className="text-emerald-400">Clean & Tested</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-navy-950 p-4 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto">
                <pre>{projectCodeSnippets[project.id]}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-navy-950 px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Want a tailored version built for your business?
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors shadow-glow-sm"
            >
              Request Similar Solution
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

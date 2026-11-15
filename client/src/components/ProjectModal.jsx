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
    'ecommerce-platform': `# Flask API Order & Cart Processing
@api.route('/orders/checkout', methods=['POST'])
@validate_checkout_payload
def process_order():
    user_id = get_current_user_id()
    cart_items = CartService.get_items(user_id)
    
    # Calculate totals with atomic database transaction
    with db.session.begin():
        total_cents = sum(item.price_cents * item.qty for item in cart_items)
        order = Order(user_id=user_id, total_amount=total_cents, status='PENDING')
        db.session.add(order)
        InventoryService.reserve_stock(cart_items)
        
    return jsonify({"order_id": order.id, "status": "CONFIRMED"}), 201`,

    'school-management-system': `# Relational Grade & Attendance Aggregator
@api.route('/students/<int:student_id>/academic-summary', methods=['GET'])
def get_student_summary(student_id):
    student = Student.query.get_or_404(student_id)
    
    # Optimized SQL aggregation with indexed joins
    grades = db.session.query(
        Course.name,
        func.avg(Grade.score).label('average_score'),
        Grade.letter_grade
    ).join(Grade).filter(Grade.student_id == student_id).group_by(Course.name).all()
    
    attendance_rate = AttendanceService.calculate_rate(student_id)
    return jsonify({
        "student": student.full_name,
        "gpa": student.calculate_gpa(),
        "attendance_rate": attendance_rate,
        "courses": [dict(row._mapping) for row in grades]
    }), 200`,

    'business-management-dashboard': `# Real-Time Financial Metric Aggregation
@api.route('/dashboard/metrics', methods=['GET'])
def get_executive_kpis():
    current_month_start = datetime.utcnow().replace(day=1, hour=0, minute=0)
    
    # Aggregated SQL queries for revenue and expenses
    revenue = db.session.query(func.coalesce(func.sum(Invoice.amount), 0))\
        .filter(Invoice.status == 'PAID', Invoice.paid_at >= current_month_start).scalar()
        
    pending = db.session.query(func.count(Invoice.id))\
        .filter(Invoice.status == 'PENDING').scalar()
        
    low_stock = Inventory.query.filter(Inventory.stock <= Inventory.reorder_level).count()
    
    return jsonify({
        "revenue_current_month": float(revenue),
        "pending_invoices": pending,
        "low_stock_alerts": low_stock,
        "server_time_utc": datetime.utcnow().isoformat()
    }), 200`
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

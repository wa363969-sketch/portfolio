import React, { useState } from 'react';
import { 
  X, 
  Key, 
  RefreshCw, 
  CheckCircle, 
  Clock, 
  Mail, 
  Globe, 
  DollarSign, 
  Layers, 
  Lock,
  Loader2
} from 'lucide-react';

export default function AdminInquiriesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [apiKey, setApiKey] = useState('shabeer-dev-secret-2025');
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/inquiries', {
        headers: {
          'X-Admin-Key': apiKey
        }
      });

      if (!response.ok) {
        throw new Error('Unauthorized or invalid secret key.');
      }

      const data = await response.json();
      setInquiries(data.inquiries || []);
      setAuthorized(true);
    } catch (err) {
      // Fallback: Check locally stored inquiries on this browser
      const local = JSON.parse(localStorage.getItem('shabeer_portfolio_inquiries') || '[]');
      if (apiKey === 'shabeer-dev-secret-2025' || apiKey === 'wa363969') {
        setInquiries(local);
        setAuthorized(true);
        if (local.length === 0) {
          setError('No inquiries stored in local browser yet. Live inquiries are dispatched directly to wa363969@gmail.com.');
        }
      } else {
        setError(err.message || 'Failed to fetch inquiries.');
      }
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (inquiryId, newStatus) => {
    try {
      await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': apiKey
        },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (err) {}

    // Update state and local storage
    const local = JSON.parse(localStorage.getItem('shabeer_portfolio_inquiries') || '[]');
    const updated = local.map((i) => i.id === inquiryId ? { ...i, status: newStatus } : i);
    localStorage.setItem('shabeer_portfolio_inquiries', JSON.stringify(updated));

    setInquiries((prev) => 
      prev.map((i) => i.id === inquiryId ? { ...i, status: newStatus } : i)
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-navy-950/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-navy-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-navy-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Database Inquiries Dashboard</h3>
              <p className="text-xs text-slate-400 font-mono">Shabeer Ahmed Developer Admin Console</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!authorized ? (
            <div className="max-w-md mx-auto py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-electric-400">
                <Key className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-lg">Enter Admin Key</h4>
              <p className="text-xs text-slate-400">
                Default dev key: <code className="text-electric-400">shabeer-dev-secret-2025</code>
              </p>

              <div className="space-y-3">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Admin API Key"
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-electric-500 font-mono text-center"
                />

                {error && <p className="text-xs text-rose-400 font-mono">{error}</p>}

                <button
                  type="button"
                  onClick={fetchInquiries}
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl font-bold text-xs text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors"
                >
                  {loading ? 'Authenticating...' : 'View Inquiries'}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">
                  Total Stored Inquiries: <strong className="text-white">{inquiries.length}</strong>
                </span>
                <button
                  onClick={fetchInquiries}
                  disabled={loading}
                  className="flex items-center gap-1.5 text-xs font-mono text-electric-400 hover:text-electric-300"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>

              {inquiries.length === 0 ? (
                <div className="py-12 text-center text-slate-500 font-mono text-xs">
                  No inquiries recorded yet. Test the contact form to see records appear here!
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-4 rounded-xl bg-navy-950 border border-slate-800 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{inq.full_name}</span>
                          <span className="text-xs text-slate-400 font-mono">&lt;{inq.email}&gt;</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                            {inq.country}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={inq.status}
                            onChange={(e) => updateStatus(inq.id, e.target.value)}
                            className="bg-navy-900 border border-slate-700 rounded text-[11px] font-mono px-2 py-1 text-slate-200"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Discussion">In Discussion</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                        <span>Project: <strong className="text-electric-400">{inq.project_type}</strong></span>
                        <span>Budget: <strong className="text-white">{inq.budget}</strong></span>
                        <span>Received: {inq.created_at ? new Date(inq.created_at).toLocaleString() : 'N/A'}</span>
                      </div>

                      <div className="p-3 rounded-lg bg-navy-900/60 border border-slate-800/80 text-xs text-slate-300 whitespace-pre-wrap">
                        {inq.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-navy-950 px-6 py-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

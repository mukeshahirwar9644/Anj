import React, { useState, useEffect } from 'react';
import {
  getActivityLogs,
  clearActivityLogs,
  downloadLogsAsText,
  downloadLogsAsCsv,
  trackWhatsAppClick,
  trackCallClick,
} from '../lib/activityLogger';
import type { ActivityLog } from '../lib/activityLogger';
import { Button } from '../components/ui/Button';
import {
  FileText,
  Download,
  Trash2,
  MessageCircle,
  Phone,
  Send,
  Mail,
  RefreshCw,
  Info,
  Lock,
  Unlock,
  KeyRound,
  ShieldCheck,
} from 'lucide-react';

const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || '6265235345';
const AUTH_KEY = 'gaddi_admin_authenticated';

export const Logs: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'WHATSAPP' | 'CALL' | 'FORM_SUBMIT' | 'EMAIL'>('ALL');

  const loadLogs = () => {
    setLogs(getActivityLogs());
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadLogs();
      const handleUpdate = () => loadLogs();

      // Listen to current tab events, other browser tabs ('storage'), and tab focus
      window.addEventListener('gaddi_activity_logged', handleUpdate);
      window.addEventListener('storage', handleUpdate);
      window.addEventListener('focus', handleUpdate);
      window.addEventListener('visibilitychange', handleUpdate);

      // Periodic 2-second auto-sync
      const interval = setInterval(loadLogs, 2000);

      return () => {
        window.removeEventListener('gaddi_activity_logged', handleUpdate);
        window.removeEventListener('storage', handleUpdate);
        window.removeEventListener('focus', handleUpdate);
        window.removeEventListener('visibilitychange', handleUpdate);
        clearInterval(interval);
      };
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Incorrect Admin PIN. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all local activity logs?')) {
      clearActivityLogs();
      loadLogs();
    }
  };

  const filteredLogs = logs.filter((item) => (filter === 'ALL' ? true : item.type === filter));

  const stats = {
    total: logs.length,
    whatsapp: logs.filter((l) => l.type === 'WHATSAPP').length,
    calls: logs.filter((l) => l.type === 'CALL').length,
    forms: logs.filter((l) => l.type === 'FORM_SUBMIT').length,
    emails: logs.filter((l) => l.type === 'EMAIL').length,
  };

  const triggerTestWhatsApp = () => {
    trackWhatsAppClick('Admin Test Action', 'Simulated test WhatsApp click');
  };

  const triggerTestCall = () => {
    trackCallClick('Admin Test Action', 'Simulated test phone call click');
  };

  // IF NOT AUTHENTICATED: SHOW SECURE PIN LOCK SCREEN
  if (!isAuthenticated) {
    return (
      <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-cream-50 p-8 sm:p-10 rounded-4xl border border-sand/70 shadow-elevated text-center">
          <div className="w-16 h-16 rounded-3xl bg-terracotta-500/10 text-terracotta-600 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>

          <span className="inline-block text-[10px] font-semibold tracking-widest text-terracotta-600 uppercase mb-2">
            ADMIN VERIFICATION
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-brown-900 font-normal mb-2">
            Protected Activity Logs
          </h1>
          <p className="text-xs text-brown-600 font-light mb-6">
            Enter your secret Admin PIN code to view and download visitor activity logs.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <KeyRound className="w-5 h-5 text-brown-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="password"
                inputMode="numeric"
                maxLength={20}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError('');
                }}
                placeholder="Enter Admin PIN"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-center font-mono text-lg tracking-widest text-brown-900"
                autoFocus
              />
            </div>

            {pinError && (
              <p className="text-xs text-red-600 font-medium">{pinError}</p>
            )}

            <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
              <Unlock className="w-4 h-4 mr-2" />
              Unlock Logs
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-sand/60 flex items-center justify-center gap-2 text-xs text-brown-500 font-light">
            <ShieldCheck className="w-4 h-4 text-terracotta-500" />
            <span>Local Browser Storage Protected</span>
          </div>
        </div>
      </div>
    );
  }

  // IF AUTHENTICATED: SHOW LOGS DASHBOARD
  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase">
                ADMIN ACTIVITY TRACKER
              </span>
              <span className="text-[10px] bg-green-600/10 text-green-700 px-2.5 py-0.5 rounded-full font-semibold">
                ● Unlocked
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-brown-900 font-normal">
              Website Call &amp; WhatsApp <span className="italic text-terracotta-500">Logs</span>
            </h1>
            <p className="text-xs sm:text-sm text-brown-700/80 font-light mt-1">
              All website calls, WhatsApp clicks, and form submissions are saved locally in your browser text storage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadLogsAsText()}
              className="gap-2"
              disabled={logs.length === 0}
            >
              <Download className="w-4 h-4 text-terracotta-600" />
              Download .TXT
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadLogsAsCsv()}
              className="gap-2"
              disabled={logs.length === 0}
            >
              <FileText className="w-4 h-4 text-terracotta-600" />
              Export .CSV
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleClear}
              className="gap-2 text-red-600 hover:text-red-700"
              disabled={logs.length === 0}
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLogout}
              className="gap-2 text-brown-700"
              title="Lock Admin Screen"
            >
              <Lock className="w-4 h-4" />
              Lock
            </Button>
          </div>
        </div>

        {/* SUMMARY METRICS */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div
            onClick={() => setFilter('ALL')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              filter === 'ALL'
                ? 'bg-brown-900 text-cream-50 border-brown-900 shadow-soft'
                : 'bg-cream-50 border-sand text-brown-900 hover:border-terracotta-400'
            }`}
          >
            <p className="text-[11px] uppercase tracking-wider font-semibold opacity-75">Total Logs</p>
            <p className="text-2xl font-serif mt-1">{stats.total}</p>
          </div>

          <div
            onClick={() => setFilter('WHATSAPP')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              filter === 'WHATSAPP'
                ? 'bg-[#25D366] text-white border-[#25D366] shadow-soft'
                : 'bg-cream-50 border-sand text-brown-900 hover:border-[#25D366]'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wider font-semibold opacity-75">WhatsApp</p>
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <p className="text-2xl font-serif mt-1">{stats.whatsapp}</p>
          </div>

          <div
            onClick={() => setFilter('CALL')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              filter === 'CALL'
                ? 'bg-terracotta-600 text-white border-terracotta-600 shadow-soft'
                : 'bg-cream-50 border-sand text-brown-900 hover:border-terracotta-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wider font-semibold opacity-75">Calls</p>
              <Phone className="w-4 h-4 text-terracotta-600" />
            </div>
            <p className="text-2xl font-serif mt-1">{stats.calls}</p>
          </div>

          <div
            onClick={() => setFilter('FORM_SUBMIT')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              filter === 'FORM_SUBMIT'
                ? 'bg-brown-800 text-cream-50 border-brown-800 shadow-soft'
                : 'bg-cream-50 border-sand text-brown-900 hover:border-brown-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wider font-semibold opacity-75">Form Quotes</p>
              <Send className="w-4 h-4 text-brown-700" />
            </div>
            <p className="text-2xl font-serif mt-1">{stats.forms}</p>
          </div>

          <div
            onClick={() => setFilter('EMAIL')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              filter === 'EMAIL'
                ? 'bg-sand text-brown-900 border-sand shadow-soft'
                : 'bg-cream-50 border-sand text-brown-900 hover:border-sand'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wider font-semibold opacity-75">Emails</p>
              <Mail className="w-4 h-4 text-brown-700" />
            </div>
            <p className="text-2xl font-serif mt-1">{stats.emails}</p>
          </div>
        </div>

        {/* LOGS TABLE / LIST */}
        <div className="bg-cream-50 rounded-3xl border border-sand/70 shadow-soft overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-sand flex items-center justify-between bg-cream-100/50">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg text-brown-900">
                Activity Records ({filteredLogs.length})
              </span>
              {filter !== 'ALL' && (
                <span className="text-xs bg-terracotta-500/10 text-terracotta-600 px-2 py-0.5 rounded-full font-medium">
                  Filtering: {filter}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={loadLogs}
                className="p-2 text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream-200 transition-colors"
                title="Refresh logs"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {filteredLogs.length === 0 ? (
            <div className="p-12 text-center">
              <Info className="w-12 h-12 text-sand-dark mx-auto mb-3" />
              <h3 className="font-serif text-lg text-brown-900 mb-1">No Activity Logs Found</h3>
              <p className="text-xs text-brown-600 font-light max-w-md mx-auto mb-6">
                When visitors click WhatsApp buttons, call phone numbers, or submit customizer forms on your website, their action timestamps and details will automatically appear here.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Button variant="whatsapp" size="sm" onClick={triggerTestWhatsApp}>
                  Simulate Test WhatsApp Log
                </Button>
                <Button variant="outline" size="sm" onClick={triggerTestCall}>
                  Simulate Test Call Log
                </Button>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-sand/50">
              {filteredLogs.map((log) => {
                const isWhatsApp = log.type === 'WHATSAPP';
                const isCall = log.type === 'CALL';
                const isForm = log.type === 'FORM_SUBMIT';

                return (
                  <div
                    key={log.id}
                    className="p-4 sm:p-6 hover:bg-cream-100/40 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* TYPE ICON BADGE */}
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 ${
                          isWhatsApp
                            ? 'bg-[#25D366]/10 text-[#25D366]'
                            : isCall
                            ? 'bg-terracotta-500/10 text-terracotta-600'
                            : isForm
                            ? 'bg-brown-900/10 text-brown-900'
                            : 'bg-sand text-brown-800'
                        }`}
                      >
                        {isWhatsApp && <MessageCircle className="w-5 h-5" />}
                        {isCall && <Phone className="w-5 h-5" />}
                        {isForm && <Send className="w-5 h-5" />}
                        {log.type === 'EMAIL' && <Mail className="w-5 h-5" />}
                      </div>

                      {/* DETAILS */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                              isWhatsApp
                                ? 'bg-[#25D366]/20 text-[#128C7E]'
                                : isCall
                                ? 'bg-terracotta-100 text-terracotta-700'
                                : 'bg-brown-100 text-brown-900'
                            }`}
                          >
                            {log.type}
                          </span>
                          <span className="text-xs font-semibold text-brown-900">
                            {log.source}
                          </span>
                          <span className="text-xs text-brown-500">•</span>
                          <span className="text-xs text-brown-500">{log.formattedDate}</span>
                        </div>

                        {log.details && (
                          <div className="bg-cream-100 p-2.5 rounded-xl border border-sand/50 text-xs text-brown-800 font-mono whitespace-pre-wrap mt-2">
                            {log.details}
                          </div>
                        )}

                        <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-brown-600 font-light">
                          <span>Page: <code className="bg-sand/40 px-1.5 py-0.5 rounded text-brown-900">{log.pageUrl}</code></span>
                          <span className="truncate max-w-xs text-brown-500" title={log.userAgent}>
                            Device: {log.userAgent.includes('Mobile') ? '📱 Mobile' : '💻 Desktop / Laptop'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* INFO NOTICE */}
        <div className="mt-8 p-6 rounded-3xl bg-sand/30 border border-sand flex items-start gap-4">
          <Info className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
          <div className="text-xs text-brown-800 font-light leading-relaxed space-y-1">
            <p className="font-semibold text-brown-900">Admin Tip &amp; Secret Shortcut:</p>
            <p>
              Aap website par kisi bhi page par hote hue keyboard par <strong>Ctrl + Shift + L</strong> press karke seedha is Admin Activity Logs screen par aa sakte hain.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

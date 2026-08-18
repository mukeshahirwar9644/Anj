/**
 * Local Activity Logger for Gaddi & Co.
 * Logs all user interactions (WhatsApp clicks, Phone calls, Form enquiries)
 * locally in browser storage as clean text/JSON records without needing an external database.
 */

export interface ActivityLog {
  id: string;
  timestamp: string; // ISO string
  formattedDate: string; // e.g., "18 Aug 2026, 08:05 PM"
  type: 'WHATSAPP' | 'CALL' | 'FORM_SUBMIT' | 'EMAIL';
  source: string; // Component or section name (e.g., "Floating WhatsApp", "Product: Velvet Luxe", "Footer Call")
  details?: string; // Optional message or payload summary
  pageUrl: string; // Current URL where action occurred
  userAgent: string; // Browser/Device identifier
}

const STORAGE_KEY = 'gaddi_activity_logs';
const MAX_LOGS = 500;

/**
 * Format current date & time into friendly Indian format
 */
export const getFormattedTimestamp = (date: Date = new Date()): string => {
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
};

/**
 * Retrieve all activity logs from localStorage
 */
export const getActivityLogs = (): ActivityLog[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to parse activity logs:', err);
    return [];
  }
};

/**
 * Record a new activity entry into localStorage
 */
export const logActivity = (
  type: ActivityLog['type'],
  source: string,
  details?: string
): ActivityLog => {
  const now = new Date();
  const newEntry: ActivityLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    timestamp: now.toISOString(),
    formattedDate: getFormattedTimestamp(now),
    type,
    source,
    details: details?.trim() || undefined,
    pageUrl: window.location.pathname + window.location.search,
    userAgent: navigator.userAgent,
  };

  try {
    const existingLogs = getActivityLogs();
    // Avoid rapid identical duplicate logs within 1 second
    if (
      existingLogs.length > 0 &&
      existingLogs[0].type === type &&
      existingLogs[0].source === source &&
      Date.now() - new Date(existingLogs[0].timestamp).getTime() < 1000
    ) {
      return existingLogs[0];
    }

    // Keep most recent MAX_LOGS entries
    const updated = [newEntry, ...existingLogs].slice(0, MAX_LOGS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Dispatch event so live UI updates immediately in the current tab
    window.dispatchEvent(new CustomEvent('gaddi_activity_logged', { detail: newEntry }));
  } catch (err) {
    console.error('Failed to save activity log locally:', err);
  }

  return newEntry;
};

/**
 * Log a WhatsApp click event
 */
export const trackWhatsAppClick = (source: string, details?: string) => {
  return logActivity('WHATSAPP', source, details || 'User clicked WhatsApp chat button');
};

/**
 * Log a Phone call event
 */
export const trackCallClick = (source: string, details?: string) => {
  return logActivity('CALL', source, details || 'User initiated direct phone call');
};

/**
 * Log an Email click event
 */
export const trackEmailClick = (source: string, details?: string) => {
  return logActivity('EMAIL', source, details || 'User clicked company email link');
};

/**
 * Log a Form Enquiry Submission
 */
export const trackFormSubmit = (source: string, formSummary: string) => {
  return logActivity('FORM_SUBMIT', source, formSummary);
};

/**
 * Clear all local logs
 */
export const clearActivityLogs = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('gaddi_activity_logged'));
};

/**
 * Global click interceptor: guarantees every WhatsApp, Phone, or Email click
 * anywhere on the site is automatically logged immediately.
 */
export const initGlobalActivityTracker = (): void => {
  if (typeof window === 'undefined') return;
  if ((window as unknown as { __gaddi_tracker_initialized?: boolean }).__gaddi_tracker_initialized) return;
  (window as unknown as { __gaddi_tracker_initialized?: boolean }).__gaddi_tracker_initialized = true;

  document.addEventListener(
    'click',
    (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest?.('a');
      if (!target || !target.href) return;

      const href = target.href;
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        let messageParam = '';
        try {
          const urlObj = new URL(href);
          messageParam = urlObj.searchParams.get('text') || '';
        } catch {
          // ignore
        }
        const label =
          target.getAttribute('aria-label') ||
          target.getAttribute('title') ||
          target.innerText?.trim() ||
          'WhatsApp Button';

        trackWhatsAppClick(
          label.length > 50 ? label.slice(0, 50) + '...' : label,
          messageParam ? `Message: "${messageParam}"` : 'Direct WhatsApp Chat'
        );
      } else if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        trackCallClick('Direct Phone Call', `Dialed: ${phone}`);
      } else if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        trackEmailClick('Direct Email Link', `Sent to: ${email}`);
      }
    },
    true
  );
};

/**
 * Generate human-readable text document from all recorded logs
 */
export const generateTextLogDocument = (): string => {
  const logs = getActivityLogs();
  const nowStr = getFormattedTimestamp();

  let output = `==========================================================\n`;
  output += `           GADDI & CO. - WEBSITE ACTIVITY LOGS           \n`;
  output += `==========================================================\n`;
  output += `Generated At : ${nowStr}\n`;
  output += `Total Records: ${logs.length}\n`;
  output += `==========================================================\n\n`;

  if (logs.length === 0) {
    output += `No activity recorded yet.\n`;
    return output;
  }

  logs.forEach((log, index) => {
    output += `[Record #${logs.length - index}] - [${log.type}]\n`;
    output += `Date & Time : ${log.formattedDate}\n`;
    output += `Action Type : ${log.type}\n`;
    output += `Source / CTA: ${log.source}\n`;
    output += `Page URL    : ${log.pageUrl}\n`;
    if (log.details) {
      output += `Details     : ${log.details}\n`;
    }
    output += `Device Info : ${log.userAgent}\n`;
    output += `----------------------------------------------------------\n\n`;
  });

  return output;
};

/**
 * Download logs as a .txt file directly to user's computer
 */
export const downloadLogsAsText = (filename?: string): void => {
  const textContent = generateTextLogDocument();
  const dateSlug = new Date().toISOString().split('T')[0];
  const finalFilename = filename || `gaddi_activity_logs_${dateSlug}.txt`;

  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = finalFilename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

/**
 * Download logs as a .csv file (Excel compatible)
 */
export const downloadLogsAsCsv = (filename?: string): void => {
  const logs = getActivityLogs();
  const dateSlug = new Date().toISOString().split('T')[0];
  const finalFilename = filename || `gaddi_activity_logs_${dateSlug}.csv`;

  const headers = ['ID', 'Date & Time', 'Action Type', 'Source', 'Page URL', 'Details', 'Device'];
  const rows = logs.map((log) => [
    `"${log.id}"`,
    `"${log.formattedDate}"`,
    `"${log.type}"`,
    `"${(log.source || '').replace(/"/g, '""')}"`,
    `"${(log.pageUrl || '').replace(/"/g, '""')}"`,
    `"${(log.details || '').replace(/"/g, '""')}"`,
    `"${(log.userAgent || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = finalFilename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

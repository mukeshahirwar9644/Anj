import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initGlobalActivityTracker } from './lib/activityLogger'

// Initialize capture-phase tracker for all WhatsApp, Call and Email interactions
initGlobalActivityTracker();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

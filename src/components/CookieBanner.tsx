import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie_consent');
    if (!savedConsent) {
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      setShowSettings(true);
      if (savedConsent) {
        setPreferences(JSON.parse(savedConsent));
      }
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const prefs = { analytics: false, marketing: false };
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-end justify-center pointer-events-none p-4 md:p-6">
      {/* Background Overlay for Settings */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-accent/20 backdrop-blur-sm pointer-events-auto"
            onClick={() => setShowSettings(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-4xl bg-white border border-brand-accent/10 p-6 md:p-8 shadow-2xl pointer-events-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative rounded-sm"
          >
            <div className="flex-1">
              <p className="text-sm font-light text-brand-accent/80 leading-relaxed">
                Utilizamos cookies técnicas necesarias para que la web funcione correctamente y, con tu consentimiento, cookies analíticas y de marketing para mejorar la experiencia y medir el uso de la web.<br className="hidden md:block"/>
                Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 border border-brand-accent/20 text-brand-accent uppercase tracking-widest text-[10px] font-bold hover:bg-brand-accent/5 transition-colors text-center"
              >
                Configurar
              </button>
              <button
                onClick={handleRejectAll}
                className="px-6 py-3 border border-brand-accent/20 text-brand-accent uppercase tracking-widest text-[10px] font-bold hover:bg-brand-accent/5 transition-colors text-center"
              >
                Rechazar
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-brand-accent text-white uppercase tracking-widest text-[10px] font-bold hover:bg-brand-accent/90 transition-colors text-center"
              >
                Aceptar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl bg-white p-8 md:p-12 shadow-2xl pointer-events-auto relative z-10 m-auto"
          >
            <h2 className="text-2xl font-serif mb-6 text-brand-accent">Configuración de cookies</h2>
            <p className="text-sm font-light text-brand-accent/70 mb-8 leading-relaxed">
              Puedes elegir qué cookies permitir. Las cookies técnicas son necesarias para el funcionamiento de la web y no pueden desactivarse desde este panel.
            </p>

            <div className="space-y-6 mb-10">
              {/* Technical Cookies */}
              <div className="flex items-start justify-between border-b border-brand-accent/10 pb-6">
                <div>
                  <h3 className="font-medium tracking-widest uppercase text-xs text-brand-accent mb-2">Cookies técnicas necesarias</h3>
                  <p className="text-xs font-light text-brand-accent/60">Permiten el funcionamiento básico y la seguridad.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-brand-accent opacity-50">Siempre activas</span>
                </div>
              </div>

              {/* Analytical Cookies */}
              <div className="flex items-start justify-between border-b border-brand-accent/10 pb-6">
                <div>
                  <h3 className="font-medium tracking-widest uppercase text-xs text-brand-accent mb-2">Cookies analíticas</h3>
                  <p className="text-xs font-light text-brand-accent/60">Nos ayudan a entender cómo usas la web.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-brand-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-accent"></div>
                  </label>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between border-b border-brand-accent/10 pb-6">
                <div>
                  <h3 className="font-medium tracking-widest uppercase text-xs text-brand-accent mb-2">Cookies de marketing</h3>
                  <p className="text-xs font-light text-brand-accent/60">Se utilizan para rastrear a los visitantes en las webs.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-brand-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-accent"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleSaveSettings}
                className="px-8 py-3 bg-brand-accent text-white uppercase tracking-widest text-[10px] font-bold hover:bg-brand-accent/90 transition-colors w-full sm:w-auto"
              >
                Guardar configuración
              </button>
            </div>
            
            <button 
              onClick={() => {
                setShowSettings(false);
                if (!localStorage.getItem('cookie_consent')) setShowBanner(true);
              }}
              className="absolute top-6 right-6 text-brand-accent/50 hover:text-brand-accent transition-colors"
              aria-label="Cerrar panel"
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

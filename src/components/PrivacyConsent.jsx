import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Sliders, X, Check, Lock } from "lucide-react";
import {
  getStoredConsent,
  setStoredConsent,
  initConsentMode,
} from "../utilities/analytics";

export default function PrivacyConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  // Initialize consent mode and check if user has already made a decision
  useEffect(() => {
    initConsentMode();
    const stored = getStoredConsent();
    if (!stored) {
      // Delay slightly for smooth page entry
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setAnalyticsAllowed(stored.analytics);
    }
  }, []);

  // Listen for custom event from footer or other components to reopen settings
  useEffect(() => {
    const handleOpenSettings = () => {
      const stored = getStoredConsent();
      setAnalyticsAllowed(stored ? stored.analytics : false);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showSettings) {
        setShowSettings(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSettings]);

  const handleAcceptAll = useCallback(() => {
    setStoredConsent(true);
    setAnalyticsAllowed(true);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const handleRejectOptional = useCallback(() => {
    setStoredConsent(false);
    setAnalyticsAllowed(false);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    setStoredConsent(analyticsAllowed);
    setShowBanner(false);
    setShowSettings(false);
  }, [analyticsAllowed]);

  return (
    <>
      {/* 1. ARCHITECTURAL RECTANGULAR PRIVACY PANEL */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-0 md:bottom-3 inset-x-0 md:left-6 md:right-28 lg:right-32 md:max-w-5xl z-[9990]"
            role="region"
            aria-label="Privacy and Cookie Consent"
          >
            <div className="bg-[#021732]/98 backdrop-blur-md border-t md:border border-[#D4A574]/35 p-4 sm:p-5 md:py-3.5 md:px-6 lg:py-4 lg:px-7 shadow-[0_15px_40px_rgba(0,0,0,0.85)] rounded-none md:rounded-[2px]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 lg:gap-8">
                {/* LEFT: ICON + CLEAR HUMAN COPY */}
                <div className="flex-1 min-w-0 flex items-start gap-3 md:gap-4">
                  <div className="pt-0.5 flex-shrink-0 text-[#D4A574]">
                    {/* Compact privacy cookie icon */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
                      <circle cx="7.5" cy="15.5" r="1" fill="currentColor" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <circle cx="11" cy="17" r="1" fill="currentColor" />
                      <circle cx="16" cy="15" r="1" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm md:text-[15px] font-semibold text-white tracking-wide">
                      We use cookies to improve your experience
                    </h3>
                    <p className="text-xs text-white/75 font-light leading-relaxed">
                      We use necessary cookies to keep our website secure and working properly. With your permission, we also use analytics cookies to understand how visitors use our website and improve our travel experience. You can accept all cookies or continue with only necessary cookies.{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-[#D4A574] underline underline-offset-2 hover:text-white transition-colors font-medium inline-block"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>

                {/* RIGHT: THREE BALANCED ACTION BUTTONS */}
                <div className="w-full md:w-48 lg:w-52 flex-shrink-0 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full py-2 px-3.5 rounded-none md:rounded-[2px] bg-[#D4A574] text-[#021732] text-xs font-bold tracking-wider uppercase hover:bg-[#c99560] transition-colors duration-200 text-center focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                  >
                    Allow All
                  </button>

                  <button
                    type="button"
                    onClick={handleRejectOptional}
                    className="w-full py-2 px-3.5 rounded-none md:rounded-[2px] bg-transparent border border-white/35 text-white text-xs font-semibold tracking-wider uppercase hover:bg-white/10 hover:border-white transition-colors duration-200 text-center focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                  >
                    Necessary Only
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="w-full py-2 px-3.5 rounded-none md:rounded-[2px] bg-transparent border border-white/20 text-white/80 text-xs font-medium tracking-wider uppercase hover:bg-white/10 hover:text-white transition-colors duration-200 text-center focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                    aria-haspopup="dialog"
                  >
                    Adjust Preferences
                  </button>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* 2. ARCHITECTURAL PREFERENCES MODAL */}
      <AnimatePresence>
        {showSettings && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <Motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-none md:rounded-[2px] bg-[#021732] border border-[#D4A574]/35 p-6 md:p-7 shadow-2xl space-y-5 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Top Row: Title + Close */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3.5">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4A574] font-semibold">
                    Privacy Controls
                  </span>
                  <h2
                    id="cookie-settings-title"
                    className="text-base md:text-lg font-semibold text-white tracking-wide mt-0.5"
                  >
                    Cookie &amp; Privacy Preferences
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="text-white/50 hover:text-white p-1 rounded-none hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                  aria-label="Close preferences"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-3.5">
                {/* Category 1: Essential */}
                <div className="p-4 rounded-none md:rounded-[2px] bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock size={15} className="text-[#D4A574]" />
                      <h3 className="text-xs md:text-sm font-semibold text-white">
                        Essential Technologies
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A574] px-2 py-0.5 rounded-none bg-[#D4A574]/10 border border-[#D4A574]/25">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-white/65 font-light leading-relaxed">
                    Required for essential site operations including secure navigation, bookings, and remembering your privacy choices. Cannot be disabled.
                  </p>
                </div>

                {/* Category 2: Optional Analytics */}
                <div className="p-4 rounded-none md:rounded-[2px] bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sliders size={15} className="text-[#D4A574]" />
                      <h3 className="text-xs md:text-sm font-semibold text-white">
                        Performance &amp; Analytics
                      </h3>
                    </div>
                    {/* Toggle Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={analyticsAllowed}
                      onClick={() => setAnalyticsAllowed(!analyticsAllowed)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-none border border-white/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#D4A574] ${
                        analyticsAllowed ? "bg-[#D4A574]" : "bg-white/15"
                      }`}
                    >
                      <span className="sr-only">Enable analytics</span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-none bg-white shadow transition duration-200 ease-in-out ${
                          analyticsAllowed ? "translate-x-5 bg-[#021732]" : "translate-x-0 bg-white/80"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-white/65 font-light leading-relaxed">
                    Allows us to collect anonymous interaction data (via Google Analytics 4) to understand how travelers explore our safaris and improve our travel experience.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 py-2.5 px-4 rounded-none md:rounded-[2px] border border-white/30 text-xs font-semibold tracking-wider uppercase text-white hover:bg-white/10 transition-colors text-center focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 py-2.5 px-4 rounded-none md:rounded-[2px] bg-[#D4A574] text-[#021732] text-xs font-bold tracking-wider uppercase hover:bg-[#c99560] transition-colors text-center shadow-md shadow-[#D4A574]/15 focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                >
                  Allow All
                </button>
              </div>

              {/* Link to Privacy Policy */}
              <div className="text-center pt-0.5">
                <Link
                  to="/privacy-policy"
                  onClick={() => setShowSettings(false)}
                  className="text-[11px] text-white/50 hover:text-[#D4A574] transition-colors"
                >
                  Read our full Privacy Policy
                </Link>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

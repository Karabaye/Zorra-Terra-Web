/**
 * Zoravia Terra Journeys - Lightweight Analytics & Privacy Consent Helper
 * Supports Google Analytics 4 (GA4) with Google Consent Mode v2.
 * Safe for SSR / Prerendering environments.
 */

export const CONSENT_STORAGE_KEY = "ztj_consent_v1";

const GA_MEASUREMENT_ID =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.VITE_GA_MEASUREMENT_ID
    : null;

/**
 * Retrieves the stored consent object from localStorage.
 * Returns null if the visitor has not made an explicit choice yet.
 */
export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.analytics === "boolean") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Persists the user's consent choice in localStorage and updates Google Consent Mode.
 */
export function setStoredConsent(analyticsAllowed) {
  if (typeof window === "undefined") return;

  const consentRecord = {
    essential: true,
    analytics: Boolean(analyticsAllowed),
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentRecord));
  } catch {
    // Graceful fallback for privacy-restricted browser modes
  }

  // Update Google Consent Mode v2
  if (typeof window.gtag === "function") {
    try {
      window.gtag("consent", "update", {
        analytics_storage: analyticsAllowed ? "granted" : "denied",
      });
    } catch {
      // Fail silently
    }
  }

  // Dispatch custom event so listeners across the app can sync
  window.dispatchEvent(
    new CustomEvent("ztj-consent-updated", { detail: consentRecord })
  );

  return consentRecord;
}

/**
 * Checks whether optional analytics tracking is currently permitted.
 */
export function hasAnalyticsConsent() {
  const consent = getStoredConsent();
  return consent !== null && consent.analytics === true;
}

/**
 * Initializes Google Consent Mode v2 defaults on initial load.
 * Default is conservative: analytics is denied until explicitly granted.
 */
export function initConsentMode() {
  if (typeof window === "undefined") return;

  const stored = getStoredConsent();
  const analyticsGranted = stored ? stored.analytics : false;

  if (typeof window.gtag === "function") {
    try {
      window.gtag("consent", "default", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    } catch {
      // Fail silently
    }
  }
}

/**
 * Dispatches a custom GA4 event if gtag is initialized and analytics consent is granted.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  // Enforce consent check before dispatching events
  if (!hasAnalyticsConsent()) return;

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, {
        send_to: GA_MEASUREMENT_ID || undefined,
        ...params,
      });
    } catch {
      // Fail silently to never interrupt user interaction
    }
  }
}

/**
 * Tracks when a traveler views a specific tour or safari package
 */
export function trackTourView(tourTitle, slug) {
  trackEvent("view_item", {
    item_id: slug,
    item_name: tourTitle,
    item_category: "Safari & Tour Package",
  });
}

/**
 * Tracks when a traveler initiates booking flow
 */
export function trackBookingStart(source = "general") {
  trackEvent("begin_checkout", {
    source_location: source,
  });
}

/**
 * Tracks a successfully submitted booking inquiry
 */
export function trackBookingSubmit(details = {}) {
  trackEvent("generate_lead", {
    lead_type: "Booking Inquiry",
    tour_category: details.packageType || "Custom",
    travel_dates: details.dates || undefined,
  });
}

/**
 * Tracks a successfully submitted contact message
 */
export function trackContactSubmit() {
  trackEvent("generate_lead", {
    lead_type: "Contact Inquiry",
  });
}

/**
 * Tracks WhatsApp button click for safari inquiry
 */
export function trackWhatsAppClick(location = "floating_button") {
  trackEvent("contact", {
    method: "WhatsApp",
    click_location: location,
  });
}

/**
 * Tracks telephone call link click
 */
export function trackPhoneClick() {
  trackEvent("contact", {
    method: "Phone",
  });
}

/**
 * Tracks email link click
 */
export function trackEmailClick() {
  trackEvent("contact", {
    method: "Email",
  });
}

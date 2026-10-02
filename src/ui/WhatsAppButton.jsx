import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsAppClick, getStoredConsent } from "../utilities/analytics";

const WhatsAppButton = () => {
    const [hasConsent, setHasConsent] = useState(() => Boolean(getStoredConsent()));

    useEffect(() => {
        const handler = () => setHasConsent(true);
        window.addEventListener("ztj-consent-updated", handler);
        return () => window.removeEventListener("ztj-consent-updated", handler);
    }, []);

    const bottomClass = hasConsent ? "bottom-4 sm:bottom-6" : "bottom-[210px] sm:bottom-[170px] md:bottom-6";

    return (
        <a
            href="https://wa.me/250783482368?text=Hello%20Zoravia%20Terra%20Journeys!%20I%20want%20to%20inquire%20about%20safari%20packages."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("floating_button")}
            className={`group fixed right-4 sm:right-6 ${bottomClass} z-[9999] transition-all duration-500`}
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                <div className="absolute -right-0.5 -top-0.5 h-13 w-13 sm:h-15 sm:w-15 animate-ping rounded-full bg-[#25D366] opacity-25 pointer-events-none"></div>
                <div className="pointer-events-none absolute right-0 bottom-full mb-3 opacity-0 transition-all duration-300 hidden sm:block group-hover:opacity-100 group-hover:-translate-y-1">
                    <div className="rounded-xl bg-[#25D366] border border-white/20 px-3.5 py-1.5 text-xs font-bold whitespace-nowrap text-white flex items-center gap-2 shadow-lg">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Chat on WhatsApp
                        <div className="absolute top-full right-4 -mt-1 border-[6px] border-transparent border-t-[#25D366]"></div>
                    </div>
                </div>
                <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] border border-white/20 shadow-xl transition-all duration-500 hover:scale-110">
                    <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;

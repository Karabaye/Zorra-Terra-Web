import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/250787844365?text=Hello%20Zoravia%20Terra%20Journeys!%20I%20want%20to%20inquire%20about%20safari%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed right-6 bottom-6 z-[9999]"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                <div className="absolute -right-1 -top-1 h-16 w-16 animate-ping rounded-full bg-[#25D366] opacity-30"></div>
                <div className="pointer-events-none absolute right-0 bottom-full mb-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                    <div className="rounded-xl bg-[#25D366] border border-white/20 px-4 py-2 text-sm font-bold whitespace-nowrap text-white flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Chat on WhatsApp
                        <div className="absolute top-full right-4 -mt-1 border-[6px] border-transparent border-t-[#25D366]"></div>
                    </div>
                </div>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] border border-white/20 transition-all duration-500 hover:scale-110 hover:rotate-[360deg]">
                    <FaWhatsapp className="h-8 w-8 text-white" />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;

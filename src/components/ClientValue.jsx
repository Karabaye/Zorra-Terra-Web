import React from "react";
import { motion as Motion } from "framer-motion";
import { Check } from "lucide-react";

const clientValues = [
    "Confidence traveling in a new destination",
    "A journey shaped around them, not the market",
    "Reliable coordination without constant decision-making",
    "Depth of experience without unnecessary complexity",
    "Professional planning handled with discretion and care",
];

const ClientValue = () => {
    return (
        <section className="relative bg-[#021732] py-24 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-10">

                    {/* Left: Heading Area */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A574]/60">The Value Choice</span>
                        <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                            What Our <br />
                            <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Clients Value</span>
                        </h2>
                        <p className="text-white/40 text-sm md:text-base font-light font-sans max-w-sm mx-auto md:mx-0">
                            Travelers choose Zoravia Terra Journeys when they want a higher standard of travel.
                        </p>
                    </div>

                    {/* Right: The List */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A574]/5 blur-3xl pointer-events-none" />

                            <ul className="space-y-6 relative z-10">
                                {clientValues.map((val, idx) => (
                                    <Motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4 group/item"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 flex items-center justify-center shrink-0 group-hover/item:bg-[#D4A574] group-hover/item:border-white transition-all duration-300">
                                            <Check size={10} className="text-[#D4A574] group-hover/item:text-[#021732] transition-colors" />
                                        </div>
                                        <span className="text-white/70 text-sm md:text-[15px] font-light leading-snug group-hover/item:text-white transition-colors">
                                            {val}
                                        </span>
                                    </Motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientValue;

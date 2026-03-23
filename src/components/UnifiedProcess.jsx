import React from "react";
import { motion as Motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understanding Your Travel Vision",
        desc: "We begin with a conversation to learn your interests, travel style, and timing.",
    },
    {
        number: "02",
        title: "Journey Design",
        desc: "A personalized itinerary is created, aligning logistics, experiences, and flow.",
    },
    {
        number: "03",
        title: "Refinement Together",
        desc: "We adjust details until the journey feels exactly right.",
    },
    {
        number: "04",
        title: "Seamless Coordination",
        desc: "All arrangements are managed locally, allowing you to focus entirely on the experience.",
    },
    {
        number: "05",
        title: "Presence Without Intrusion",
        desc: "Support is always available, yet never disruptive to your independence.",
    },
];

const clientValues = [
    "Confidence traveling in a new destination",
    "A journey shaped around them, not the market",
    "Reliable coordination without constant decision-making",
    "Depth of experience without unnecessary complexity",
    "Professional planning handled with discretion and care",
];

const UnifiedProcess = () => {
    return (
        <section className="relative bg-[#021732] py-24 overflow-hidden border-t border-white/5 space-y-32">

            {/* SECTION 1: PLANNING APPROACH */}
            <div className="container mx-auto px-6">
                {/* Compact Header */}
                <div className="mb-20 text-center lg:text-left lg:flex lg:items-end lg:justify-between lg:gap-10">
                    <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A574]/60">The Process</span>
                        <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                            Our <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Planning Approach</span>
                        </h2>
                    </div>
                    <p className="mt-4 lg:mt-0 text-white/30 text-sm md:text-base font-light italic">
                        "A thoughtful process replaces uncertainty."
                    </p>
                </div>

                {/* Horizontal Strip */}
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block -translate-y-1/2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <Motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="relative group"
                            >
                                <div className="hidden lg:flex absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#021732] border border-[#D4A574]/30 z-10 transition-colors group-hover:bg-[#D4A574] shadow-[0_0_15px_rgba(212,165,116,0.3)]" />
                                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black text-[#D4A574] bg-[#D4A574]/10 px-2 py-0.5 rounded group-hover:bg-[#D4A574] group-hover:text-[#021732] transition-colors">
                                            {step.number}
                                        </span>
                                        <div className="h-px w-8 bg-white/5 group-hover:bg-[#D4A574]/20 transition-colors" />
                                    </div>
                                    <h3 className="text-white text-[15px] font-bold tracking-tight mb-3 group-hover:text-[#D4A574] transition-colors leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/40 text-[12px] leading-relaxed font-light mt-auto">
                                        {step.desc}
                                    </p>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 2: CLIENT VALUE (Combined without layout break) */}
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-20 border-t border-white/5">
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

                    <div className="w-full md:w-1/2">
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative group overflow-hidden">
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

export default UnifiedProcess;

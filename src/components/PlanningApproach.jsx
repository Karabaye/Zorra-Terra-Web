import React from "react";
import { motion as Motion } from "framer-motion";

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

const PlanningApproach = () => {
    return (
        <section className="relative bg-[#021732] py-24 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Compact Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                        Our <span className="text-white">Planning Approach</span>
                    </h2>
                </div>

                {/* The Creative Horizontal Strip */}
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
        </section>
    );
};

export default PlanningApproach;

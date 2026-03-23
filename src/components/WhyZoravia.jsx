import React from "react";
import { motion as Motion } from "framer-motion";
import {
    Eye,
    Settings,
    MapPin,
    Compass,
    Users,
    Sparkles
} from "lucide-react";

const reasons = [
    {
        title: "Clarity From the Beginning",
        desc: "You know what to expect, how it works, and how your journey will unfold.",
        icon: Eye,
    },
    {
        title: "Designed Around You",
        desc: "Every itinerary responds to your timing, interests, and pace — not a fixed copy paste.",
        icon: Settings,
    },
    {
        title: "Local Expertise That Anticipates",
        desc: "We coordinate on the ground continuously, ensuring transitions feel effortless.",
        icon: MapPin,
    },
    {
        title: "Balanced Experiences",
        desc: "We design days that feel complete, never crowded so you live in moment.",
        icon: Compass,
    },
    {
        title: "Trusted Network",
        desc: "We work with carefully selected partners who share our standards of reliability and professionalism.",
        icon: Users,
    },
];

const WhyZoravia = () => {
    return (
        <section className="relative bg-[#021732] py-32 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4A574]/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left Side: Header & Motto */}
                    <div className="lg:w-1/3 sticky top-32">
                        <Motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A574]/60">The Zoravia Standard</span>
                                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                                    Why Travel with <br />
                                    <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Zoravia Terra Journeys</span>
                                </h2>
                            </div>

                            <div className="h-px w-20 bg-[#D4A574]/40" />

                            <p className="text-xl text-white/70 font-light italic leading-relaxed">
                                "Because seamless travel is <span className="text-white">intentional</span>."
                            </p>
                        </Motion.div>
                    </div>

                    {/* Right Side: Reasons Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {reasons.map((reason, idx) => (
                                <Motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="space-y-4 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-[#D4A574]/30 flex items-center justify-center text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-[#021732] transition-all duration-500">
                                            <reason.icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-white text-lg font-medium tracking-wide">
                                            {reason.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/40 text-[14px] leading-relaxed font-light pl-14">
                                        {reason.desc}
                                    </p>
                                </Motion.div>
                            ))}
                        </div>

                        {/* Signature Footer */}
                        <Motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                            className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
                        >
                            <div className="flex items-center gap-3 text-[#D4A574]/60 uppercase text-[10px] tracking-[0.5em] mb-2">
                                <Sparkles size={12} />
                                Quiet Precision
                            </div>
                            <p className="text-2xl md:text-3xl text-white/20 font-light italic leading-tight" style={{ fontFamily: "var(--title-font)" }}>
                                "When travel is planned properly, <br />
                                it feels <span className="text-white/40">natural</span>."
                            </p>
                        </Motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyZoravia;

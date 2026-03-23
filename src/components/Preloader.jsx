import React, { useEffect, useState, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 800);
        }, 5500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const welcomeWords = "WELCOME TO THE HEART OF AFRICA".split(" ");

    return (
        <AnimatePresence>
            {isVisible && (
                <Motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#010a1a]"
                >
                    {/* SVG DEFINITION FOR LIGHT-PATH HILLS */}
                    <svg className="absolute w-0 h-0">
                        <defs>
                            <linearGradient id="trace-hill-1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#D4A574" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#010a1a" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* 1. CREATIVE SKY: THE LUXURY ATMOSPHERE */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-[20%] inset-x-0 h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(74,222,128,0.15)_0%,transparent_70%)] blur-3xl opacity-50 transition-opacity duration-1000" />

                        {/* 3D STAR FIELD */}
                        {[...Array(30)].map((_, i) => (
                            <Motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
                                transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: i * 0.2 }}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{ top: Math.random() * 50 + "%", left: Math.random() * 100 + "%" }}
                            />
                        ))}

                        {/* DRIFTING CLOUDS */}
                        {[...Array(3)].map((_, i) => (
                            <Motion.div
                                key={`cloud-${i}`}
                                initial={{ x: "-20vw", opacity: 0 }}
                                animate={{ x: "120vw", opacity: [0, 0.1, 0] }}
                                transition={{ duration: 40 + (i * 10), repeat: Infinity, delay: i * 5, ease: "linear" }}
                                className="absolute w-[50vw] h-40 bg-white/5 blur-[100px] rounded-full"
                                style={{ top: 10 + (i * 20) + "%" }}
                            />
                        ))}
                    </div>

                    {/* 2. THE LIGHT-PATH HILLS (TRUE KINETIC MOVEMENT) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-10">
                        {[1, 2].map((layer) => (
                            <Motion.div
                                key={layer}
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 18 / layer, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 left-0 w-[200%] h-full flex items-end opacity-30"
                                style={{ zIndex: layer, bottom: `${(layer - 1) * -20}px` }}
                            >
                                <svg viewBox="0 0 1000 300" className="w-full h-full" preserveAspectRatio="none">
                                    <Motion.path
                                        d="M 0 150 Q 250 50 500 150 T 1000 150 V 300 H 0 Z"
                                        fill="url(#trace-hill-1)"
                                        stroke="#D4A574"
                                        strokeWidth="2"
                                        strokeDasharray="1000"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 3, delay: layer * 0.5, ease: "easeInOut" }}
                                    />
                                    {/* Offset for seamless movement */}
                                    <Motion.path
                                        transform="translate(1000, 0)"
                                        d="M 0 150 Q 250 50 500 150 T 1000 150 V 300 H 0 Z"
                                        fill="url(#trace-hill-1)"
                                        stroke="#D4A574"
                                        strokeWidth="2"
                                        strokeDasharray="1000"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 3, delay: layer * 0.5, ease: "easeInOut" }}
                                    />
                                </svg>
                            </Motion.div>
                        ))}
                    </div>

                    {/* 3. REFINED IDENTITY & CREATIVE TEXT REVEAL */}
                    <div className="relative z-50 flex flex-col items-center">
                        <Motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="relative mb-14"
                        >
                            <div className="relative p-2 bg-white/5 rounded-full border border-white/10 shadow-[0_0_120px_rgba(74,222,128,0.25)]">
                                <img
                                    src="/assets/images/logo.jpeg"
                                    alt="Logo"
                                    className="h-32 md:h-44 w-auto rounded-full"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23D4A574'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='24' font-weight='bold'%3EZTJ%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                                <Motion.div
                                    animate={{ left: ["-150%", "300%"] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg]"
                                />
                            </div>
                        </Motion.div>

                        <div className="text-center px-10">
                            {/* ARTISTIC WORD REVEAL */}
                            <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-5xl relative overflow-hidden py-2">
                                {welcomeWords.map((word, i) => (
                                    <Motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
                                        className="text-white text-[14px] md:text-[20px] font-bold tracking-[1.2em] md:tracking-[1.8em] uppercase leading-none"
                                    >
                                        {word}
                                    </Motion.span>
                                ))}
                                {/* Scanner Light Effect */}
                                <Motion.div
                                    animate={{ left: ["-10%", "110%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                                    className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#D4A574]/20 to-transparent skew-x-[-20deg]"
                                />
                            </div>

                            <Motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 2, delay: 2.5 }}
                                className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mb-12"
                            />

                            <Motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 3.5 }}
                                className="space-y-4"
                            >
                                <span className="block text-[#D4A574] text-[22px] md:text-[28px] font-black tracking-[0.8em] md:tracking-[1.2em] uppercase leading-none">
                                    Zoravia Terra Journeys Ltd
                                </span>
                                <span className="block text-white/20 text-[12px] md:text-[14px] tracking-[0.5em] uppercase font-bold mt-2">
                                    Your Gateway to the Thousand Hills
                                </span>
                            </Motion.div>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,10,26,0.6)_100%)] pointer-events-none" />
                </Motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;                    
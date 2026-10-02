import React from "react";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PageHero = ({ title, subtitle, description, children }) => {
  return (
    <section className="relative pt-8 md:pt-14 pb-8 md:pb-12 border-b border-white/[0.05] overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c2d4a] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-[#D4A574]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-5xl relative z-10">
        <Motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <div className="max-w-3xl">
            {/* Small accent line above heading */}
            <Motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#D4A574]/50" />
              {subtitle && (
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A574]/60 font-medium">
                  {subtitle}
                </span>
              )}
            </Motion.div>
            
            {/* Main Title */}
            <Motion.h1 
              variants={fadeUp} 
              custom={1}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 md:mb-6"
            >
              {title}
            </Motion.h1>

            {/* Optional Description */}
            {description && (
              <Motion.p 
                variants={fadeUp} 
                custom={2}
                className="text-white/40 font-light leading-relaxed text-xs md:text-sm max-w-2xl px-1"
              >
                {description}
              </Motion.p>
            )}

            {children && (
              <Motion.div variants={fadeUp} custom={3}>
                {children}
              </Motion.div>
            )}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default PageHero;

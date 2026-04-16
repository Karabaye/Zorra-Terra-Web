import React from "react";
import { motion as Motion } from "framer-motion";

const clientValues = [
  "Confidence traveling in a new destination",
  "A journey shaped around them, not the market",
  "Reliable coordination without constant decision-making",
  "Depth of experience without unnecessary complexity",
  "Professional planning handled with discretion and care",
];

const ClientValue = () => {
  return (
    <section className="relative bg-[#021732] py-20 overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4A574]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Heading — full width, centered, compact */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              What Our Clients Value
            </h2>
          </Motion.div>

          {/* Values — horizontal rule style list */}
          <div className="relative">
            {clientValues.map((val, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group flex items-center gap-6 py-4 border-b border-white/[0.06] hover:border-[#D4A574]/20 transition-colors duration-300 cursor-default"
              >
                {/* Index number */}
                <span className="text-[#D4A574]/30 text-xs font-mono tracking-widest w-6 shrink-0 group-hover:text-[#D4A574]/60 transition-colors duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Thin gold line accent */}
                <div className="w-6 h-px bg-[#D4A574]/20 group-hover:w-10 group-hover:bg-[#D4A574]/50 transition-all duration-400 shrink-0" />

                {/* Text */}
                <span className="text-white/60 text-base font-light leading-snug group-hover:text-white/90 transition-colors duration-300 flex-1">
                  {val}
                </span>

                {/* Right arrow — appears on hover */}
                <span className="text-[#D4A574]/0 group-hover:text-[#D4A574]/50 text-xs transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0">
                  ›
                </span>
              </Motion.div>
            ))}

            {/* Top border of first item */}
            <div className="absolute top-0 left-0 right-0 border-t border-white/[0.06]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientValue;
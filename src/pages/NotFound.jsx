import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#021732] text-white flex items-center justify-center px-4 sm:px-6 py-24 selection:bg-[#D4A574]/30">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/[0.04] border border-[#D4A574]/30 text-[#D4A574] mb-2 shadow-[0_0_50px_rgba(212,165,116,0.15)]">
          <Compass size={38} strokeWidth={1.5} />
        </div>

        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D4A574]">
          Error 404
        </p>

        <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
          Page Not Found
        </h1>

        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
          The path you followed does not exist or may have been moved. Let us help you find your way back to your journey.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#D4A574] text-[#021732] text-xs font-bold uppercase tracking-widest hover:bg-[#D4A574]/90 transition-all shadow-lg shadow-[#D4A574]/15"
          >
            <ArrowLeft size={15} />
            Return Home
          </Link>
          <Link
            to="/short-escapes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-all"
          >
            Explore Safaris
          </Link>
        </div>
      </div>
    </div>
  );
}

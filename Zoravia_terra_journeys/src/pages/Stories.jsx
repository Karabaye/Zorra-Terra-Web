import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { stories } from "../util/stories";

const Stories = () => {
  const [selected, setSelected] = useState("All");
  const categories = ["All", "Wildlife", "Conservation", "Culture", "Adventure"];

  const filteredTours =
    selected === "All"
      ? stories
      : stories.filter((story) => story.category === selected);

  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white">
      {/* 1. COMPACT HEADER - Clean & Professional */}
      <section className="pt-24 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#D4A574]/5 via-transparent to-transparent pointer-events-none" />

        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 relative z-20 space-y-4"
        >
          <div className="flex justify-center items-center gap-3 mb-1">
            <div className="h-[1px] w-6 bg-[#D4A574]/40" />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4A574]">
              Our Collections
            </span>
            <div className="h-[1px] w-6 bg-[#D4A574]/40" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-white">
            Upcoming <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Tours</span>
          </h1>
          <p className="text-lg text-white/40 font-light max-w-xl mx-auto leading-relaxed italic">
            Curated experiences designed to connect you with the soul of East Africa.
          </p>
        </Motion.div>
      </section>

      {/* 2. FILTER SECTION - Minimalist & Clean */}
      <section className="py-8 relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`relative text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${selected === cat ? "text-[#D4A574]" : "text-white/40 hover:text-white"
                  }`}
              >
                {cat}
                {selected === cat && (
                  <Motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-[#D4A574]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOURS GRID - High-End Aesthetic */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            <Motion.div
              key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredTours.map((tour) => (
                <div key={tour.id} className="group flex flex-col space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-[#031d3d]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Subtle Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-[#021732]/80 backdrop-blur-md border border-white/10 text-[8px] font-bold uppercase tracking-widest text-[#D4A574]">
                        {tour.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="space-y-4 px-1">
                    <div className="flex items-center gap-4 text-[9px] font-bold tracking-widest uppercase text-white/30">
                      <span className="flex items-center gap-2">
                        <Calendar size={10} className="text-[#D4A574]" />
                        {tour.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={10} className="text-[#D4A574]" />
                        Rwanda
                      </span>
                    </div>

                    <h3 className="text-2xl font-light text-white leading-tight group-hover:text-[#D4A574] transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-xs text-white/40 leading-relaxed font-light line-clamp-3">
                      {tour.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/stories/${tour.id}`}
                        className="group/link inline-flex items-center text-[10px] font-bold tracking-[0.3em] text-[#D4A574] uppercase border-b border-[#D4A574]/20 pb-1.5 hover:border-[#D4A574] transition-all duration-500"
                      >
                        Explore Tour
                        <ArrowRight className="ml-3 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Consistent with About */}
      <section className="py-24 bg-[#031d3d]/30 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-light italic leading-tight" style={{ fontFamily: "var(--title-font)" }}>
              Don't See Your <br /> <span className="text-[#D4A574]">Perfect Match?</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-lg mx-auto italic">
              Let's design your private escape. We specialize in tailor-made blueprints.
            </p>
          </div>
          <div className="flex justify-center pt-8">
            <Link
              to="/booking"
              className="group relative flex items-center gap-6 px-12 py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request Private Tour
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;

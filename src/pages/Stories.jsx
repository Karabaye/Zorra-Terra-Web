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
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#4ade80]/30 selection:text-white">
      {/* 1. COMPACT HEADER - Clean & Professional */}
      <section className="pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent pointer-events-none" />

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 relative z-20 space-y-6"
        >
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="h-[1px] w-8 bg-[#4ade80]/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#4ade80]">
              Our Collections
            </span>
            <div className="h-[1px] w-8 bg-[#4ade80]/40" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-white">
            Upcoming <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Tours</span>
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Curated experiences designed to connect you with the soul of East Africa.
          </p>
        </Motion.div>
      </section>

      {/* 2. FILTER SECTION - Minimalist & Clean */}
      <section className="py-12 relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`relative text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${selected === cat ? "text-[#4ade80]" : "text-white/40 hover:text-white"
                  }`}
              >
                {cat}
                {selected === cat && (
                  <Motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#4ade80]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOURS GRID - High-End Aesthetic */}
      <section className="pb-32 pt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatePresence mode="wait">
            <Motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
            >
              {filteredTours.map((tour) => (
                <div key={tour.id} className="group flex flex-col space-y-8">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#031d3d]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Subtle Category Badge */}
                    <div className="absolute top-8 left-8">
                      <span className="px-5 py-2 rounded-full bg-[#021732]/80 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest text-[#4ade80]">
                        {tour.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="space-y-6 px-2">
                    <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-white/40">
                      <span className="flex items-center gap-2">
                        <Calendar size={12} className="text-[#4ade80]" />
                        {tour.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={12} className="text-[#4ade80]" />
                        Rwanda
                      </span>
                    </div>

                    <h3 className="text-3xl font-light text-white leading-tight group-hover:text-[#4ade80] transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-base text-white/50 leading-relaxed font-light line-clamp-3">
                      {tour.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/stories/${tour.id}`}
                        className="group/link inline-flex items-center text-xs font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
                      >
                        Explore Tour
                        <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
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
      <section className="py-32 bg-[#031d3d]/30 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light italic leading-tight" style={{ fontFamily: "Dancing Script, cursive" }}>
              Don't See Your <br /> <span className="text-[#4ade80]">Perfect Match?</span>
            </h2>
            <p className="text-xl text-white/60 font-light">
              We specialize in creating tailor-made blueprints that align with your unique rhythm. Let's design your private escape.
            </p>
          </div>
          <Link
            to="/booking"
            className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
          >
            Request Private Tour
            <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Stories;

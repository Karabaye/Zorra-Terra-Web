import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion as Motion } from "framer-motion";

const homeStaticImage = "/assets/images/nature.jpeg";

const HomeIntro = () => {
  return (
    <section className="relative bg-[#021732] py-24 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content Segment */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-3">
              <h2
                className="text-4xl md:text-5xl font-light text-white leading-tight"
              >
                What <span className="text-white">We Do</span>
              </h2>
            </div>

    <div className="space-y-3">
      <p className="text-base leading-relaxed text-white/90 font-light">
        Zoravia Terra Journeys creates private, carefully curated travel experiences in Rwanda for travelers seeking clarity, reliability, and authentic connection. We design tailor made journeys for private travelers, couples, families, small groups, solo explorers, honeymooners, and corporate retreats, each intentionally crafted to reflect its purpose, pace, and travel experience.
      </p>

      <p className="text-base leading-relaxed text-white/80 font-light">
        We specialize in tailor made journeys that remove the complexity and uncertainty of planning travel in a new destination, especially for first-time visitors to Rwanda and the region.
      </p>

      <p className="text-base text-white/70 leading-relaxed">
        From permits and timing to logistics and on-ground coordination, we guide every step of your journey ensuring a seamless experience from your first conversation to your return home.
      </p>

      <p className="text-base text-white/70 leading-relaxed">
        Our itineraries are thoughtfully designed to balance Rwanda’s most iconic experiences with deeper, more meaningful encounters. From gorilla trekking and chimpanzee tracking to Akagera safari adventures, volcano hikes, luxury and cozy staycations, and culturally immersive experiences, every journey is shaped with intention, rhythm, and flow.
      </p>

      <p className="text-base text-white/70 leading-relaxed">
        We work with trusted local partners and experienced on-ground teams to ensure smooth execution, reliable service, and real-time support throughout your stay.
      </p>

      <p className="text-base text-white/70 leading-relaxed">
        Every journey is built on responsible travel principle that respecting local communities, protecting natural ecosystems, and ensuring tourism creates lasting positive impact in Rwanda.
      </p>
    </div>

            <div className="pt-8">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-6 px-10 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:border-[#D4A574] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Our Story
                  <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C4A57B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </Motion.div>

          {/* Static Visual Element - Replacing Video */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-5/12 relative group"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/5 aspect-[4/5] lg:aspect-square">
              <img
                src={homeStaticImage}
                alt="Rwanda Wildlife"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Branded Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D4A574]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#D4A574]/20 transition-colors duration-700" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-[60px] -z-10" />
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

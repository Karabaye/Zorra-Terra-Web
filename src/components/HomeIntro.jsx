import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion as Motion } from "framer-motion";

const homeStaticImage = "/assets/imgs/gorilla.png";

const HomeIntro = () => {
  return (
    <section className="relative bg-[#021732] py-32 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Text Content Segment */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#4ade80]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#4ade80]">
                  Our Essence
                </span>
              </div>
              <h2
                className="text-5xl md:text-7xl font-light italic text-white leading-tight"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                What <span className="text-[#4ade80]">we do</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-2xl leading-relaxed text-white font-light border-l-2 border-[#4ade80]/30 pl-8">
                Zoravia Terra Journeys plans and delivers stress-free travel
                experiences in Rwanda, specializing in wildlife safaris, gorilla
                trekking, and tailor-made itineraries across East Africa.
              </p>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-white/60 font-light">
                  We handle every detail from planning to on-ground coordination so our
                  guests can enjoy their journey with confidence, comfort, care, and
                  fun.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Expert Planning", "Local Intuition", "Sustainable Impact"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <CheckCircle2 size={14} className="text-[#4ade80]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/about"
                className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
              >
                Our Story
                <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </Motion.div>

          {/* Static Visual Element - Replacing Video */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] lg:aspect-square">
              <img
                src={homeStaticImage}
                alt="Rwanda Wildlife"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Branded Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#4ade80]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#4ade80]/20 transition-colors duration-700" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-[60px] -z-10" />

            <div className="absolute -bottom-6 -left-6 z-20 bg-[#4ade80] text-[#021732] p-8 rounded-3xl border border-[#4ade80]/20 rotate-3 group-hover:rotate-0 transition-transform duration-700 hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 opacity-80">Experience</p>
              <h4 className="text-xl font-bold">Unfiltered Nature</h4>
            </div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

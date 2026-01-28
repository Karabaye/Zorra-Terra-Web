import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SpiritOfAfrica = () => {
  const bg_image = "/assets/images/The Heart of Rwanda.png";

  return (
    <section className="relative py-32 overflow-hidden min-h-[450px] flex items-center">
      {/* Background with fixed parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('${bg_image}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-[#021732]/70 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Stats Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Primate Species", value: "13+" },
              { label: "National Parks", value: "4" },
              { label: "Bird Species", value: "700+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group p-6 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/5 hover:border-[#D4A574]/30 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-light text-[#D4A574] mb-2 transition-transform group-hover:scale-110 duration-500">
                  {stat.value}
                </div>
                <div className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-10">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A574] opacity-80">
                The Spirit of Rwanda
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-white italic leading-tight" style={{ fontFamily: 'var(--title-font)' }}>
                Experience the untamed beauty <br /> of the Thousand Hills
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link
                to="/booking"
                className="group relative flex items-center gap-6 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Plan Your Journey
                  <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link
                to="/gallery"
                className="group relative flex items-center gap-6 px-10 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#D4A574]/30 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Gallery
                  <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritOfAfrica;

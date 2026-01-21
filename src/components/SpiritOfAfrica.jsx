import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SpiritOfAfrica = () => {
  const bg_image = "/assets/imgs/The Heart of Rwanda.png";

  return (
    <section className="relative py-48 overflow-hidden min-h-[600px] flex items-center">
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
        <div className="max-w-5xl mx-auto">
          {/* Stats Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { label: "Primate Species", value: "13+" },
              { label: "National Parks", value: "4" },
              { label: "Bird Species", value: "700+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/5 hover:border-[#4ade80]/30 transition-all duration-500">
                <div className="text-5xl md:text-7xl font-light text-[#4ade80] mb-4 transition-transform group-hover:scale-110 duration-500">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#4ade80] opacity-80">
                The Spirit of Rwanda
              </span>
              <h3 className="text-4xl md:text-6xl font-light text-white italic leading-tight" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Experience the untamed beauty <br /> of the Thousand Hills
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 justify-center items-center pt-4">
              <Link
                to="/gallery"
                className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
              >
                View Photo Gallery
                <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                to="/booking"
                className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
              >
                Plan Your Journey
                <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritOfAfrica;

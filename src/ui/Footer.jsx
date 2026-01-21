import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const natureImage = '/assets/imgs/wildebeest.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#021732] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transform transition-transform hover:scale-105">
              <img src="/images/logo.jpeg" alt="Logo" className="h-14 w-auto rounded-lg" />
            </Link>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs italic">
              "Creating unforgettable experiences in the heart of Rwanda. Join us on a journey of discovery, adventure, and transformation."
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-2.5 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Explore</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {["Home", "About Us", "Travel With Us", "Gallery", "Stories", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-white/70 hover:text-[#4ade80] transition-colors whitespace-nowrap">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group text-sm text-white/70">
                <MapPin className="text-[#4ade80]/70 shrink-0" size={16} />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3 group text-sm text-white/70">
                <Mail className="text-[#4ade80]/70 shrink-0" size={16} />
                <span className="truncate">info@zoraviaterra.com</span>
              </div>
            </div>
          </div>

          {/* Plan Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Ready?</h4>
            <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-4">
              <p className="text-[11px] leading-relaxed text-white/60">
                Start your journey through the land of a thousand hills.
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-white/20 gap-4">
          <div className="flex space-x-6">
            <span>&copy; {currentYear} Zoravia Terra Journeys</span>
            <Link to="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

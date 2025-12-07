import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import natureImage from '../assets/imgs/wildebeest.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden text-white">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${natureImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 18
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-800/50 to-emerald-900/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Navigation Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-emerald-100 mb-6 uppercase tracking-wider border-b border-emerald-700/50 pb-3">
            Explore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link 
              to="/about" 
              className="text-emerald-100 hover:text-white transition-all duration-300 text-sm font-medium py-2 border-b border-emerald-800 hover:border-emerald-400 text-center hover:bg-emerald-900/30 rounded-lg px-2 hover:scale-105 transform"
            >
              About Us
            </Link>
            <Link 
              to="/travel" 
              className="text-emerald-100 hover:text-white transition-all duration-300 text-sm font-medium py-2 border-b border-emerald-800 hover:border-emerald-400 text-center hover:bg-emerald-900/30 rounded-lg px-2 hover:scale-105 transform"
            >
              Travel With Us
            </Link>
            <Link 
              to="/gallery" 
              className="text-emerald-100 hover:text-white transition-all duration-300 text-sm font-medium py-2 border-b border-emerald-800 hover:border-emerald-400 text-center hover:bg-emerald-900/30 rounded-lg px-2 hover:scale-105 transform"
            >
              Gallery
            </Link>
            <Link 
              to="/stories" 
              className="text-emerald-100 hover:text-white transition-all duration-300 text-sm font-medium py-2 border-b border-emerald-800 hover:border-emerald-400 text-center hover:bg-emerald-900/30 rounded-lg px-2 hover:scale-105 transform"
            >
              Stories
            </Link>
            <Link 
              to="/contact" 
              className="text-emerald-100 hover:text-white transition-all duration-300 text-sm font-medium py-2 border-b border-emerald-800 hover:border-emerald-400 text-center hover:bg-emerald-900/30 rounded-lg px-2 hover:scale-105 transform"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Green Glow Divider */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-sm"></div>
        </div>

        {/* About and Contact Section with Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-700/30 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-800/30 transition-shadow duration-300">
            <h3 className="text-base font-semibold mb-4 text-emerald-100 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              About Us
            </h3>
            <nav className="space-y-3">
              {["About Us", "The Blog", "Gallery", "Safaris", "Retreats", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-emerald-200 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 hover:pl-2 border-l-2 border-transparent hover:border-emerald-400 pl-3 py-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Column */}
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-700/30 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-800/30 transition-shadow duration-300">
            <h3 className="text-base font-semibold mb-4 text-emerald-100 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-emerald-800/40 group-hover:bg-emerald-700/60 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <p className="text-sm text-emerald-200 font-medium group-hover:text-white transition-colors">Kigali, Rwanda</p>
                  <p className="text-xs text-emerald-300/70 mt-1">Headquarters</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-emerald-800/40 group-hover:bg-emerald-700/60 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-emerald-300" />
                </div>
                <a 
                  href="tel:+250783482368" 
                  className="text-sm text-emerald-200 hover:text-white transition-colors group-hover:scale-105 inline-block"
                >
                  +250 783 482 368
                </a>
              </div>
            </div>
          </div>

          {/* Description Column */}
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-700/30 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-800/30 transition-shadow duration-300">
            <h3 className="text-base font-semibold mb-4 text-emerald-100 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              Our Mission
            </h3>
            <p className="text-sm text-emerald-200 leading-relaxed mb-6 italic">
              "Creating unforgettable experiences in the heart of Rwanda. Join us on a journey 
              of discovery, adventure, and transformation."
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 px-6 py-3 rounded-lg shadow-lg shadow-emerald-900/30 hover:shadow-emerald-700/40 hover:translate-y-[-2px] group"
            >
              GET IN TOUCH
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Green Glow Divider */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-sm"></div>
        </div>

        {/* Bottom Section */}
        <div className="bg-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-700/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-emerald-200 font-medium">
                © {currentYear} Zoravia Terra Journeys
              </p>
              <p className="text-xs text-emerald-300/70 mt-1">All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-200">
              <Link 
                to="/privacy" 
                className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 bg-emerald-600/50"></div>
              <Link 
                to="/terms" 
                className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>

            <div className="text-sm text-emerald-200">
              Website by <span className="text-emerald-100 font-medium">Zoravia Team</span>
            </div>
          </div>
        </div>

        {/* Social Icons with Green Glow */}
        <div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-emerald-700/30">
          {[
            { icon: Instagram, href: "https://www.instagram.com/zoraviajourneys.rw/", label: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { icon: Mail, href: "mailto:info@zoraviaterra.com", label: "Email" },
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-200 hover:text-white transition-all duration-300 p-3 rounded-full bg-emerald-900/30 border border-emerald-700/40 hover:border-emerald-400 hover:bg-emerald-800/40 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Green Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
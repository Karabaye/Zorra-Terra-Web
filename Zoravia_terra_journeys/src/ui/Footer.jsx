import { Instagram, Facebook, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/zoraviaterrajourneys", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/zoraviaterrajourneys", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/zoraviaterrajourneys", label: "LinkedIn" }
  ];

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Travel With Us", to: "/travel-with-us" },
    { label: "Stories", to: "/stories" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <footer className="relative bg-[#021732] text-white overflow-hidden">
      {/* Layered hills with mountain-shaped top edge */}
      <svg
        className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        style={{ minHeight: "140px" }}
      >
        <defs>
          <linearGradient id="g-far" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#D4A574" stopOpacity="0.015" />
          </linearGradient>
          <linearGradient id="g-mid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#D4A574" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="g-near" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#D4A574" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* far smooth backdrop */}
        <path
          d="M0,150 C200,140 360,148 520,140 C700,132 860,140 1020,136 C1100,134 1160,138 1200,136 L1200,180 L0,180 Z"
          fill="url(#g-far)"
          opacity="0.6"
        />

        {/* middle smooth layer */}
        <path
          d="M0,160 C140,145 300,152 460,148 C610,144 760,152 910,148 C1000,146 1080,150 1200,146 L1200,180 L0,180 Z"
          fill="url(#g-mid)"
          opacity="0.75"
        />

        {/* foreground with mountain top peaks (centered notch under logo) - lowered */}
        <path
          d="M0,195 L90,170 L180,185 L270,165 L360,185 L450,175 L540,200 L630,160 L720,200 L810,175 L900,190 L990,175 L1080,185 L1170,175 L1200,180 L1200,220 L0,220 Z"
          fill="url(#g-near)"
        />

        {/* thin highlight stroke along peaks */}
        <path
          d="M0,195 L90,170 L180,185 L270,165 L360,185 L450,175 L540,200 L630,160 L720,200 L810,175 L900,190 L990,175 L1080,185 L1170,175 L1200,180"
          stroke="#C4A57B"
          strokeWidth="1"
          fill="none"
          opacity="0.12"
        />
      </svg>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8 pb-10">
        {/* Logo Section */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <Link to="/">
            {/* Logo Container */}
            <div className="relative px-7 py-5 bg-gradient-to-br from-white/7 to-white/3 rounded-2xl border border-[#D4A574]/30 shadow-lg">
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Zoravia Terra Journeys" 
                className="h-20 w-auto rounded-md shadow-sm"
              />
            </div>
          </Link>
        </Motion.div>

        {/* Navigation Links */}
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-7"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[12px] md:text-[13px] text-white/70 font-light"
            >
              {item.label}
            </Link>
          ))}
        </Motion.div>

        {/* Contact Info */}
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 mb-7 pb-6 border-b border-white/5"
        >
          <a 
            href="mailto:info@zoraviaterra.com" 
            className="flex items-center gap-2 text-[11px] md:text-[12px] text-white/60"
          >
            <Mail size={14} className="text-[#D4A574]" />
            <span>zoraviaterrajourneys@gmail.com</span>
          </a>
          <span className="text-white/20 hidden md:block">•</span>
          <a 
            href="tel:+250788123456" 
            className="flex items-center gap-2 text-[11px] md:text-[12px] text-white/60"
          >
            <Phone size={14} className="text-[#D4A574]" />
            <span>+250 783 482 368</span>
          </a>
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-6"
        >
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10"
                title={social.label}
              >
                <Icon className="text-white/60" size={17} />
              </a>
            );
          })}
        </Motion.div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-[9px] md:text-[10px] text-white/25 font-light tracking-wider">
            &copy; {currentYear} Zoravia Terra Journeys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

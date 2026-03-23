import { Instagram, Facebook, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/zoraviaterrajourneys", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/zoraviaterrajourneys", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/zoraviaterrajourneys", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-[#0a1628]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo and Social Icons */}
          <div className="mb-6 md:mb-0 flex items-center gap-6">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/assets/images/logo.jpeg"
                className="h-16 w-16 rounded-lg object-cover shadow-lg"
                alt="Zoravia Terra Journeys Logo"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(212, 165, 116, 0.15))"
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23D4A574'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='12' font-weight='bold'%3EZTJ%3C/text%3E%3C/svg%3E";
                }}
              />
            </Link>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#D4A574] transition-colors transform hover:scale-110 duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Quick Links</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:text-[#D4A574] transition-colors">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:text-[#D4A574] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#D4A574] transition-colors">Gallery</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Services</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/travel-with-us" className="hover:text-[#D4A574] transition-colors">Travel With Us</Link>
                </li>
                <li className="mb-4">
                  <Link to="/short-escapes" className="hover:text-[#D4A574] transition-colors">Short Escapes</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#D4A574] transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:zoraviaterrajourneys@gmail.com"
                    className="hover:text-[#D4A574] transition-colors flex items-start gap-2"
                  >
                    <Mail size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">zoraviaterrajourneys@gmail.com</span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="tel:+250783482368"
                    className="hover:text-[#D4A574] transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} className="flex-shrink-0" />
                    <span>+250 783 482 368</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-gray-400">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Remera, KG 17 Ave, Kigali</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-400 text-center">
            © {currentYear}{" "}
            <Link to="/" className="hover:text-[#D4A574] transition-colors">
              Zoravia Terra Journeys
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
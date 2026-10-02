import { Instagram, Facebook, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEmailClick, trackPhoneClick } from "../utilities/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/zoraviaterrajourneys", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/zoraviaterrajourneys", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/zoraviaterrajourneys", label: "LinkedIn" },
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
                  className="h-20 w-auto object-contain rounded-lg"
                  alt="Zoravia Terra Journeys Logo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23D4A574'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='12' font-weight='bold'%3EZTJ%3C/text%3E%3C/svg%3E";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            {/* Explore */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">Explore</h2>
              <ul className="font-medium space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/short-escapes" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Short Escapes
                  </Link>
                </li>
                <li>
                  <Link to="/travel-with-us" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Travel With Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support / Information */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">Support / Information</h2>
              <ul className="font-medium space-y-3">
                <li>
                  <Link to="/booking" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Booking
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/cancellation-policy" className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 text-sm text-left focus:outline-none focus:text-[#D4A574]"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">Contact</h2>
              <ul className="font-medium space-y-4">
                <li>
                  <a
                    href="mailto:zoraviaterrajourneys@gmail.com"
                    onClick={() => trackEmailClick()}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 flex items-start gap-2 text-sm"
                  >
                    <Mail size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="break-all sm:break-normal">zoraviaterrajourneys@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+250783482368"
                    onClick={() => trackPhoneClick()}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <Phone size={16} className="flex-shrink-0" />
                    <span>+250 783 482 368</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Remera, KG 17 Ave, Kigali, Rwanda</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-gray-400 text-center sm:text-left">
            © {currentYear}{" "}
            <Link to="/" className="hover:text-[#D4A574] transition-colors">
              Zoravia Terra Journeys
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-[#D4A574] transition-colors focus:outline-none"
            >
              Privacy Settings
            </button>
            <Link to="/privacy-policy" className="hover:text-[#D4A574] transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#D4A574] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

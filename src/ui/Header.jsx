import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import gorilla from "../assets/imgs/gorilla.png";
import zebra from "../assets/imgs/zebra.png";
import chimpanzee from "../assets/imgs/chimpanzee.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  const isHomePage = location.pathname === "/";

  // Navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/travel-with-us", label: "Travel With Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/stories", label: "Stories" },
    { to: "/contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar styling based on scroll and page
  const getNavbarClasses = () => {
    if (scrolled || !isHomePage) {
      return "bg-white shadow-lg border-b border-gray-100";
    }
    return "bg-transparent";
  };

  // Determine text color for nav items
  const getNavTextColor = () => {
    if (scrolled || !isHomePage) return "text-[#0a2e1d]";
    return "text-white";
  };

  // Determine logo to use
  const getLogoSource = () => {
    if (scrolled || !isHomePage) return "/images/logo.jpeg"; // dark logo for white background
    return "/images/logo.png"; // light logo for dark background (home page)
  };

  // Scroll down function
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Navigation Bar - Always visible on all pages */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 h-20 ${getNavbarClasses()}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo - Left side */}
            <Link to="/" className="relative z-50 flex items-center">
              <img 
                src={getLogoSource()} 
                alt="Zoravia Terra Journeys" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  const fallback = document.createElement('div');
                  fallback.className = `text-xl font-bold ${getNavTextColor()}`;
                  fallback.textContent = 'ZORAVIA TERRA';
                  parent.appendChild(fallback);
                }}
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-12 h-full absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <div key={item.to} className="relative h-full flex items-center group">
                    <Link
                      to={item.to}
                      className={`text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative ${getNavTextColor()} ${
                        isActive ? 'text-[#0a2e1d]' : ''
                      } hover:text-[#9cd4b4]`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9cd4b4] transition-all duration-300 group-hover:w-full ${
                        isActive ? 'w-full' : ''
                      }`}></span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Right side */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  scrolled || !isHomePage
                    ? "bg-[#0a2e1d] text-white hover:bg-[#1e4d2f]"
                    : "bg-white text-[#0a2e1d] hover:bg-[#f8f8f8]"
                }`}
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden ${getNavTextColor()} p-2`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl">
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block py-4 px-4 text-sm font-bold tracking-widest uppercase border-l-4 transition-all ${
                        isActive
                          ? "text-[#0a2e1d] border-[#0a2e1d] bg-[#0a2e1d]/5" 
                          : "text-gray-700 border-transparent hover:border-[#9cd4b4] hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4">
                  <Link
                    to="/contact"
                    className="block py-4 px-6 bg-[#0a2e1d] text-white text-sm font-bold tracking-widest uppercase text-center hover:bg-[#1e4d2f] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plan Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Only on Home Page */}
      {isHomePage && (
        <header className="relative min-h-screen w-full overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setVideoReady(true)}
              preload="metadata"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              <img src={gorilla} alt="Rwanda landscape" className="w-full h-full object-cover" />
            </video>
            {/* Loading overlay */}
            {!videoReady && (
              <div className="absolute inset-0 bg-[#0a2e1d] flex items-center justify-center z-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9cd4b4]"></div>
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-center pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="max-w-4xl mx-auto text-center space-y-10">
                <div className="inline-flex items-center space-x-3 text-base font-medium tracking-widest uppercase text-[#9cd4b4]">
                  <span className="h-3 w-3 rounded-full bg-current animate-pulse"></span>
                  <span>Zoravia Terra Journeys</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light leading-tight tracking-tight text-white">
                  Every Journey Tells a Story
                </h1>
                
                <p className="text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
                  Inspired by Rwanda's thousand hills, wildlife, and vibrant communities, 
                  we craft intentional journeys that connect nature, culture, and heartfelt discovery.
                </p>
                
                <div className="pt-12 space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      to="/travel-with-us"
                      className="inline-flex items-center justify-center px-12 py-6 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-base font-bold tracking-widest uppercase group"
                    >
                      Begin Your Journey
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-12 py-6 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-base font-bold tracking-widest uppercase"
                    >
                      Contact Us
                    </Link>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/80">
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm tracking-widest">Happy Travelers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm tracking-widest">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm tracking-widest">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Scroll Indicator - Only on home page when not scrolled */}
          {!scrolled && (
            <button
              onClick={scrollDown}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 group"
              aria-label="Scroll down"
            >
              {/* Animated mouse */}
              <div className="relative w-10 h-16 mx-auto mb-2">
                {/* Mouse outline */}
                <div className="w-10 h-16 rounded-full border-2 border-white/50 flex items-start justify-center pt-3 group-hover:border-white transition-colors duration-300">
                  {/* Scroll wheel */}
                  <div className="w-1.5 h-6 rounded-full bg-white/70 group-hover:bg-white animate-bounce"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-16 rounded-full bg-white/10 blur-md group-hover:bg-white/20 transition-all duration-300"></div>
              </div>
              
              {/* Text with arrow */}
              <div className="flex flex-col items-center space-y-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/80 tracking-widest uppercase">Explore</span>
                <ChevronDown className="h-4 w-4 text-white/70 group-hover:text-white animate-pulse" />
              </div>
              
              {/* Pulse animation */}
              <div className="absolute -inset-4 rounded-full bg-white/5 group-hover:bg-white/10 animate-ping"></div>
            </button>
          )}
        </header>
      )}

      {/* For non-home pages, add padding to push content below fixed nav */}
      {!isHomePage && (
        <div className="pt-20"></div>
      )}
    </>
  );
};

export default Header;
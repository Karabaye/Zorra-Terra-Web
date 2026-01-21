import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
const gorilla = "/assets/imgs/gorilla.png";
const zebra = "/assets/imgs/Zebra.png";
const chimpanzee = "/assets/imgs/chimpanzee.png";

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
    { to: "/stories", label: "Upcoming Tours" },
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
      return "bg-[#021732]/90 backdrop-blur-md shadow-2xl border-b border-white/5";
    }
    return "bg-transparent";
  };

  // Determine text color for nav items
  const getNavTextColor = () => {
    return "text-white";
  };

  // Determine logo to use - Always use the more visible one with background
  const getLogoSource = () => {
    return "/images/logo.jpeg";
  };

  // Scroll down function
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navigation Bar - Always visible on all pages */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-20 w-full transition-all duration-500 ${getNavbarClasses()}`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between">
            {/* Logo - Left side */}
            <Link to="/" className="relative z-50 flex items-center">
              <img
                src={getLogoSource()}
                alt="Zoravia Terra Journeys"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  const parent = e.target.parentElement;
                  const fallback = document.createElement("div");
                  fallback.className = `text-xl font-bold ${getNavTextColor()}`;
                  fallback.textContent = "ZORAVIA TERRA";
                  parent.appendChild(fallback);
                }}
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="absolute left-1/2 hidden h-full -translate-x-1/2 transform items-center space-x-12 lg:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <div
                    key={item.to}
                    className="group relative flex h-full items-center"
                  >
                    <Link
                      to={item.to}
                      className={`relative text-[11px] font-bold tracking-[0.3em] whitespace-nowrap uppercase transition-all duration-300 ${getNavTextColor()} ${isActive ? "text-[#4ade80]" : ""
                        } hover:text-[#4ade80]`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-[#4ade80] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""
                          }`}
                      ></span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Right side */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/booking"
                className="bg-[#4ade80] text-[#021732] px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#4ade80] transition-all duration-500 hover:bg-[#021732] hover:text-[#4ade80] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Booking
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden ${getNavTextColor()} p-2`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-[#021732] shadow-2xl lg:hidden border-b border-white/5">
            <div className="container mx-auto px-4 py-8 sm:px-6">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-6 py-4 text-xs font-bold tracking-[0.3em] uppercase transition-all rounded-xl ${isActive
                        ? "bg-[#4ade80]/10 text-[#4ade80]"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="px-6 pt-6">
                  <Link
                    to="/booking"
                    className="flex items-center justify-center bg-[#4ade80] text-[#021732] py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Booking
                    <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover:translate-x-1" />
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
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#021732]/80 via-transparent to-[#021732] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover scale-105"
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setVideoReady(true)}
              preload="metadata"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              <img
                src={gorilla}
                alt="Rwanda landscape"
                className="h-full w-full object-cover"
              />
            </video>
            {/* Loading overlay */}
            {!videoReady && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0a2e1d]">
                <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-[#9cd4b4]"></div>
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-center pt-20">
            <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl space-y-10 text-center">

                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-[#4ade80]/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#4ade80]">
                    TRAVEL MORE, SPEND LESS.
                  </span>
                  <div className="h-[1px] w-8 bg-[#4ade80]/40" />
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase px-4 leading-tight">
                    Every Journey <br />
                    <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Tells a Story</span>
                  </h1>

                  <p className="text-2xl md:text-3xl font-light italic text-[#4ade80]/80" style={{ fontFamily: "Dancing Script, cursive" }}>
                    Let Us Help You Create Yours
                  </p>
                </div>

                <div className="max-w-2xl mx-auto pt-8 border-t border-white/10">
                  <p className="text-2xl md:text-3xl leading-relaxed font-light text-white uppercase tracking-[0.2em]">
                    Book Your Dream Trip Today!
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Elegant Scroll Indicator - Only on home page when not scrolled */}
        </header>
      )}

      {/* For non-home pages, add padding to push content below fixed nav */}
      {!isHomePage && <div className="pt-20"></div>}
    </>
  );
};

export default Header;

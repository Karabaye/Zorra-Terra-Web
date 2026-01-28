import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const gorilla = "/assets/imgs/gorilla.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const lastScrollY = useRef(0);

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

  // Handle scroll effect with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if scrolled past threshold
      setScrolled(currentScrollY > 20);

      // Detect scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up or at top
        setScrollingDown(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Smart Floating Navbar - Snaps to top when scrolling down */}
      <Motion.div
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out"
        animate={{
          paddingLeft: scrolled ? "0px" : "12px",
          paddingRight: scrolled ? "0px" : "12px",
          paddingTop: scrolled ? "0px" : "12px",
        }}
      >
        <Motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full transition-all duration-500 ease-out overflow-hidden"
          style={{
            borderRadius: scrolled ? "0px" : "20px",
            background: scrolled
              ? "linear-gradient(135deg, rgba(1, 15, 28, 0.95) 0%, rgba(2, 23, 50, 0.95) 50%, rgba(1, 15, 28, 0.95) 100%)"
              : "linear-gradient(135deg, rgba(1, 15, 28, 0.75) 0%, rgba(2, 23, 50, 0.75) 50%, rgba(1, 15, 28, 0.75) 100%)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(16px)",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(16px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
              : "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            border: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <Motion.div
            className="relative px-4 md:px-6 transition-all duration-500"
            animate={{
              paddingTop: scrolled ? "0.625rem" : "0.875rem",
              paddingBottom: scrolled ? "0.625rem" : "0.875rem",
            }}
          >
            <div className="flex items-center max-w-7xl mx-auto w-full">
              {/* Logo - NO White Background */}
              <Link to="/" className="relative z-50 flex items-center group shrink-0">
                <Motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                  style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  animate={{
                    scale: scrolled ? 0.92 : 1,
                  }}
                >
                  <img
                    src="/images/logo.jpeg"
                    alt="Zoravia Terra Journeys"
                    className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-9 md:h-10" : "h-10 md:h-12"
                      }`}
                    style={{
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
                      background: 'transparent',
                      backgroundColor: 'transparent',
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                      const parent = e.target.parentElement;
                      const fallback = document.createElement("div");
                      fallback.className = "text-base md:text-lg font-bold text-white tracking-wider";
                      fallback.textContent = "ZORAVIA TERRA";
                      parent.appendChild(fallback);
                    }}
                  />
                </Motion.div>
              </Link>

              {/* Desktop Navigation - Centered to fill space */}
              <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 px-4">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.to)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        to={item.to}
                        className={`relative text-[17px] xl:text-[18px] font-medium tracking-wide whitespace-nowrap transition-colors duration-400 ${isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white/95"
                          }`}
                      >
                        {item.label}

                        {/* Subtle Professional Underline */}
                        <Motion.span
                          className="absolute -bottom-1 left-0 h-[1.5px] rounded-full"
                          initial={false}
                          animate={{
                            width: isActive ? "100%" : hoveredItem === item.to ? "100%" : "0%",
                            opacity: isActive ? 1 : hoveredItem === item.to ? 0.85 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            background: isActive
                              ? "linear-gradient(90deg, #D4A574 0%, #C4A57B 100%)"
                              : "linear-gradient(90deg, rgba(74, 222, 128, 0.6) 0%, rgba(58, 182, 115, 0.6) 100%)",
                            boxShadow: (isActive || hoveredItem === item.to)
                              ? "0 0 6px rgba(74, 222, 128, 0.25)"
                              : "none",
                          }}
                        />
                      </Link>
                    </Motion.div>
                  );
                })}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4 ml-auto lg:ml-0">
                {/* Clean Premium "Book Now" Button */}
                <Motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:block"
                >
                  <Link
                    to="/booking"
                    className="relative px-7 py-3 rounded-xl text-[16px] xl:text-[17px] font-bold tracking-wide transition-all duration-400"
                    style={{
                      background: "linear-gradient(135deg, #D4A574 0%, #C4A57B 100%)",
                      color: "#021732",
                      boxShadow: "0 2px 12px rgba(74, 222, 128, 0.2)",
                    }}
                  >
                    Book Now
                  </Link>
                </Motion.div>

                {/* Mobile menu button */}
                <Motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors duration-200"
                  whileTap={{ scale: 0.92 }}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <Motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </Motion.div>
                    ) : (
                      <Motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.button>
              </div>
            </div>
          </Motion.div>
        </Motion.nav>
      </Motion.div>

      {/* Mobile Navigation - Immersive Full Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Immersive Background Blur & Gradient */}
            <div className="absolute inset-0 bg-[#021732]/95 backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/5 via-transparent to-[#021732]/80 pointer-events-none" />

            {/* Animated Ambient Glows */}
            <Motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -right-[10%] w-[60%] aspect-square bg-[#D4A574]/20 rounded-full blur-[120px]"
            />
            <Motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.15, 0.05],
                x: [0, -50, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[10%] -left-[10%] w-[60%] aspect-square bg-[#C4A57B]/20 rounded-full blur-[120px]"
            />

            {/* Menu Header (Logo & Close) */}
            <div className="relative flex items-center justify-between px-6 py-6 border-b border-white/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/logo.jpeg" alt="Logo" className="h-8 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="relative h-[calc(100vh-80px)] overflow-y-auto px-6 py-12 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm space-y-8">
                <nav className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block text-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className={`block text-3xl font-light tracking-tight transition-all duration-500 ${isActive ? "text-[#D4A574] italic" : "text-white/80 group-hover:text-white"
                            }`}
                            style={isActive ? { fontFamily: 'var(--title-font)' } : {}}
                          >
                            {item.label}
                          </span>

                          {/* Active Indicator Dot */}
                          {isActive && (
                            <Motion.span
                              layoutId="activeDot"
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4A574] rounded-full shadow-[0_0_10px_#D4A574]"
                            />
                          )}
                        </Link>
                      </Motion.div>
                    );
                  })}
                </nav>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="pt-12 text-center"
                >
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-xs font-bold tracking-[0.3em] uppercase shadow-2xl transition-all hover:scale-105 active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Book Your Journey</span>
                    <ArrowRight size={16} />
                  </Link>

                  <div className="mt-12 flex items-center justify-center gap-6 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase">
                    <span className="h-[1px] w-8 bg-white/10" />
                    Zoravia
                    <span className="h-[1px] w-8 bg-white/10" />
                  </div>
                </Motion.div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>


      {/* Hero Section - Only on Home Page */}
      {isHomePage && (
        <header className="relative min-h-screen w-full overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#021732]/80 via-transparent to-[#021732]" />
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
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#021732]">
                <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-[#D4A574]"></div>
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-center pt-28">
            <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl space-y-8 text-center"
              >
                <div className="flex justify-center items-center gap-3 mb-2">
                  <Motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "24px" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-[1px] bg-[#D4A574]/40"
                  />
                  <Motion.span
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, letterSpacing: "0.5em" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-[9px] font-bold uppercase text-[#D4A574]"
                  >
                    TRAVEL MORE, SPEND LESS.
                  </Motion.span>
                  <Motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "24px" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-[1px] bg-[#D4A574]/40"
                  />
                </div>

                <div className="space-y-4">
                  <Motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase px-4 leading-tight"
                  >
                    Every Journey <br />
                    <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>
                      Tells a Story
                    </span>
                  </Motion.h1>

                  <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="text-xl md:text-2xl font-light italic text-[#D4A574]/80"
                    style={{ fontFamily: "var(--title-font)" }}
                  >
                    Let Us Help You Create Yours
                  </Motion.p>
                </div>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="max-w-xl mx-auto pt-6 border-t border-white/10"
                >
                  <p className="text-xl md:text-2xl leading-relaxed font-light text-white uppercase tracking-[0.2em]">
                    Book Your Dream Trip Today!
                  </p>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </header>
      )}

      {/* For non-home pages, add padding */}
      {!isHomePage && <div className="pt-28"></div>}
    </>
  );
};

export default Header;

import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const gorilla = "/assets/images/gorilla.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const lastScrollY = useRef(0);

  // Parallax hooks must be top-level
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);

  const isHomePage = location.pathname === "/";

  // Navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/travel-with-us", label: "Travel With Us" },
    { to: "/short-escapes", label: "Short Escape Tours" },
    { to: "/gallery", label: "Gallery" },
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
                    src="/assets/images/logo.jpeg"
                    alt="Zoravia Terra Journeys"
                    className={`w-auto object-contain transition-all duration-500 rounded-lg ${scrolled ? "h-8 md:h-10" : "h-9 md:h-12"
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
                      fallback.className = `text-sm md:text-lg font-bold text-[#D4A574] tracking-wider ${scrolled ? "h-8 md:h-10" : "h-9 md:h-12"} flex items-center`;
                      fallback.style.fontFamily = "var(--title-font)";
                      fallback.textContent = "ZORAVIA";
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

      {/* Mobile Navigation - Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <Motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#021732] shadow-2xl flex flex-col"
              style={{
                background: "linear-gradient(135deg, rgba(1, 15, 28, 0.98) 0%, rgba(2, 23, 50, 0.98) 50%, rgba(1, 15, 28, 0.98) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/assets/images/logo.jpeg" alt="Zoravia Terra Journeys" className="h-8 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6 overflow-y-auto">
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                            ? "bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-white shadow-lg"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                          {isActive && (
                            <span className="ml-auto w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#ffffff]"></span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA Button */}
              <div className="p-6 border-t border-white/5">
                <Link
                  to="/booking"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-base font-bold tracking-wide shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book Your Journey</span>
                  <ArrowRight size={18} />
                </Link>

                {/* Optional: Add contact info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-white/40">
                    Need help?
                    <Link to="/contact" className="text-[#D4A574] hover:text-[#C4A57B] font-medium ml-1 transition-colors">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>


      {/* Hero Section - Only on Home Page */}
      {isHomePage && (
        <header className="relative h-[100svh] w-full overflow-hidden">
          {/* Background Video with Parallax */}
          <Motion.div
            style={{
              y: heroY,
              height: "120%"
            }}
            className="absolute -top-[10%] inset-x-0 bottom-0 z-0"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#021732]/80 via-transparent to-[#021732] opacity-80" />
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setVideoReady(true)}
              preload="metadata"
            >
              <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
              <img
                src={gorilla}
                alt="Rwanda landscape"
                className="h-full w-full object-cover"
              />
            </video>
            {/* Loading overlay inside parallax div to keep it synced */}
            {!videoReady && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#021732]">
                <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-[#D4A574]"></div>
              </div>
            )}
          </Motion.div>

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
                    className="text-lg md:text-2xl font-light italic text-[#D4A574]/80"
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
                  <p className="text-lg md:text-2xl leading-relaxed font-light text-white uppercase tracking-[0.2em]">
                    Book Your Dream Trip Today!
                  </p>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </header>
      )}

      {/* For non-home pages, add padding */}
      {!isHomePage && <div className="pt-20 md:pt-28"></div>}
    </>
  );
};

export default Header;

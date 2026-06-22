import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence, useScroll, useTransform } from "framer-motion";



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const videoRef = useRef(null);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);

  const isHomePage = location.pathname === "/";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/travel-with-us", label: "Travel With Us" },
    { to: "/short-escapes", label: "Short Escape Tours" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      queueMicrotask(() => setMobileMenuOpen(false));
    }
  }, [location.pathname]);

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
      {/* Floating Navbar */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <Motion.div
            className="relative px-4 md:px-6 transition-all duration-500"
            animate={{
              paddingTop: scrolled ? "0.625rem" : "0.875rem",
              paddingBottom: scrolled ? "0.625rem" : "0.875rem",
            }}
          >
            <div className="flex items-center max-w-7xl mx-auto w-full">
              {/* Logo */}
              <Link to="/" className="relative z-50 flex items-center group shrink-0">
                <Motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                  style={{ background: "transparent", backgroundColor: "transparent" }}
                  animate={{ scale: scrolled ? 0.92 : 1 }}
                >
                  <img
                    src="/assets/images/logo.jpeg"
                    alt="Zoravia Terra Journeys"
                    className={`w-auto object-contain transition-all duration-500 rounded-lg ${
                      scrolled ? "h-8 md:h-10" : "h-9 md:h-12"
                    }`}
                    style={{
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
                      background: "transparent",
                      backgroundColor: "transparent",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                      const parent = e.target.parentElement;
                      const fallback = document.createElement("div");
                      fallback.className = `text-sm md:text-lg font-bold text-[#D4A574] tracking-wider ${
                        scrolled ? "h-8 md:h-10" : "h-9 md:h-12"
                      } flex items-center`;
                      fallback.style.fontFamily = "var(--title-font)";
                      fallback.textContent = "ZORAVIA";
                      parent.appendChild(fallback);
                    }}
                  />
                </Motion.div>
              </Link>

              {/* Desktop Navigation */}
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
                        className={`relative text-[17px] xl:text-[18px] font-medium tracking-wide whitespace-nowrap transition-colors duration-400 ${
                          isActive ? "text-white" : "text-white/70 hover:text-white/95"
                        }`}
                      >
                        {item.label}
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
                            boxShadow:
                              isActive || hoveredItem === item.to
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

      {/* ── Mobile Navigation Sidebar ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <Motion.div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <Motion.div
              className="absolute right-0 top-0 h-full w-[80%] max-w-[300px] flex flex-col"
              style={{
                background: "linear-gradient(160deg, #061220 0%, #020c18 60%, #010a14 100%)",
                borderLeft: "0.5px solid rgba(255,255,255,0.07)",
                boxShadow: "-24px 0 60px rgba(0,0,0,0.6)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-5"
                style={{ borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-3">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <img
                      src="/assets/images/logo.jpeg"
                      alt="Zoravia Terra Journeys"
                      className="h-9 w-auto object-contain rounded-lg"
                    />
                  </Link>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "0.5px solid rgba(255,255,255,0.13)",
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={13} strokeWidth={1.4} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-3.5 pt-3 pb-2 flex flex-col gap-0.5">
                {navItems.slice(0, -1).map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-[13px] rounded-[10px] text-[15px] transition-all duration-200"
                      style={{
                        fontFamily: "Georgia, serif",
                        letterSpacing: "0.02em",
                        color: isActive ? "#D4A574" : "rgba(255,255,255,0.52)",
                        background: isActive ? "rgba(212,165,116,0.09)" : "transparent",
                        border: isActive
                          ? "0.5px solid rgba(212,165,116,0.18)"
                          : "0.5px solid transparent",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#D4A574",
                            display: "inline-block",
                            opacity: 0.9,
                          }}
                        />
                      ) : (
                        <ArrowRight
                          size={13}
                          style={{ opacity: 0.22, color: "rgba(255,255,255,0.8)" }}
                        />
                      )}
                    </Link>
                  );
                })}

                {/* Separator before Contact */}
                <div
                  style={{
                    height: "0.5px",
                    background: "rgba(255,255,255,0.06)",
                    margin: "6px 0",
                  }}
                />

                {/* Contact link */}
                {(() => {
                  const item = navItems[navItems.length - 1];
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-[13px] rounded-[10px] text-[15px] transition-all duration-200"
                      style={{
                        fontFamily: "Georgia, serif",
                        letterSpacing: "0.02em",
                        color: isActive ? "#D4A574" : "rgba(255,255,255,0.52)",
                        background: isActive ? "rgba(212,165,116,0.09)" : "transparent",
                        border: isActive
                          ? "0.5px solid rgba(212,165,116,0.18)"
                          : "0.5px solid transparent",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#D4A574",
                            display: "inline-block",
                            opacity: 0.9,
                          }}
                        />
                      ) : (
                        <ArrowRight
                          size={13}
                          style={{ opacity: 0.22, color: "rgba(255,255,255,0.8)" }}
                        />
                      )}
                    </Link>
                  );
                })()}
              </nav>

              {/* CTA Button */}
              <div
                className="px-3.5 py-4"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 py-[15px] rounded-[11px] transition-opacity duration-200 hover:opacity-88"
                  style={{
                    background: "linear-gradient(135deg, #D4A574 0%, #bf9060 100%)",
                    color: "#010f1c",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <ArrowRight size={13} strokeWidth={2.5} />
                  Book Your Journey
                </Link>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Only on Home Page */}
      {isHomePage && (
        <header className="relative h-[100svh] w-full overflow-hidden">
          <Motion.div
            style={{ y: heroY, height: "120%" }}
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
              onLoadedData={() => {}}
              preload="auto"
            >
              <source src="/assets/videos/hero2.mp4" type="video/mp4" />
            </video>
          </Motion.div>

          <div className="relative z-10 flex min-h-screen items-center justify-center pt-28">
            <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl space-y-8 text-center"
              >
                <div className="space-y-4">
                  <Motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-5xl font-light tracking-tight text-[#FFFFFF] uppercase px-4 leading-tight"
                  >
                    Every Journey Tells a Story
                  </Motion.h1>

                  <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="text-lg md:text-2xl font-light italic text-[#FFFFFF]/80"
                  >
                    Let Us Help You Create Yours
                  </Motion.p>
                </div>
              </Motion.div>
            </div>
          </div>
        </header>
      )}

      {!isHomePage && <div className="pt-20 md:pt-28"></div>}
    </>
  );
};

export default Header;
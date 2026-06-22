import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/travel-with-us", label: "Travel With Us" },
    { to: "/short-escapes", label: "Short Escape Tours" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="hidden md:block w-full px-4 lg:px-16 py-6" style={{ background: "#021732" }}>
      <div
        className="max-w-screen-xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #061220 0%, #020c18 60%, #010a14 100%)",
          border: "0.5px solid rgba(255,255,255,0.07)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top section */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 lg:px-12 py-10"
          style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
        >
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center justify-center lg:justify-start">
            <img
              src="/assets/images/logo.jpeg"
              alt="Zoravia Terra Journeys"
              className="h-14 w-auto object-contain rounded-xl"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3.5 py-[7px] rounded-lg text-[13px] tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "Georgia, serif",
                  color: "rgba(255,255,255,0.48)",
                  border: "0.5px solid transparent",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4A574";
                  e.currentTarget.style.background = "rgba(212,165,116,0.07)";
                  e.currentTarget.style.borderColor = "rgba(212,165,116,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.48)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3 items-center lg:items-end shrink-0">
            <a
              href="mailto:zoraviaterrajourneys@gmail.com"
              className="flex items-center gap-3 group transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              <div
                className="flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(212,165,116,0.1)] group-hover:border-[rgba(212,165,116,0.2)]"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  flexShrink: 0,
                }}
              >
                <Mail size={14} color="#D4A574" />
              </div>
              <span
                className="text-[13px] tracking-wide transition-colors duration-200 group-hover:text-white/80"
                style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}
              >
                zoraviaterrajourneys@gmail.com
              </span>
            </a>

            <a
              href="tel:+250783482368"
              className="flex items-center gap-3 group transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              <div
                className="flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(212,165,116,0.1)] group-hover:border-[rgba(212,165,116,0.2)]"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  flexShrink: 0,
                }}
              >
                <Phone size={14} color="#D4A574" />
              </div>
              <span
                className="text-[13px] tracking-wide transition-colors duration-200 group-hover:text-white/80"
                style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}
              >
                +250 783 482 368
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center px-8 py-5">
          <p
            className="text-center"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            © {currentYear}{" "}
            <Link
              to="/"
              style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              Zoravia Terra Journeys
            </Link>
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                verticalAlign: "middle",
                margin: "0 10px",
              }}
            />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
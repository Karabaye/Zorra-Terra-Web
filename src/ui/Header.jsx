import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const pageMeta = {
    "/": {
      preTitle: "Zoravia Terra Journeys",
      title: "Every Journey Tells a Story",
      subtitle:
        "Inspired by Rwanda’s thousand hills, living wildlife, and vibrant communities, we choreograph journeys that balance nature, culture, and heartfelt discovery.",
      ctaText: "Discover More",
      ctaLink: "/about",
      showVideo: true,
    },
    "/about": {
      preTitle: "About Us",
      title: "Stories Rooted in Rwanda",
      subtitle:
        "We craft intentional trips that honor the land, its wildlife, and the people who welcome you with genuine hospitality.",
      ctaText: "Plan Your Journey",
      ctaLink: "/contact",
      showVideo: false,
    },
    default: {
      preTitle: "Zoravia Terra Journeys",
      title: "Travel with the Spirit of Rwanda",
      subtitle:
        "Every itinerary blends premium service, sustainable practices, and bold experiences, so you can explore Rwanda with confidence.",
      ctaText: "Explore Safaris",
      ctaLink: "/safaris",
      showVideo: false,
    },
  };

  const cleanPath = location.pathname.replace(/\/+$/, "") || "/";
  const meta = pageMeta[cleanPath] ?? pageMeta.default;
  const overlayClass = meta.showVideo ? "bg-slate-900/60" : "bg-emerald-700/30";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen w-full overflow-hidden text-white">
      {meta.showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/logo.png"
        />
      )}
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />

      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-40 w-full px-8 py-6 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F9D58] shadow-[0_20px_30px_rgba(2,6,23,0.8)] backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-12 text-sm">
          <div className="flex items-center gap-12">
            <Link
              to="/about"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              About Us
            </Link>
            <a
              href="/giving-back"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              Giving Back
            </a>
            <a
              href="/safaris"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              Travel With Us
            </a>
          </div>

          <Link to="/" className="relative z-20">
            <img
              src={scrolled ? "/images/logo.jpeg" : "/images/logo.png"}
              alt="Zoravia Terra Journeys logo"
              className="h-20 w-20 object-contain transition-all duration-300"
            />
          </Link>

          <div className="flex items-center gap-12">
            <a
              href="/gallery"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              Gallery
            </a>
            <a
              href="/stories"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              The Blog
            </a>
            <a
              href="/contact"
              className="font-semibold tracking-widest text-white uppercase hover:underline"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-[120px] text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-[#0F9D58]">{meta.preTitle}</p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.2em] text-white drop-shadow-2xl md:text-6xl">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 md:text-lg">{meta.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={meta.ctaLink}
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white hover:bg-white/10"
          >
            {meta.ctaText}
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Rwanda • Culture • Conservation
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

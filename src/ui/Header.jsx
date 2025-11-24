import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header className="relative min-h-screen w-full bg-slate-900">
      <nav
        className={`flex items-center justify-center gap-[200px] px-8 py-[30px] text-sm transition-colors duration-300 ${
          scrolled
            ? "fixed top-0 left-0 z-50 w-full bg-[#386565]"
            : "absolute top-0 left-0 w-full bg-transparent"
        }`}
      >
        {/* Left group - aligned to end so it sits close to center */}
        <div className="flex items-center gap-12">
          <a
            href="/about"
            className="font-semibold tracking-widest text-white uppercase hover:underline"
          >
            About Us
          </a>
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

        {/* Center logo */}
        <Link>
          <img src="images/logo.jpeg" className="h-20 w-20" />
        </Link>

        {/* Right group - aligned to start */}
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
      </nav>
    </header>
  );
};

export default Header;

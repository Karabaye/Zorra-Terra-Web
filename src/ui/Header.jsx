import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gorilla from "../assets/imgs/gorilla.png";
import zebra from "../assets/imgs/zebra.png";
import chimpanzee from "../assets/imgs/chimpanzee.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  const aboutImages = [gorilla, chimpanzee, zebra];

  const pageMeta = {
    "/": {
      title: "Every Journey Tells a Story",
      subtitle:
        "Inspired by Rwanda's thousand hills, living wildlife, and vibrant communities, we choreograph journeys that balance nature, culture, and heartfelt discovery.",
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
    "/gallery": {
      title: "Glimpses of Rwanda",
      subtitle:
        "Explore the breathtaking beauty and vibrant culture of Rwanda through our curated collection of images.",
      ctaText: "View Gallery",
      ctaLink: "#gallery",
      showVideo: false,
    },
    "/stories": {
      title: "Stories from the Land of a Thousand Hills",
      subtitle:
        "Immerse yourself in captivating stories from our journeys, local communities, and conservation efforts.",
      ctaText: "Read Stories",
      ctaLink: "#featured",
      showVideo: false,
    },
    default: {
      preTitle: "Zoravia Terra Journeys",
      title: "Travel with the Spirit of Rwanda",
      subtitle:
        "Every itinerary blends premium service, sustainable practices, and bold experiences, so you can explore Rwanda with confidence.",
      ctaText: "Explore Safaris",
      ctaLink: "/travel-with-us",
      showVideo: false,
    },
  };

  const cleanPath = location.pathname.replace(/\/+$/, "") || "/";
  const meta = pageMeta[cleanPath] ?? pageMeta.default;
  // const overlayClass = meta.showVideo
  //   ? "bg-gradient-to-b from-slate-900/80 to-slate-900/60"
  //   : "bg-gradient-to-b from-emerald-900/80 to-emerald-800/60";
  const overlayClass = "bg-gradient-to-b from-emerald-900/80 to-emerald-800/60";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle image slideshow for about page
  useEffect(() => {
    if (cleanPath !== "/about") return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cleanPath]);

  // Check if current page is the contact page, stories page, or story details page
  const isContactPage = cleanPath === "/contact";
  const isStoriesPage = cleanPath === "/stories";
  const isStoryDetailsPage =
    cleanPath.startsWith("/stories/") && cleanPath !== "/stories";

  return (
    <header
      className={`relative ${isContactPage || isStoriesPage || isStoryDetailsPage ? "h-auto" : "min-h-screen"} w-full overflow-hidden bg-slate-900 text-white`}
    >
      {/* Navigation */}
      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-40 w-full ${scrolled ? "px-4 py-3" : "px-8 py-6"} transition-all duration-300 ${
          scrolled
            ? "bg-emerald-600 shadow backdrop-blur"
            : isContactPage || isStoriesPage || isStoryDetailsPage
              ? "bg-white shadow-md"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-12 text-sm">
          <Link to="/" className="relative z-20">
            <img
              src={scrolled ? "/images/logo.png" : "/images/logo.jpeg"}
              alt="Zoravia Terra Journeys logo"
              className={`${scrolled ? "h-20 w-40" : isContactPage || isStoriesPage || isStoryDetailsPage ? "h-20 w-40" : "h-20 w-20"} object-contain transition-all duration-300`}
            />
          </Link>

          <div className="flex items-center gap-12">
            <Link
              to="/about"
              className={`font-semibold tracking-widest uppercase hover:underline ${
                scrolled || isContactPage || isStoriesPage || isStoryDetailsPage
                  ? "text-emerald-900"
                  : "text-white"
              }`}
            >
              About Us
            </Link>
            <a
              href="/travel-with-us"
              className={`font-semibold tracking-widest uppercase hover:underline ${
                scrolled || isContactPage || isStoriesPage || isStoryDetailsPage
                  ? "text-emerald-900"
                  : "text-white"
              }`}
            >
              Travel With Us
            </a>
            <a
              href="/gallery"
              className={`font-semibold tracking-widest uppercase hover:underline ${
                scrolled || isContactPage || isStoriesPage || isStoryDetailsPage
                  ? "text-emerald-900"
                  : "text-white"
              }`}
            >
              Gallery
            </a>
            <a
              href="/stories"
              className={`font-semibold tracking-widest uppercase hover:underline ${
                scrolled || isContactPage || isStoriesPage || isStoryDetailsPage
                  ? "text-emerald-900"
                  : "text-white"
              }`}
            >
              The Blog
            </a>
            <a
              href="/contact"
              className={`font-semibold tracking-widest uppercase hover:underline ${
                scrolled || isContactPage || isStoriesPage || isStoryDetailsPage
                  ? "text-emerald-900"
                  : "text-white"
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {meta.showVideo ? (
        <>
          <div className="absolute inset-0 bg-slate-900" aria-hidden="true" />
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              videoReady ? "opacity-30" : "opacity-0"
            }`}
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0">
          {aboutImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s ease-in-out",
              }}
              aria-hidden={index !== currentImageIndex}
            />
          ))}
          <div
            className={`absolute inset-0 ${overlayClass}`}
            aria-hidden="true"
          />
        </div>
      )}

      {!isContactPage && !isStoriesPage && !isStoryDetailsPage && (
        <div className="relative z-10 mx-auto mt-20 max-w-4xl px-6 py-24 text-center sm:py-32">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {meta.title}
          </h1>
          {cleanPath !== "/about" && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              {meta.subtitle}
            </p>
          )}
          <div className="mt-8">
            <Link
              to={meta.ctaLink}
              className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-emerald-700"
            >
              {meta.ctaText}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

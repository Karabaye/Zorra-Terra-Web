import React from "react";
import { motion as Motion } from "framer-motion";
import { ImageGallery } from "../components/ui/carousel-circular-image-gallery";

const akageraImages = [
  { title: "Akagera Safari", url: "/assets/Akagera/1.jpg" },
  { title: "Savannah Light", url: "/assets/Akagera/5.jpg" },
  { title: "Safari Trail", url: "/assets/Akagera/10.jpg" },
  { title: "Wild Rwanda", url: "/assets/Akagera/13.jpg" },
  { title: "Golden Drive", url: "/assets/Akagera/17.jpg" },
  { title: "Akagera Moment", url: "/assets/Akagera/24.jpg" },
  { title: "Park Landscape", url: "/assets/Akagera/31.jpg" },
  { title: "Safari Light", url: "/assets/Akagera/38.jpg" },
  { title: "Rwanda Journey", url: "/assets/Akagera/DSC09269.jpg" },
  { title: "Nature Closeup", url: "/assets/Akagera/DSC09356.jpg" },
  { title: "Safari Memory", url: "/assets/Akagera/DSC09413.jpg" },
  { title: "Akagera Wonder", url: "/assets/Akagera/DSC09457.jpg" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#021732] text-white selection:bg-[#D4A574]/30">
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(212,165,116,0.18),transparent_62%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-10 md:pt-14">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="border-l-2 border-[#D4A574]/65 pl-4 sm:pl-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#D4A574]">
              Gallery
            </p>
            <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-light leading-tight">
              Akagera Safari Gallery
            </h1>
            <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base font-light leading-relaxed sm:leading-7 text-white/58">
              Moments from Akagera, arranged for a smoother and faster visit.
            </p>
          </Motion.div>
        </div>

        <ImageGallery images={akageraImages} />
      </section>
    </div>
  );
}

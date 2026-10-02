import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultImages = [
  { title: "Akagera Safari", url: "/assets/Akagera/1.jpg" },
  { title: "Akagera Plains", url: "/assets/Akagera/5.jpg" },
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

export function ImageGallery({ images = defaultImages }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = images.length;
  const activeImage = images[activeIndex] ?? images[0];

  const clampIndex = useCallback(
    (index) => {
      if (!imageCount) return 0;
      return (index + imageCount) % imageCount;
    },
    [imageCount],
  );

  const goTo = useCallback(
    (index) => {
      setActiveIndex(clampIndex(index));
    },
    [clampIndex],
  );

  const next = useCallback(() => {
    setActiveIndex((currentIndex) => clampIndex(currentIndex + 1));
  }, [clampIndex]);

  const prev = useCallback(() => {
    setActiveIndex((currentIndex) => clampIndex(currentIndex - 1));
  }, [clampIndex]);

  const preloadImages = useMemo(() => {
    if (!imageCount) return [];
    return [
      images[clampIndex(activeIndex - 1)]?.url,
      images[clampIndex(activeIndex + 1)]?.url,
    ].filter(Boolean);
  }, [activeIndex, clampIndex, imageCount, images]);

  useEffect(() => {
    preloadImages.forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });
  }, [preloadImages]);

  if (!activeImage) {
    return null;
  }

  return (
    <div className="relative overflow-hidden bg-[#021732] px-4 pb-14 pt-4 text-white sm:px-6 md:pb-20 md:pt-8">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_50%_0%,rgba(212,165,116,0.14),transparent_68%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#031d3d] shadow-[0_20px_54px_rgba(0,0,0,0.36)]">
          <img
            key={activeImage.url}
            src={activeImage.url}
            alt={activeImage.title}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-5 pt-14 sm:px-8 sm:pb-8">
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A574]">
              Akagera National Park
            </p>
            <h2 className="mt-1.5 text-lg sm:text-2xl md:text-4xl font-light leading-tight">
              {activeImage.title}
            </h2>
          </div>

          <button
            className="absolute left-2 sm:left-4 top-1/2 z-10 flex h-9 w-9 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A574]/40 bg-[#031d3d]/80 text-[#D4A574] shadow-[0_10px_26px_rgba(0,0,0,0.26)] outline-none backdrop-blur-md transition duration-200 hover:border-[#D4A574]/75 hover:bg-[#D4A574] hover:text-[#021732] active:scale-95 focus-visible:ring-4 focus-visible:ring-[#D4A574]/35"
            onClick={prev}
            type="button"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" strokeWidth={2} />
          </button>

          <button
            className="absolute right-2 sm:right-4 top-1/2 z-10 flex h-9 w-9 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A574]/40 bg-[#031d3d]/80 text-[#D4A574] shadow-[0_10px_26px_rgba(0,0,0,0.26)] outline-none backdrop-blur-md transition duration-200 hover:border-[#D4A574]/75 hover:bg-[#D4A574] hover:text-[#021732] active:scale-95 focus-visible:ring-4 focus-visible:ring-[#D4A574]/35"
            onClick={next}
            type="button"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" strokeWidth={2} />
          </button>
        </div>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-2 px-2">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={image.url}
                className={`h-3 rounded-full border transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4A574]/30 ${
                  isActive
                    ? "w-8 border-[#D4A574] bg-[#D4A574]"
                    : "w-3 border-white/35 bg-white/12 hover:border-[#D4A574]/70 hover:bg-[#D4A574]/55"
                }`}
                onClick={() => goTo(index)}
                type="button"
                aria-label={`Show ${image.title}`}
                aria-current={isActive ? "true" : undefined}
                title={image.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

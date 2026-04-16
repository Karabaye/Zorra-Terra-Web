
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, MapPin, Camera, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import assetMap from "../utilities/assetMap";
import videoMap from "../utilities/videoMap";


const findAsset = (filename) => {
  if (!filename) return '';
  
  // Handle Akagera folder paths directly - ensure proper extension
  if (filename.toString().includes('Akagera/')) {
    // If already has extension, use as-is
    if (filename.toString().includes('.jpg') || filename.toString().includes('.JPG')) {
      return `/assets/${filename}`;
    }
    return `/assets/${filename}.jpg`;
  }
  
  // Handle Coco folder paths directly - ensure proper extension
  if (filename.toString().includes('Coco/')) {
    // If already has extension, use as-is
    if (filename.toString().includes('.jpg') || filename.toString().includes('.JPG')) {
      return `/assets/${filename}`;
    }
    return `/assets/${filename}.jpg`;
  }
  
  const cleanKey = filename.toString().toLowerCase().replace(/\s/g, '').replace(/_/g, '').replace(/\.[^/.]+$/, '');
  if (assetMap[cleanKey]) return assetMap[cleanKey];
  if (videoMap[cleanKey]) return videoMap[cleanKey];
  const keys = Object.keys(assetMap);
  const found = keys.find(k => k === cleanKey);
  if (found) return assetMap[found];
  return `/assets/images/${filename}.jpg`;
};


const chapters = [
  {
    id: "chapter-1",
    title: "Akagera Safari Experience",
    items: [
      { id: 1, image: 'Akagera/1.jpg', location: "Akagera NP" },
      { id: 2, image: 'Akagera/2.jpg', location: "Akagera NP" },
      { id: 3, image: 'Akagera/3.jpg', location: "Akagera NP" },
      { id: 4, image: 'Akagera/4.jpg', location: "Akagera NP" },
      { id: 5, image: 'Akagera/5.jpg', location: "Akagera NP" },
      { id: 6, image: 'Akagera/6.jpg', location: "Akagera NP" },
      { id: 7, image: 'Akagera/7.jpg', location: "Akagera NP" },
      { id: 8, image: 'Akagera/8.jpg', location: "Akagera NP" },
      { id: 9, image: 'Akagera/9.jpg', location: "Akagera NP" },
      { id: 10, image: 'Akagera/10.jpg', location: "Akagera NP" },
      { id: 11, image: 'Akagera/11.jpg', location: "Akagera NP" },
      { id: 12, image: 'Akagera/12.jpg', location: "Akagera NP" },
      { id: 13, image: 'Akagera/13.jpg', location: "Akagera NP" },
      { id: 14, image: 'Akagera/14.jpg', location: "Akagera NP" },
      { id: 15, image: 'Akagera/15.jpg', location: "Akagera NP" },
      { id: 16, image: 'Akagera/16.jpg', location: "Akagera NP" },
      { id: 17, image: 'Akagera/17.jpg', location: "Akagera NP" },
      { id: 18, image: 'Akagera/18.jpg', location: "Akagera NP" },
      { id: 19, image: 'Akagera/19.jpg', location: "Akagera NP" },
      { id: 20, image: 'Akagera/20.jpg', location: "Akagera NP" },
      { id: 21, image: 'Akagera/21.jpg', location: "Akagera NP" },
      { id: 22, image: 'Akagera/22.jpg', location: "Akagera NP" },
      { id: 23, image: 'Akagera/23.jpg', location: "Akagera NP" },
      { id: 24, image: 'Akagera/24.jpg', location: "Akagera NP" },
      { id: 25, image: 'Akagera/25.jpg', location: "Akagera NP" },
      { id: 26, image: 'Akagera/26.jpg', location: "Akagera NP" },
      { id: 27, image: 'Akagera/27.jpg', location: "Akagera NP" },
      { id: 28, image: 'Akagera/28.jpg', location: "Akagera NP" },
      { id: 29, image: 'Akagera/29.jpg', location: "Akagera NP" },
      { id: 30, image: 'Akagera/30.jpg', location: "Akagera NP" },
      { id: 31, image: 'Akagera/31.jpg', location: "Akagera NP" },
      { id: 32, image: 'Akagera/32.jpg', location: "Akagera NP" },
      { id: 33, image: 'Akagera/33.jpg', location: "Akagera NP" },
      { id: 34, image: 'Akagera/34.jpg', location: "Akagera NP" },
      { id: 35, image: 'Akagera/35.jpg', location: "Akagera NP" },
      { id: 36, image: 'Akagera/36.jpg', location: "Akagera NP" },
      { id: 37, image: 'Akagera/37.jpg', location: "Akagera NP" },
      { id: 38, image: 'Akagera/38.jpg', location: "Akagera NP" },
      { id: 39, image: 'Akagera/39.jpg', location: "Akagera NP" },
      { id: 40, image: 'Akagera/40.jpg', location: "Akagera NP" },
      { id: 41, image: 'Akagera/DSC09186_1.jpg', location: "Akagera NP" },
      { id: 42, image: 'Akagera/DSC09194.jpg', location: "Akagera NP" },
      { id: 43, image: 'Akagera/DSC09269.jpg', location: "Akagera NP" },
      { id: 44, image: 'Akagera/DSC09285.jpg', location: "Akagera NP" },
      { id: 45, image: 'Akagera/DSC09288.jpg', location: "Akagera NP" },
      { id: 46, image: 'Akagera/DSC09350.jpg', location: "Akagera NP" },
      { id: 47, image: 'Akagera/DSC09356.jpg', location: "Akagera NP" },
      { id: 48, image: 'Akagera/DSC09359.jpg', location: "Akagera NP" },
      { id: 49, image: 'Akagera/DSC09360.jpg', location: "Akagera NP" },
      { id: 50, image: 'Akagera/DSC09364.jpg', location: "Akagera NP" },
      { id: 51, image: 'Akagera/DSC09405.jpg', location: "Akagera NP" },
      { id: 52, image: 'Akagera/DSC09413.jpg', location: "Akagera NP" },
      { id: 53, image: 'Akagera/DSC09429.jpg', location: "Akagera NP" },
      { id: 54, image: 'Akagera/DSC09441.jpg', location: "Akagera NP" },
      { id: 55, image: 'Akagera/DSC09443.jpg', location: "Akagera NP" },
      { id: 56, image: 'Akagera/DSC09456.jpg', location: "Akagera NP" },
      { id: 57, image: 'Akagera/DSC09457.jpg', location: "Akagera NP" }
    ]
  }
];

const CinematicTheater = ({ chapter }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = chapter.items && chapter.items[activeIndex];

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (!chapter.items || !chapter.items.length) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % chapter.items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [chapter.items?.length]);

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Main Image Display */}
      <div className="w-full max-w-6xl relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl bg-[#031d3d]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem?.id || 0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full aspect-video md:h-[500px]"
          >
            {activeItem?.type === 'video' ? (
              <video
                src={findAsset(activeItem?.video)}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={activeItem?.image?.includes('Akagera/') || activeItem?.image?.includes('Coco/') ? `/assets/${activeItem?.image}` : findAsset(activeItem?.image)}
                alt={activeItem?.title || 'Gallery image'}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-8 pt-4">
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev - 1 + chapter.items.length) % chapter.items.length)}
          className="flex items-center justify-center cursor-pointer group focus:outline-none text-white/60 hover:text-[#D4A574] transition-colors"
        >
          <ChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev + 1) % chapter.items.length)}
          className="flex items-center justify-center cursor-pointer group focus:outline-none text-white/60 hover:text-[#D4A574] transition-colors"
        >
          <ChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

import PageHero from "../components/PageHero";

export default function Gallery() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 overflow-x-hidden">
      

      <div className="max-w-5xl mx-auto px-6 pt-16">

        {/* Chapters */}
        <div className="space-y-32 md:space-y-48">
          {chapters.map((chapter) => (
            <motion.section
              key={chapter.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 md:space-y-12"
            >
              <div className="flex flex-col items-start gap-3 md:gap-4 border-l-2 border-[#D4A574]/50 pl-4 md:pl-6">
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{chapter.title}</h2>
                <p className="text-white/40 font-light text-xs md:text-sm max-w-md">{chapter.description}</p>
              </div>

              <CinematicTheater chapter={chapter} />
            </motion.section>
          ))}
        </div>  
        <br />
      </div>
    </div>
  );
}

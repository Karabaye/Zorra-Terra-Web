
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, MapPin, Camera, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import assetMap from "../util/assetMap";
import videoMap from "../util/videoMap";


const findAsset = (filename) => {
  if (!filename) return '';
  const cleanKey = filename.toString().toLowerCase().replace(/\s/g, '').replace(/_/g, '').replace(/\.[^/.]+$/, '');
  if (assetMap[cleanKey]) return assetMap[cleanKey];
  if (videoMap[cleanKey]) return videoMap[cleanKey];
  const keys = Object.keys(assetMap);
  const found = keys.find(k => k === cleanKey);
  if (found) return assetMap[found];
  return `/assets/imgs/${filename}.jpg`;
};


const chapters = [
  {
    id: "chapter-1",
    title: "Master of the Savanna",
    description: "The Big Five of Akagera. Encounters with the legendary residents of our plains.",
    items: [
      { id: 1, title: "The King", image: 'lion', location: "Akagera NP" },
      { id: 2, title: "Shadow Watch", image: 'leopard', location: "Akagera NP" },
      { id: 3, title: "Giant Path", image: 'elephants', location: "Akagera NP" },
      { id: 4, title: "Stoic Buffalo", image: 'buffalo', location: "Akagera NP" },
      { id: 5, title: "Swift Predator", image: 'cheetah', location: "Akagera NP" }
    ]
  },
  {
    id: "chapter-2",
    title: "Highland Spirits",
    description: "The emerald depths of the Virungas and Nyungwe, where ancient spirits watch.",
    items: [
      { id: 6, title: "Mountain Giant", image: 'gorilla', location: "Volcanoes NP" },
      { id: 7, title: "Old Wisdom", image: 'chimpanzee', location: "Nyungwe Forest" },
      { id: 8, title: "Canopy Dweller", image: 'monkey', location: "Nyungwe Forest" },
      { id: 9, title: "Aerial Nyungwe", video: 'nyungwevideoforexchangedisplayonhomepage', thumbnail: 'nyungwe0001', type: 'video' },
      { id: 10, title: "Bisoke Ascent", video: 'videobisoke', thumbnail: 'hikinggallery', type: 'video' }
    ]
  },
  {
    id: "chapter-3",
    title: "The Wild Pulse",
    description: "Capturing the striking patterns and golden hour reflections of our unique landscape.",
    items: [
      { id: 11, title: "Savanna Rhythm", image: 'zebra', location: "Akagera NP" },
      { id: 12, title: "Giraffe Horizon", image: 'giraffe', location: "Akagera NP" },
      { id: 13, title: "Lake Kivu Gold", video: 'lake_kivu', thumbnail: 'hmpagemaybe', type: 'video' },
      { id: 14, title: "Guardian Meerkat", image: 'meerkat', location: "Savanna" },
      { id: 15, title: "River Dweller", image: 'hippopotamus', location: "Akagera River" }
    ]
  }
];

const CinematicTheater = ({ chapter }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = chapter.items[activeIndex];

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Main Stage */}
      <div className="w-full max-w-4xl relative group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full aspect-video md:h-[450px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#031d3d]"
          >
            {activeItem.type === 'video' ? (
              <video
                src={findAsset(activeItem.video)}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={findAsset(activeItem.image)}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Stage Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/80 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-8 text-left">
              <div className="flex items-center gap-2 text-[#D4A574] mb-2">
                <MapPin size={12} />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">{activeItem.location || 'Rwanda'}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-script text-white">{activeItem.title}</h3>
            </div>

            {/* Nav Arrows */}
            <div className="absolute inset-y-0 left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + chapter.items.length) % chapter.items.length)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#D4A574] hover:text-[#021732] transition-all"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % chapter.items.length)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#D4A574] hover:text-[#021732] transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Navigation Rack */}
      <div className="grid grid-cols-5 gap-3 max-w-lg w-full">
        {chapter.items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative rounded-xl overflow-hidden h-14 md:h-16 transition-all duration-300 border-2 
              ${activeIndex === idx ? 'border-[#D4A574] scale-105' : 'border-transparent opacity-40 hover:opacity-100'}`}
          >
            <img
              src={findAsset(item.thumbnail || item.image)}
              className="w-full h-full object-cover"
              alt={`Thumb ${idx + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Gallery() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#021732] text-white pt-24 pb-32 font-['Poppins'] selection:bg-[#D4A574]/30 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl tracking-tighter mb-6">
            <span className="font-semibold inline-block mr-4">Moments</span>
            <span className="text-[#D4A574] font-script italic"> & Experience</span>
          </h1>
        </motion.header>

        {/* Chapters */}
        <div className="space-y-48">
          {chapters.map((chapter) => (
            <motion.section
              key={chapter.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex flex-col items-start gap-4 border-l-2 border-[#D4A574]/50 pl-6">
                <h2 className="text-4xl md:text-5xl font-script text-white">{chapter.title}</h2>
              </div>

              <CinematicTheater chapter={chapter} />
            </motion.section>
          ))}
        </div>

        {/* Project Footer */}
        <footer className="mt-48 text-center pt-24 border-t border-white/5">
          <h3 className="text-3xl font-script text-white/10 mb-8">End of Collection</h3>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4A574] text-[#021732] rounded-full font-bold text-[9px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Experience the Wild <ArrowRight size={14} />
          </Link>
        </footer>
      </div>
    </div>
  );
}

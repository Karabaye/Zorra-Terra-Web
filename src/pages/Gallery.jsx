
import React, { useState, useEffect, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, List, Search, Filter, Camera } from 'lucide-react';

const categoryColors = {
  'Big Cats': 'from-amber-500 via-orange-600 to-red-600',
  'Large Mammals': 'from-slate-600 via-gray-700 to-zinc-800',
  'Primates': 'from-emerald-500 via-teal-600 to-cyan-700',
  'Herbivores': 'from-lime-500 via-green-600 to-emerald-700',
  'Carnivores': 'from-rose-500 via-red-600 to-pink-700',
  'Big Five': 'from-yellow-500 via-amber-600 to-orange-700',
  'Small Mammals': 'from-amber-600 via-yellow-600 to-orange-500',
  'Special Sightings': 'from-purple-500 via-indigo-600 to-violet-700'
};

// Global asset storage
let images = {};
let videos = {};

// Helper function to find asset by filename
const findAsset = (assets, filename) => {
  if (!assets) return '';

  if (!filename) {
    console.warn('No filename provided to findAsset');
    return '';
  }
  
  // Normalize by removing extension, lowercasing, and removing spaces/underscores
  const normalize = (name) =>
    name.replace(/\.[^/.]+$/, '').toLowerCase().replace(/[\s_]+/g, '');

  const cleanName = normalize(filename);

  const assetKey = Object.keys(assets).find((key) => {
    const normalizedKey = normalize(key);
    return normalizedKey === cleanName || normalizedKey.includes(cleanName);
  });
  
  if (!assetKey) {
    console.warn(`Asset not found: ${filename}. Available assets:`, Object.keys(assets));
    // Fallback to first available asset if present to avoid broken external URLs
    const firstKey = Object.keys(assets)[0];
    return firstKey ? assets[firstKey] : '';
  }
  
  return assets[assetKey];
};

// Load assets when component mounts
const loadAssets = async () => {
  try {
    // Import all images using Vite's import.meta.glob
    const imageFiles = import.meta.glob('/src/assets/imgs/*.{png,jpg,jpeg}', { eager: true });
    const videoFiles = import.meta.glob('/src/assets/video/*.{mp4,mov,avi}', { eager: true });

    // Create a mapping of filenames to their imported paths
    images = Object.entries(imageFiles).reduce((acc, [path, module]) => {
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      return { ...acc, [filename]: module.default };
    }, {});

    videos = Object.entries(videoFiles).reduce((acc, [path, module]) => {
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      return { ...acc, [filename]: module.default };
    }, {});

    console.log('Loaded images:', Object.keys(images));
    console.log('Loaded videos:', Object.keys(videos));
    
    return { images, videos };
  } catch (error) {
    console.error('Error loading assets:', error);
    return { images: {}, videos: {} };
  }
};

const galleryItems = [
  // Big Cats
  {
    id: 1,
    title: "Lion",
    description: "Majestic lion in its natural habitat",
    image: 'lion',
    category: "Big Cats",
    location: "Akagera National Park, Rwanda",
    date: "2024-11-15",
    likes: 342,
    featured: true,
    type: "image"
  },
  {
    id: 2,
    title: "Leopard",
    description: "Elusive leopard resting on a tree branch",
    image: 'leopard',
    category: "Big Cats",
    location: "Akagera National Park, Rwanda",
    date: "2024-11-14",
    likes: 298,
    featured: true,
    type: "image"
  },
  {
    id: 3,
    title: "Cheetah",
    description: "The fastest land animal in the savanna",
    image: 'cheetah',
    category: "Big Cats",
    location: "Akagera National Park, Rwanda",
    date: "2024-11-12",
    likes: 276,
    featured: true,
    type: "image"
  },
  {
    id: 4,
    title: "Gorilla",
    description: "Mountain gorilla in Volcanoes National Park",
    image: 'gorilla',
    category: "Primates",
    location: "Volcanoes National Park, Rwanda",
    date: "2024-10-28",
    likes: 512,
    featured: true,
    type: "image"
  },
  {
    id: 17,
    title: "Chimpanzee",
    description: "Chimpanzee in Nyungwe Forest",
    image: 'chimpanzee',
    category: "Primates",
    location: "Nyungwe Forest, Rwanda",
    date: "2024-10-25",
    likes: 423,
    featured: true,
    type: "image"
  },
  // Large Mammals
  {
    id: 18,
    title: "African Elephant",
    description: "Elephant family in Akagera",
    image: 'elephants',
    category: "Large Mammals",
    location: "Akagera National Park, Rwanda",
    date: "2024-11-10",
    likes: 498,
    featured: true,
    type: "image"
  },
  {
    id: 19,
    title: "Buffalo",
    description: "African buffalo in the wild",
    image: 'buffalo',
    category: "Big Five",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-20",
    likes: 356,
    featured: true,
    type: "image"
  },
  // Herbivores
  {
    id: 20,
    title: "Giraffe",
    description: "Giraffe in Akagera National Park",
    image: 'giraffe',
    category: "Herbivores",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-15",
    likes: 412,
    featured: true,
    type: "image"
  },
  {
    id: 21,
    title: "Zebra",
    description: "Zebra in the savanna",
    image: 'zebra',
    category: "Herbivores",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-10",
    likes: 389,
    featured: false,
    type: "image"
  },
  // Carnivores
  {
    id: 22,
    title: "Hyena",
    description: "Spotted hyena on the hunt",
    image: 'hyena',
    category: "Carnivores",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-05",
    likes: 298,
    featured: false,
    type: "image"
  },
  // Small Mammals
  {
    id: 23,
    title: "Warthog",
    description: "Warthog family in the wild",
    image: 'warthog',
    category: "Small Mammals",
    location: "Akagera National Park, Rwanda",
    date: "2024-09-30",
    likes: 245,
    featured: false,
    type: "image"
  },
  {
    id: 24,
    title: "Meerkat",
    description: "Meerkat on the lookout",
    image: 'meerkat',
    category: "Small Mammals",
    location: "Akagera National Park, Rwanda",
    date: "2024-09-25",
    likes: 312,
    featured: false,
    type: "image"
  },
  // Special Sightings
  {
    id: 25,
    title: "African Wild Dog",
    description: "Rare sighting of African wild dogs",
    image: 'African Wild Dog',
    category: "Special Sightings",
    location: "Akagera National Park, Rwanda",
    date: "2024-09-20",
    likes: 587,
    featured: true,
    type: "image"
  },
  // Videos
  {
    id: 26,
    title: "Nyungwe Forest",
    description: "Breathtaking views of Nyungwe Forest",
    video: 'Nyungwe Video for exchange display on home page',
    thumbnail: 'Nyungwe 0001',
    category: "Special Sightings",
    location: "Nyungwe Forest, Rwanda",
    date: "2024-11-01",
    likes: 423,
    featured: true,
    type: "video"
  },
  {
    id: 27,
    title: "Lake Kivu",
    description: "Beautiful Lake Kivu at sunset",
    video: 'lake_kivu',
    thumbnail: 'Hm page may be',
    category: "Special Sightings",
    location: "Lake Kivu, Rwanda",
    date: "2024-10-28",
    likes: 512,
    featured: true,
    type: "video"
  },
  {
    id: 28,
    title: "Safari Zebra",
    description: "Zebras in their natural habitat",
    video: 'safari zebra',
    thumbnail: 'Zebra',
    category: "Herbivores",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-22",
    likes: 389,
    featured: false,
    type: "video"
  },
  {
    id: 29,
    title: "Bisoke Volcano",
    description: "Hiking Mount Bisoke",
    video: 'video bisoke',
    thumbnail: 'Hiking gallery',
    category: "Special Sightings",
    location: "Volcanoes National Park, Rwanda",
    date: "2024-10-18",
    likes: 467,
    featured: true,
    type: "video"
  },
  {
    id: 30,
    title: "Lake on Karisimbi",
    description: "Beautiful lake on Mount Karisimbi",
    video: 'lake on karisimbi',
    thumbnail: 'Nature',
    category: "Special Sightings",
    location: "Volcanoes National Park, Rwanda",
    date: "2024-10-12",
    likes: 398,
    featured: false,
    type: "video"
  },
  {
    id: 31,
    title: "Safari Experience",
    description: "Amazing safari moments in Akagera",
    video: 'Excahnge on homepage',
    thumbnail: 'Safari Gir',
    category: "Special Sightings",
    location: "Akagera National Park, Rwanda",
    date: "2024-10-08",
    likes: 542,
    featured: true,
    type: "video"
  }
];

export default function WildlifeGallery() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const loadAllAssets = async () => {
      await loadAssets();
      setAssetsLoaded(true);
    };
    
    loadAllAssets();
  }, []);

  const filteredItems = useMemo(() => {
    return galleryItems
      .filter(item => {
        const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
        const matchesSearch = !searchQuery || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeFilter, searchQuery]);

  const featuredItems = galleryItems.filter(i => i.featured);

  // Auto-rotate hero only when the current slide is an image,
  // so videos can play without being interrupted.
  useEffect(() => {
    const current = featuredItems[heroIndex];
    if (!current || current.type === 'video') {
      return;
    }

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % featuredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroIndex, featuredItems.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedItem, currentIndex]);

  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigate = (direction) => {
    const newIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const categories = ['all', ...new Set(galleryItems.map(i => i.category))];

  if (!assetsLoaded) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      {activeFilter === 'all' && !searchQuery && (
        <div className="relative h-screen overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {featuredItems.map((item, i) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                {item.type === 'video' ? (
                  <video 
                    src={findAsset(videos, item.video)} 
                    className="w-full h-full object-cover scale-105"
                    controls
                    poster={findAsset(images, item.thumbnail)}
                  />
                ) : (
                  <img 
                    src={findAsset(images, item.image)} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-12 max-w-7xl mx-auto">
            <div className="mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">Wildlife Photography</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                Rwanda's Wild
                <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Wonders
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
                Discover the extraordinary wildlife of Akagera, Volcanoes, and Nyungwe through stunning photography and unforgettable encounters.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Gallery
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Featured
                </button>
              </div>
            </div>

            {/* Hero Navigation Dots */}
            <div className="flex gap-2 mb-8">
              {featuredItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === heroIndex ? 'w-12 bg-white' : 'w-8 bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search & Filter Bar - under hero, not glued to main navbar */}
      <div className="z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wildlife, locations, or categories..."
                className="w-full pl-14 pr-14 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 bg-white border-2 border-gray-300 focus:border-orange-500 outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl font-medium transition-all duration-300 bg-white hover:bg-gray-50 border border-gray-300"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {activeFilter !== 'all' && (
                  <span className="px-2 py-1 rounded-full bg-orange-500 text-white text-xs">1</span>
                )}
              </button>

              <div className="flex gap-1 p-1 rounded-2xl bg-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'grid' ? 'bg-white shadow-md' : ''}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'list' ? 'bg-white shadow-md' : ''}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="flex flex-wrap gap-3 mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeFilter === cat
                      ? `bg-gradient-to-r ${cat === 'all' ? 'from-amber-500 to-orange-600' : categoryColors[cat]} text-white shadow-lg scale-105`
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {cat === 'all' ? '🌍 All Wildlife' : cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {activeFilter === 'all' ? 'All Wildlife' : activeFilter}
            </h2>
            <p className="text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'} found
            </p>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold mb-4">No wildlife found</h3>
            <p className="text-xl mb-8 text-gray-600">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item, idx)}
                className="w-full aspect-[498/373] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              >
                {item.type === 'video' ? (
                  <video
                    src={findAsset(videos, item.video)}
                    poster={findAsset(images, item.thumbnail)}
                    className="h-full w-full object-cover object-top"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={findAsset(images, item.image)} 
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm shadow-2xl"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          {filteredItems.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          {/* Content */}
          <div 
            className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Media */}
            <div className="flex-1 w-full">
              {selectedItem.type === 'video' ? (
                <video
                  src={findAsset(videos, selectedItem.video)}
                  poster={findAsset(images, selectedItem.thumbnail)}
                  className="w-full rounded-3xl shadow-2xl"
                  controls
                  autoPlay
                />
              ) : (
                <img 
                  src={findAsset(images, selectedItem.image)} 
                  alt={selectedItem.title}
                  className="w-full rounded-3xl shadow-2xl"
                />
              )}
            </div>

            {/* Details */}
            <div className="text-white max-w-md w-full space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-lg text-white/80">{selectedItem.location}</p>
              </div>

              <p className="text-xl leading-relaxed text-white/90">{selectedItem.description}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
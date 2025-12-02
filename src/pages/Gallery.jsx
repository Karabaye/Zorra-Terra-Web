import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronDown,
  FiPlay,
  FiHeart, 
  FiShare2, 
  FiDownload, 
  FiFilter, 
  FiArrowUp, 
  FiArrowDown,
  FiMapPin,
  FiCalendar,
  FiEye,
  FiStar
} from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import debounce from 'lodash/debounce';

// Nyungwe-inspired color themes based on your second image
const categoryThemes = {
  'Big Cats': {
    accent: 'bg-gradient-to-r from-emerald-600 to-teal-500',
    light: 'bg-emerald-50',
    text: 'text-emerald-900',
    border: 'border-emerald-200'
  },
  'Large Mammals': {
    accent: 'bg-gradient-to-r from-amber-600 to-orange-500',
    light: 'bg-amber-50',
    text: 'text-amber-900',
    border: 'border-amber-200'
  },
  'Primates': {
    accent: 'bg-gradient-to-r from-lime-600 to-green-500',
    light: 'bg-lime-50',
    text: 'text-lime-900',
    border: 'border-lime-200'
  },
  'Herbivores': {
    accent: 'bg-gradient-to-r from-teal-600 to-cyan-500',
    light: 'bg-teal-50',
    text: 'text-teal-900',
    border: 'border-teal-200'
  },
  'Carnivores': {
    accent: 'bg-gradient-to-r from-rose-600 to-pink-500',
    light: 'bg-rose-50',
    text: 'text-rose-900',
    border: 'border-rose-200'
  },
  'Big Five': {
    accent: 'bg-gradient-to-r from-slate-700 to-slate-600',
    light: 'bg-slate-100',
    text: 'text-slate-900',
    border: 'border-slate-300'
  },
  'Small Mammals': {
    accent: 'bg-gradient-to-r from-yellow-600 to-amber-500',
    light: 'bg-yellow-50',
    text: 'text-yellow-900',
    border: 'border-yellow-200'
  },
  'Special Sightings': {
    accent: 'bg-gradient-to-r from-purple-600 to-fuchsia-500',
    light: 'bg-purple-50',
    text: 'text-purple-900',
    border: 'border-purple-200'
  },
  'default': {
    accent: 'bg-gradient-to-r from-emerald-600 to-teal-500',
    light: 'bg-slate-100',
    text: 'text-slate-900',
    border: 'border-slate-300'
  },
};

// Gallery Items Data
const galleryItems = [
  {
    id: 1,
    title: 'The Majestic Lion',
    category: 'Big Cats',
    location: 'Akagera National Park, Rwanda',
    date: 'October 2023',
    image: '/src/assets/imgs/lion.png',
    description: 'The king of the jungle in its natural habitat, captured during golden hour in Akagera National Park.',
    likes: 128,
    isLiked: false,
    featured: true
  },
  {
    id: 2,
    title: 'Elephant Family',
    category: 'Large Mammals',
    location: 'Akagera National Park, Rwanda',
    date: 'September 2023',
    image: '/src/assets/imgs/elephants.png',
    description: 'A heartwarming moment of an elephant family crossing the savanna at sunset in Akagera.',
    likes: 245,
    isLiked: true,
    featured: true
  },
  {
    id: 3,
    title: 'Leopard in the Wild',
    category: 'Big Cats',
    location: 'Akagera National Park, Rwanda',
    date: 'August 2023',
    image: '/src/assets/imgs/leopard.png',
    description: 'Rare sighting of a leopard resting on an acacia tree branch in Akagera National Park.',
    likes: 189,
    isLiked: false,
    featured: false
  },
  {
    id: 4,
    title: 'Mountain Gorilla',
    category: 'Primates',
    location: 'Volcanoes National Park, Rwanda',
    date: 'July 2023',
    image: '/src/assets/imgs/gorilla.png',
    description: 'Gentle giant in the misty mountains of Volcanoes National Park.',
    likes: 312,
    isLiked: true,
    featured: true
  },
  {
    id: 5,
    title: 'Cheetah on the Hunt',
    category: 'Big Cats',
    location: 'Akagera National Park, Rwanda',
    date: 'June 2023',
    image: '/src/assets/imgs/cheetah.png',
    description: 'The fastest land animal scanning the Akagera savanna for its next meal.',
    likes: 201,
    isLiked: false,
    featured: false
  },
  {
    id: 6,
    title: 'Chimpanzee in Canopy',
    category: 'Primates',
    location: 'Nyungwe Forest, Rwanda',
    date: 'May 2023',
    image: '/src/assets/imgs/chimpanzee.png',
    description: 'Playful chimpanzee swinging through the lush canopy of Nyungwe Forest.',
    likes: 178,
    isLiked: false,
    featured: false
  },
  {
    id: 7,
    title: 'Wildebeest Migration',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'April 2023',
    image: '/src/assets/imgs/wildebeest.png',
    description: 'The great wildebeest migration across the Akagera plains, a spectacular natural event.',
    likes: 225,
    isLiked: true,
    featured: true
  },
  {
    id: 8,
    title: 'Pangolin Sighting',
    category: 'Special Sightings',
    location: 'Akagera National Park, Rwanda',
    date: 'March 2023',
    image: '/src/assets/imgs/pangolin.png',
    description: 'Rare and endangered pangolin spotted during a night safari in Akagera.',
    likes: 342,
    isLiked: false,
    featured: true
  },
  {
    id: 9,
    title: 'Zebra Crossing',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'February 2023',
    image: '/src/assets/imgs/Zebra.png',
    description: 'A dazzle of zebras crossing the savanna in perfect harmony.',
    likes: 198,
    isLiked: false,
    featured: false
  },
  {
    id: 10,
    title: 'Warthog Family',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'January 2023',
    image: '/src/assets/imgs/Warthog.png',
    description: 'A family of warthogs foraging in the golden grass of Akagera.',
    likes: 156,
    isLiked: false,
    featured: false
  },
  {
    id: 11,
    title: 'Vervet Monkey',
    category: 'Primates',
    location: 'Nyungwe Forest, Rwanda',
    date: 'December 2022',
    image: '/src/assets/imgs/Monkey.png',
    description: 'Curious vervet monkey peering through the forest foliage.',
    likes: 132,
    isLiked: false,
    featured: false
  },
  {
    id: 12,
    title: 'Meerkat Watch',
    category: 'Small Mammals',
    location: 'Akagera National Park, Rwanda',
    date: 'November 2022',
    image: '/src/assets/imgs/Meerkat.png',
    description: 'Alert meerkat keeping watch over its family in the Akagera savanna.',
    likes: 187,
    isLiked: false,
    featured: false
  },
  {
    id: 13,
    title: 'Graceful Impala',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'October 2022',
    image: '/src/assets/imgs/Impala.png',
    description: 'Elegant impala buck standing alert in the golden light of dawn.',
    likes: 143,
    isLiked: false,
    featured: false
  },
  {
    id: 14,
    title: 'Laughing Hyena',
    category: 'Carnivores',
    location: 'Akagera National Park, Rwanda',
    date: 'September 2022',
    image: '/src/assets/imgs/Hyena.png',
    description: 'Spotted hyena with its characteristic hunched posture and powerful jaws.',
    likes: 167,
    isLiked: false,
    featured: false
  },
  {
    id: 15,
    title: 'Honey Badger',
    category: 'Carnivores',
    location: 'Akagera National Park, Rwanda',
    date: 'August 2022',
    image: '/src/assets/imgs/Honey Badger.png',
    description: 'The fearless honey badger, known for its tenacity and strength.',
    likes: 203,
    isLiked: false,
    featured: false
  },
  {
    id: 16,
    title: 'Hippopotamus Pod',
    category: 'Large Mammals',
    location: 'Akagera National Park, Rwanda',
    date: 'July 2022',
    image: '/src/assets/imgs/Hippopotamus.png',
    description: 'A pod of hippos keeping cool in the waters of Lake Ihema.',
    likes: 231,
    isLiked: false,
    featured: false
  },
  {
    id: 17,
    title: 'Towering Giraffe',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'June 2022',
    image: '/src/assets/imgs/Giraffe.png',
    description: 'Elegant Masai giraffe browsing on acacia leaves at sunset.',
    likes: 254,
    isLiked: true,
    featured: true
  },
  {
    id: 18,
    title: 'Graceful Gazelle',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'May 2022',
    image: '/src/assets/imgs/Gazelle.png',
    description: 'Thomson\'s gazelle leaping across the savanna with incredible agility.',
    likes: 176,
    isLiked: false,
    featured: false
  },
  {
    id: 19,
    title: 'Cape Buffalo',
    category: 'Big Five',
    location: 'Akagera National Park, Rwanda',
    date: 'April 2022',
    image: '/src/assets/imgs/Buffalo.png',
    description: 'Powerful Cape buffalo, one of Africa\'s Big Five, in golden savanna light.',
    likes: 198,
    isLiked: false,
    featured: false
  },
  {
    id: 20,
    title: 'African Wild Dog Pack',
    category: 'Carnivores',
    location: 'Akagera National Park, Rwanda',
    date: 'March 2022',
    image: '/src/assets/imgs/African Wild Dog.png',
    description: 'Endangered African wild dogs on the hunt in Akagera National Park.',
    likes: 287,
    isLiked: false,
    featured: true
  }
  ,
  // Video items (from src/assets/video)
  {
    id: 21,
    title: 'Lake Bisoke (Clip)',
    category: 'Special Sightings',
    location: 'Volcanoes National Park, Rwanda',
    date: 'May 2021',
    video: '/src/assets/video/video bisoke.mp4',
    type: 'video',
    description: 'A short clip showing the calm waters of Lake Bisoke and surrounding mist.',
    likes: 98,
    isLiked: false,
    featured: false
  },
  {
    id: 22,
    title: 'Zebra Safari (Clip)',
    category: 'Herbivores',
    location: 'Akagera National Park, Rwanda',
    date: 'April 2021',
    video: '/src/assets/video/safari zebra.mp4',
    type: 'video',
    description: 'Short safari footage capturing zebras moving across the plains.',
    likes: 142,
    isLiked: false,
    featured: false
  },
  {
    id: 23,
    title: 'Nyungwe Highlights',
    category: 'Primates',
    location: 'Nyungwe Forest, Rwanda',
    date: 'March 2021',
    video: '/src/assets/video/Nyungwe Video for exchange display on home page.mp4',
    type: 'video',
    description: 'Highlights from Nyungwe Forest including canopy and primate footage.',
    likes: 210,
    isLiked: false,
    featured: true
  },
  {
    id: 24,
    title: 'Lake Karisimbi Scene',
    category: 'Large Mammals',
    location: 'Mount Karisimbi Area, Rwanda',
    date: 'February 2021',
    video: '/src/assets/video/lake on karisimbi.mp4',
    type: 'video',
    description: 'A gentle tour of the lakeside and surrounding wildlife near Karisimbi.',
    likes: 76,
    isLiked: false,
    featured: false
  },
  {
    id: 25,
    title: 'Exchange Display 1',
    category: 'Special Sightings',
    location: 'Vimeo / Exchange',
    date: 'January 2021',
    video: '/src/assets/video/Exchng on HP.mp4',
    type: 'video',
    description: 'Short exchange/homepage video clip used for display.',
    likes: 55,
    isLiked: false,
    featured: false
  },
  {
    id: 26,
    title: 'Exchange Display 2',
    category: 'Special Sightings',
    location: 'Vimeo / Exchange',
    date: 'January 2021',
    video: '/src/assets/video/Excahnge on homepage.mp4',
    type: 'video',
    description: 'Alternate homepage exchange clip.',
    likes: 63,
    isLiked: false,
    featured: false
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [items, setItems] = useState([...galleryItems]);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  
  // Debounced search
  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setSearchQuery(query);
      }, 300),
    []
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Get unique categories for filtering
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  
  // Filter and sort items
  const filteredItems = useMemo(() => {
    let result = [...items].filter(item => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Apply sorting
    result.sort((a, b) => {
      let compareValue;
      switch (sortBy) {
        case 'likes':
          compareValue = a.likes - b.likes;
          break;
        case 'title':
          compareValue = a.title.localeCompare(b.title);
          break;
        case 'date':
        default:
          compareValue = new Date(a.date) - new Date(b.date);
      }
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

    return result;
  }, [items, activeFilter, searchQuery, sortBy, sortOrder]);

  // Toggle sort order
  const toggleSortOrder = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  // Toggle like status with animation
  const toggleLike = (id, e) => {
    e?.stopPropagation(); // Prevent triggering parent click
    setItems(items.map(item => 
      item.id === id ? { 
        ...item, 
        isLiked: !item.isLiked, 
        likes: item.isLiked ? item.likes - 1 : item.likes + 1,
        likeAnimate: !item.isLiked // Trigger animation
      } : item
    ));
    
    // Reset animation after it completes
    setTimeout(() => {
      setItems(prevItems => 
        prevItems.map(item => 
          item.id === id ? { ...item, likeAnimate: false } : item
        )
      );
    }, 700);
  };

  // Share image
  const shareImage = async (item, e) => {
    e?.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  // Handle fullscreen view
  const openFullscreen = (item) => {
    setSelectedItem(item);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setTimeout(() => setSelectedItem(null), 300);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeFullscreen();
      if (e.key === 'ArrowRight') navigateItems(1);
      if (e.key === 'ArrowLeft') navigateItems(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, selectedItem]);

  // Navigate between items in fullscreen
  const navigateItems = (direction) => {
    if (!selectedItem) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    if (newIndex >= filteredItems.length) newIndex = 0;
    
    setSelectedItem(filteredItems[newIndex]);
  };

  // Handle search change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    debouncedSearch(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section with Nyungwe colors */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxMDIsMjA1LDE3MCwwLjA0KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-800/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400">
                Wild Encounters
              </span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the untamed beauty of Africa's most magnificent creatures through our lens
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto space-y-6 mb-8">
              {/* Main Search */}
              <div className="relative group">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300 group-focus-within:text-white transition-colors z-10" />
                <input
                  type="text"
                  placeholder="Search by animal, location, or category..."
                  className="w-full pl-12 pr-32 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-emerald-300/30 focus:border-emerald-300 focus:outline-none focus:ring-3 focus:ring-emerald-300/30 text-white placeholder-emerald-100 text-base transition-all duration-300"
                  onChange={handleSearchChange}
                  ref={searchRef}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        if (searchRef.current) searchRef.current.value = '';
                      }}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Clear search"
                    >
                      <FiX className="w-5 h-5 text-emerald-300 hover:text-white" />
                    </button>
                  )}
                  <span className="text-sm text-emerald-300 font-medium whitespace-nowrap">
                    {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
                  </span>
                </div>
              </div>

              {/* Category Filters - Horizontal Scroll for Mobile */}
              <div className="relative">
                <div className="flex overflow-x-auto pb-3 space-x-3 scrollbar-hide -mx-2 px-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-5 py-3 rounded-lg whitespace-nowrap transition-all duration-300 border ${
                      activeFilter === 'all'
                        ? 'bg-white text-emerald-900 border-white shadow-lg'
                        : 'bg-white/10 text-white border-emerald-300/30 hover:bg-white/20 backdrop-blur-sm'
                    } font-medium text-sm`}
                  >
                    All Photos
                  </button>
                  {categories.filter(cat => cat !== 'all').map((category) => {
                    const theme = categoryThemes[category] || categoryThemes.default;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-5 py-3 rounded-lg whitespace-nowrap transition-all duration-300 border font-medium text-sm ${
                          activeFilter === category
                            ? `${theme.accent} text-white border-transparent shadow-lg`
                            : `${theme.light} ${theme.text} border-transparent hover:opacity-90`
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
        
        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-900/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Gallery Grid with Larger Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl h-80 w-full mb-4"></div>
                <div className="h-5 bg-gradient-to-r from-emerald-100 to-teal-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 px-4 max-w-md mx-auto"
          >
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-3">No wildlife sightings yet</h3>
            <p className="text-emerald-700 mb-8 leading-relaxed">
              {searchQuery 
                ? `No photos found matching "${searchQuery}". Try searching for something else.`
                : `We couldn't find any photos in the ${activeFilter === 'all' ? 'gallery' : activeFilter} category.`
              }
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                  if (searchRef.current) {
                    searchRef.current.value = '';
                    searchRef.current.focus();
                  }
                }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 font-medium shadow-lg"
              >
                View All Photos
              </button>
            </div>
          </Motion.div>
        ) : (
          <Motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredItems.map((item) => {
              const theme = categoryThemes[item.category] || categoryThemes.default;
              return (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer border border-emerald-100"
                  onClick={() => openFullscreen(item)}
                >
                  {/* Image Container - Larger */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-50 to-teal-50">
                    {item.type === 'video' ? (
                      <>
                        <video
                          src={encodeURI(item.video)}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Centered play icon overlay for video cards */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center">
                            <FiPlay className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <LazyLoadImage
                        src={item.image}
                        alt={item.title}
                        effect="blur"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23d1fae5'/%3E%3C/svg%3E"
                      />
                    )}
                    
                    {/* Category Badge - Top Left */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.accent} text-white shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Like Button - Top Right */}
                    <button
                      onClick={(e) => toggleLike(item.id, e)}
                      className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                        item.isLiked 
                          ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40' 
                          : 'bg-white/30 text-white hover:bg-white/40 backdrop-blur-sm'
                      }`}
                      aria-label={item.isLiked ? 'Unlike' : 'Like'}
                    >
                      <FiHeart className={`w-6 h-6 ${item.likeAnimate ? 'animate-ping' : ''} ${item.isLiked ? 'fill-current' : ''}`} />
                    </button>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <FiEye className="w-5 h-5 mb-2 opacity-80" />
                        <span className="text-sm font-medium">View Details</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content - Larger and Better Spaced */}
                  <div className="p-6">
                    <h3 className="font-bold text-emerald-900 text-xl mb-3 line-clamp-1">{item.title}</h3>
                    
                    <div className="flex items-center text-emerald-700 text-base mb-4">
                      <FiMapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-emerald-600 text-base">
                        <FiCalendar className="w-5 h-5 mr-2" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-emerald-600 text-base">
                        <FiHeart className={`w-5 h-5 mr-2 ${item.isLiked ? 'text-rose-500 fill-current' : ''}`} />
                        <span className="font-semibold text-lg">{item.likes}</span>
                      </div>
                    </div>
                    
                    {/* Action Button - Inspired by Nyungwe image */}
                    <div className="flex justify-between items-center pt-4 border-t border-emerald-100">
                      <div className="flex items-center">
                        <FiStar className="w-5 h-5 text-amber-500 mr-2" />
                        <span className="text-emerald-700 font-medium">Featured</span>
                      </div>
                      <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                        Explore
                      </button>
                    </div>
                  </div>
                </Motion.div>
              );
            })}
          </Motion.div>
        )}

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
              <span className="text-emerald-900 font-medium">
                Showing <span className="font-bold text-emerald-700">{filteredItems.length}</span> of {galleryItems.length} photos
              </span>
              <div className="ml-4 flex items-center">
                <FiFilter className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm text-emerald-700">
                  {activeFilter === 'all' ? 'All categories' : activeFilter}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Viewer - Updated with Nyungwe colors */}
      <AnimatePresence>
        {isFullscreen && selectedItem && (
          <Motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald-300/20 bg-gradient-to-r from-emerald-800/80 to-teal-800/80 backdrop-blur-xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedItem.title}</h2>
                <p className="text-emerald-300 text-base mt-1">{selectedItem.location}</p>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={(e) => toggleLike(selectedItem.id, e)}
                  className={`p-3.5 rounded-xl transition-all duration-300 ${
                    selectedItem.isLiked 
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <FiHeart className={`w-6 h-6 ${selectedItem.isLiked ? 'fill-current' : ''}`} />
                </button>
                <button 
                  onClick={(e) => shareImage(selectedItem, e)}
                  className="p-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FiShare2 className="w-6 h-6" />
                </button>
                <button 
                  onClick={closeFullscreen}
                  className="p-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Main Content - Adjusted for better mobile */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
              
              {/* Image Section */}
              <div className="relative flex-1 flex items-center justify-center p-6 pt-20 md:pt-6">
                <Motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative max-w-4xl w-full"
                >
                  {selectedItem.type === 'video' ? (
                    <video
                      src={encodeURI(selectedItem.video)}
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[60vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[60vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                  
                  {/* Navigation */}
                  {filteredItems.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateItems(-1);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-emerald-800/80 backdrop-blur-md text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                      >
                        <FiChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateItems(1);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-emerald-800/80 backdrop-blur-md text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                      >
                        <FiChevronRight size={24} />
                      </button>
                    </>
                  )}
                </Motion.div>
              </div>
              
              {/* Info Panel - Better mobile sizing */}
              <Motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-full md:w-96 lg:w-108 bg-gradient-to-b from-emerald-800/90 to-emerald-900/95 backdrop-blur-xl border-t md:border-l border-emerald-300/20 p-6 overflow-y-auto custom-scrollbar"
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedItem.title}</h3>
                      <p className="text-emerald-300">{selectedItem.location}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${categoryThemes[selectedItem.category]?.accent || 'bg-gradient-to-r from-emerald-600 to-teal-500'} text-white shadow-md`}>
                      {selectedItem.category}
                    </span>
                  </div>
                  
                  <p className="text-emerald-100 text-lg leading-relaxed mb-8">{selectedItem.description}</p>
                  
                  <div className="space-y-6">
                    {/* Photo Details - Updated styling */}
                    <div className="p-5 bg-gradient-to-br from-emerald-700/50 to-teal-700/50 rounded-xl backdrop-blur-sm border border-emerald-300/20">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-4 uppercase tracking-wider">Photo Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-emerald-400 mb-1">Location</p>
                          <p className="text-white font-medium">{selectedItem.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-emerald-400 mb-1">Date Taken</p>
                          <p className="text-white font-medium">{selectedItem.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-emerald-400 mb-1">Category</p>
                          <p className="text-white font-medium">{selectedItem.category}</p>
                        </div>
                        <div>
                          <p className="text-xs text-emerald-400 mb-1">Likes</p>
                          <p className="text-white font-medium">{selectedItem.likes}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons - Inspired by Nyungwe design */}
                    <div className="p-5 bg-gradient-to-br from-emerald-700/50 to-teal-700/50 rounded-xl backdrop-blur-sm border border-emerald-300/20">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-4 uppercase tracking-wider">Actions</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 font-medium text-sm text-center shadow-md">
                          Download
                        </button>
                        <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:from-amber-700 hover:to-orange-600 transition-all duration-300 font-medium text-sm text-center shadow-md">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
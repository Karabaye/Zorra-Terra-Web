import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Mountain, 
  Heart,
  ChevronRight,
  ChevronUp,
  Globe,
  Camera,
  Share2,
  Bookmark,
  Map,
  PawPrint,
  Award,
  Compass,
  Shield,
  Binoculars,
  Target
} from "lucide-react";
import { stories } from "../util/stories";

export default function StoryDetails() {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === parseInt(storyId)) || stories[0];

  const nationalParks = [
    {
      name: "Volcanoes National Park",
      description: "Home to the endangered mountain gorillas in the misty Virunga Mountains. This park spans 160 km² and features five volcanoes reaching 4,500m.",
      highlight: "Gorilla Trekking, Golden Monkey Tracking",
      location: "Northern Province",
      bestTime: "Jun-Sep, Dec-Feb",
      icon: <Mountain className="h-6 w-6" />,
      permit: "$1,500"
    },
    {
      name: "Akagera National Park",
      description: "Savannah wilderness with the Big Five following successful lion and rhino reintroductions. Covers 1,122 km² with lakes and wetlands.",
      highlight: "Big Five Safari, Boat Cruises",
      location: "Eastern Province",
      bestTime: "Jun-Sep",
      icon: <PawPrint className="h-6 w-6" />,
      permit: "$100"
    },
    {
      name: "Nyungwe National Park",
      description: "Ancient Afro-montane rainforest with 13 primate species including chimpanzees. Features East Africa's only canopy walkway.",
      highlight: "Canopy Walk, Chimpanzee Tracking",
      location: "Southern Province",
      bestTime: "Dec-Feb, Jun-Sep",
      icon: <Map className="h-6 w-6" />,
      permit: "$100"
    },
    {
      name: "Gishwati-Mukura National Park",
      description: "Rwanda's newest park comprising two separate forest reserves. Home to chimpanzees and golden monkeys in regenerating forests.",
      highlight: "Forest Hiking, Waterfall Visits",
      location: "Western Province",
      bestTime: "Jun-Oct",
      icon: <Map className="h-6 w-6" />,
      permit: "$60"
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [storyId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getParkContent = (category) => {
    if (category.includes("Gorilla")) return nationalParks[0];
    if (category.includes("Wildlife")) return nationalParks[1];
    if (category.includes("Chimpanzee")) return nationalParks[2];
    return nationalParks[3];
  };

  const featuredPark = getParkContent(story.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl"
            >
              <Link
                to="/stories"
                className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Link>

              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-widest uppercase border border-white/30">
                  {story.category} • {featuredPark.name}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
                {story.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <img
                      src={story.authorImage}
                      alt={story.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{story.author}</p>
                    <div className="flex items-center gap-4 text-xs text-white/80">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {story.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {story.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                  >
                    <p className="text-xl text-gray-600 leading-relaxed font-light mb-12 border-l-4 border-[#0a2e1d] pl-6">
                      {story.excerpt}
                    </p>

                    <div className="bg-[#0a2e1d]/5 p-8 rounded-2xl mb-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#0a2e1d] text-white flex items-center justify-center">
                          {featuredPark.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-light text-[#0a2e1d] mb-2">
                            Exploring {featuredPark.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Compass className="h-4 w-4 mr-1" />
                              {featuredPark.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Best: {featuredPark.bestTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light mb-4">
                        {featuredPark.description}
                      </p>
                      <div className="text-sm text-[#0a2e1d] font-medium">
                        Permit: {featuredPark.permit} • {featuredPark.highlight}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                      {[
                        "/assets/imgs/gorilla.png",
                        "/assets/imgs/zebra.png",
                        "/assets/imgs/chimpanzee.png"
                      ].map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="overflow-hidden rounded-lg"
                        >
                          <img
                            src={img}
                            alt={`Rwanda Wildlife ${index + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="text-gray-600 leading-relaxed font-light space-y-6">
                      {story.content?.split("\n\n").map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    <div className="my-12 p-8 bg-gradient-to-r from-[#0a2e1d] to-[#1e4d2f] rounded-2xl text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <Shield className="h-6 w-6 text-[#9cd4b4]" />
                        <h3 className="text-xl font-light">Conservation Impact</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="text-2xl font-light">10% Revenue</div>
                          <div className="text-sm text-white/80 font-light">Shared with local communities</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-light">5,000+</div>
                          <div className="text-sm text-white/80 font-light">Local tourism jobs created</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-light">25% Increase</div>
                          <div className="text-sm text-white/80 font-light">Gorilla population growth</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-light">200+</div>
                          <div className="text-sm text-white/80 font-light">Community projects funded</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                      {[
                        "/assets/imgs/Buffalo.png",
                        "/assets/imgs/Giraffe.png"
                      ].map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="overflow-hidden rounded-lg"
                        >
                          <img
                            src={img}
                            alt={`Rwanda Wildlife ${index + 4}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-20 pt-12 border-t border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={story.authorImage}
                          alt={story.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-2">
                          About the Author
                        </div>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">{story.author}</h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                          {story.category.includes("Gorilla")
                            ? "Wildlife conservationist with 15+ years documenting Rwanda's mountain gorillas. Passionate about community-led conservation initiatives."
                            : story.category.includes("Wildlife")
                              ? "Former Akagera National Park ranger turned conservation photographer. Specializes in ethical wildlife photography."
                              : "Kigali-based cultural journalist exploring Rwanda's transformation through community stories."}
                        </p>
                        <div className="flex items-center justify-center md:justify-start space-x-6">
                          <span className="flex items-center text-sm text-gray-500">
                            <Heart className="h-4 w-4 mr-2 text-red-400" />
                            25+ Stories Published
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-2 text-[#0a2e1d]" />
                            Based in Rwanda
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8">
                  <h4 className="text-lg font-medium text-[#0a2e1d] mb-6 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Quick Facts
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-medium text-[#0a2e1d] mb-2">Best Time</div>
                      <div className="text-sm text-gray-600 font-light">June to September (dry season)</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a2e1d] mb-2">Permit Costs</div>
                      <div className="text-sm text-gray-600 font-light">Gorilla: $1,500, General: $100</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a2e1d] mb-2">Requirements</div>
                      <div className="text-sm text-gray-600 font-light">Age 15+ for gorillas, moderate fitness</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <h4 className="text-lg font-medium text-[#0a2e1d] mb-6">Rwanda's Parks</h4>
                  <div className="space-y-6">
                    {nationalParks.map((park, index) => (
                      <div key={index} className="pb-6 border-b border-gray-100 last:border-0">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="text-[#0a2e1d] mt-1">
                            {park.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{park.name}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                              <MapPin className="h-3 w-3" />
                              {park.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 font-light">{park.highlight}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0a2e1d] to-[#1e4d2f] rounded-2xl p-8 text-white">
                  <h4 className="text-lg font-light mb-6">Rwanda's Wildlife</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-light mb-1">13+</div>
                      <div className="text-xs text-white/80">Primate Species</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light mb-1">700+</div>
                      <div className="text-xs text-white/80">Bird Species</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light mb-1">4</div>
                      <div className="text-xs text-white/80">National Parks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light mb-1">Big 5</div>
                      <div className="text-xs text-white/80">Complete in Akagera</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a2e1d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-8">
              Ready for Your
              <span className="block text-[#9cd4b4] font-normal mt-4">Rwandan Adventure?</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
              Every journey supports conservation and local communities. Let us craft your perfect Rwanda experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
              >
                Plan Your Safari
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/travel-with-us"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium tracking-widest uppercase"
              >
                View Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 z-40 w-12 h-12 rounded-full bg-[#0a2e1d] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:bg-[#1e4d2f]"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { stories } from "../util/stories";

export default function Stories() {
  const [selected, setSelected] = useState("All");
  const categories = ["All", "Wildlife", "Conservation", "Culture", "Adventure"];

  const filteredStories =
    selected === "All"
      ? stories
      : stories.filter((story) => story.category === selected);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a2e1d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Travel Stories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight tracking-tight">
              Stories from
              <span className="block mt-4 text-[#9cd4b4] font-normal">Rwandan Journeys</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
              Immerse yourself in authentic travel experiences and personal narratives 
              from the heart of Rwanda's wilderness and culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#fafafa] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="inline-flex rounded-lg bg-white p-1 border border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    selected === cat
                      ? "bg-[#0a2e1d] text-white rounded-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    to={`/stories/${story.id}`}
                    className="group block h-full"
                  >
                    <article className="h-full border border-gray-200 hover:border-[#0a2e1d]/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium tracking-widest text-[#0a2e1d]">
                            {story.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center text-xs text-gray-500 font-medium tracking-widest uppercase">
                          <span className="flex items-center mr-4">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {story.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            {story.readTime}
                          </span>
                        </div>

                        <h2 className="text-xl font-light text-gray-900 group-hover:text-[#0a2e1d] transition-colors leading-snug">
                          {story.title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed font-light text-sm">
                          {story.excerpt}
                        </p>

                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-[#0a2e1d]/10 flex items-center justify-center">
                                <User className="h-4 w-4 text-[#0a2e1d]" />
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-900">{story.author}</div>
                              </div>
                            </div>
                            
                            <span className="inline-flex items-center text-sm font-medium text-[#0a2e1d] opacity-0 group-hover:opacity-100 transition-opacity">
                              Read Story
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Stories */}
          <div className="mt-24 pt-16 border-t border-gray-200 text-center">
            <Link
              to="/all-stories"
              className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-[#0a2e1d] hover:underline"
            >
              View All Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Story Categories */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Story Themes</span>
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Explore Rwanda Through <span className="text-[#0a2e1d] font-normal">Different Lenses</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Discover stories that capture the essence of Rwanda's natural beauty, 
              cultural heritage, and conservation efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.filter(cat => cat !== "All").map((category) => (
              <button
                key={category}
                onClick={() => setSelected(category)}
                className={`p-8 text-center transition-all duration-300 ${
                  selected === category
                    ? "bg-[#0a2e1d] text-white shadow-lg"
                    : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  selected === category ? "bg-white/20" : "bg-[#0a2e1d]/10"
                }`}>
                  <Tag className={`h-8 w-8 ${
                    selected === category ? "text-white" : "text-[#0a2e1d]"
                  }`} />
                </div>
                <h3 className="text-lg font-medium mb-2">{category}</h3>
                <p className="text-sm opacity-80">
                  {stories.filter(s => s.category === category).length} stories
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                    <span className="h-2 w-2 rounded-full bg-current"></span>
                    <span>Editor's Pick</span>
                  </div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">
                    The Mountain Gorilla: A Conservation Success Story
                  </h2>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    How Rwanda transformed from a country with declining gorilla populations 
                    to a global conservation leader. This feature story explores the journey 
                    of mountain gorilla conservation and its impact on local communities.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      December 15, 2023
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      12 min read
                    </span>
                  </div>
                  
                  <Link
                    to="/stories/featured-gorilla-conservation"
                    className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-[#0a2e1d] hover:underline"
                  >
                    Read Full Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Mountain Gorilla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a2e1d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-8">
              Ready to Create Your <span className="text-[#9cd4b4] font-normal">Own Story?</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
              Let us guide you through Rwanda's most unforgettable experiences. 
              Your journey awaits.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
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
    <div className="min-h-screen bg-[#021732] text-white">

      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021732]/80 via-[#021732]/40 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-end pb-16">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl"
            >
              <Link
                to="/stories"
                className="inline-flex items-center text-sm text-white/80 hover:text-[#4ade80] transition-colors mb-8 uppercase tracking-[0.2em] font-bold"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Link>

              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#4ade80]/20 backdrop-blur-md text-[#4ade80] text-[10px] font-bold tracking-[0.2em] uppercase border border-[#4ade80]/30">
                  {story.category} • {featuredPark.name}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light italic text-white leading-tight mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {story.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4ade80]">
                    <img
                      src={story.authorImage}
                      alt={story.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">{story.author}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-[#4ade80] uppercase tracking-widest">
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
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-invert prose-lg max-w-none">
                  <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-12"
                  >
                    <p className="text-2xl text-white/80 leading-relaxed font-light mb-12 border-l-4 border-[#4ade80] pl-8 italic">
                      {story.excerpt}
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 mb-12">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#064a1b] text-[#4ade80] flex items-center justify-center shadow-xl">
                          {featuredPark.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-light text-white mb-2 italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
                            Exploring {featuredPark.name}
                          </h3>
                          <div className="flex items-center gap-6 text-[10px] font-bold text-[#4ade80] uppercase tracking-[0.2em]">
                            <span className="flex items-center">
                              <Compass className="h-4 w-4 mr-2" />
                              {featuredPark.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              Best: {featuredPark.bestTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed font-light mb-6 text-lg">
                        {featuredPark.description}
                      </p>
                      <div className="pt-6 border-t border-white/10 text-xs font-bold text-[#4ade80] uppercase tracking-[0.2em] flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-white/5 rounded-full">Permit: {featuredPark.permit}</span>
                        <span className="px-4 py-2 bg-white/5 rounded-full">{featuredPark.highlight}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
                      {[
                        "/assets/imgs/gorilla.png",
                        "/assets/imgs/Zebra.png",
                        "/assets/imgs/chimpanzee.png"
                      ].map((img, index) => (
                        <Motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="overflow-hidden rounded-2xl border border-white/10 group"
                        >
                          <img
                            src={img}
                            alt={`Rwanda Wildlife ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </Motion.div>
                      ))}
                    </div>

                    <div className="text-white/70 leading-relaxed font-light space-y-8 text-lg">
                      {story.content?.split("\n\n").map((paragraph, index) => (
                        <Motion.p
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {paragraph}
                        </Motion.p>
                      ))}
                    </div>

                    <div className="my-16 p-12 bg-gradient-to-br from-[#064a1b] to-[#021732] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-[80px] -z-10" />
                      <div className="flex items-center gap-4 mb-10">
                        <Shield className="h-8 w-8 text-[#4ade80]" />
                        <h3 className="text-2xl font-light italic" style={{ fontFamily: 'Dancing Script, cursive' }}>Conservation Impact</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="space-y-2">
                          <div className="text-3xl font-light text-[#4ade80]">10% Revenue</div>
                          <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Shared with local communities</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-light text-[#4ade80]">5,000+</div>
                          <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Local tourism jobs created</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-light text-[#4ade80]">25% Increase</div>
                          <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Gorilla population growth</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-light text-[#4ade80]">200+</div>
                          <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Community projects funded</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                      {[
                        "/assets/imgs/Buffalo.png",
                        "/assets/imgs/Giraffe.png"
                      ].map((img, index) => (
                        <Motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="overflow-hidden rounded-2xl border border-white/10 group"
                        >
                          <img
                            src={img}
                            alt={`Rwanda Wildlife ${index + 4}`}
                            className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        </Motion.div>
                      ))}
                    </div>
                  </Motion.div>

                  <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-16 border-t border-white/10"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-2 border-[#4ade80]/30">
                        <img
                          src={story.authorImage}
                          alt={story.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4ade80] mb-3">
                          About the Author
                        </div>
                        <h3 className="text-3xl font-light text-white mb-4 italic" style={{ fontFamily: 'Dancing Script, cursive' }}>{story.author}</h3>
                        <p className="text-white/60 leading-relaxed font-light mb-6 text-lg">
                          {story.category.includes("Gorilla")
                            ? "Wildlife conservationist with 15+ years documenting Rwanda's mountain gorillas. Passionate about community-led conservation initiatives."
                            : story.category.includes("Wildlife")
                              ? "Former Akagera National Park ranger turned conservation photographer. Specializes in ethical wildlife photography."
                              : "Kigali-based cultural journalist exploring Rwanda's transformation through community stories."}
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                          <span className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40">
                            <Heart className="h-4 w-4 mr-2 text-[#4ade80]" />
                            25+ Stories published
                          </span>
                          <span className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40">
                            <MapPin className="h-4 w-4 mr-2 text-[#4ade80]" />
                            Based in Rwanda
                          </span>
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="space-y-12">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-[#4ade80] mb-8 flex items-center gap-3 uppercase tracking-widest">
                    <Target className="h-6 w-6" />
                    Quick Facts
                  </h4>
                  <div className="space-y-8">
                    <div className="group">
                      <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">Best Time</div>
                      <div className="text-lg text-white font-light group-hover:text-[#4ade80] transition-colors">June to September</div>
                      <div className="text-sm text-white/40 font-light mt-1">(Peak dry season)</div>
                    </div>
                    <div className="group">
                      <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">Permit Costs</div>
                      <div className="text-lg text-white font-light group-hover:text-[#4ade80] transition-colors">Gorilla: $1,500</div>
                      <div className="text-sm text-white/40 font-light mt-1">General access: $100</div>
                    </div>
                    <div className="group">
                      <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">Requirements</div>
                      <div className="text-lg text-white font-light group-hover:text-[#4ade80] transition-colors">Age 15+</div>
                      <div className="text-sm text-white/40 font-light mt-1">Moderate fitness needed</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                  <h4 className="text-xl font-bold text-[#4ade80] mb-8 uppercase tracking-widest">Rwanda's Parks</h4>
                  <div className="space-y-8">
                    {nationalParks.map((park, index) => (
                      <div key={index} className="pb-8 border-b border-white/5 last:border-0 last:pb-0 group">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="text-[#4ade80] mt-1 group-hover:scale-110 transition-transform">
                            {park.icon}
                          </div>
                          <div>
                            <div className="font-bold text-white uppercase tracking-wider text-sm">{park.name}</div>
                            <div className="text-xs text-[#4ade80] font-bold flex items-center gap-2 mt-2 uppercase tracking-widest">
                              <MapPin className="h-3 w-3" />
                              {park.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-white/50 font-light leading-relaxed">{park.highlight}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#064a1b] to-[#021732] rounded-3xl p-10 text-white border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#4ade80]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-xl font-light mb-8 italic" style={{ fontFamily: 'Dancing Script, cursive' }}>Quick Statistics</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#4ade80] mb-1">13+</div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Primate Species</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#4ade80] mb-1">700+</div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Bird Species</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#4ade80] mb-1">4</div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">National Parks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#4ade80] mb-1">Big 5</div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">In Akagera</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#064a1b]/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl lg:text-8xl font-light italic text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Ready for Your
              <span className="block text-[#4ade80] mt-4">Rwandan Adventure?</span>
            </h2>
            <p className="text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Every journey supports conservation and local communities. Let us craft your perfect Rwanda experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Link
                to="/booking"
                state={{ packageName: story.title }}
                className="btn-primary px-12 py-6 text-sm flex items-center justify-center gap-3"
              >
                Plan Your Safari
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/travel-with-us"
                className="btn-outline px-12 py-6 text-sm flex items-center justify-center"
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
        className="fixed right-8 bottom-8 z-40 w-14 h-14 rounded-2xl bg-[#064a1b] text-[#4ade80] flex items-center justify-center shadow-2xl border border-[#4ade80]/20 hover:bg-[#4ade80] hover:text-[#021732] transition-all hover:-translate-y-2 group"
      >
        <ChevronUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
      </button>
    </div>
  );
}

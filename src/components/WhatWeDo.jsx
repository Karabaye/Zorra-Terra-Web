import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Globe, 
  Shield,
  Camera,
  Binoculars,
  Map,
  Mountain,
  Compass
} from "lucide-react";

const WhatWeDo = () => {
  const experiences = [
    {
      title: "Gorilla Trekking",
      description: "Spend an hour with mountain gorillas in Volcanoes National Park. Permits ($1,500) support conservation. Requires moderate fitness for hiking through bamboo forests.",
      icon: <Users className="h-6 w-6" />,
      duration: "Full Day",
      difficulty: "Moderate"
    },
    {
      title: "Wildlife Safaris",
      description: "Game drives in Akagera National Park to see lions, elephants, leopards, buffalo, and rhinos—the complete Big Five. Boat trips showcase Africa's densest hippo population.",
      icon: <Binoculars className="h-6 w-6" />,
      duration: "Half/Full Day",
      difficulty: "Easy"
    },
    {
      title: "Primate Encounters",
      description: "Track golden monkeys in Volcanoes NP (age 12+) or chimpanzees in Nyungwe Forest. Nyungwe's canopy walk offers breathtaking rainforest views.",
      icon: <Compass className="h-6 w-6" />,
      duration: "3-5 Hours",
      difficulty: "Moderate"
    },
    {
      title: "Cultural Immersion",
      description: "Visit Iby'Iwacu Cultural Village to experience Rwandan traditions, dances, and daily life. Community tours support local development directly.",
      icon: <Globe className="h-6 w-6" />,
      duration: "2-3 Hours",
      difficulty: "Easy"
    },
    {
      title: "Adventure Activities",
      description: "Hike to Dian Fossey's grave, explore Musanze Caves' 2km lava tunnels, or climb waterfalls in Gishwati Mukura.",
      icon: <Map className="h-6 w-6" />,
      duration: "2-6 Hours",
      difficulty: "Varied"
    },
    {
      title: "Photography Tours",
      description: "Guided photography sessions capturing Rwanda's landscapes, wildlife, and people. Learn from professionals while creating unforgettable images.",
      icon: <Camera className="h-6 w-6" />,
      duration: "Custom",
      difficulty: "Easy"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/video/Home-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="/src/assets/imgs/Giraffe.png" 
            alt="Rwanda wildlife" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
              <Target className="h-4 w-4" />
              <span>Signature Experiences</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
              Curated African Adventures
              <span className="block text-[#9cd4b4] font-normal mt-4">Beyond the Ordinary</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
              We specialize in creating participatory wilderness experiences that connect you
              authentically with Africa's landscapes, wildlife, and communities.
            </p>
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-[#9cd4b4]/50 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:bg-[#9cd4b4] transition-colors">
                    {exp.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-white/80 tracking-widest uppercase">
                      {exp.duration}
                    </div>
                    <div className="text-xs font-medium text-white mt-1">
                      {exp.difficulty}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{exp.title}</h3>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Information */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-2">Best Time</div>
                <div className="text-white/90">Jun-Sep & Dec-Feb</div>
                <div className="text-sm text-white/70 mt-1">Dry seasons for trekking</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-2">Conservation</div>
                <div className="text-white/90">100% Sustainable</div>
                <div className="text-sm text-white/70 mt-1">All permits fund protection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-2">Support</div>
                <div className="text-white/90">24/7 Local Team</div>
                <div className="text-sm text-white/70 mt-1">Based in Kigali, Rwanda</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
            >
              Plan Your Custom Itinerary
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <p className="text-white/70 text-sm mt-6">
              Combine multiple parks for a comprehensive Rwanda experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
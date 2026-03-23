import React from "react";
import { Link } from "react-router-dom";
const homeVideo = "/assets/video/Home-video.mp4";
const giraffeImg = "/assets/images/Giraffe.png";
import {
  Users,
  Target,
  Globe,
  Shield,
  Camera,
  Binoculars,
  Map,
  Mountain,
  Compass,
} from "lucide-react";

const WhatWeDo = () => {
  const experiences = [
    {
      title: "Gorilla Trekking",
      description:
        "Spend an hour with mountain gorillas in Volcanoes National Park. Permits ($1,500) support conservation. Requires moderate fitness for hiking through bamboo forests.",
      icon: <Users className="h-6 w-6" />,
      duration: "Full Day",
      difficulty: "Moderate",
    },
    {
      title: "Wildlife Safaris",
      description:
        "Game drives in Akagera National Park to see lions, elephants, leopards, buffalo, and rhinos—the complete Big Five. Boat trips showcase Africa's densest hippo population.",
      icon: <Binoculars className="h-6 w-6" />,
      duration: "Half/Full Day",
      difficulty: "Easy",
    },
    {
      title: "Primate Encounters",
      description:
        "Track golden monkeys in Volcanoes NP (age 12+) or chimpanzees in Nyungwe Forest. Nyungwe's canopy walk offers breathtaking rainforest views.",
      icon: <Compass className="h-6 w-6" />,
      duration: "3-5 Hours",
      difficulty: "Moderate",
    },
    {
      title: "Cultural Immersion",
      description:
        "Visit Iby'Iwacu Cultural Village to experience Rwandan traditions, dances, and daily life. Community tours support local development directly.",
      icon: <Globe className="h-6 w-6" />,
      duration: "2-3 Hours",
      difficulty: "Easy",
    },
    {
      title: "Adventure Activities",
      description:
        "Hike to Dian Fossey's grave, explore Musanze Caves' 2km lava tunnels, or climb waterfalls in Gishwati Mukura.",
      icon: <Map className="h-6 w-6" />,
      duration: "2-6 Hours",
      difficulty: "Varied",
    },
    {
      title: "Photography Tours",
      description:
        "Guided photography sessions capturing Rwanda's landscapes, wildlife, and people. Learn from professionals while creating unforgettable images.",
      icon: <Camera className="h-6 w-6" />,
      duration: "Custom",
      difficulty: "Easy",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={homeVideo} type="video/mp4" />
          {/* Fallback image for very old browsers */}
          <img
            src={giraffeImg}
            alt="Rwanda wildlife"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center space-x-2 text-sm font-medium tracking-widest text-[#9cd4b4] uppercase">
              <Target className="h-4 w-4" />
              <span>Signature Experiences</span>
            </div>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-white/90">
              We specialize in creating participatory wilderness experiences
              that connect you authentically with Africa's landscapes, wildlife,
              and communities.
            </p>
          </div>

          {/* Experiences Grid */}
          <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#9cd4b4]/50 hover:bg-white/15"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-[#9cd4b4]">
                    {exp.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium tracking-widest text-white/80 uppercase">
                      {exp.duration}
                    </div>
                    <div className="mt-1 text-xs font-medium text-white">
                      {exp.difficulty}
                    </div>
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-medium text-white">
                  {exp.title}
                </h3>
                <p className="text-sm leading-relaxed font-light text-white/80">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Information */}
          <div className="mx-auto mb-12 max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-2xl font-light text-white">
                  Best Time
                </div>
                <div className="text-white/90">Jun-Sep & Dec-Feb</div>
                <div className="mt-1 text-sm text-white/70">
                  Dry seasons for trekking
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-light text-white">
                  Conservation
                </div>
                <div className="text-white/90">100% Sustainable</div>
                <div className="mt-1 text-sm text-white/70">
                  All permits fund protection
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-light text-white">
                  Support
                </div>
                <div className="text-white/90">24/7 Local Team</div>
                <div className="mt-1 text-sm text-white/70">
                  Based in Kigali, Rwanda
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/booking"
              className="btn-primary inline-flex items-center justify-center"
            >
              Plan Your Custom Itinerary
            </Link>
            <p className="mt-6 text-sm text-white/70">
              Combine multiple parks for a comprehensive Rwanda experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

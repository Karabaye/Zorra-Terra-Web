import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mountain, Map, PawPrint, Users, Award } from "lucide-react";

const SpiritOfAfrica = () => {
  const nationalParks = [
    {
      name: "Volcanoes National Park",
      description: "Home to the majestic mountain gorillas in the misty Virunga Mountains. Trek through rich green rainforests towering almost 15,000 feet high.",
      highlight: "Gorilla & Golden Monkey Trekking",
      image: "/assets/imgs/gorilla.png",
      icon: <Mountain className="h-5 w-5" />
    },
    {
      name: "Akagera National Park",
      description: "Savannah, woodland, and wetland plains with a dozen lakes. Home to the Big Five following successful lion and rhino reintroductions.",
      highlight: "Big Five Safari & Boat Cruises",
      image: "/assets/imgs/Zebra.png",
      icon: <PawPrint className="h-5 w-5" />
    },
    {
      name: "Nyungwe National Park",
      description: "One of Africa's oldest rainforests, rich in biodiversity with chimpanzees and 12 other primate species. Features a breathtaking canopy walkway.",
      highlight: "Canopy Walks & Chimpanzee Tracking",
      image: "/assets/imgs/chimpanzee.png",
      icon: <Map className="h-5 w-5" />
    },
    {
      name: "Gishwati Mukura National Park",
      description: "Rwanda's newest national park featuring two separate forests, home to chimpanzees and rare monkeys.",
      highlight: "Forest Hiking & Waterfall Visits",
      image: "/assets/imgs/Buffalo.png",
      icon: <Map className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
            <span className="h-2 w-2 rounded-full bg-current"></span>
            <span>Explore Rwanda's Wilderness</span>
          </div>
          <h2 className="text-4xl font-light text-[#0a2e1d] mb-6">
            Four National Parks,
            <span className="block text-[#0a2e1d] font-normal mt-2">Endless Adventures</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Discover the "Land of a Thousand Hills" through its protected wilderness areas,
            each offering unique ecosystems and unforgettable wildlife experiences.
          </p>
        </div>

        {/* Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {nationalParks.map((park, index) => (
            <div key={index} className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4">
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="text-[#0a2e1d]">
                  {park.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{park.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-3">
                {park.description}
              </p>
              <div className="text-xs font-medium text-[#0a2e1d] tracking-widest uppercase">
                {park.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-[#0a2e1d] mb-2">13+</div>
              <div className="text-sm text-gray-600">Primate Species</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#0a2e1d] mb-2">4</div>
              <div className="text-sm text-gray-600">National Parks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#0a2e1d] mb-2">700+</div>
              <div className="text-sm text-gray-600">Bird Species</div>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Rwanda's dramatic vistas are endless, with excellent infrastructure making it
            easy to explore the country's natural wonders and welcoming communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/travel-with-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a2e1d] text-white hover:bg-[#1e4d2f] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
            >
              Design Your Safari
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0a2e1d] text-[#0a2e1d] hover:bg-[#0a2e1d]/5 transition-all duration-300 text-sm font-medium tracking-widest uppercase"
            >
              View Photo Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritOfAfrica;
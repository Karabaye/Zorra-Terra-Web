import React from "react";
import {
  Users,
  Binoculars,
  Mountain,
  Map,
  Heart,
  Globe,
  Leaf,
  Camera,
  Check,
} from "lucide-react";

const offerings = [
  {
    id: "corporate",
    side: "left",
    title: "Corporate Retreat & Short‑Stay",
    icon: Users,
    color: "#2C5F2D", // Forest Green
    services: ["Conferences Tour", "Team‑Building & Holidays Retreats", "Corporate Tour Packages"],
    vOffset: "-280px",
  },
  {
    id: "honeymoon",
    side: "left",
    title: "Honeymoon & Family Packages",
    icon: Heart,
    color: "#4A90E2", // Deep Blue
    services: ["Custom-Designed", "Comfort-Focused Itineraries"],
    vOffset: "-110px",
  },
  {
    id: "lake",
    side: "left",
    title: "Lake Cruises & Boat experiences",
    icon: Camera,
    color: "#6897BB", // Slate Blue
    services: ["Scenic boat cruises on a lake", "Lake Kivu, Muhazi, Bugesera, etc", "Boat, Kayaking, & Island Visits"],
    vOffset: "50px",
  },
  {
    id: "cultural",
    side: "left",
    title: "Cultural & Community Experiences",
    icon: Globe,
    color: "#8B5E3C", // Earth Brown
    services: ["Museums", "Kigali City Tours", "Arts & Community Centers"],
    vOffset: "210px",
  },
  {
    id: "wildlife",
    side: "right",
    title: "Wildlife Safaris",
    icon: Binoculars,
    color: "#064a1b",
    services: ["Akagera Game Drives", "Boat Safaris & Cruises", "Akagera Night Drives"],
    vOffset: "-220px",
  },
  {
    id: "volcano",
    side: "right",
    title: "Volcano Trekking",
    icon: Mountain,
    color: "#042d10",
    services: ["Gorilla Trekking", "Visit of The Tomb of Dian Fossey", "Volcano Mountain Hiking"],
    vOffset: "-70px",
  },
  {
    id: "nyungwe",
    side: "right",
    title: "Nyungwe National Park",
    icon: Leaf,
    color: "#034d61", // Ocean Blue
    services: ["Chimpanzee Trekking", "Zipline & Canopy Walk", "Waterfall & Rope Course"],
    vOffset: "90px",
  },
  {
    id: "hiking",
    side: "right",
    title: "Hiking, Camping & discovery",
    icon: Map,
    color: "#475569", // Slate
    services: ["Guided Local Hiking Trails", "Camping", "Caves Visits", "Ecological Parks Visits"],
    vOffset: "250px",
  },
];

const CategoryNode = ({ item }) => {
  const isLeft = item.side === "left";

  return (
    <div
      className={`absolute flex flex-col w-64 ${isLeft ? 'items-end' : 'items-start'}`}
      style={{
        top: `calc(50% + ${item.vOffset})`,
        [isLeft ? 'right' : 'left']: 'calc(50% + 120px)'
      }}
    >
      {/* Category Header Badge */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full text-white whitespace-nowrap border border-white/5 transition-transform hover:scale-105 duration-300`}
        style={{ backgroundColor: item.color }}
      >
        <item.icon size={14} className="shrink-0" />
        <span className="text-[11px] font-bold tracking-wide uppercase">{item.title}</span>
      </div>

      {/* Sub-items List with Vertical Hook */}
      <div className={`mt-3 relative w-full ${isLeft ? 'pr-4' : 'pl-4'}`}>
        <div
          className="absolute top-0 w-[1.2px] bg-white/10"
          style={{
            height: `${item.services.length * 30 - 12}px`,
            [isLeft ? 'right' : 'left']: '8px'
          }}
        />

        <div className="flex flex-col space-y-3 pt-3">
          {item.services.map((service, idx) => (
            <div key={idx} className={`relative flex items-center ${isLeft ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
              <div
                className="absolute w-3 h-[1px] bg-white/10"
                style={{
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '8px'
                }}
              />
              <span className="text-[11px] text-white/80 font-medium leading-snug">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Connector to Spine (Thinner, Neutral Grey) */}
      <svg
        className={`absolute top-5 w-24 h-48 pointer-events-none -z-10 ${isLeft ? '-right-24' : '-left-24'}`}
        viewBox="0 0 100 200"
        fill="none"
        style={{ transform: item.side === 'left' ? '' : 'scaleX(-1)' }}
      >
        <path
          d={`M 100 0 L 50 0 L 50 ${-parseInt(item.vOffset)} L 0 ${-parseInt(item.vOffset)}`}
          stroke="#9ca3af"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

const CoreOfferings = () => {
  return (
    <section className="relative bg-transparent min-h-[1000px] py-20 flex items-center justify-center overflow-hidden">
      {/* Central Spinal Line */}
      <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-[1px] bg-gray-400 -translate-x-1/2" />

      {/* Title Section */}
      <div className="absolute top-10 left-0 right-0 text-center">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Zoravia Terra Journeys: <span className="text-[#D4A574]">Core Offerings</span>
        </h2>
        <div className="mt-3 w-16 h-1 bg-[#D4A574] mx-auto rounded-full" />
      </div>

      {/* Mobile View - Stacked Sections */}
      <div className="lg:hidden container mx-auto px-6 py-20">
        <div className="space-y-10">
          {offerings.map(item => (
            <div key={item.id} className="relative">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white w-fit border border-white/5 mb-4" style={{ backgroundColor: item.color }}>
                <item.icon size={14} />
                <h4 className="font-bold text-[11px] uppercase tracking-wide">{item.title}</h4>
              </div>
              <ul className="space-y-3 pl-4 border-l border-white/10 ml-3">
                {item.services.map((s, i) => (
                  <li key={i} className="text-white/70 text-[11px] font-medium flex items-center gap-2">
                    <div className="h-[1px] w-3 bg-white/10" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Diagram View */}
      <div className="hidden lg:block relative w-full max-w-6xl h-[800px]">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-[#031d3d]/80 backdrop-blur-xl p-1.5 rounded-full border-2 border-[#D4A574]/20 w-48 h-48 overflow-hidden flex items-center justify-center group transition-all duration-700 hover:border-[#D4A574]/40">
            <div className="bg-white w-full h-full flex flex-col items-center justify-center rounded-full p-6 transition-colors duration-700 group-hover:bg-slate-50">
              <img
                src="/images/logo.png"
                alt="Zoravia Logo"
                className="w-32 h-auto mb-1 transition-transform duration-700 group-hover:scale-110"
              />
              <span className="text-[#064a1b] text-[8px] font-bold uppercase tracking-[0.4em] mt-1 opacity-80">Offerings</span>
            </div>
          </div>
        </div>

        {/* Categories and Branches */}
        {offerings.map(item => (
          <CategoryNode key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CoreOfferings;

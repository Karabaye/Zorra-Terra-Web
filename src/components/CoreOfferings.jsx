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
    vOffset: "-320px",
  },
  {
    id: "honeymoon",
    side: "left",
    title: "Honeymoon & Family Packages",
    icon: Heart,
    color: "#4A90E2", // Deep Blue
    services: ["Custom-Designed", "Comfort-Focused Itineraries"],
    vOffset: "-130px",
  },
  {
    id: "lake",
    side: "left",
    title: "Lake Cruises & Boat experiences",
    icon: Camera,
    color: "#6897BB", // Slate Blue
    services: ["Scenic boat cruises on a lake", "Lake Kivu, Muhazi, Bugesera, etc", "Boat, Kayaking, & Island Visits"],
    vOffset: "60px",
  },
  {
    id: "cultural",
    side: "left",
    title: "Cultural & Community Experiences",
    icon: Globe,
    color: "#8B5E3C", // Earth Brown
    services: ["Museums", "Kigali City Tours", "Arts & Community Centers"],
    vOffset: "250px",
  },
  {
    id: "wildlife",
    side: "right",
    title: "Wildlife Safaris",
    icon: Binoculars,
    color: "#064a1b",
    services: ["Akagera Game Drives", "Boat Safaris & Cruises", "Akagera Night Drives"],
    vOffset: "-260px",
  },
  {
    id: "volcano",
    side: "right",
    title: "Volcano Trekking",
    icon: Mountain,
    color: "#042d10",
    services: ["Gorilla Trekking", "Visit of The Tomb of Dian Fossey", "Volcano Mountain Hiking"],
    vOffset: "-80px",
  },
  {
    id: "nyungwe",
    side: "right",
    title: "Nyungwe National Park",
    icon: Leaf,
    color: "#034d61", // Ocean Blue
    services: ["Chimpanzee Trekking", "Zipline & Canopy Walk", "Waterfall & Rope Course"],
    vOffset: "100px",
  },
  {
    id: "hiking",
    side: "right",
    title: "Hiking, Camping & discovery",
    icon: Map,
    color: "#475569", // Slate
    services: ["Guided Local Hiking Trails", "Camping", "Caves Visits", "Ecological Parks Visits"],
    vOffset: "300px",
  },
];

const CategoryNode = ({ item }) => {
  const isLeft = item.side === "left";

  return (
    <div
      className={`absolute flex flex-col w-72 ${isLeft ? 'items-end' : 'items-start'}`}
      style={{
        top: `calc(50% + ${item.vOffset})`,
        [isLeft ? 'right' : 'left']: 'calc(50% + 150px)'
      }}
    >
      {/* Category Header Badge */}
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-full text-white whitespace-nowrap border border-white/5 transition-transform hover:scale-105 duration-300`}
        style={{ backgroundColor: item.color }}
      >
        <item.icon size={18} className="shrink-0" />
        <span className="text-[14px] font-bold tracking-wide uppercase">{item.title}</span>
      </div>

      {/* Sub-items List with Vertical Hook */}
      <div className={`mt-4 relative w-full ${isLeft ? 'pr-6' : 'pl-6'}`}>
        <div
          className="absolute top-0 w-[1.5px] bg-white/10"
          style={{
            height: `${item.services.length * 36 - 15}px`,
            [isLeft ? 'right' : 'left']: '10px'
          }}
        />

        <div className="flex flex-col space-y-4 pt-4">
          {item.services.map((service, idx) => (
            <div key={idx} className={`relative flex items-center ${isLeft ? 'justify-end pr-5' : 'justify-start pl-5'}`}>
              <div
                className="absolute w-4 h-[1.5px] bg-white/10"
                style={{
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '10px'
                }}
              />
              <span className="text-[14px] text-white/80 font-medium leading-snug">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Connector to Spine (Thinner, Neutral Grey) */}
      <svg
        className={`absolute top-6 w-32 h-64 pointer-events-none -z-10 ${isLeft ? '-right-32' : '-left-32'}`}
        viewBox="0 0 100 200"
        fill="none"
        style={{ transform: item.side === 'left' ? '' : 'scaleX(-1)' }}
      >
        <path
          d={`M 100 0 L 50 0 L 50 ${-parseInt(item.vOffset)} L 0 ${-parseInt(item.vOffset)}`}
          stroke="#9ca3af"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

const CoreOfferings = () => {
  return (
    <section className="relative bg-transparent min-h-[1250px] py-24 flex items-center justify-center overflow-hidden">
      {/* Central Spinal Line */}
      <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-[1.5px] bg-gray-300 -translate-x-1/2" />

      {/* Title Section */}
      <div className="absolute top-10 left-0 right-0 text-center">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Zoravia Terra Journeys: <span className="text-[#4ade80]">Core Offerings</span>
        </h2>
        <div className="mt-4 w-20 h-1 bg-[#4ade80] mx-auto rounded-full" />
      </div>

      {/* Mobile View - Stacked Sections */}
      <div className="lg:hidden container mx-auto px-6 py-24">
        <div className="space-y-12">
          {offerings.map(item => (
            <div key={item.id} className="relative">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full text-white w-fit border border-white/5 mb-6" style={{ backgroundColor: item.color }}>
                <item.icon size={18} />
                <h4 className="font-bold text-sm uppercase tracking-wide">{item.title}</h4>
              </div>
              <ul className="space-y-4 pl-6 border-l-2 border-white/10 ml-4">
                {item.services.map((s, i) => (
                  <li key={i} className="text-white/70 font-medium flex items-center gap-3">
                    <div className="h-[1.5px] w-3 bg-white/10" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Diagram View */}
      <div className="hidden lg:block relative w-full max-w-7xl h-[1000px]">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-[#031d3d]/80 backdrop-blur-xl p-2 rounded-full border-4 border-[#4ade80]/20 w-64 h-64 overflow-hidden flex items-center justify-center group transition-all duration-700 hover:border-[#4ade80]/40">
            <div className="bg-white w-full h-full flex flex-col items-center justify-center rounded-full p-8 transition-colors duration-700 group-hover:bg-slate-50">
              <img
                src="/images/logo.png"
                alt="Zoravia Logo"
                className="w-40 h-auto mb-2 transition-transform duration-700 group-hover:scale-110"
              />
              <span className="text-[#064a1b] text-[10px] font-bold uppercase tracking-[0.4em] mt-2 opacity-80">Offerings</span>
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

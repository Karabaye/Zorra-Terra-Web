import React from "react";
import { motion as Motion } from "framer-motion";
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

const signatureWays = [
  {
    title: "Wilderness & Conservation Encounters",
    desc: "Slow-paced, guided wildlife experiences designed for meaningful observation and once in lifetime experience. Every journey supports Rwanda’s conservation ethic while offering comfort, space, and expert guidance in protected landscapes. ",
    icon: Binoculars,
  },
  {
    title: "Primate & Rainforest Exploration",
    desc: "Thoughtfully structured encounters in Rwanda’s ancient rainforests and mountain volcanoes, including gorilla trekking and chimpanzee tracking. Designed for depth, rare moments, and reflection, allowing guests to experience natural habitats and connect with nature in its purest form",
    icon: Leaf,
  },
  {
    title: "Scenic Rwanda & Lakeside Moments",
    desc: "Curated journeys through Rwanda’s rolling hills, Rift Valley landscapes, volcanic scenery, and serene lakeshores. These experiences are designed for reflection, photography, and quiet appreciation of Rwanda’s natural beauty. ",
    icon: Mountain,
  },
  {
    title: "Culture, Memory & Contemporary Life",
    desc: "Authentic encounters that reveal Rwanda’s history, resilience, and evolving creative culture. From community engagements to curated city explorations, each experience is guided with respect, context, and cultural sensitivity. ",
    icon: Globe,
  },
  {
    title: "Private Retreats & Personal Celebrations",
    desc: "Thoughtfully designed journeys for couples, families, and small groups seeking privacy, connection, and meaningful time together. Ideal for honeymoons, anniversaries, family escapes, and special milestonesEach experience is tailored to your pace and preferences, blending comfort, scenic locations, and discreet on-ground support to create effortless and memorable moments in Rwanda.",
    icon: Heart,
  },
];

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
      <Motion.div
        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-2 px-3 py-2 rounded-full text-white whitespace-nowrap border border-white/5 transition-transform hover:scale-105 duration-300 shadow-lg`}
        style={{ backgroundColor: item.color }}
      >
        <item.icon size={14} className="shrink-0" />
        <span className="text-[11px] font-bold tracking-wide uppercase">{item.title}</span>
      </Motion.div>

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
            <Motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${isLeft ? 'justify-end pr-4' : 'justify-start pl-4'}`}
            >
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
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Connector (Desktop Only) */}
      <svg
        className={`absolute top-5 w-24 h-48 pointer-events-none -z-10 ${isLeft ? '-right-24' : '-left-24'} opacity-40`}
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
    <section className="relative bg-[#021732] py-32 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4A574]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#034d61]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. MAIN HEADER */}
      <div className="container mx-auto px-6 mb-24 relative z-20 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >

          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Our Core <span className="text-white">Offering</span>
          </h2>
          <div className="mt-6 w-16 h-[1.5px] bg-[#D4A574]/60 mx-auto rounded-full" />
        </Motion.div>
      </div>

      {/* 2. SIGNATURE WAYS GRID */}
      <div className="container mx-auto px-6 mb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {signatureWays.map((way, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-[#D4A574]/30 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] mb-6 group-hover:scale-110 group-hover:bg-[#D4A574]/20 transition-all duration-500 shadow-inner">
                  <way.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-medium text-base leading-tight mb-4 group-hover:text-[#D4A574] transition-colors duration-300">
                  {way.title}
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed font-light">
                  {way.desc}
                </p>
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/0 to-[#D4A574]/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-700 pointer-events-none" />
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* 3. TRANSITION LABEL */}
      <div className="text-center mb-16 relative z-10">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-[10px] uppercase tracking-[0.6em] text-white/60"
        >
          Explore Detailed Services
        </Motion.p>
      </div>

      {/* 4. OFFERINGS DIAGRAM (MOBILE) */}
      <div className="lg:hidden container mx-auto px-6 pb-20">
        <div className="space-y-12">
          {offerings.map((item, idx) => (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl text-white w-fit border border-white/5 mb-6 shadow-xl" style={{ backgroundColor: item.color }}>
                <item.icon size={16} />
                <h4 className="font-bold text-[12px] uppercase tracking-wider">{item.title}</h4>
              </div>
              <ul className="space-y-4 pl-6 border-l border-white/10 ml-4">
                {item.services.map((s, i) => (
                  <li key={i} className="text-white/60 text-[12px] font-medium flex items-start gap-3">
                    <div className="h-[1px] w-4 bg-white/20 mt-2" />
                    <span className="flex-1">{s}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* 5. OFFERINGS DIAGRAM (DESKTOP) */}
      <div className="hidden lg:block relative w-full max-w-7xl h-[900px] mx-auto overflow-visible">
        {/* Central Spinal Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-[#031d3d]/80 backdrop-blur-2xl p-2 rounded-full border border-[#D4A574]/30 w-56 h-56 overflow-hidden flex items-center justify-center group transition-all duration-700 hover:border-[#D4A574]/60 shadow-[0_0_50px_rgba(212,165,116,0.1)]"
          >
            <div className="bg-white w-full h-full flex flex-col items-center justify-center rounded-full p-6 transition-colors duration-700 group-hover:bg-slate-50">
              <img
                src="/assets/images/logo.jpeg"
                alt="Zoravia Logo"
                className="w-36 h-auto mb-1 transition-transform duration-700 group-hover:scale-110"
              />
              <span className="text-[#064a1b] text-[9px] font-black uppercase tracking-[0.4em] mt-2 opacity-60">Services</span>
            </div>
          </Motion.div>
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


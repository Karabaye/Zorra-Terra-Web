import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plus,
  Minus,
  MapPin,
  Clock,
  Users,
  Calendar,
  Sparkles,
  Shield,
  Heart,
  Globe,
  Camera,
  Compass,
  Check,
  Mountain,
  Zap,
  MessageSquare,
  Coffee,
  Wind
} from "lucide-react";

// --- Sub-components for specialized content layout ---

const DriveTimeGrid = ({ times }) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
    {times.map((t, idx) => (
      <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2 truncate px-1">
          {t.route}
        </div>
        <div className="text-[#4ade80] font-medium text-sm">
          {t.time}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    {items.map((item, idx) => (
      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-[#4ade80]/30 transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-[#064a1b]/20 flex items-center justify-center text-[#4ade80] shrink-0 group-hover:scale-110 transition-transform">
          <item.icon size={18} />
        </div>
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-tight mb-1">{item.title}</h5>
          <p className="text-xs text-white/60 leading-relaxed font-light">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- Premium Dropdown Component ---

const PremiumDropdown = ({ section, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-light tracking-wide transition-colors duration-300 ${isOpen ? "text-[#4ade80]" : "text-white group-hover:text-[#4ade80]"
          }`}>
          {section.label}
        </span>

        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? "bg-[#4ade80] border-[#4ade80] text-[#021732]" : "text-white/60 group-hover:border-white/40"
          }`}>
          <Plus size={16} className={`absolute transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : "opacity-100"}`} />
          <Minus size={16} className={`absolute transition-transform duration-300 ${isOpen ? "opacity-100" : "-rotate-90 opacity-0"}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 opacity-80 text-white/80 font-light leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JourneyBlueprint = ({ blueprint }) => {
  const [openSection, setOpenSection] = useState(0);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-32 lg:mb-48"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Content Column */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <div className="mb-10 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {blueprint.title}
            </h2>

            {blueprint.tagline && (
              <p className="text-[#4ade80] text-lg font-light italic tracking-wide">
                {blueprint.tagline}
              </p>
            )}

            {blueprint.description && (
              <p className="text-white/60 font-light leading-relaxed">
                {blueprint.description}
              </p>
            )}
          </div>

          <div className="border-t border-white/10 mb-10">
            {blueprint.sections.map((section, idx) => (
              <PremiumDropdown
                key={idx}
                section={section}
                isOpen={openSection === idx}
                onToggle={() => setOpenSection(openSection === idx ? -1 : idx)}
              />
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/booking"
              state={{ packageName: blueprint.title }}
              className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
            >
              Book This Journey
              <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-32 relative group">
          <div className="absolute inset-0 bg-[#4ade80] rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#021732]">
            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={blueprint.image}
                alt={blueprint.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021732] via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </Motion.div >
  );
};

// --- Main Page ---

const TravelWithUs = () => {
  const journeys = [
    {
      title: "The Heart of Rwanda",
      tagline: "(A journey designed to be lived, not rushed)",
      image: "/assets/imgs/The Heart of Rwanda.png",
      tags: ["Wildlife", "Past & Modern Rwanda", "Primate Life", "Slow Travel"],
      sections: [
        {
          label: "Who This Journey Is For",
          content: "Ideal for first-time visitors, curious travelers, couples, families, storytellers, and creators who want context, access, and authenticity, not rushed sightseeing. Easily adapted for premium travelers seeking comfort and privacy, without losing real connection."
        },
        {
          label: "How This Journey Feels",
          content: "Active mornings, slow evenings. Wild spaces, everyday city life, meaningful conversations, and time to pause."
        },
        {
          label: "Travel Details – What You Experience",
          content: (
            <div className="space-y-8 pt-4">
              <p className="text-[#4ade80] text-sm italic mb-4">Select or demand what matters most to you — nothing is fixed.</p>
              <ul className="space-y-6">
                {[
                  {
                    title: "Wildlife & Conservation-Big Five Safaris",
                    desc: "Explore Akagera National Park through boat cruises on lake Ihema, safaris day or night game drives, Hot air balloon safaris, optional camping or lodge stays, and meaningful community conservation experiences."
                  },
                  {
                    title: "Kigali: Memory, Craft & Modern Life",
                    desc: "Discover Kigali beyond the guidebooks. — Kigali Through Local Eyes, time for reflection at the Kigali Genocide Memorial, contemporary museums, arts centers, cafés, and dining that reveal Rwanda’s evolutional identity."
                  },
                  {
                    title: "Lakeside Escape",
                    desc: "Slow down along the shores of Lake Kivu in Karongi, a scenic boat cruises, hike, island visit, and lakeside living. Stay at a lodge, hotel, or resort of your preference, creating space for rest, reflection, and a deeper connection with the landscape."
                  },
                  {
                    title: "Primate Life & Forests",
                    desc: "Trek through one of Africa’s oldest rainforests to observe habituated chimpanzees in Nyungwe National Park. Explore other activities in forest such as canopy walks, bird watching, waterfalls, guided forest trails, etc"
                  },
                  {
                    title: "Cultural Heritage: Huye & Nyanza",
                    desc: "Discover the origins of Rwandan culture and kingship through immersive heritage experiences in Huye and Nyanza. Explore royal traditions, Inyambo, and cultural narratives that connect past and present, offering a deeper understanding of Rwanda’s identity beyond what is seen."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mt-2 shrink-0" />
                    <div>
                      <strong className="block text-white text-sm uppercase tracking-wider mb-1">{item.title}</strong>
                      <span className="text-white/60 text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        },
        {
          label: "Journey Rhythm",
          content: (
            <div className="space-y-6 pt-2">
              <ul className="space-y-3 mb-6">
                {[
                  "Active mornings when energy is high",
                  "Slow afternoons and evenings for rest, reflection, or conversation",
                  "Travel days are intentionally spaced to avoid fatigue"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-white/80 text-sm">
                    <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] font-bold uppercase tracking-wider text-white/50">
                {[
                  { route: "Kigali → Akagera", time: "2–3 hours" },
                  { route: "Kigali → Karongi (Lake Kivu)", time: "2–3 hours" },
                  { route: "Karongi → Nyungwe", time: "2–3 hours" },
                  { route: "Nyungwe → Nyanza", time: "~3 hours" },
                  { route: "Nyanza → Kigali", time: "2–3 hours" }
                ].map((t, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-colors">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ade80] mb-1">{t.route}</div>
                    <div className="text-white text-sm">{t.time}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 italic mt-4 text-center">
                Drive times are approximate and may vary slightly depending on traffic, weather, and stay location.
              </p>
            </div>
          )
        },
        {
          label: "Journey Length",
          content: (
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ade80]">Duration</span>
              <p className="text-xl text-white font-light mt-1">From 9 Days / 8 Nights to 14 Days / 13 Nights, depending on your pace and interests.</p>
            </div>
          )
        },
        {
          label: "Travel Mood",
          content: (
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ade80]">Experience</span>
              <p className="text-lg text-white/80 font-light italic mt-1 leading-relaxed">Experience with comfort, access, storytelling, live in moments, exciting, and fun.</p>
            </div>
          )
        }
      ]
    },
    {
      title: "Into The Mist",
      tagline: "A choice led experiences combining gorilla trekking in Volcanoes National Park and Rwanda iconic experiences.",
      image: "/assets/imgs/Into The Mist.png",
      tags: ["Gorilla trek", "Big Five Africa Safari", "Nature"],
      sections: [
        {
          label: "Who This Journey Is For",
          content: "Ideal for travelers who want to experience Gorilla Trekking and pair it with one or two additional landscapes, without rushing or overpacking the trip. Perfect for first-time visitors, couples, family, small groups, and travelers seeking comfort with authenticity."
        },
        {
          label: "How This Journey Feels",
          content: "Wild, grounding, and balanced. Early mornings in nature, calm evenings."
        },
        {
          label: "What You Can Experience",
          content: (
            <div className="space-y-8 pt-4">
              <p className="text-[#4ade80] text-sm italic mb-4">The journey is shaped around your priorities.</p>
              <div className="space-y-8">
                <div>
                  <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Gorilla Trek + Big Five Safari</h6>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Volcanoes National Park + Akagera National Park</p>
                  <ul className="space-y-2 mb-3">
                    {["Gorilla trekking in misty rainforest", "Classic African safari: lions, elephants, rhinos, buffalo, giraffes", "Game drives and Lake Ihema boat safari"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-white/70 text-sm font-light">
                        <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#4ade80]/60 text-xs italic">Best for: Travelers who want jungle and savannah in one trip.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Gorilla Trek + Chimpanzee Forests</h6>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Volcanoes National Park + Nyungwe National Park</p>
                  <ul className="space-y-2 mb-3">
                    {["Gorilla trekking in Volcanoes", "Chimpanzee trekking in ancient rainforest", "Canopy walk, forest trails, tea landscapes"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-white/70 text-sm font-light">
                        <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#4ade80]/60 text-xs italic">Best for: Nature lovers and eco-focused travelers.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Gorilla Trek + Lake Kivu Relaxation</h6>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Volcanoes National Park + Lake Kivu</p>
                  <ul className="space-y-2 mb-3">
                    {["Gorilla trekking followed by lakeside slow living", "Boat rides, islands, kayaking, sunsets"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-white/70 text-sm font-light">
                        <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#4ade80]/60 text-xs italic">Best for: Honeymooners, families, and travelers who value rest.</p>
                </div>
                <div className="pt-6 p-6 bg-[#4ade80]/5 rounded-2xl border border-[#4ade80]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles size={16} className="text-[#4ade80]" />
                    <h6 className="text-[#4ade80] font-bold text-xs uppercase tracking-widest">High Recommend</h6>
                  </div>
                  <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Culture, Memory & Living History</h6>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Kigali • Genocide Memorial • Nyanza</p>
                  <ul className="space-y-2 mb-4">
                    {["Kigali through local eyes: modern life, arts, cafés", "Genocide memorial visit of your choice", "Royal history and cultural heritage in Nyanza"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-white/70 text-sm font-light">
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-xs italic">Purpose: Context, reflection, and understanding Rwanda beyond landscapes.</p>
                </div>
              </div>
            </div>
          )
        },
        {
          label: "Journey Rhythm",
          content: (
            <ul className="space-y-3 pt-2">
              {[
                "Active mornings, slow afternoons",
                "Travel days spaced for comfort",
                "Short drive times due to Rwanda’s compact size"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-white/80 text-sm">
                  <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "Journey Length",
          content: "6–10 Days, depending on your chosen pairing and pace."
        },
        {
          label: "Luxury Add-Ons Available",
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Exclusive lodges and boutique hotels",
                "Private expert guides",
                "Helicopter transfers between key destinations",
                "Curated dining and exclusive experiences"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/80">
                  <Check size={14} className="text-[#4ade80]" />
                  {item}
                </div>
              ))}
            </div>
          )
        },
        {
          label: "Travel Mood",
          content: (
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ade80]">Mood</span>
              <p className="text-lg text-white/80 font-light italic mt-1 leading-relaxed text-[#4ade80]">Once-in-a-lifetime and deeply emotional, Connection, Peace, Respect, and Excitement.</p>
            </div>
          )
        }
      ]
    },
    {
      title: "Best of Rwanda Safari & Primate Experience",
      description: "Experience Rwanda like never before moving through savannahs, volcanoes, rainforests, lakeshores, and local towns while leaving space for authentic moments, local stories, and meaningful contrasts. Embark on a Rwanda safari that combines primate trekking, cultural heritage experiences, and lakeside relaxation at Lake Kivu.",
      image: "/assets/imgs/safari buf.jpg",
      tags: ["Rwanda Safari", "Primates", "Culture & Heritage", "Lake Kivu", "Local Life"],
      sections: [
        {
          label: "Who This Journey Is For",
          content: (
            <div className="space-y-4">
              <p>Ideal for travelers who want a full Rwanda experience without feeling rushed. Perfect for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "First-time visitors",
                  "Couples or small groups",
                  "Families seeking adventure & culture",
                  "Content creators or photographers",
                  "Nature & wildlife enthusiasts"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-white/80 text-sm">
                    <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        },
        {
          label: "How This Journey Feels",
          content: (
            <div className="space-y-4 pt-2">
              <p>Wild mornings, calm afternoons, relaxed evenings.</p>
              <p className="text-white/60 font-light italic text-sm">Each region adds contrast without overwhelming the journey.</p>
            </div>
          )
        },
        {
          label: "What You Can Choose to Experience",
          content: (
            <div className="space-y-6 pt-4">
              <p className="text-[#4ade80] text-sm italic mb-4">Flexible and personalized — nothing is fixed.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Kigali: Day & Night", desc: "Explore community, cafés, local rhythms, and a thoughtful memorial visit." },
                  { title: "Big 5 Safari & Conservation", desc: "Game drives in Akagera, boat safari on Lake Ihema, and community conservation links." },
                  { title: "Primates & Volcanic Landscapes", desc: "Golden Monkey Trekking (easier photocentric alternative) and Musanze volcanic sites." },
                  { title: "Lakeside Pause", desc: "Gisenyi & Lake Kivu walks, boat cruises, and relaxing evenings." },
                  { title: "Royal Heritage & Cultural Memory", desc: "Nyanza King’s Palace and Huye Museum highlighting history and identity." },
                  { title: "Rainforest & Biodiversity", desc: "Nyungwe National Park: Canopy walks, Chimpanzee trekking, and waterfalls." }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 group hover:border-[#4ade80]/20 transition-all">
                    <h6 className="text-white font-bold text-xs uppercase tracking-widest">{item.title}</h6>
                    <p className="text-white/60 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          label: "Journey Rhythm",
          content: (
            <ul className="space-y-4 pt-2">
              {[
                { h: "Active mornings", d: "Adventure and exploration when energy is high" },
                { h: "Slower afternoons & evenings", d: "Reflection, rest, or meaningful interactions" }
              ].map((item, i) => (
                <li key={i}>
                  <strong className="block text-[#4ade80] text-[10px] uppercase tracking-widest mb-1">{item.h}</strong>
                  <span className="text-white/80 text-sm font-light">{item.d}</span>
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "Journey Length",
          content: "Typically, 9–12 Days, adjusted based on your pace, depth of experience, and time desired."
        },
        {
          label: "Travel Mood",
          content: "Breathtaking, Awe, Gratitude, Connection, Adventure, Wonders, Fun and Excitement."
        }
      ]
    },
    {
      title: "Kigali, Unfiltered",
      tagline: "Explore the city through the eyes of locals, uncover hidden stories, and experience moments that stay with you.",
      image: "/assets/imgs/conso.jpg",
      tags: ["Kigali City", "Local Life", "Culture & Creativity", "Stories"],
      sections: [
        {
          label: "Who This Journey Is Built For",
          content: (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["International travelers with limited time", "Conference & Summit attendees", "Content creators & YouTubers", "Curious storytellers"].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-white/80 text-sm">
                  <div className="w-1 h-1 bg-[#4ade80] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "How This Journey Feels",
          content: "Relaxation evening, journey adapts to your interests, energy, and purpose."
        },
        {
          label: "What You Experience",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { h: "Life in Kigali", d: "Ground-level guided walks through local markets, neighborhoods, and community hubs." },
                { h: "Culture You Participate In", d: "Hands-on traditional cooking sessions and moments with local dance troupes." },
                { h: "Memory & Modern Rwanda", d: "Reflective visits to memorials and creative spaces shaping today’s Rwanda." },
                { h: "Outdoor & Adventures", d: "Eco-parks, cycling, viewpoint walks, golf, and curated local food/drink spots." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 group hover:border-[#4ade80]/20 transition-all">
                  <h6 className="text-[#4ade80] font-bold text-[10px] uppercase tracking-widest">{item.h}</h6>
                  <p className="text-white/80 text-xs leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          )
        },
        {
          label: "How This Journey Makes You Feel",
          content: "Safe, Relaxed, Connected, Engaged, Impactful, and Inspired."
        },
        {
          label: "Journey Length",
          content: "Half-day | Full-day | Flexible multi-day city immersion. Private, small-group, or creator-focused."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#4ade80]/30 selection:text-white pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 container mx-auto px-4 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center gap-4">
            <Motion.span
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 0.8 }}
              transition={{ duration: 1.5 }}
              className="text-[10px] font-bold uppercase text-[#4ade80] select-none"
            >
              Travel With Us
            </Motion.span>
            <h1 className="text-7xl md:text-9xl font-light italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Journey&nbsp;<span className="text-white/20">Blueprints</span>
            </h1>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-white/90">Itineraries Designed Around You</h2>
            <p className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed">
              Discover Rwanda beyond the usual highlights. Our flexible journey blueprints are designed around your pace, interests, and purpose—connecting you with the real communities, authentic experiences, and unhurried moments. Experience Rwanda as it <strong>truly feels</strong>, safely, privately, and memorably.
            </p>
          </div>
        </Motion.div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl">
        {journeys.map((j, i) => (
          <JourneyBlueprint key={i} blueprint={j} />
        ))}
      </div>

      {/* Final CTA */}
      <section className="text-center pt-20 pb-10">
        <div className="max-w-2xl mx-auto space-y-10 group">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-light italic" style={{ fontFamily: 'Dancing Script, cursive' }}>Ready to Begin Your Story?</h3>
          </div>
          <Link
            to="/booking"
            className="group inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase border-b-2 border-[#4ade80]/20 pb-2 hover:border-[#4ade80] transition-all duration-500"
          >
            Start Your Custom Experience
            <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TravelWithUs;

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Star = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

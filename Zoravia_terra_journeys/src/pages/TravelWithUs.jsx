import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plus,
  Minus,
  Check,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Coffee,
  Calendar,
  Zap
} from "lucide-react";

// --- Sub-components for specialized content layout ---

const PremiumDropdown = ({ section, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/5 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${isOpen ? "text-[#D4A574]" : "text-white/80 group-hover:text-[#D4A574]"
          }`}>
          {section.label}
        </span>

        <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border transition-all duration-300 ${isOpen ? "bg-[#D4A574] border-[#D4A574] text-[#021732]" : "border-white/10 text-white/30 group-hover:border-white/40"
          }`}>
          <Plus size={10} className={`absolute transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : "opacity-100"}`} />
          <Minus size={10} className={`absolute transition-transform duration-300 ${isOpen ? "opacity-100" : "-rotate-90 opacity-0"}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-1">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-[13px] md:text-sm text-white/60 font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JourneyBlueprint = ({ blueprint, index }) => {
  const [openSection, setOpenSection] = useState(0);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-20 lg:mb-28"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
        {/* Compact Image Column - Alternate order */}
        <div className={`${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'} relative group`}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[4/5] max-w-[420px] mx-auto lg:mx-0">
            <Motion.img
              src={blueprint.image}
              alt={blueprint.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/60 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Compact Content Column */}
        <div className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'} flex flex-col justify-center`}>
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              {blueprint.tags.map((tag, i) => (
                <span key={i} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-[#D4A574]/5 text-[#D4A574]/50 border border-[#D4A574]/10">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight">
              {blueprint.title}
            </h2>

            {blueprint.tagline && (
              <p className="text-[#D4A574] text-lg font-light italic" style={{ fontFamily: 'var(--title-font)' }}>
                {blueprint.tagline}
              </p>
            )}

            {blueprint.description && (
              <p className="text-white/40 font-light leading-relaxed text-sm max-w-md">
                {blueprint.description}
              </p>
            )}
          </div>

          <div className="border-t border-white/5 mb-8">
            {blueprint.sections.map((section, idx) => (
              <PremiumDropdown
                key={idx}
                section={section}
                isOpen={openSection === idx}
                onToggle={() => setOpenSection(openSection === idx ? -1 : idx)}
              />
            ))}
          </div>

          <div>
            <Link
              to="/booking"
              state={{ packageName: blueprint.title }}
              className="group inline-flex items-center text-[10px] font-bold tracking-[0.3em] text-[#D4A574] uppercase border-b border-[#D4A574]/10 pb-1.5 hover:border-[#D4A574]/50 transition-all duration-500"
            >
              Design your version of {blueprint.title}
              <ArrowRight className="ml-3 h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </Motion.div >
  );
};

const TravelWithUs = () => {
  const journeys = [
    {
      title: "The Heart of Rwanda",
      tagline: "(A journey designed to be lived, not rushed)",
      image: "/assets/imgs/The Heart of Rwanda.png",
      tags: ["Wildlife", "Past & Modern Rwanda", "Primate Life", "Slow Travel"],
      description: "Discover Rwanda beyond the usual highlights. Our flexible journey blueprints are designed around your pace, interests, and purpose connecting you with real communities, authentic experiences, and unhurried moments.",
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
            <div className="space-y-6 pt-3">
              <p className="text-[#D4A574] text-xs italic mb-3">Select or demand what matters most to you — nothing is fixed.</p>
              <ul className="space-y-4">
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
                  <li key={i} className="flex gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#D4A574] mt-2 shrink-0" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">{item.title}</strong>
                      <span className="text-white/60 text-xs leading-relaxed">{item.desc}</span>
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
            <div className="space-y-4 pt-2">
              <ul className="space-y-2 mb-4">
                {[
                  "Active mornings when energy is high",
                  "Slow afternoons and evenings for rest, reflection, or conversation",
                  "Travel days are intentionally spaced to avoid fatigue"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-white/80 text-xs">
                    <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-wider text-white/50">
                {[
                  { route: "Kigali → Akagera", time: "2–3 hours" },
                  { route: "Kigali → Karongi", time: "2–3 hours" },
                  { route: "Karongi → Nyungwe", time: "2–3 hours" },
                  { route: "Nyungwe → Nyanza", time: "~3 hours" },
                  { route: "Nyanza → Kigali", time: "2–3 hours" }
                ].map((t, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-colors text-center">
                    <div className="text-[9px] font-bold uppercase text-[#D4A574] mb-0.5">{t.route}</div>
                    <div className="text-white text-xs">{t.time}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-[10px] italic mt-2">Drive times are approximate and may vary slightly depending on traffic, weather, and stay location.</p>
            </div>
          )
        },
        {
          label: "Journey Length",
          content: "From 9 Days / 8 Nights to 14 Days / 13 Nights, depending on your pace and interests."
        },
        {
          label: "Travel Mood",
          content: "Experience with comfort, access, storytelling, live in moments, exciting, and fun."
        }
      ]
    },
    {
      title: "Into The Mist",
      tagline: "(Gorilla trek • Big Five Africa Safari • Nature)",
      image: "/assets/imgs/Into The Mist.png",
      description: "A choice led experiences combining gorilla trekking in Volcanoes National Park and Rwanda iconic experiences.",
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
            <div className="space-y-6 pt-3">
              <p className="text-[#D4A574] text-xs italic mb-4">You choose what to include — the journey is shaped around your priorities.</p>
              <div className="space-y-6">
                <div>
                  <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Gorilla Trek + Big Five Safari</h6>
                  <p className="text-white/50 text-[10px] uppercase mb-1">Volcanoes National Park + Akagera National Park</p>
                  <ul className="space-y-1.5">
                    {["Gorilla trekking in misty rainforest", "Classic African safari: lions, elephants, rhinos, buffalo, giraffes", "Game drives and Lake Ihema boat safari"].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-white/70 text-xs font-light">
                        <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-[10px] mt-2 italic">Best for: Travelers who want jungle and savannah in one trip.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Gorilla Trek + Chimpanzee Forests</h6>
                  <p className="text-white/50 text-[10px] uppercase mb-1">Volcanoes National Park + Nyungwe National Park</p>
                  <ul className="space-y-1.5">
                    {["Gorilla trekking in Volcanoes", "Chimpanzee trekking in ancient rainforest", "Canopy walk, forest trails, tea landscapes"].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-white/70 text-xs font-light">
                        <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-[10px] mt-2 italic">Best for: Nature lovers and eco-focused travelers.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Gorilla Trek + Lake Kivu Relaxation</h6>
                  <p className="text-white/50 text-[10px] uppercase mb-1">Volcanoes National Park + Lake Kivu</p>
                  <ul className="space-y-1.5">
                    {["Gorilla trekking followed by lakeside slow living", "Boat rides, islands, kayaking, sunsets"].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-white/70 text-xs font-light">
                        <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-[10px] mt-2 italic">Best for: Honeymooners, families, and travelers who value rest.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-2">High Recommend: Culture, Memory & Living History</h6>
                  <p className="text-white/50 text-[10px] uppercase mb-1">Kigali • Genocide Memorial • Nyanza</p>
                  <ul className="space-y-1.5">
                    {["Kigali through local eyes: modern life, arts, cafés", "Genocide memorial visit of your choice (guided or self-paced)", "Royal history and cultural heritage experiences in Nyanza"].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-white/70 text-xs font-light">
                        <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-[10px] mt-2 italic">Purpose: Context, reflection, and understanding Rwanda beyond landscapes.</p>
                </div>
              </div>
            </div>
          )
        },
        {
          label: "Journey Rhythm",
          content: (
            <ul className="space-y-2">
              {[
                "Active mornings, slow afternoons",
                "Travel days spaced for comfort",
                "Short drive times due to Rwanda’s compact size"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center text-white/80 text-xs">
                  <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
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
            <ul className="space-y-2">
              {[
                "Exclusive lodges and boutique hotels",
                "Private expert guides",
                "Helicopter transfers between key destinations",
                "Curated dining and exclusive experiences only"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center text-white/80 text-xs">
                  <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "Travel Mood",
          content: "Once-in-a-lifetime and deeply emotional, Connection, Peace, Respect, and Excitement."
        }
      ]
    },
    {
      title: "Best of Rwanda Safari & Primate Experience",
      tagline: "(Rwanda Safari • Primates • Culture & Heritage • Lake Kivu • Local Life)",
      description: "Experience Rwanda like never before moving through savannahs, volcanoes, rainforests, lakeshores, and local towns while leaving space for authentic moments, local stories, and meaningful contrasts. Embark on a Rwanda safari that combines primate trekking, cultural heritage experiences, and lakeside relaxation at Lake Kivu.",
      image: "/assets/imgs/safari buf.jpg",
      tags: ["Rwanda Safari", "Primates", "Culture & Heritage", "Lake Kivu"],
      sections: [
        {
          label: "Who This Journey Is For",
          content: (
            <div>
              <p className="text-white/80 mb-2">Ideal for travelers who want a full Rwanda experience without feeling rushed. Perfect for:</p>
              <ul className="space-y-1">
                {["First-time visitors", "Couples or small groups", "Families seeking adventure and culture", "Content creators or photographers", "Travelers looking for nature, wildlife, and authentic local life"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        },
        {
          label: "How This Journey Feels",
          content: "Wild mornings, calm afternoons, relaxed evenings. Each region adds contrast without overwhelming the journey."
        },
        {
          label: "What You Can Choose to Experience",
          content: (
            <div className="space-y-6 pt-3">
              <p className="text-[#D4A574] text-xs italic mb-3">Flexible and personalized — nothing is fixed</p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Kigali: Day & Night",
                    desc: "Explore Kigali, community, cafés, and modern rhythms. Optional night experiences. Thoughtful visit to the Gisozi Genocide Memorial."
                  },
                  {
                    title: "Big 5 Safari & Conservation",
                    desc: "Game drives in Akagera National Park (day or night options). Boat safari on Lake Ihema. Community experiences showing how conservation and local life connect."
                  },
                  {
                    title: "Primates & Volcanic Landscapes",
                    desc: "Golden Monkey Trekking in Volcanoes National Park is an easier alternative to gorilla trekking offering rare photo opportunities of these colorful primates. The trek is easy one because it is less physically demanding. Musanze Volcanic Landscape: guided visits to sites such as the Dian Fossey Gorilla Fund campus, twin lakes, caves, and eco-parks."
                  },
                  {
                    title: "Lakeside Pause",
                    desc: "Gisenyi & Lake Kivu experiences. Lakeside walks, boat cruises, and relaxing evenings."
                  },
                  {
                    title: "Royal Heritage & Cultural Memory",
                    desc: "Cultural experiences at the Nyanza King’s Palace and Huye Museum. Visits highlighting Rwanda’s history, identity, and continuity rather than staged performances."
                  },
                  {
                    title: "Rainforest & Biodiversity- Nyungwe National Park experiences",
                    desc: "Canopy walk, Chimpanzee trekking, Waterfalls and forest trails."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#D4A574] mt-2 shrink-0" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">{item.title}</strong>
                      <span className="text-white/60 text-xs leading-relaxed">{item.desc}</span>
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
            <ul className="space-y-2">
              {[
                "Active mornings: adventure and exploration when energy is high",
                "Slower afternoons & evenings: reflection, rest, or meaningful interactions"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center text-white/80 text-xs">
                  <div className="w-1 h-1 bg-[#D4A574] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "Journey Length",
          content: (
            <div>
              <p className="text-white/80 mb-1">Typically, 9–12 Days, adjusted based on:</p>
              <ul className="space-y-1">
                {["Your pace", "Depth of primate and forest experiences", "Time desired by the lake or in Kigali"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        },
        {
          label: "Travel Mood",
          content: "Breathtaking, Awe, Gratitude, Connection, Adventure, Wonders, Fun and Excitement."
        }
      ]
    },
    {
      title: "Kigali, Unfiltered",
      tagline: "(Kigali City • Local Life • Culture & Creativity • Stories)",
      description: "Explore the city through the eyes of locals, uncover hidden stories, and experience moments that stay with you.",
      image: "/assets/imgs/0001.jpg",
      tags: ["Kigali City", "Local Life", "Culture & Creativity", "Stories"],
      sections: [
        {
          label: "Who This Journey Is Built For",
          content: (
            <ul className="space-y-1">
              {[
                "International travelers with limited time in Kigali",
                "Conference and summit attendees on short stays",
                "Content creators, YouTubers, and storytellers",
                "Curious travelers"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center text-white/60 text-xs">
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          )
        },
        {
          label: "How This Journey Feels",
          content: "Relaxation evening, journey adapts to your interests, energy, and purpose"
        },
        {
          label: "What You Experience",
          content: (
            <div className="space-y-6 pt-3">
              <ul className="space-y-4">
                {[
                  {
                    title: "Life in Kigali (Ground-Level Access)",
                    desc: "Guided walks through local markets and neighborhoods. Visits to community hubs and youth-led initiatives. Real stories."
                  },
                  {
                    title: "Culture You Participate In",
                    desc: "Hands-on traditional cooking sessions. Traditional dance troupes."
                  },
                  {
                    title: "Memory & Modern Rwanda",
                    desc: "Guided reflective visit to the Kigali Genocide Memorial. Visits to modern museums and creative spaces shaping today’s Rwanda."
                  },
                  {
                    title: "Outdoor & Adventures",
                    desc: "City parks and eco-parks visit. Cycling routes through safe, scenic neighborhoods. Light hiking and viewpoint walks. Optional golf sessions. Curated food and drink recommendations—from local favorites to refined spots."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#D4A574] mt-2 shrink-0" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">{item.title}</strong>
                      <span className="text-white/60 text-xs leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
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
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 text-center overflow-hidden">
        {/* Subtle Background Glow */}
        <Motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#D4A574] blur-[100px] pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center gap-3">
              <Motion.span
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 0.8 }}
                transition={{ duration: 1.5 }}
                className="text-[9px] font-bold uppercase text-[#D4A574] select-none"
              >
                Travel With Us
              </Motion.span>
              <h1 className="text-4xl md:text-6xl font-light italic" style={{ fontFamily: 'var(--title-font)' }}>
                Journey&nbsp;<span className="text-white/20 not-italic font-sans">Blueprints</span>
              </h1>
            </div>
            <div className="max-w-2xl mx-auto space-y-4 pt-2">
              <h2 className="text-xl md:text-2xl font-light text-white/90">Itineraries Designed Around You</h2>
              <p className="max-w-xl mx-auto text-white/40 font-light leading-relaxed text-xs md:text-sm">
                Discover Rwanda beyond the usual highlights. Our flexible journey blueprints are designed around your pace, interests, and purpose connecting you with real communities, authentic experiences, and unhurried moments. Travel with Zoravia Terra Journeys to experience Rwanda as it truly feels, safely, privately, and memorably.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl pt-12">
        {journeys.map((j, i) => (
          <JourneyBlueprint key={i} blueprint={j} index={i} />
        ))}
      </div>

      {/* Final CTA - Premium Refinement */}
      <section className="py-32 text-center relative overflow-hidden">
        {/* Subtle Decorative Background Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="space-y-10">
            <h3 className="text-3xl md:text-4xl font-light italic" style={{ fontFamily: 'var(--title-font)' }}>Ready to Begin Your Story?</h3>

            <div className="inline-block relative group">
              {/* Button Outer Glow */}
              <div className="absolute -inset-6 bg-[#D4A574]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <Link
                to="/booking"
                className="relative flex items-center gap-6 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Custom Experience
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                {/* Premium Shine Overlay */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>
        </Motion.div>
      </section>
    </div>
  );
};

export default TravelWithUs;

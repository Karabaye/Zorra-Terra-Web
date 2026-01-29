import React from "react";

const services = [
  {
    title: "Wildlife Safaris",
    summary:
      "Tailored safaris across Rwanda’s national parks with expert trackers and naturalists.",
    bullets: [
      "Game drives in Akagera National Park",
      "Boat trips on wildlife-rich lakes",
      "End-to-end trip planning and logistics",
    ],
  },
  {
    title: "Gorilla Trekking",
    summary:
      "Seamless Volcanoes National Park expeditions that handle permits, transport, and guided tracking.",
    bullets: [
      "Permit procurement & briefing support",
      "Private transfers & lodge coordination",
      "Experienced trekking guides",
    ],
  },
  {
    title: "Chimpanzee Tracking",
    summary:
      "Immersive Nyungwe adventures that spotlight Rwanda’s playful primate communities.",
    bullets: [
      "Guided forest treks",
      "Naturalist storytelling",
      "Close yet respectful primate encounters",
    ],
  },
  {
    title: "Hiking & Outdoor Adventures",
    summary:
      "Adrenaline-filled hikes and exploratory outings for travelers who crave movement.",
    bullets: [
      "Volcano and forest hiking circuits",
      "Cave exploration, canopy walks, ziplines",
      "Camping, scenic viewpoints, trail scouting",
    ],
  },
  {
    title: "Cultural & Community Experiences",
    summary:
      "Deep connections with Rwanda’s people, history, and creative collectives.",
    bullets: [
      "Museum visits & Kigali by day/night",
      "Traditional cooking, markets, artisan workshops",
      "Community projects and park visits",
    ],
  },
  {
    title: "Lake & Water Experiences",
    summary:
      "Restful lakeside days shaped by wellness, exploration, and cultural exchange.",
    bullets: [
      "Island visits & kayaking",
      "Boat rides, hot springs, fishing",
      "Local cultural interactions on the water",
    ],
  },
  {
    title: "Honeymoon & Family Packages",
    summary:
      "Custom journeys blending romance, comfort, adventure, and age-appropriate fun.",
    bullets: [
      "Personalized itineraries & surprise moments",
      "Kid-friendly pacing & multi-room villa stays",
      "Private chefs, photographers, and keepsakes",
    ],
  },
  {
    title: "Corporate, Conference & Short-Stay",
    summary:
      "Meaningful mini-escapes for business travelers, teams, and retreat groups.",
    bullets: [
      "Tailored short tours around busy schedules",
      "Team-building, wellness, and cultural add-ons",
      "On-call coordinators for flights & venues",
    ],
  },
];

const ServicesShowcase = () => {
  return (
    <section className="bg-[#021732] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] text-[#064a1b] uppercase">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ways we bring Rwanda to life
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Every itinerary is handcrafted—from primate tracking and outdoor
            adventures to cultural immersions, lake escapes, milestone
            celebrations, and corporate retreats.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10 hover:border-white/20"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <span className="text-sm font-semibold tracking-[0.3em] text-[#064a1b] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-white/80">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#064a1b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import gorilla from "../assets/imgs/gorilla.png";
import zebra from "../assets/imgs/Zebra.png";
import chimpanzee from "../assets/imgs/chimpanzee.png";

// FadeIn component for animations
const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const valuePillars = [
  {
    title: "High-quality service & professionalism",
    description: "Expert planners, veteran guides, and concierge teams coordinate every permit, transfer, and detail so you can stay present in Rwanda.",
    icon: "🤝",
  },
  {
    title: "Every traveler feels valued",
    description: "We listen closely, adapt to comfort levels, and design moments that make families, couples, and solo travelers feel genuinely cared for.",
    icon: "🌟",
  },
  {
    title: "Memories & joyful discovery",
    description: "Itineraries weave in playful experiences—from culinary evenings to canopy walks—so your story is filled with fun and emotion.",
    icon: "🎉",
  },
  {
    title: "Honest communication & transparency",
    description: "Clear proposals, real-time updates, and open conversations make collaboration easy from planning call to farewell.",
    icon: "💬",
  },
  {
    title: "Community & culture first",
    description: "We champion artisans, storytellers, and cooperatives so travel revenue uplifts the people and traditions that make Rwanda vibrant.",
    icon: "🤲",
  },
  {
    title: "Environmental sustainability",
    description: "Low-impact logistics, conservation partners, and education programs keep Rwanda’s wildlife and landscapes thriving.",
    icon: "🌍",
  },
];

const journeyHighlights = [
  {
    title: "Gorilla trekking in misty volcanoes",
    detail: "Rise with the sun, trek through bamboo forests, and connect with mountain gorillas alongside ranger experts.",
    image: gorilla,
    gradient: "from-green-900/20 to-emerald-800/30",
  },
  {
    title: "Wildlife safaris & serene lakes",
    detail: "Choose between intimate safari circuits or lakeside dining that invites wildlife to the shoreline.",
    image: zebra,
    gradient: "from-amber-900/20 to-orange-800/30",
  },
  {
    title: "Cultural encounters & hiking",
    detail: "Meet chefs, musicians, and artisans, then hike Rwanda's hills for panoramic views and shared stories.",
    image: chimpanzee,
    gradient: "from-blue-900/20 to-cyan-800/30",
  },
];

const heroSlides = journeyHighlights.map(({ title, detail, image }) => ({
  title,
  detail,
  image,
}));

const journeySteps = [
  {
    title: "Plan with intention",
    copy: "Every route begins with a conversation about seasons, curiosity, and celebrations that matter to you.",
    icon: "🎯",
  },
  {
    title: "Immerse respectfully",
    copy: "Local guides, artisan meals, and conservation-aware partners keep every experience authentic.",
    icon: "🌿",
  },
  {
    title: "Celebrate the story",
    copy: "Each adventure concludes with a keepsake journal that honors the people, wildlife, and landscapes you met.",
    icon: "📚",
  },
];

const timeline = [
  {
    year: "2012",
    title: "Born in Kigali",
    detail: "A group of Rwandan guides and storytellers launched Zoravia Terra Journeys to keep local hospitality center stage.",
  },
  {
    year: "2016",
    title: "Deep cultural partnerships",
    detail: "Village homestays, artisan studios, and culinary tables opened doors for meaningful encounters.",
  },
  {
    year: "2021",
    title: "Conservation-first safaris",
    detail: "Carbon-conscious itineraries, ranger scholarships, and reforestation projects became part of every proposal.",
  },
  {
    year: "Today",
    title: "Journeys that give back",
    detail: "Travelers become ambassadors: their stories support new programs and celebrations in Rwanda.",
  },
];

const stats = [
  {
    label: "Journeys curated",
    value: "800+",
    detail: "Personalized trips crafted across Rwanda since 2012.",
  },
  {
    label: "Local partners",
    value: "40+",
    detail: "Guides, chefs, and artisans we proudly collaborate with.",
  },
  {
    label: "Community hours",
    value: "12,000+",
    detail: "Volunteer and training hours donated to parks and villages.",
  },
];

const missionHighlights = [
  {
    title: "Sustainable footprints",
    detail: "90% of our preferred lodges run on solar or biofuel and employ conservation graduates.",
    icon: "👣",
  },
  {
    title: "Community-first exchange",
    detail: "Every itinerary includes time with women's co-ops, culinary collectives, or artisan studios.",
    icon: "🤲",
  },
  {
    title: "Always-on support",
    detail: "Concierge teams in Kigali and Musanze coordinate transport, medical care, and last-minute pivots 24/7.",
    icon: "🛡️",
  },
];

const leadershipSpotlight = [
  {
    name: "Aline Nyirahabimana",
    role: "Founder & Lead Naturalist",
    quote: "I started Zoravia to keep Rwandan hospitality in Rwandan hands. Every guest becomes part of our extended family.",
    image: "👩🏾‍💼",
  },
  {
    name: "Emmanuel Ndayambaje",
    role: "Field Operations Director",
    quote: "From helicopters to hiking boots, logistics only matter when they allow you to stay present in the stories unfolding.",
    image: "👨🏾‍✈️",
  },
  {
    name: "Delphine Uwamariya",
    role: "Cultural Liaison",
    quote: "We make space for real conversations with chefs, dancers, beekeepers, and elders—moments you remember most.",
    image: "👩🏾‍🎨",
  },
];

const About = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[heroImageIndex] ?? heroSlides[0];

  return (
    <div className="bg-[#fafaf9] text-slate-900">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-slate-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(6,64,46,0.85), rgba(6,64,46,0.5)), url(${currentSlide?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transition: "background-image 1.5s ease",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)] pointer-events-none" />

        {currentSlide && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center px-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-6 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-white shadow-lg backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white shadow" />
                You are viewing • About us
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-6">
              <div className="max-w-3xl text-center text-white space-y-3 drop-shadow">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  {`Now featuring • ${currentSlide.title}`}
                </p>
                <p className="text-base text-white/80 leading-relaxed hidden md:block">
                  {currentSlide.detail}
                </p>
              </div>
            </div>
          </>
        )}

        <div className="container relative mx-auto grid gap-12 px-6 pb-24 pt-28 lg:grid-cols-2 lg:gap-16">
          <FadeInSection>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#0F9D58]/80 bg-white/80 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.3em] text-[#0F9D58] shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#0F9D58] animate-pulse" aria-hidden="true" />
                About Zoravia Terra Journeys
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl lg:leading-tight">
                Every journey tells a story rooted in Rwanda.
              </h1>
              <p className="text-lg leading-relaxed text-white/90 md:text-xl drop-shadow">
                Inspired by Rwanda’s thousand hills, wildlife, and vibrant communities, we choreograph travel that balances
                nature, culture, and heartfelt discovery. From misty volcanoes to lakeside retreats, every itinerary is a story worth telling.
              </p>
              <div className="space-y-4 text-sm text-slate-500">
                <p className="flex items-center gap-2 text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Curated gorilla treks, safaris, hikes, lakes, culture, and community encounters.
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Transparency, trusted partners, and regenerative practices anchor every journey.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <Link
                  to="/contact"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-all hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Plan Your Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Rwanda
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" /> Culture
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" /> Conservation
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="relative">
              <div className="grid gap-6">
                {[gorilla, zebra, chimpanzee].map((image, idx) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-3 shadow-2xl shadow-emerald-100/50 backdrop-blur-sm transition-all hover:shadow-emerald-200/70 ${
                      idx === 1 ? "lg:-translate-x-4 lg:translate-y-4" : idx === 2 ? "lg:translate-x-4" : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={image}
                        alt={`Wildlife ${idx + 1}`}
                        className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]">About Us</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Where nature, discovery, and human connection meet
            </h2>
            <div className="mt-6 space-y-5 text-lg text-slate-700 leading-relaxed">
              <p>
                Zoravia Terra Journeys is a Rwandan tour company born from a love of the thousand hills—its mist-covered volcanoes,
                shimmering lakes, living wildlife, and communities whose stories echo across every valley. We design travel that
                feels intentional and soulful, weaving Rwanda’s landscapes, culture, and people into journeys that stay with you for life.
              </p>
              <p>
                From gorilla trekking in misty forests to wildlife safaris, lakeside retreats, cultural encounters, and scenic hiking
                adventures, we curate immersive experiences that invite you to see Rwanda through the eyes of its people. We believe{" "}
                <span className="font-semibold text-slate-900">“Every Journey Tells a Story.”</span> When you travel with us, you leave with memories,
                friendships, and a deeper understanding of this remarkable country.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission & Promise Section */}
      <section className="py-20">
        <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2">
          <FadeInSection>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">Mission & Promise</p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  Journeys that uplift{' '}
                  <span className="bg-gradient-to-r from-[#0F9D58] to-amber-600 bg-clip-text text-transparent">
                    Rwanda
                  </span>{' '}
                  with every step
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  We choreograph each safari, trek, and table experience so that travelers feel grounded and the communities we
                  love feel celebrated. Our team blends decades of guiding, conservation, and hospitality to make sure impact
                  and joy move together.
                </p>
              </div>
              
              <div className="rounded-2xl border border-[#0F9D58]/20 bg-gradient-to-br from-white to-[#0F9D58]/5 p-8 shadow-xl shadow-[#0F9D58]/10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">Our Commitment</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0F9D58]/10 text-sm text-[#0F9D58]">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Transparent proposals</p>
                      <p className="mt-1 text-sm text-slate-600">Itemized guides, conservation fees, and partner impact</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-sm text-amber-600">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Hybrid itineraries</p>
                      <p className="mt-1 text-sm text-slate-600">Mix of iconic highlights and under-the-radar encounters</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Dedicated support</p>
                      <p className="mt-1 text-sm text-slate-600">Travel producers who stay in touch before, during, and after</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-6">
              {missionHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 p-8 shadow-lg transition-all hover:shadow-xl hover:shadow-emerald-100/50 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D58] to-[#0d8a4c] text-xl text-white shadow-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">Focus</p>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="mb-16 max-w-3xl space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]">Values that guide us</p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                How we carry{' '}
                <span className="bg-gradient-to-r from-[#0F9D58] to-amber-600 bg-clip-text text-transparent">
                  Rwanda forward
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We treat every guest as a storyteller. Honest communication, personalized care, and regenerative practices
                make every itinerary more than a trip.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar, index) => (
              <FadeInSection key={pillar.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-[#0F9D58]/20 bg-gradient-to-br from-white to-[#0F9D58]/30 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#0F9D58]/50 hover:-translate-y-2">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F9D58]/10 text-lg">
                        {pillar.icon}
                      </div>
                      <span className="text-sm font-bold text-[#0F9D58] bg-[#0F9D58]/10 px-3 py-1 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 to-amber-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Highlights Section */}
      <section className="py-20 bg-[#f3f1ec]">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="mb-12 text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]">Immersive journeys</p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Experiences that celebrate Rwanda's soul
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From gorilla trekking in misty volcanoes to cultural encounters and lakeside serenity, every day is crafted with intention.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {journeyHighlights.map((experience, index) => (
              <FadeInSection key={experience.title} delay={index * 150}>
                <div className="h-full rounded-3xl border border-[#0F9D58]/20 bg-white shadow-xl p-6 flex flex-col">
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <div className={`relative h-48 w-full bg-gradient-to-br ${experience.gradient}`}>
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F9D58]">Signature</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{experience.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed flex-1">{experience.detail}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">
                    Experience
                    <span className="ml-2 text-lg">→</span>
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="mb-16 max-w-3xl space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]/80">Our story</p>
              <h2 className="text-3xl font-bold md:text-4xl">Timeline of care & collaboration</h2>
              <p className="text-white/70 text-lg">
                Guided by local voices, every milestone has deepened our respect for Rwanda's landscapes and people.
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-[#0F9D58]/60 to-transparent lg:block" />
            <div className="space-y-12 pl-8 lg:pl-16">
              {timeline.map((event, index) => (
                <FadeInSection key={event.title} delay={index * 150}>
                  <div className="relative group">
                    <div className="absolute -left-10 top-4 hidden h-4 w-4 rounded-full bg-[#0F9D58] shadow-lg transition-transform group-hover:scale-125 lg:block" />
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F9D58] bg-[#0F9D58]/10 px-4 py-2 rounded-full">
                        {event.year}
                      </span>
                      <div className="h-px flex-1 bg-[#0F9D58]/30" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-white/70 leading-relaxed max-w-2xl">{event.detail}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2">
          <FadeInSection>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]">People first</p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  Meet the team guiding{' '}
                  <span className="bg-gradient-to-r from-[#0F9D58] to-amber-600 bg-clip-text text-transparent">
                    every mile
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our leadership team is rooted in Rwanda. They mentor emerging guides, champion equitable wages, and keep
                  every expedition aligned with cultural protocols.
                </p>
              </div>

              <div className="space-y-6">
                {leadershipSpotlight.map((leader) => (
                  <div
                    key={leader.name}
                    className="group rounded-2xl border border-[#0F9D58]/20 bg-gradient-to-br from-white to-[#0F9D58]/30 p-8 shadow-lg transition-all hover:shadow-xl hover:shadow-[#0F9D58]/50 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D58] to-[#0d8a4c] text-2xl text-white shadow-lg">
                        {leader.image}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">{leader.role}</p>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">{leader.name}</h3>
                        <p className="mt-4 text-slate-600 leading-relaxed italic">"{leader.quote}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-8">
              <div className="rounded-2xl border border-[#0F9D58]/20 bg-gradient-to-br from-amber-50 to-orange-50/30 p-8 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Guest perspective</p>
                <p className="mt-6 text-lg text-slate-700 leading-relaxed italic">
                  "Zoravia connected us with Kigali chefs, Lake Kivu storytellers, and gorilla guardians in one seamless
                  arc. We left grateful, humbled, and ready to give back."
                </p>
                <p className="mt-6 text-sm font-bold text-amber-700">— Ama & David, Toronto</p>
              </div>

              <div className="rounded-2xl border border-[#0F9D58]/20 bg-gradient-to-br from-white to-blue-50/30 p-8 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">Certifications</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">Rwanda Development Board licensed tour operator</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F9D58]/10 text-[#0F9D58]">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">Fair Travel Africa collective member</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">Leave No Trace & Wilderness First Responder trained guides</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Journey Steps & Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[3fr_2fr]">
          <FadeInSection>
            <div className="rounded-3xl border border-[#0F9D58]/20 bg-[#0F9D58]/40 p-10 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F9D58]">Our approach</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">From listening to celebration</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We co-create every itinerary with you—celebrating curiosities, honoring local rhythms, and keeping sustainability center stage.
              </p>
              <div className="mt-8 space-y-6">
                {journeySteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow text-[#0F9D58]">
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{step.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-[#0F9D58]/20 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F9D58]/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F9D58]">Impact</p>
                  <div className="mt-4 flex items-baseline gap-3">
                    <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F9D58]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-800">{stat.label}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{stat.detail}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F9D58] via-[#0e8f50] to-[#0d7a44] text-white">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ready to go deeper?</p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Let's build your next{' '}
                <span className="bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">
                  story together
                </span>
                .
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Begin your journey with Zoravia Terra and discover the soul of Rwanda through experiences crafted with care, respect, and purpose.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1 hover:bg-amber-50 mt-8"
              >
                Start Planning
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default About;
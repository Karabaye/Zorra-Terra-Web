import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, MapPin, Shield, Sparkles, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    .font-display { font-family: 'Cormorant Garant', Georgia, serif; }
  `}</style>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Label = ({ children }) => (
  <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4A574]/70 mb-3 font-medium">
    {children}
  </p>
);

const Divider = () => <div className="mt-5 mb-8 h-px w-20 bg-[#D4A574]" />;

// Shared wrapper: wider max-width, tighter horizontal padding
const SectionContainer = ({ children }) => (
  <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
    {children}
  </div>
);

// Left column: label + large heading + divider stacked together
// This prevents the left column from feeling empty
const SectionHeader = ({ label, heading }) => (
  <Motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col items-start"
  >
    <Motion.div variants={fadeUp} custom={0}>
      <Label>{label}</Label>
    </Motion.div>
    <Motion.h2
      variants={fadeUp}
      custom={1}
      className="font-display text-[clamp(2.8rem,4.5vw,4.5rem)] font-light text-white leading-tight"
    >
      {heading}
    </Motion.h2>
    <Divider />
  </Motion.div>
);

export default function About() {
  const founderRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: founderRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <div className="bg-[#04192e] text-white overflow-x-hidden">
      <FontLoader />


      {/* 1. OUR STORY */}
      <section className="py-24 border-b border-white/[0.05]">
        <SectionContainer>
          {/* Asymmetric grid: left column is slightly narrower to let content breathe */}
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 lg:gap-24 items-start">

            <SectionHeader label="Our Story" heading="Our Story" />

            <Motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-4 text-[15.5px] text-white/50 font-light leading-[1.9] md:pt-1"
            >
              <Motion.p variants={fadeUp} custom={0}>
                There's something special about arriving in Rwanda for the first time. The air feels different. The landscapes breathe. Everything moves at a calm, intentional rhythm.
              </Motion.p>
              <Motion.p variants={fadeUp} custom={1}>
                Many travelers come with a plan — Akagera Safari, mountain gorillas, chimpanzee tracking, cultural and historical moments to explore Kigali.
              </Motion.p>
              <Motion.p variants={fadeUp} custom={2}>
                But somewhere along the way, something shifts. Rwanda stops feeling like a destination and starts feeling like an experience.
              </Motion.p>
              <Motion.p variants={fadeUp} custom={3} className="text-white/50 font-light">
                That's where Zoravia Terra Journeys begins.
              </Motion.p>
            </Motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* 2. OUR PHILOSOPHY */}
      <section className="py-24 border-b border-white/[0.05]">
        <SectionContainer>
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 lg:gap-24 items-start">

            <SectionHeader label="Our Philosophy" heading="Our Philosophy" />

            <Motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-5 text-[15.5px] text-white/50 font-light leading-[1.9]"
            >
              <Motion.p variants={fadeUp} custom={0}>
                Because no two travelers are the same, every experience we create starts with listening. We take time to understand what excites you, how you like to travel, and what kind of moments you want to remember.
              </Motion.p>

              <div className="space-y-4">
                {[
                  "Some seek quiet luxury — space to unwind in beautiful surroundings.",
                  "Some seek connection — authentic moments with people and culture.",
                  "Others want adventure, energy, and unforgettable memories.",
                ].map((line, i) => (
                  <Motion.div key={i} variants={fadeUp} custom={1 + i} className="flex items-start gap-4 pl-4 border-l border-[#D4A574]/25">
                    <span className="text-[#D4A574] text-[9px] mt-2 shrink-0">✦</span>
                    <p className="text-[14.5px] leading-relaxed">{line}</p>
                  </Motion.div>
                ))}
              </div>

              <Motion.p variants={fadeUp} custom={4}>
                From there, we design a journey that feels natural, balanced, and seamless — not a fixed package, but yours.
              </Motion.p>
            </Motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. BEYOND TRAVELING */}
      <section className="py-24 border-b border-white/[0.05]">
        <SectionContainer>
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 lg:gap-24 items-start">

            <SectionHeader label="Beyond Traveling" heading="Beyond Traveling" />

            <Motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-5 text-[15.5px] text-white/50 font-light leading-[1.9]"
            >
              <Motion.p variants={fadeUp} custom={0}>
                Rwanda is known for its parks, wildlife, and landscapes. But we guide you into the moments that go deeper — so your journey becomes a story you carry with you.
              </Motion.p>
              <div className="grid gap-4 pt-2">
                {[
                  { icon: <Heart className="w-3.5 h-3.5" />, text: "Genuine conversations that happen off-script" },
                  { icon: <MapPin className="w-3.5 h-3.5" />, text: "Hidden gems you wouldn't find alone" },
                  { icon: <Sparkles className="w-3.5 h-3.5" />, text: "Authentic connection to the real Rwanda" },
                ].map((item, i) => (
                  <Motion.div key={i} variants={fadeUp} custom={1 + i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[#D4A574] shrink-0">{item.icon}</div>
                    <p className="text-[14px]">{item.text}</p>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. WITH YOU */}
      <section className="py-24 border-b border-white/[0.05]">
        <SectionContainer>
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 lg:gap-24 items-start">

            <SectionHeader label="The Zoravia Promise" heading={<>With You, Every Step<br className="hidden lg:block" /> of the Way</>} />

            <Motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-8"
            >
              <Motion.p variants={fadeUp} custom={0} className="text-[15.5px] text-white/50 font-light leading-[1.9]">
                We understand that travel is deeply personal. We approach every journey with professionalism, care, and discretion — so you can focus on enjoying every moment.
              </Motion.p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Detailed Planning", desc: "Every element is thought through." },
                  { title: "Real-time Support", desc: "Local team available on ground." },
                  { title: "Full Privacy", desc: "Your boundaries are always honoured." },
                  { title: "Effortless Flow", desc: "Logistics handled seamlessly." },
                ].map((item, i) => (
                  <Motion.div key={i} variants={fadeUp} custom={1 + i} className="space-y-2">
                    <p className="text-[14px] font-medium text-white/80">{item.title}</p>
                    <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                  </Motion.div>
                ))}
              </div>

              <Motion.div variants={fadeUp} custom={5} className="pt-4">
                <Link
                  to="/booking"
                  className="group relative inline-flex items-center gap-6 px-10 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:border-[#D4A574] hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C4A57B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </Motion.div>
            </Motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* FINAL: FOUNDER MESSAGE */}
      <section className="py-32">
        <SectionContainer>
          <div ref={founderRef} className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-center">

            <Motion.div style={{ y: imgY }} className="relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/8 shadow-2xl">
                <img
                  src="/assets/images/bosslady.jpeg"
                  alt="Consolee Tuyishimire — Founder"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04192e]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border border-[#D4A574]/15 rounded-2xl -z-10" />
            </Motion.div>

            <Motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 pt-12 lg:pt-0"
            >
              <Motion.div variants={fadeUp} custom={0}>
                <Label>A Message from the Heart of the Thousand Hills</Label>
                <Divider />
              </Motion.div>

              <div className="space-y-6 text-[14.5px] text-white/50 font-light leading-[1.85]">
                <Motion.p variants={fadeUp} custom={1}>
                  I have always believed that Rwanda is not just a place you see—it is a place that changes you.
                  When I founded Zoravia Terra Journey, I wanted to move away from the 'checklist' style of tourism.<br />My dream was to create a company that treats every guest like a person, not a booking number. Whether we are standing together in the mist of the Virunga Mountains or sharing a quiet moment in Kigali, my goal is for you to feel the true heartbeat of my home.
                </Motion.p>
                <Motion.p variants={fadeUp} custom={2}>
                  We don't just want to show you the beauty of our destinations; we want to ensure that every step of your journey feels safe, intentional, and entirely yours.<br />When you travel with us, you aren't just visiting a destination—you are becoming a part of our story, and we are honored to be a part of yours.
                </Motion.p>

                <Motion.div variants={fadeUp} custom={3} className="pt-4">
                  <p className="text-[#D4A574] font-medium tracking-wide">—Consolee TUYISHIMIRE</p>
                  <p className="text-[#D4A574]/60 text-xs mt-1">Founder, Zoravia Terra Journey Ltd</p>
                </Motion.div>
              </div>
            </Motion.div>

          </div>
        </SectionContainer>
      </section>

    </div>
  );
}
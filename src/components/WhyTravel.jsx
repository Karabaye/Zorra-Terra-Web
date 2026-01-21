import React from "react";
import {
  Sparkles,
  MapPinned,
  ShieldCheck,
  Users,
  Leaf,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Seamless & Stress‑Free Travel",
    description:
      "From planning to return, we handle the details so you can focus on the journey.",
    icon: Sparkles,
  },
  {
    title: "Tailored Experiences",
    description:
      "Every itinerary is crafted around your interests, pace, and preferences.",
    icon: MapPinned,
  },
  {
    title: "Transparent & Honest Service",
    description:
      "Clear pricing and open communication ensure confidence at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable On‑Ground Support",
    description:
      "Experienced guides and coordinators adapt plans and solve challenges in real time.",
    icon: Users,
  },
  {
    title: "Responsible & Meaningful Travel",
    description:
      "We respect local communities and ecosystems so you can explore responsibly.",
    icon: Leaf,
  },
  {
    title: "Convenience & Digital Access",
    description:
      "Simple booking and timely updates keep you informed wherever you are.",
    icon: Smartphone,
  },
];

const BenefitCard = ({ title, description, icon: Icon }) => (
  <div className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064a1b]/10 text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-white transition-all duration-500">
      <Icon className="h-7 w-7" />
    </div>
    <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
      {title}
    </h4>
    <p className="text-white/60 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyTravel = () => {
  return (
    <section className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#064a1b]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-light italic text-[#4ade80]"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Why travel with us
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            At Zoravia Terra Journeys, we turn expertise and care into experiences you can trust.
          </p>
          <div className="mt-6 w-20 h-1 bg-[#4ade80] mx-auto rounded-full" />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
          {benefits.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhyTravel;

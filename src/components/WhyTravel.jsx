import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    number: "01",
    title: "Seamless & Stress-Free Travel",
    description:
      "From planning to return, we handle the details so you can focus on the journey.",
  },
  {
    number: "02",
    title: "Tailored Experiences",
    description:
      "Every itinerary is crafted around your interests, fits, pace, and preferences.",
  },
  {
    number: "03",
    title: "Transparent & Honest Service",
    description:
      "Clear pricing, upfront information, and open communication ensure your comfort.",
  },
  {
    number: "04",
    title: "Reliable On-Ground Support",
    description:
      "Experienced guides and coordinators are ready to solve challenges and adapt plans in real time.",
  },
  {
    number: "05",
    title: "Responsible & Meaningful Travel",
    description:
      "We design trips that respect local communities and ecosystems, letting you explore responsibly.",
  },
  {
    number: "06",
    title: "Convenience & Digital Access",
    description:
      "Easy online booking and real-time updates keep you informed wherever you are.",
  },
];

const BenefitItem = ({ number, title, description }) => (
  <div className="group space-y-2">
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-[#D4A574] tracking-widest">{number}</span>
      <h4 className="text-sm md:text-base font-bold text-white group-hover:text-[#D4A574] transition-colors duration-300 tracking-tight">
        {title}
      </h4>
    </div>
    <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light ml-8">
      {description}
    </p>
  </div>
);

const WhyTravel = () => {
  return (
    <section className="bg-transparent py-16 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#064a1b]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl mb-12 text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Why travel with <span className="text-white">us</span>
          </h2>
          <p className="text-white/70 font-light text-sm md:text-base">
            Here's what sets us apart:
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <BenefitItem key={benefit.number} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTravel;

import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Smartphone,
  Leaf,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const About = () => {
  // --- REFINED ANIMATION VARIANTS ---
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Journeys",
      desc: "Every itinerary is tailored to your interests, preferences, and travel goals—moving beyond generic packages."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Convenience",
      desc: "Effortless booking, real-time updates, and mobile-friendly experiences make your journey seamless from start to finish."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability & Responsibility",
      desc: "We prioritize eco-friendly practices, support local communities, and protect the natural and cultural heritage of every destination."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Transparency & Responsiveness",
      desc: "Clear, honest communication and proactive support ensure you feel informed, confident, and cared for at every step."
    }
  ];

  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#4ade80]/30 selection:text-white">

      {/* 1. HERO SECTION - Refined Reveal */}
      <section className="pt-40 pb-20 text-center relative overflow-hidden">
        {/* Subtle Background Aurora */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#4ade80] to-transparent blur-[120px] pointer-events-none"
        />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <Motion.div variants={fadeUp} className="flex justify-center items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-[#4ade80]/40" />
              <Motion.span
                animate={{ letterSpacing: ["0.4em", "0.6em"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#4ade80]"
              >
                About Us
              </Motion.span>
              <div className="h-[1px] w-12 bg-[#4ade80]/40" />
            </Motion.div>

            <Motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light tracking-tight leading-[1.1]">
              Discover the <br />
              <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Magic of Rwanda</span>
            </Motion.h1>

            <Motion.p variants={fadeUp} className="text-2xl md:text-3xl text-white/40 italic leading-snug" style={{ fontFamily: "Dancing Script, cursive" }}>
              Journeys Through a Thousand Hills, Layers of Time
            </Motion.p>

            <Motion.div variants={fadeUp} className="pt-10 max-w-2xl mx-auto border-t border-white/5 mt-10">
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                Zoravia Terra Journeys Ltd creates unforgettable travel experiences across Rwanda—specializing in tailor-made safaris, gorilla trekking, chimpanzee tracking, and immersive cultural journeys.
              </p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* 2. OUR STORY - Elegant Entrance & Scroll Reveal */}
      <section className="py-32 bg-[#021732]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Story Visual with Soft Reveal */}
            <Motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageReveal}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group cursor-none"
            >
              <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 group-hover:scale-[1.02]">
                <img
                  src="/images/owner.png"
                  alt="Founder"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Subtle Animated Badge */}
              <Motion.div
                initial={{ rotate: 10, opacity: 0 }}
                whileInView={{ rotate: -2, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-[#4ade80] text-[#021732] px-10 py-8 rounded-[2rem] border-4 border-[#021732] z-20 shadow-2xl"
              >
                <p className="text-sm font-black italic mb-1" style={{ fontFamily: "Dancing Script, cursive" }}>Integrity & Heart</p>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Founded with Purpose</p>
              </Motion.div>
            </Motion.div>

            {/* Story Text - Staggered lines */}
            <Motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <Motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-light">
                  Our <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Story</span>
                </h2>
                <div className="h-[1px] w-24 bg-[#4ade80]" />
              </Motion.div>

              <div className="space-y-8 text-lg md:text-xl text-white/50 font-light leading-relaxed">
                <Motion.p variants={fadeUp}>
                  Zoravia Terra Journeys Ltd was founded at the intersection of <strong className="text-white font-medium">personal passion</strong>, professional experience, and a commitment to service excellence.
                </Motion.p>
                <Motion.p variants={fadeUp}>
                  For over five years, I worked in private sector development in Rwanda, supporting SMEs, startups, and cooperatives through business advisory services, project implementation, and capacity building. My work involved close collaboration with international organizations, government ministries, and private sector actors, focusing on <span className="text-[#4ade80]">accountability and transparency.</span>
                </Motion.p>
                <Motion.p variants={fadeUp}>
                  Alongside my career, I’ve always had a passion for creating experiences and caring for people. From an early age, I enjoyed organizing events with attention to every detail, ensuring comfort, enjoyment, and genuine care in everything I do.
                </Motion.p>
                <Motion.div variants={fadeUp} className="p-8 bg-white/5 rounded-3xl border-l-4 border-[#4ade80] italic text-white/80">
                  "I wanted to build a tour company that embodies high-quality service—consistency, transparency, accountability, and experiences that travelers can enjoy effortlessly."
                </Motion.div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY - Deep Immersive Scroll */}
      <section className="py-40 relative bg-[#031d3d]/50">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
          <Motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white/90 font-light italic leading-tight"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            "I founded Zoravia Terra Journeys to bring the same professionalism and care I value in business to every journey."
          </Motion.p>
          <Motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#4ade80] mx-auto"
          />
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/60 font-light leading-relaxed"
          >
            Today, Zoravia Terra Journeys delivers stress-free, meaningful travel across Rwanda and East Africa guided with professionalism, integrity, and heart.
          </Motion.p>
        </div>
      </section>

      {/* 4. OUR VALUES - Tactical Cards with Hover Effects */}
      <section className="py-40 bg-[#021732]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-light"
            >
              Our <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Values</span>
            </Motion.h2>
          </div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((v, i) => (
              <Motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-[#4ade80]/30 transition-all duration-500 overflow-hidden relative group"
              >
                {/* Visual Glow on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#4ade80]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-[#021732] transition-colors duration-700">
                    {v.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold tracking-tight">{v.title}</h4>
                    <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA - Dynamic Underline */}
      <section className="py-40 text-center relative overflow-hidden">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <Link
            to="/booking"
            className="group relative inline-flex items-center text-sm font-bold tracking-[0.4em] text-[#4ade80] uppercase pb-3 transition-all duration-500"
          >
            Start Your Journey
            <ArrowRight className="ml-6 h-5 w-5 transition-transform group-hover:translate-x-4" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4ade80]/20" />
            <Motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4ade80] origin-left"
            />
          </Link>
        </Motion.div>
      </section>

    </div>
  );
};

export default About;

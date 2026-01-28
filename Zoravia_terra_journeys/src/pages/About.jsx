import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Smartphone,
  Leaf,
  MessageSquare,
  ArrowRight,
  Sparkles
} from "lucide-react";

const About = () => {
  const containerRef = useRef(null);

  // --- REFINED ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const lineGrow = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
  };

  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Personalized Journeys",
      desc: "Every itinerary is tailored to your interests, preferences, and travel goals—moving beyond generic packages."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Digital Convenience",
      desc: "Effortless booking, real-time updates, and mobile-friendly experiences make your journey seamless from start to finish."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Sustainability & Responsibility",
      desc: "We prioritize eco-friendly practices, support local communities, and protect the natural and cultural heritage of every destination."
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Transparency & Responsiveness",
      desc: "Clear, honest communication and proactive support ensure you feel informed, confident, and cared for at every step."
    }
  ];


  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white overflow-x-hidden">

      {/* 1. HERO SECTION - Refined Reveal */}
      <section className="pt-32 pb-16 text-center relative overflow-hidden">
        {/* Slow Moving Glows */}
        <Motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#D4A574] blur-[130px] pointer-events-none"
        />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <Motion.div variants={fadeInUp} className="flex justify-center items-center gap-4">
              <Motion.div variants={lineGrow} className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A574]/50 origin-right" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A574]/80">About Zoravia Terra Journeys</span>
              <Motion.div variants={lineGrow} className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A574]/50 origin-left" />
            </Motion.div>

            <Motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] selection:text-[#D4A574]">
              Discover the <br />
              <Motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-[#D4A574] italic"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Magic of Rwanda
              </Motion.span>
            </Motion.h1>

            <Motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/30 italic" style={{ fontFamily: "var(--title-font)" }}>
              Journeys Through a Thousand Hills
            </Motion.p>

            <Motion.div variants={fadeInUp} className="pt-8 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                Zoravia Terra Journeys Ltd creates unforgettable travel experiences across Rwanda—specializing in tailor-made safaris and immersive cultural journeys.
              </p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* 2. STORY SECTION - Sophisticated Reveal */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-[#011226]/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Story Image - Interactive Parallax & Shine */}
            <div ref={imageRef} className="relative group max-w-sm mx-auto lg:mx-0">
              <Motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-[#D4A574]/30"
              >
                <img
                  src="/assets/images/owner.png"
                  alt="Founder"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Shine Sweep Animation on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Motion.div>

              {/* Founder Badge - Magnetic feel */}
              <Motion.div
                initial={{ opacity: 0, rotate: 15 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="absolute bottom-4 right-4 bg-gradient-to-br from-[#D4A574] to-[#C4A57B] text-[#021732] px-4 py-3 rounded-lg shadow-xl z-20 cursor-default"
              >
                <Sparkles className="w-4 h-4 mb-2 opacity-60" />
                <p className="text-[11px] font-black italic mb-0.5" style={{ fontFamily: "var(--title-font)" }}>Integrity & Heart</p>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">Founded with Purpose</p>
              </Motion.div>
            </div>

            {/* Story Text - Staggered Lines Reveal */}
            <Motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <Motion.div variants={fadeInUp} className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-light">
                  Our <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Story</span>
                </h2>
                <Motion.div variants={lineGrow} className="h-[1.5px] w-16 bg-[#D4A574] origin-left" />
              </Motion.div>

              <div className="space-y-6 text-[15px] md:text-base text-white/50 font-light leading-relaxed">
                <Motion.p variants={fadeInUp}>
                  Zoravia Terra Journeys Ltd was founded at the intersection of personal passion professional experience, and a commitment to service excellence.
                </Motion.p>
                <Motion.p variants={fadeInUp}>
                  For over five years, I worked in private sector development in Rwanda, focusing on <span className="text-[#D4A574]">accountability and transparency.</span>
                </Motion.p>
                <Motion.p variants={fadeInUp}>
                  Alongside my career, I’ve always had a passion for creating experiences and caring for people. I ensure genuine care in everything I do.
                </Motion.p>
                <Motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 italic text-white/80 transition-colors hover:bg-white/[0.05] hover:border-[#D4A574]/20 text-sm md:text-base">
                  "I wanted to build a tour company that embodies high-quality service—consistency, transparency, and experiences that travelers can enjoy effortlessly."
                </Motion.div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 3. TRANSITION QUOTES - Immersive Scroll */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-4xl text-white/90 font-light italic leading-[1.4]" style={{ fontFamily: "var(--title-font)" }}>
              "I founded Zoravia Terra Journeys to bring the same professionalism and care I value in business to every journey."
            </p>
          </Motion.div>

          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="h-px w-20 bg-[#D4A574]/40 mx-auto"
          />

          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Today, Zoravia Terra Journeys delivers stress-free, meaningful travel across Rwanda and East Africa guided with professionalism, integrity, and heart.
          </Motion.p>
        </div>
      </section>

      {/* 4. OUR VALUES - Compact Immersive Experience */}
      <section className="py-24 relative overflow-hidden bg-[#021732]">
        {/* Dynamic Background Glows (Scaled Down) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <Motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#D4A574]/10 blur-[100px] rounded-full"
          />
        </div>

        {/* The Animated Progress Track */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden lg:block">
          <Motion.div
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-[#D4A574]/0 via-[#D4A574]/30 to-[#D4A574]/0"
          />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <Motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 1 }}
              className="h-px bg-[#D4A574]/60 mx-auto"
            />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Our <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Values</span>
            </h2>
          </Motion.div>

          <div className="space-y-28">
            {values.map((v, i) => (
              <Motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-20 relative`}
              >
                {/* Background Large Index Number (Scaled Down) */}
                <span className={`absolute top-1/2 -translate-y-1/2 text-[5rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block ${i % 2 === 0 ? "right-10" : "left-10"}`}>
                  0{i + 1}
                </span>

                {/* 1. The Interactive Icon Core (Compact) */}
                <div className="relative flex-shrink-0 z-10">
                  <Motion.div
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-[#021732] shadow-xl group"
                  >
                    {/* Spinning Outer Ring */}
                    <Motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-6px] rounded-full border border-dashed border-[#D4A574]/15"
                    />

                    <div className="absolute inset-0 rounded-full bg-[#D4A574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 text-[#D4A574] scale-110">
                      {v.icon}
                    </div>
                  </Motion.div>

                  {/* Horizontal Connector Line */}
                  <Motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? "left-full" : "right-full"} hidden lg:block h-px bg-gradient-to-r from-[#D4A574]/40 to-transparent`}
                  />
                </div>

                {/* 2. Content Card (Refined Sizes) */}
                <Motion.div
                  variants={{
                    hidden: { x: i % 2 === 0 ? 30 : -30, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
                  }}
                  className={`flex-1 space-y-4 text-center ${i % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                >
                  <div className={`inline-flex items-center gap-2 text-[#D4A574] text-[9px] font-bold uppercase tracking-[0.3em] mb-1 opacity-70`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
                    Value 0{i + 1}
                  </div>

                  <h4 className="text-2xl md:text-3xl font-light text-white leading-tight">
                    {v.title}
                  </h4>

                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                    {v.desc}
                  </p>

                  <div className={`flex items-center gap-3 ${i % 2 === 0 ? "justify-center lg:justify-start" : "justify-center lg:justify-end"} pt-2 opacity-30`}>
                    {[1, 2].map(dot => (
                      <div key={dot} className="w-1 h-1 rounded-full bg-white" />
                    ))}
                  </div>
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REFINED FINAL CTA - Compact & Elegant */}
      <section className="py-24 text-center relative overflow-hidden">
        {/* Decorative Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none" />

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="inline-block relative group">
            <div className="absolute -inset-6 bg-[#D4A574]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Link
              to="/booking"
              className="relative flex items-center gap-6 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            </Link>
          </div>
        </Motion.div>
      </section>

    </div>
  );
};

export default About;

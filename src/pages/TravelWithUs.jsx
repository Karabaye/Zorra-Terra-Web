import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, MapPin, Users, Zap } from "lucide-react";

const TravelWithUs = () => {
  const activities = [
    {
      icon: "🥾",
      title: "Guided Hiking",
      description:
        "Trek through pristine wilderness with experienced guides who know every trail and hidden gem.",
    },
    {
      icon: "📸",
      title: "Photography Tours",
      description:
        "Capture stunning wildlife and landscapes with guidance from professional photographers.",
    },
    {
      icon: "🦁",
      title: "Wildlife Tracking",
      description:
        "Learn to track and identify animals while immersed in their natural environment.",
    },
    {
      icon: "🎒",
      title: "Adventure Sports",
      description:
        "Rock climbing, kayaking, and zip-lining for the thrill-seekers among our travelers.",
    },
    {
      icon: "🍽️",
      title: "Culinary Experiences",
      description:
        "Taste authentic Rwandan cuisine and learn traditional cooking methods from local chefs.",
    },
    {
      icon: "🏘️",
      title: "Community Visits",
      description:
        "Connect with local communities, support artisans, and learn about Rwandan culture.",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Smith",
      location: "USA",
      text: "Zoravia Terra Journeys completely changed how I see travel. Every moment was carefully planned yet felt authentic.",
      rating: 5,
    },
    {
      name: "Michel Dupont",
      location: "France",
      text: "The guides were knowledgeable, kind, and truly passionate about Rwanda. An unforgettable experience!",
      rating: 5,
    },
    {
      name: "Amara Okafor",
      location: "Nigeria",
      text: "Best decision ever. The connection with nature and people was profound. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-[#f5f1ec] px-4 py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#f0e8db]/40 blur-2xl"></div>
          <div className="animate-float-slow absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#e9dfd0]/30 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-full bg-black/5 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur-sm">
            ✨ Explore Rwanda Like Never Before
          </div>

          <h1 className="mb-6 text-5xl font-extrabold text-gray-900 md:text-7xl">
            Travel With Zoravia
          </h1>

          <p className="mb-10 text-lg text-gray-700 md:text-xl">
            Immersive journeys crafted with passion and care.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#009966] px-8 py-4 font-semibold text-white shadow-xl hover:brightness-110"
            >
              Explore Experiences <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#testimonials"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 shadow-sm hover:bg-gray-100"
            >
              See Success Stories
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#009966]">500+</p>
              <p className="text-gray-600">Happy Travelers</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-[#009966]">15+</p>
              <p className="text-gray-600">Experience Types</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-[#009966]">100%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="relative bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              What We <span className="text-emerald-600">Offer</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From thrilling adventures to cultural immersion, we craft
              experiences that resonate with your soul
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -10,
                  shadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:border-emerald-500/50"
              >
                <div className="animate-bounce-slow mb-6 inline-block rounded-xl bg-linear-to-br from-emerald-50 to-emerald-50 p-4 text-4xl transition group-hover:scale-110 group-hover:from-emerald-200 group-hover:to-emerald-100">
                  {activity.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition group-hover:text-emerald-600">
                  {activity.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {activity.description}
                </p>
                <div className="mt-6 flex items-center font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-linear-to-b from-gray-50 to-white px-4 py-24">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Why <span className="text-emerald-600">Choose Us</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              What sets Zoravia apart from ordinary travel companies
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Expert Local Guides",
                desc: "Our guides are passionate Rwandans with deep knowledge of their homeland. Every journey is enriched by their authentic insights and personal connections to the land.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Sustainable Tourism",
                desc: "We are committed to responsible travel that benefits local communities and protects Rwanda's natural resources. Part of every journey supports conservation and community development.",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Personalized Experiences",
                desc: "We believe every traveler is unique. Whether you seek adventure, relaxation, cultural immersion, or wildlife encounters, we customize your journey to match your dreams.",
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Safety & Comfort",
                desc: "Your safety and comfort are our priorities. We work with premium accommodations, maintain rigorous safety standards, and provide 24/7 support throughout your journey.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm transition hover:border-emerald-500/50 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex rounded-xl bg-emerald-100 p-4 text-emerald-600 transition group-hover:bg-linear-to-r group-hover:from-emerald-200 group-hover:to-emerald-100">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#12b886] px-4 py-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="animate-float-slow absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              What Our <span className="text-amber-200">Travelers Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Real stories from adventurers who've transformed their lives
              through our journeys
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, shadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                className="group rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-lg transition hover:border-yellow-300/50 hover:bg-white/15"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-300 text-yellow-300 transition group-hover:scale-125"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="mb-6 text-lg leading-relaxed text-white/90">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-lg font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white/70">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-sky-50 px-4 py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-r from-emerald-100/40 to-sky-100/40 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-r from-sky-100/30 to-emerald-100/30 blur-3xl"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          {/* Title with gradient */}
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-[#009966]">Ready for Your</span>
            <span className="mt-2 block text-gray-800">Rwanda Adventure?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Let us help you craft the perfect Rwanda experience. Our expert team
            is ready to turn your travel dreams into unforgettable memories.
          </p>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#009966] px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/35"
              >
                Plan Your Trip
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                to="/stories"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-emerald-200 bg-white/80 px-8 py-4 font-semibold text-emerald-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:shadow-lg"
              >
                Explore Stories
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Decorative element */}
          <div className="mt-16">
            <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-emerald-400/50 via-sky-400/50 to-emerald-400/50"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TravelWithUs;

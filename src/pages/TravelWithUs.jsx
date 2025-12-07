import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Star, 
  ArrowRight, 
  MapPin, 
  Users, 
  Zap, 
  Award,
  Shield,
  Heart,
  Globe,
  Calendar,
  Check
} from "lucide-react";

const TravelWithUs = () => {
  const activities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Guided Hiking",
      description: "Trek through pristine wilderness with experienced guides who know every trail and hidden gem.",
      color: "bg-[#0a2e1d]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Photography Tours",
      description: "Capture stunning wildlife and landscapes with guidance from professional photographers.",
      color: "bg-[#1e4d2f]"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Wildlife Tracking",
      description: "Learn to track and identify animals while immersed in their natural environment.",
      color: "bg-[#0a2e1d]"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Adventure Sports",
      description: "Rock climbing, kayaking, and zip-lining for the thrill-seekers among our travelers.",
      color: "bg-[#1e4d2f]"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Culinary Experiences",
      description: "Taste authentic Rwandan cuisine and learn traditional cooking methods from local chefs.",
      color: "bg-[#0a2e1d]"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Visits",
      description: "Connect with local communities, support artisans, and learn about Rwandan culture.",
      color: "bg-[#1e4d2f]"
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

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Local Guides",
      description: "Our guides are passionate Rwandans with deep knowledge of their homeland and authentic insights.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainable Tourism",
      description: "Responsible travel that benefits local communities and protects Rwanda's natural resources.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Personalized Experiences",
      description: "Customized journeys matching your dreams, whether adventure, relaxation, or cultural immersion.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Safety & Comfort",
      description: "Premium accommodations and rigorous safety standards with 24/7 support throughout.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a2e1d] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Travel With Zoravia</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight tracking-tight">
              Immersive journeys crafted
              <span className="block mt-4 text-[#9cd4b4] font-normal">with passion and care</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
              Experience Rwanda through thoughtfully designed adventures that connect you with nature, culture, and authentic human stories.
            </p>
            
            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#experiences"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
                >
                  Explore Experiences
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#testimonials"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium tracking-widest uppercase"
                >
                  Read Stories
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
                <div className="text-center">
                  <p className="text-3xl font-light text-white mb-2">500+</p>
                  <p className="text-sm text-white/80 uppercase tracking-widest">Happy Travelers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-white mb-2">15+</p>
                  <p className="text-sm text-white/80 uppercase tracking-widest">Experience Types</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-white mb-2">100%</p>
                  <p className="text-sm text-white/80 uppercase tracking-widest">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="experiences" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Our Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              What We <span className="text-[#0a2e1d] font-normal">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              From thrilling adventures to cultural immersion, we craft experiences that resonate with your soul
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white border border-gray-200 hover:border-[#0a2e1d]/30 p-8 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-full ${activity.color} flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110`}>
                  {activity.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {activity.description}
                </p>
                <div className="flex items-center text-[#0a2e1d] text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Our Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Why <span className="text-[#0a2e1d] font-normal">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              What sets Zoravia apart from ordinary travel companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 border border-gray-200 hover:border-[#0a2e1d]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0a2e1d] flex items-center justify-center text-white mb-6 group-hover:bg-[#9cd4b4] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#0a2e1d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Traveler Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              What Our <span className="text-[#9cd4b4] font-normal">Travelers Say</span>
            </h2>
            <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
              Real stories from adventurers who've transformed their lives through our journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:border-[#9cd4b4]/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#9cd4b4] text-[#9cd4b4]" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-white/90 font-light mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-lg font-normal text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Your Journey, <span className="text-[#0a2e1d] font-normal">Step by Step</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { number: "01", title: "Plan & Dream", description: "Share your vision and preferences with our travel designers." },
              { number: "02", title: "Custom Design", description: "We create a personalized itinerary matching your unique interests." },
              { number: "03", title: "Experience Rwanda", description: "Embark on your journey with expert guides and seamless support." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full border-4 border-[#0a2e1d] flex items-center justify-center text-2xl font-light text-[#0a2e1d] mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a2e1d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span>Begin Your Adventure</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-8">
              Ready for Your
              <span className="block text-[#9cd4b4] font-normal mt-4">Rwanda Adventure?</span>
            </h2>
            
            <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
              Let us help you craft the perfect Rwanda experience. Our expert team is ready to turn your travel dreams into unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
              >
                Plan Your Trip
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/stories"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium tracking-widest uppercase"
              >
                Explore Stories
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {[
                  { label: "Flexible Booking", icon: <Calendar className="w-5 h-5" /> },
                  { label: "24/7 Support", icon: <Shield className="w-5 h-5" /> },
                  { label: "Sustainable Travel", icon: <Heart className="w-5 h-5" /> },
                  { label: "Local Expertise", icon: <Users className="w-5 h-5" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="text-[#9cd4b4]">{item.icon}</div>
                    <span className="text-sm font-light text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TravelWithUs;
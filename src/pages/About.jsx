import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { 
  Check, 
  ChevronRight, 
  MapPin, 
  Users, 
  Leaf, 
  Award, 
  Globe,
  Heart,
  Shield,
  Star,
  Clock,
  Calendar
} from "lucide-react";
import gorilla from "../assets/imgs/gorilla.png";
import zebra from "../assets/imgs/Zebra.png";
import chimpanzee from "../assets/imgs/chimpanzee.png";

// FadeIn component
const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Data arrays (same as before, but cleaned up)
const valuePillars = [
  { title: "High-quality service", description: "Expert planners coordinate every detail so you stay present.", icon: <Shield className="w-5 h-5" /> },
  { title: "Every traveler valued", description: "We adapt to comfort levels so all feel genuinely cared for.", icon: <Heart className="w-5 h-5" /> },
  { title: "Joyful discovery", description: "Itineraries weave playful experiences for fun and emotion.", icon: <Star className="w-5 h-5" /> },
  { title: "Honest communication", description: "Clear proposals and open conversations make collaboration easy.", icon: <Users className="w-5 h-5" /> },
  { title: "Community first", description: "We champion artisans to uplift people and traditions.", icon: <Globe className="w-5 h-5" /> },
  { title: "Sustainability", description: "Low-impact logistics keep Rwanda's landscapes thriving.", icon: <Leaf className="w-5 h-5" /> },
];

const journeyHighlights = [
  { title: "Gorilla trekking", detail: "Trek through forests and connect with mountain gorillas.", image: gorilla },
  { title: "Wildlife safaris", detail: "Intimate safari circuits with wildlife at the shoreline.", image: zebra },
  { title: "Cultural encounters", detail: "Meet chefs and artisans, then hike for panoramic views.", image: chimpanzee },
];

const timeline = [
  { year: "2012", title: "Born in Kigali", detail: "Launched to keep Rwandan hospitality center stage." },
  { year: "2016", title: "Cultural partnerships", detail: "Homestays and artisan studios opened for meaningful encounters." },
  { year: "2021", title: "Conservation-first", detail: "Carbon-conscious itineraries became part of every proposal." },
  { year: "Today", title: "Journeys give back", detail: "Travelers support new programs and celebrations in Rwanda." },
];

const stats = [
  { label: "Journeys", value: "800+", detail: "Personalized trips since 2012", icon: <Calendar className="w-5 h-5" /> },
  { label: "Partners", value: "40+", detail: "Guides and artisans we collaborate with", icon: <Users className="w-5 h-5" /> },
  { label: "Community hours", value: "12,000+", detail: "Volunteer hours donated", icon: <Clock className="w-5 h-5" /> },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % journeyHighlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalist like reference */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a2e1d] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={journeyHighlights[currentSlide].image} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center text-white space-y-8">
              <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
                <span className="h-2 w-2 rounded-full bg-current"></span>
                <span>About Zoravia Terra</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Every journey tells a story
                <span className="block mt-4 text-[#9cd4b4] font-normal">rooted in Rwanda</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
                We design travel that feels intentional and soulful, weaving Rwanda's landscapes, 
                culture, and people into journeys that stay with you for life.
              </p>
              
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
                >
                  Begin Your Journey
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {journeyHighlights.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight">
                    Where nature, discovery, and human connection meet
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                    <p>
                      Zoravia Terra Journeys is a Rwandan tour company born from a deep love 
                      for the thousand hills—its mist-covered volcanoes, shimmering lakes, 
                      living wildlife, and communities whose stories echo across every valley.
                    </p>
                    <p>
                      From gorilla trekking to cultural encounters, every experience invites you 
                      to see Rwanda through the eyes of its people. We believe every journey 
                      tells a story worth telling.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#0a2e1d] mb-2">2012</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#0a2e1d] mb-2">100%</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Rwandan Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-[#0a2e1d] mb-2">40+</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Local Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                <span className="h-2 w-2 rounded-full bg-current"></span>
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                How we carry Rwanda forward
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                We treat every guest as a storyteller. Our values guide every journey.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valuePillars.map((pillar, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#0a2e1d] text-white group-hover:bg-[#9cd4b4] transition-colors">
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                <span className="h-2 w-2 rounded-full bg-current"></span>
                <span>Signature Experiences</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                Celebrating Rwanda's natural beauty
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {journeyHighlights.map((experience, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-4">{experience.detail}</p>
                  <div className="inline-flex items-center text-[#0a2e1d] text-sm font-medium tracking-widest uppercase group-hover:underline">
                    Discover more
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                <span className="h-2 w-2 rounded-full bg-current"></span>
                <span>Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                Timeline of care & collaboration
              </h2>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 transform md:-translate-x-1/2" />
              
              {timeline.map((event, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start mb-12 md:mb-16`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0a2e1d] border-4 border-white transform md:-translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-8 md:pl-0`}>
                      <div className="bg-white p-8 rounded-lg">
                        <div className="text-sm font-medium text-[#0a2e1d] mb-2">{event.year}</div>
                        <h3 className="text-xl font-normal text-gray-900 mb-4">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{event.detail}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Team */}
            <FadeInSection>
              <div>
                <div className="mb-12">
                  <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                    <span className="h-2 w-2 rounded-full bg-current"></span>
                    <span>Our Leadership</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                    Meet the team guiding every mile
                  </h2>
                  <p className="text-lg text-gray-600 font-light">
                    Rooted in Rwanda, our leadership mentors emerging guides and champions 
                    equitable wages while honoring cultural protocols.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      name: "Aline Nyirahabimana",
                      role: "Founder & Lead Naturalist",
                      quote: "Every guest becomes part of our extended family."
                    },
                    {
                      name: "Emmanuel Ndayambaje",
                      role: "Field Operations Director",
                      quote: "Logistics only matter when they allow you to stay present."
                    },
                    {
                      name: "Delphine Uwamariya",
                      role: "Cultural Liaison",
                      quote: "We make space for real conversations—moments you remember most."
                    }
                  ].map((person, index) => (
                    <div key={index} className="border-t border-gray-100 pt-8">
                      <h3 className="text-xl font-normal text-gray-900 mb-2">{person.name}</h3>
                      <div className="text-sm text-[#0a2e1d] mb-4">{person.role}</div>
                      <p className="text-gray-600 italic font-light">"{person.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Stats */}
            <FadeInSection delay={200}>
              <div>
                <div className="mb-12">
                  <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#0a2e1d] mb-4">
                    <span className="h-2 w-2 rounded-full bg-current"></span>
                    <span>Our Impact</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                    Making a difference through responsible tourism
                  </h2>
                </div>

                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-start space-x-6 p-6 bg-[#fafafa] hover:bg-white transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#0a2e1d] text-white">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                        <h3 className="text-lg font-normal text-gray-900 mb-2">{stat.label}</h3>
                        <p className="text-gray-600 font-light">{stat.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-12 pt-12 border-t border-gray-100">
                  <h3 className="text-xl font-normal text-gray-900 mb-6">Certifications</h3>
                  <div className="space-y-4">
                    {[
                      "Rwanda Development Board Licensed",
                      "Fair Travel Africa Member",
                      "Leave No Trace Certified",
                      "Sustainable Tourism Partner"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-[#0a2e1d]" />
                        <span className="text-gray-600 font-light">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a2e1d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase text-[#9cd4b4] mb-4">
                <span className="h-2 w-2 rounded-full bg-current"></span>
                <span>Begin Your Journey</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-white mb-8">
                Let's build your next story together
              </h2>
              <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                Discover the soul of Rwanda through experiences crafted with care, respect, and purpose.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2e1d] hover:bg-[#f8f8f8] transition-all duration-300 text-sm font-medium tracking-widest uppercase group"
                >
                  Start Planning Today
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/journeys"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium tracking-widest uppercase"
                >
                  View All Experiences
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default About;
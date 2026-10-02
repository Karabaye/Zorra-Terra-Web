import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  Info,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { shortEscapeTours } from "../utilities/shortEscapeTours";

export default function TourDetail({ tourSlug }) {
  const params = useParams();
  const slug = tourSlug || params.slug;
  const tour = shortEscapeTours.find((t) => t.id === slug);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#021732] text-white flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Tour Not Found</h1>
        <p className="text-white/60 text-base max-w-md mb-8">
          The short escape tour you are looking for does not exist or may have been updated.
        </p>
        <Link
          to="/short-escapes"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4A574] text-[#021732] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4A574]/90 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Short Escapes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white pb-24">
      {/* Breadcrumb & Hero Header */}
      <section className="relative z-20 pt-6 md:pt-12 pb-6 md:pb-8 border-b border-white/[0.06]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex items-center gap-2 text-xs text-white/40 font-light flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/short-escapes" className="hover:text-white transition-colors">Short Escape Tours</Link>
            <span>/</span>
            <span className="text-[#D4A574] truncate max-w-xs">{tour.title}</span>
          </nav>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white text-[9px] font-semibold uppercase tracking-wider">
                {tour.category || "Experience"}
              </span>
              <span className="px-3 py-1 rounded bg-[#D4A574] text-black text-[9px] font-bold uppercase tracking-wider">
                Curated
              </span>
            </div>

            {/* Semantic H1 */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {tour.title}
            </h1>

            {tour.tagline && (
              <p className="text-sm sm:text-base md:text-lg text-white/60 font-light max-w-3xl leading-relaxed">
                {tour.tagline}
              </p>
            )}

            <div className="flex items-center gap-6 pt-2 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[#D4A574]" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#D4A574]" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Content */}
      <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Media + Overview */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021732] via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-[#021732]/85 backdrop-blur-2xl border border-white/10">
                  <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#D4A574] mb-1">
                    Investment
                  </p>
                  <p className="text-xl md:text-2xl font-light text-white">{tour.price}</p>
                </div>
              </div>
            </div>

            {/* Tour Story / Description */}
            <div className="space-y-4 rounded-xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
                Experience Overview
              </h2>
              <div className="h-px w-16 bg-[#D4A574]" />
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed whitespace-pre-line">
                {tour.description}
              </p>
            </div>
          </div>

          {/* Right Column: Key Facts, Itinerary, Inclusions */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <p className="text-[9px] font-medium text-white/40 uppercase tracking-[0.1em]">Duration</p>
                <p className="text-base sm:text-lg md:text-xl font-light text-white">{tour.duration}</p>
              </div>
              <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <p className="text-[9px] font-medium text-white/40 uppercase tracking-[0.1em]">Style</p>
                <p className="text-base sm:text-lg md:text-xl font-light text-white">Private & Curated</p>
              </div>
            </div>

            {/* Quick Facts */}
            {tour.quickFacts && (
              <div className="p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/5 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A574]">
                  Key Travel Facts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.quickFacts.pickup && (
                    <div className="space-y-1">
                      <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">Pickup</p>
                      <p className="text-xs text-white/70">{tour.quickFacts.pickup}</p>
                    </div>
                  )}
                  {tour.quickFacts.travelStyle && (
                    <div className="space-y-1">
                      <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">Travel Style</p>
                      <p className="text-xs text-white/70">{tour.quickFacts.travelStyle}</p>
                    </div>
                  )}
                  {tour.quickFacts.groupSize && (
                    <div className="space-y-1">
                      <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">Group Size</p>
                      <p className="text-xs text-white/70">{tour.quickFacts.groupSize}</p>
                    </div>
                  )}
                  {tour.quickFacts.activityLevel && (
                    <div className="space-y-1">
                      <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">Activity Level</p>
                      <p className="text-xs text-white/70">{tour.quickFacts.activityLevel}</p>
                    </div>
                  )}
                  {tour.quickFacts.availability && (
                    <div className="space-y-1 sm:col-span-2">
                      <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">Availability</p>
                      <p className="text-xs text-white/70">{tour.quickFacts.availability}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A574]">
                  Journey Itinerary
                </h3>
                <div className="space-y-4 relative pl-2">
                  <div className="absolute left-6 top-3 bottom-3 w-px bg-white/10" />
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 relative">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-[10px] font-medium text-[#D4A574]">
                          {item.time ? String(i + 1).padStart(2, "0") : `D${item.Day}`}
                        </span>
                      </div>
                      <div className="flex-1 border-b border-white/5 pb-4">
                        {item.time && (
                          <div className="text-[10px] text-[#D4A574] font-medium uppercase tracking-wider mb-1">
                            {item.time}
                          </div>
                        )}
                        <p className="text-sm text-white/80 font-light leading-relaxed">
                          {item.activity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expectations */}
            {tour.expectations && tour.expectations.length > 0 && (
              <div className="space-y-4 rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  What To Expect
                </h3>
                <ul className="space-y-2.5">
                  {tour.expectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/60 font-light">
                      <Sparkles size={14} className="text-[#D4A574] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tour.inclusions && (
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4A574]">
                    Included
                  </h4>
                  <ul className="space-y-2">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/60 font-light">
                        <CheckCircle2 size={13} className="text-[#D4A574] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tour.exclusions && (
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                    Not Included
                  </h4>
                  <ul className="space-y-2">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/40 font-light">
                        <X size={13} className="text-white/30 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Optional Add-Ons & Good to Know */}
            {tour.goodToKnow && (
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
                  Good To Know
                </h4>
                <ul className="space-y-2">
                  {tour.goodToKnow.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/50 font-light">
                      <Info size={13} className="text-white/40 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <Link
                to="/booking"
                state={{ packageName: tour.title }}
                className="flex-1 min-h-[44px] py-3.5 sm:py-4 px-4 rounded-xl bg-[#D4A574] text-[#021732] text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center hover:bg-[#D4A574]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A574]/15"
              >
                <span>Request This Journey</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/short-escapes"
                className="min-h-[44px] py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl border border-white/15 text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:bg-white/5 transition-all text-white text-center flex items-center justify-center gap-2"
              >
                <ArrowLeft size={14} />
                <span>All Escapes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

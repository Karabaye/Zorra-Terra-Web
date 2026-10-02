import React from "react";
import { Link } from "react-router-dom";
import { FileText, Compass, AlertCircle, ArrowRight, Mail, Phone } from "lucide-react";
import PageHero from "../components/PageHero";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white pb-24">
      <PageHero
        subtitle="Agreement & Guidelines"
        title="Terms & Conditions"
        description="General terms governing website use, safari inquiries, itinerary proposals, and travel planning with Zoravia Terra Journeys."
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-5xl py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
        {/* Overview */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <FileText size={22} />
            <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
              Website & Service Overview
            </h2>
          </div>
          <div className="h-px w-16 bg-[#D4A574]/60" />
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
            Welcome to Zoravia Terra Journeys Ltd. By browsing our website, requesting customized tour proposals,
            or engaging our team for private travel planning in Rwanda, you agree to comply with the general terms and
            practices outlined on this page.
          </p>
        </div>

        {/* Section 1: Inquiries & Proposals */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <Compass size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              1. Inquiries, Quotes & Itinerary Proposals
            </h2>
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>
              <strong className="text-white/80 font-normal">Informational Proposals:</strong> Tour descriptions, durations, and sample itineraries published on our website or shared via email are illustrative frameworks designed to guide travel planning.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Price Quotes:</strong> All official quotations are provided individually based on travel dates, group size, vehicle specifications, accommodation category, and official park activity permit availability.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Permit Availability:</strong> Regulated park activities (including Volcanoes National Park gorilla permits, golden monkey permits, and Nyungwe chimpanzee permits) are issued by relevant wildlife authorities and are subject to real-time availability upon booking confirmation.
            </li>
          </ul>
        </div>

        {/* Section 2: Traveler Responsibilities */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <AlertCircle size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              2. Traveler Responsibilities
            </h2>
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>
              <strong className="text-white/80 font-normal">Passports & Visas:</strong> Travelers are responsible for ensuring their passports have at least six months’ validity from the entry date and for obtaining necessary entry visas for Rwanda.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Health & Fitness:</strong> Certain excursions (e.g. rainforest hikes, gorilla trekking) require moderate physical exertion. Travelers should ensure adequate personal fitness and declare any health conditions or dietary requirements prior to travel.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Travel Insurance:</strong> We strongly advise all guests to secure comprehensive international travel, medical, and evacuation insurance prior to departure.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Park Regulations:</strong> Travelers agree to adhere strictly to all official national park guidelines, wildlife ranger instructions, and environmental conservation rules while in protected reserves.
            </li>
          </ul>
        </div>

        {/* Section 3: Intellectual Property */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            3. Website Content & Intellectual Property
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            All text, branding, photography, graphics, videos, and custom itinerary descriptions published on this website
            are the property of Zoravia Terra Journeys Ltd or licensed for our use. Content may not be copied, reproduced,
            or distributed for commercial purposes without prior written authorization.
          </p>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            4. Service Adjustments & Force Majeure
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            While Zoravia Terra Journeys exercises meticulous care in coordinating transportation, professional driver-guides,
            and park activities, we cannot be held liable for unforeseen delays or itinerary adjustments caused by adverse
            weather, park authority route closures, international flight schedule changes, or events beyond reasonable operational control.
            In such instances, our team will make all reasonable efforts to adapt schedules in the best interest of guest safety and comfort.
          </p>
        </div>

        {/* Section 5: Governing Law & Contact */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            5. Inquiries & Official Communication
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Specific contractual terms regarding confirmed private bookings, payment schedules, and tailored services
            are provided directly in official itinerary proposals. For questions regarding these general terms, contact:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 text-xs md:text-sm text-white/70">
              <Mail size={16} className="text-[#D4A574] mt-0.5 flex-shrink-0" />
              <span>zoraviaterrajourneys@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-white/70">
              <Phone size={16} className="text-[#D4A574] mt-0.5 flex-shrink-0" />
              <span>+250 783 482 368</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-xs text-white/40">Zoravia Terra Journeys Ltd • Kigali, Rwanda</span>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4A574] hover:underline"
            >
              Plan your journey <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { RefreshCw, Calendar, CheckSquare, ShieldCheck, Mail, Phone, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white pb-24">
      <PageHero
        subtitle="Clarity & Flexibility"
        title="Cancellation & Refund Framework"
        description="Understanding our approach to cancellations, itinerary modifications, and government-regulated park permits for Rwanda travel."
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-5xl py-12 md:py-16 space-y-12">
        {/* Overview Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <RefreshCw size={22} />
            <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
              General Cancellation Principles
            </h2>
          </div>
          <div className="h-px w-16 bg-[#D4A574]/60" />
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
            At Zoravia Terra Journeys, we recognize that international travel plans may require unexpected changes.
            Because our bespoke safaris and short escapes involve coordinated reservations across private transport,
            dedicated driver-guides, partner lodges, and official national park permits, cancellations are managed
            under a clear, transparent framework outlined below.
          </p>
        </div>

        {/* Section 1: Government & Park Permits */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <ShieldCheck size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              1. Official National Park Permits
            </h2>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Specialized wildlife permits issued by the Rwanda Development Board (RDB) and protected park authorities—including
            mountain gorilla trekking permits in Volcanoes National Park and chimpanzee tracking permits in Nyungwe National Park:
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>Are strictly subject to the official rules and cancellation policies of the governing wildlife authorities.</li>
            <li>Are individually non-refundable and non-transferable once issued, unless specifically authorized under official park authority regulations.</li>
            <li>Our team will always assist travelers in submitting formal rescheduling requests to park authorities wherever permissible under governing guidelines.</li>
          </ul>
        </div>

        
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <Calendar size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              2. Itinerary Modifications & Rescheduling
            </h2>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            We strive to provide maximum reasonable flexibility for our private clients:
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>
              <strong className="text-white/80 font-normal">Date Adjustments:</strong> If you need to postpone or shift your travel dates, please notify our team in writing as early as possible. We will work to transfer vehicle reservations and guide schedules subject to partner availability.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Third-Party Supplier Costs:</strong> Any date amendment or cancellation fees imposed by external accommodations, domestic flights, or third-party operators will be passed through transparently without markup.
            </li>
          </ul>
        </div>

        {/* Section 3: Proposal-Specific Terms */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <CheckSquare size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              3. Booking Confirmation & Written Agreement
            </h2>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Because journey durations, accommodation tiers, and season categories vary widely, the exact payment milestones,
            confirmation deposits, and cancellation notice windows applicable to your specific safari are detailed in your official
            written booking confirmation and invoice.
          </p>
        </div>

        {/* Section 4: Travel Insurance Recommendation */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            4. Recommended Travel Insurance
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Due to the non-refundable nature of certain government wildlife permits and high-season lodge bookings,
            Zoravia Terra Journeys strongly recommends that all travelers purchase comprehensive trip cancellation,
            interruption, medical, and emergency travel insurance from an accredited provider before traveling.
          </p>
        </div>

        {/* Section 5: Notice of Cancellation & Contact */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            5. Submitting a Cancellation or Modification Request
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            All cancellation or rescheduling requests must be submitted in writing via email by the lead traveler.
            Notice is effective on the date written confirmation is acknowledged by our Kigali office:
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
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4A574] hover:underline"
            >
              Contact our office <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

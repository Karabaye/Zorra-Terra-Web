import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white pb-24">
      <PageHero
        subtitle="Trust & Transparency"
        title="Privacy Policy"
        description="How Zoravia Terra Journeys collects, uses, and protects your personal information when inquiring about and planning your travel in Rwanda."
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-5xl py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
        {/* Intro Card */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <Shield size={22} />
            <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
              Our Commitment to Your Privacy
            </h2>
          </div>
          <div className="h-px w-16 bg-[#D4A574]/60" />
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
            At Zoravia Terra Journeys Ltd, we value your trust and are dedicated to safeguarding your personal privacy.
            This policy outlines our practices regarding the collection, storage, and handling of information gathered
            through our website, booking inquiry forms, email correspondence, and direct messaging channels.
          </p>
        </div>

        {/* Section 1: Information Collected */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <Eye size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              1. Information We Collect
            </h2>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            We only collect personal information that you voluntarily provide to us when inquiring about or arranging a journey:
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>
              <strong className="text-white/80 font-normal">Contact Details:</strong> Your full name, email address, phone or WhatsApp number, and country of residence.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Travel Preferences:</strong> Anticipated travel dates, group size, preferred destinations (e.g. Akagera, Volcanoes, Nyungwe), accommodation preferences, and special interests.
            </li>
            <li>
              <strong className="text-white/80 font-normal">Direct Inquiries:</strong> Any questions, travel notes, or itinerary requests submitted through our contact and booking forms or sent via direct email.
            </li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5">
          <div className="flex items-center gap-3 text-[#D4A574]">
            <Lock size={20} />
            <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
              2. How We Use Your Information
            </h2>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Your information is used exclusively to facilitate your travel inquiries and provide high-touch service:
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light list-disc pl-5">
            <li>Designing, quoting, and tailoring custom travel itineraries and short escape safaris across Rwanda.</li>
            <li>Responding directly to questions regarding national park activities, permits, transport, and logistics.</li>
            <li>Communicating logistical updates or confirmations regarding your confirmed travel arrangements.</li>
            <li>We do not sell, rent, or trade your personal contact details to third-party marketing companies.</li>
          </ul>
        </div>

        {/* Section 3: Third-Party Services & Form Processing */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            3. Third-Party Service Providers
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Our online contact and booking inquiry forms utilize secure third-party form processing (such as Formspree)
            to transmit your inquiries directly to our administrative team in Kigali. When you click to contact us via WhatsApp,
            you will be redirected to the WhatsApp platform, subject to WhatsApp’s own privacy policy and terms.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            4. Data Security & Retention
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            We employ industry-standard technical measures, including SSL encryption (HTTPS) across our website, to protect
            information in transit. We retain inquiry correspondence only for as long as necessary to fulfill your travel requests
            or comply with local legal and accounting requirements in Rwanda.
          </p>
        </div>

        {/* Section 5: Your Rights & Contact */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
          <h2 className="text-lg md:text-xl font-light text-white tracking-wide">
            5. Inquiries & Contact Details
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            If you have questions about this Privacy Policy or wish to review, update, or request the deletion of your personal
            contact details, please contact us directly:
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
            <div className="flex items-start gap-3 text-xs md:text-sm text-white/70 sm:col-span-2">
              <MapPin size={16} className="text-[#D4A574] mt-0.5 flex-shrink-0" />
              <span>Remera, KG 17 Ave, Kigali, Rwanda</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-xs text-white/40">Last Updated: October 2026</span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4A574] hover:underline"
            >
              Contact our team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

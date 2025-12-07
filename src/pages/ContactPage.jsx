import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

// Images now served from public/assets
const buffaloImage = "/assets/imgs/Buffalo.png";
const consoImage = "/assets/imgs/conso.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1-2",
    safariType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", travelers: "1-2", safariType: "", budget: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-emerald-50">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/250787844365?text=Hello%20Zoravia%20Terra%20Journeys!%20I%20want%20to%20inquire%20about%20safari%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed right-6 bottom-6 z-50"
      >
        <div className="relative">
          <div className="absolute -right-1 -top-1 h-16 w-16 animate-ping rounded-full bg-emerald-400 opacity-20"></div>
          <div className="pointer-events-none absolute right-0 bottom-full mb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-xl">
              Chat on WhatsApp
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-emerald-800"></div>
            </div>
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <FaWhatsapp className="h-6 w-6 text-white" />
          </div>
        </div>
      </a>

      {/* Hero Section with Buffalo Image */}
      <div className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={buffaloImage}
            alt="African Buffalo Safari"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Start Your
            <span className="block text-amber-300">African Journey</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Connect with our safari experts to plan your unforgettable adventure
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Contact Info & Image */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 text-white shadow-2xl">
              <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-emerald-700 p-3">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="mt-1 text-emerald-200">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-emerald-700 p-3">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="mt-1 text-emerald-200">+250 788 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-emerald-700 p-3">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="mt-1 text-emerald-200">info@zoraviaterra.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-emerald-700 p-3">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="mt-1 text-emerald-200">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-emerald-700 pt-8">
                <h3 className="mb-4 font-semibold">Emergency Contact</h3>
                <p className="text-sm text-emerald-200">
                  Available 24/7 for urgent safari inquiries via WhatsApp
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-xl font-bold text-emerald-900">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Experts</h4>
                    <p className="mt-1 text-sm text-gray-600">Born and raised in Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Itineraries</h4>
                    <p className="mt-1 text-sm text-gray-600">Tailored to your preferences</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Tourism</h4>
                    <p className="mt-1 text-sm text-gray-600">Supporting local communities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Preview */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={consoImage}
                alt="Safari Experience"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 p-6">
                <p className="text-white font-semibold">
                  Experience Africa's wilderness with expert guides
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-emerald-900">
                  Plan Your Safari Adventure
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out the form below and our safari specialists will create a personalized itinerary for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:outline-none"
                      placeholder="+250 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      <FaUserFriends className="inline mr-2" />
                      Number of Travelers
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="1-2">1-2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People</option>
                    </select>
                  </div>
                </div>

                {/* Safari Details */}
                <div className="rounded-2xl bg-emerald-50 p-6">
                  <h3 className="mb-6 text-lg font-semibold text-emerald-900">
                    Safari Preferences
                  </h3>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Safari Type
                      </label>
                      <select
                        name="safariType"
                        value={formData.safariType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="">Select safari type</option>
                        <option value="gorilla">Gorilla Trekking</option>
                        <option value="wildlife">Wildlife Safari</option>
                        <option value="luxury">Luxury Safari</option>
                        <option value="family">Family Safari</option>
                        <option value="photography">Photography Safari</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="">Select budget</option>
                        <option value="economy">Economy ($1,000 - $3,000)</option>
                        <option value="comfort">Comfort ($3,000 - $7,000)</option>
                        <option value="luxury">Luxury ($7,000 - $15,000)</option>
                        <option value="premium">Premium ($15,000+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Preferred Travel Dates
                    </label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="date"
                        className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      />
                      <input
                        type="date"
                        className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-4 block text-lg font-semibold text-gray-900">
                    Tell us about your dream safari
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-lg placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none"
                    placeholder="What wildlife are you most excited to see? Any specific destinations, accommodations, or experiences you're dreaming of? Share your vision with us..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-800 px-8 py-5 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-emerald-500/30"
                  >
                    <span className="relative flex items-center justify-center">
                      <span className="mr-3">Submit Safari Inquiry</span>
                      <FaPaperPlane className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </div>
              </form>
            </div>

            {/* Additional Info Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3">
                  <FaClock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Quick Response</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond within 2-4 hours during business days.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-emerald-100 p-3">
                  <FaUserFriends className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Group Discounts</h3>
                <p className="text-gray-600 text-sm">
                  Special rates available for groups of 4+ travelers.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                  <FaEnvelope className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Itinerary Preview</h3>
                <p className="text-gray-600 text-sm">
                  Receive a detailed itinerary within 48 hours of inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to Embark on Your Adventure?
          </h2>
          <p className="mb-6 text-emerald-100">
            Contact us now for a personalized safari consultation
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+250788000000"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-900 transition-all hover:bg-emerald-50 hover:shadow-lg"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@zoraviaterra.com"
              className="rounded-xl border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FaWhatsapp } from 'react-icons/fa';
import consoImage from '../assets/imgs/conso.jpg';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/250787844365?text=Hello%20Zoravia%20Terra%20Journeys!%20I%20came%20across%20your%20website%20and%20I%27d%20like%20to%20learn%20more%20about%20your%20safari%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-emerald-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-emerald-600"></div>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
        </div>
      </a>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your next adventure? We're here to help.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <div className="h-full">
                <img
                  src={consoImage}
                  alt="Zoravia Terra Journeys"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 p-8 md:p-12">

              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* What are you interested in? */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    What are you interested in?
                  </label>
                  <input
                    type="text"
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Safari type, destination, dates..."
                  />
                </div>

                {/* Tell us a bit more */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us a bit more
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Share group size, budget, preferred wildlife, and any special requests..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Kigali, Rwanda</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+250 788 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>info@zoraviaterra.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
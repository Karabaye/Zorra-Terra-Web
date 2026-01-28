import React from "react";

const ServicesIntro = () => {
  return (
    <section className="bg-[#021732] py-16 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-light text-white">Our services:</h3>

          <div className="mt-6 border-t border-white/20" />

          <div className="mt-10 flex justify-center">
            <img
              src="/assets/images/logo.jpeg"
              alt="Zoravia Terra Journeys"
              className="h-16 md:h-20 w-auto rounded-xl shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <p className="mt-10 mx-auto max-w-4xl text-base leading-relaxed text-white/90">
            Our core services include <span className="font-semibold text-white">gorilla trekking</span>,
            <span className="font-semibold text-white"> wildlife safaris</span>,
            <span className="font-semibold text-white"> chimpanzee tracking</span>,
            <span className="font-semibold text-white"> Lake Kivu boat cruises</span>,
            <span className="font-semibold text-white"> cultural and community-based tours</span>,
            <span className="font-semibold text-white"> hiking and outdoor adventures</span>,
            <span className="font-semibold text-white"> Kigali city tours</span>,
            <span className="font-semibold text-white"> honeymoon packages</span>, and
            <span className="font-semibold text-white"> corporate retreats across Rwanda</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;

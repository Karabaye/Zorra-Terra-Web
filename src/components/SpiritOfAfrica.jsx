import React from "react";

const SpiritOfAfrica = () => {
  return (
    <section className="bg-[#f7f7f1] px-20 py-24">
      <div className="mx-auto flex items-center justify-center gap-20">
        {/* <div className="flex w-[50%] justify-center">
          <img
            src="/images/africamap.png"
            alt="Africa map with safari scene"
            className="w-full object-contain"
          />
        </div> */}

        <div className="w-[50%] text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#325c52] uppercase">
            Spirit of Africa
          </p>

          <h2 className="mb-6 font-serif text-2xl leading-relaxed font-semibold text-[#325c52] md:text-3xl">
            Something in our genetic code remembers that Africa is where all of
            our earliest human ancestors first evolved 2 million years ago.
          </h2>

          <p className="mb-10 max-w-xl text-xs leading-relaxed text-[#5f625a] md:text-sm lg:text-base">
            It is a place of supreme diversity, culture, natural beauty,
            adventure and fun. We specialise in African countries that showcase
            a myriad of forests, savannas, oceans, deserts and wildlife. Come
            explore Africa and re-awaken your sense of belonging to wild places.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 text-xs tracking-[0.25em] text-[#325c52] uppercase md:flex-row md:justify-center md:gap-8">
            <button className="inline-flex items-center justify-center border-b border-[#325c52] pb-1 hover:text-[#294a42]">
              Book your safari
              <span className="ml-2">→</span>
            </button>
            <button className="inline-flex items-center justify-center border-b border-[#325c52] pb-1 hover:text-[#294a42]">
              Get inspired
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritOfAfrica;

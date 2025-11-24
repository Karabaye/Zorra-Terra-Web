import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-[#f7f7f1] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#325c52] uppercase">
            What we do
          </p>

          <h1 className="mt-10 mb-6 font-serif text-3xl leading-relaxed font-semibold text-[#325c52]">
            We plan and guide exceptional, participatory wilderness experiences
            throughout Africa
          </h1>

          <p className="mb-8 px-28 text-xs leading-relaxed text-[#5f625a] md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            eligendi vel est optio, sit nihil incidunt nam accusantium voluptate
            animi. Mollitia officiis aliquid facere labore minus culpa
            reprehenderit id optio.
          </p>

          <button className="inline-flex items-center justify-center bg-[#a86a3d] px-8 py-3 text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-[#8d5833]">
            More about our story
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>
      <section className="bg-[#f7f7f1] px-4 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
          {/* Left: Africa map image */}
          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="/images/africamap.png"
              alt="Africa map with safari scene"
              className="max-w-xs object-contain md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Right: Text content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="mb-4 text-sm tracking-[0.3em] text-[#325c52] uppercase">
              Spirit of Africa
            </p>

            <h2 className="mb-6 font-serif text-2xl leading-relaxed font-semibold text-[#325c52] md:text-3xl">
              Something in our genetic code remembers that Africa is where all
              of our earliest human ancestors first evolved 2 million years ago.
            </h2>

            <p className="mb-10 max-w-xl text-xs leading-relaxed text-[#5f625a] md:text-sm lg:text-base">
              It is a place of supreme diversity, culture, natural beauty,
              adventure and fun. We specialise in African countries that
              showcase a myriad of forests, savannas, oceans, deserts and
              wildlife. Come explore Africa and re-awaken your sense of
              belonging to wild places.
            </p>

            <div className="flex flex-col items-center gap-4 text-xs tracking-[0.25em] text-[#325c52] uppercase md:flex-row md:gap-8">
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
    </>
  );
};

export default Home;

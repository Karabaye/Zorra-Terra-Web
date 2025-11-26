import React from "react";

const WhatWeDo = () => {
  return (
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
  );
};

export default WhatWeDo;

import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url("/src/assets/imgs/elephants.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-3xl px-4 py-20 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-white/80 uppercase">
          What we do
        </p>

        <h1 className="mt-10 mb-6 font-serif text-3xl leading-relaxed font-semibold text-white">
          We plan and guide exceptional, participatory wilderness experiences
          throughout Africa
        </h1>

        <p className="mb-8 px-4 text-sm leading-relaxed text-white/90 md:px-28 md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          eligendi vel est optio, sit nihil incidunt nam accusantium voluptate
          animi. Mollitia officiis aliquid facere labore minus culpa
          reprehenderit id optio.
        </p>

        <Link
          to="/about"
          className="inline-flex items-center justify-center bg-[#a86a3d] px-8 py-3 text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-[#8d5833]"
        >
          More about our story
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;

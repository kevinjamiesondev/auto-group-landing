import React from "react";
import heroImage from "../assets/images/jag_hero.webp";
import cadillac from "../assets/images/cadillac.png";
import buick from "../assets/images/buick.png";
import gmc from "../assets/images/gmc.png";
import chevy from "../assets/images/Chevrolet New.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black"></div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <h2 className="text-8xl font-normal uppercase text-white">
          Jamieson Auto Group
        </h2>

        <div className="flex gap-4">
          <img src={cadillac} alt="Cadillac" className="max-h-40" />
          <img src={buick} alt="Buick" className="max-h-40" />
          <img src={gmc} alt="GMC" className="max-h-40" />
          <img src={chevy} alt="Chevrolet" className="max-h-40" />
        </div>

        <button className="bg-[#0060E3] uppercase text-white px-12 py-2 text-lg hover:bg-white hover:text-black transition-transform transform hover:scale-105">
          Search Inventory
        </button>
      </div>
    </section>
  );
}

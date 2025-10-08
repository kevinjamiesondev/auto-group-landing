import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const contentRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const heroImage = "/images/jag_hero.webp";
  const logos = [
    "public/images/Cadillac.png",
    "public/images/Buick.png",
    "public/images/GMC.png",
    "public/images/Chevrolet New.png",
  ];

  useEffect(() => {
    // Wait for all images to load before animating
    const images = [heroImage, ...logos];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }
  }, [imagesLoaded]);

  return (
    <section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Static overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black" />

      {/* Animated content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <h2 className="text-8xl font-normal uppercase text-white">
          Jamieson Auto Group
        </h2>

        {/* Logos */}
        <div className="flex gap-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-25 h-25 transform hover:scale-105 duration-300"
            >
              <img src={logo} alt="" className="max-h-40 object-contain" />
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#0060E3] uppercase text-white px-12 py-2 text-lg hover:bg-white hover:text-black transition transform hover:scale-105 duration-300">
          Search Inventory
        </button>
      </div>
    </section>
  );
}

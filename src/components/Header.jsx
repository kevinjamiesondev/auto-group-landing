import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6 text-white bg-[#0a0a0a]">
      <a href="/" className="text-3xl font-light font-dosis">
        J. A. G.
      </a>
      <div className="flex uppercase text-lg items-center space-x-12">
        <nav className="flex space-x-12 font-dosis">
          {[
            "New Vehicles",
            "Pre-Owned Vehicles",
            "Specials",
            "Finance",
            "About Us",
            "Our Locations",
          ].map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </nav>
        <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>
    </header>
  );
}

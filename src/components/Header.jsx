// src/components/Header.jsx
export default function Header() {
  return (
    <header className="font-proxima w-full flex items-center justify-between p-6 text-white bg-[#0a0a0a] bg-cover bg-center relative">
      <div className="relative flex items-center text-center justify-between w-full">
        <a href="/" className="font-dosis text-3xl font-light">
          J. A. G.
        </a>

        <div className="flex uppercase text-lg items-center space-x-12">
          <nav className="flex font-dosis space-x-12">
            <a href="#" className="hover:underline">
              New Vehicles
            </a>
            <a href="#" className="hover:underline">
              Pre-Owned Vehicles
            </a>
            <a href="#" className="hover:underline">
              Specials
            </a>
            <a href="#" className="hover:underline">
              Finance
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Our Locations
            </a>
          </nav>
          <button className="bg-white font-dosis uppercase font-bold text-black px-4 py-2 rounded hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

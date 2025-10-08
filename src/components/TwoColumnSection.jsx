// src/components/TwoColumnSection.jsx
export default function TwoColumnSection() {
  const sections = [
    { title: "Service Department", img: "/assets/service.webp" },
    { title: "Vehicles Under 20k", img: "/assets/vehicles-under.webp" },
  ];

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-center text-center group"
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full max-w-lg object-cover rounded-2xl mb-6 transform transition-transform duration-500 group-hover:scale-105"
            />
            <h2 className="text-5xl font-normal uppercase text-white mb-4 font-dosis">
              {section.title}
            </h2>
            <button className="border border-[#0060E3] text-white bg-black px-12 py-2 mt-4 uppercase font-dosis font-bold hover:bg-[#0060E3] hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/CTASection.jsx
export default function CTASection() {
  const cards = [
    { title: "Finance", img: "/assets/finance.webp" },
    { title: "Trade", img: "/assets/trade.webp" },
    { title: "Specials", img: "/assets/specials.webp" },
  ];

  return (
    <section className="relative z-20 -mt-32 mb-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-20">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-4xl font-dosis uppercase">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

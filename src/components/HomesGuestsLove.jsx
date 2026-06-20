// HomesGuestsLove.jsx
// "Homes guests love" — third place we reuse PropertyCard.
// This shows the real value of building one reusable component:
// three different sections, three different data sets, zero
// copy-pasted card markup.

import PropertyCard from "./PropertyCard";

function HomesGuestsLove() {
  const homes = [
    {
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      name: "Aparthotel Stare Miasto",
      location: "Old Town, Poland, Krakow",
      rating: 4,
      ratingLabel: "8.8",
      reviewCount: 3100,
      price: "US$186",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop",
      name: "NÉRO Boutique Hotel",
      location: "Greece, Imerovigli",
      rating: 5,
      ratingLabel: "9.6",
      reviewCount: 109,
      price: "US$576",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      name: "7Seasons Apartments Budapest",
      location: "06. Terézváros, Hungary, Budapest",
      rating: 4,
      ratingLabel: "8.8",
      reviewCount: 10039,
      price: "US$189",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      name: "Numa Florence Vita",
      location: "Santa Maria Novella, Italy, Florence",
      rating: 4,
      ratingLabel: "9.0",
      reviewCount: 995,
      price: "US$304",
      priceNote: "Starting from",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Homes guests love</h2>
        <a href="#" className="text-booking-accent text-sm hover:underline">
          Discover homes
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {homes.map((home) => (
          <PropertyCard key={home.name} {...home} />
        ))}
      </div>
    </section>
  );
}

export default HomesGuestsLove;

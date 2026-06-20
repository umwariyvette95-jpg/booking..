// TrendingDestinations.jsx
// "Trending destinations" — a row of 2 big cards (Dubai, Brussels)
// then a row of 3 smaller cards (Paris, Nairobi, London).
// Each card is a photo with the city name + flag overlaid on top.

function TrendingDestinations() {
  const bigDestinations = [
    {
      city: "Dubai",
      flag: "🇦🇪",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop",
    },
    {
      city: "Brussels",
      flag: "🇧🇪",
      image:
        "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&h=500&fit=crop",
    },
  ];

  const smallDestinations = [
    {
      city: "Paris",
      flag: "🇫🇷",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    },
    {
      city: "Nairobi",
      flag: "🇰🇪",
      image:
        "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop",
    },
    {
      city: "London",
      flag: "🇬🇧",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    },
  ];

  // Small reusable card used for both rows below.
  function DestinationCard({ city, flag, image, heightClass }) {
    return (
      <div className={`relative rounded-lg overflow-hidden ${heightClass}`}>
        <img
          src={image}
          alt={city}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient so the white text stays readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-3 text-white text-xl font-bold">
          {city} {flag}
        </span>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Trending destinations</h2>

      {/* Row 1: two large cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {bigDestinations.map((destination) => (
          <DestinationCard
            key={destination.city}
            {...destination}
            heightClass="h-56"
          />
        ))}
      </div>

      {/* Row 2: three smaller cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {smallDestinations.map((destination) => (
          <DestinationCard
            key={destination.city}
            {...destination}
            heightClass="h-40"
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingDestinations;

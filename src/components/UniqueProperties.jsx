// UniqueProperties.jsx
// "Stay at our top unique properties" — 4 property cards.
// Notice this component doesn't know HOW PropertyCard works inside,
// it just hands it data through props. That's the whole point of props.

import PropertyCard from "./PropertyCard";

function UniqueProperties() {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      name: "Hotel Club du Lac Tanganyika",
      location: "Bujumbura, Burundi",
      rating: 5,
      ratingLabel: "8.3",
      reviewCount: 177,
      price: "US$180",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      badge: "Genius",
      name: "Distant Relatives Ecolodge & Backpackers",
      location: "Kilifi, Kenya",
      rating: 3,
      ratingLabel: "8.8",
      reviewCount: 323,
      price: "US$26",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=400&h=300&fit=crop",
      badge: "Genius",
      name: "The Residence Zanzibar",
      location: "Kizimkazi, Tanzania",
      rating: 5,
      ratingLabel: "8.8",
      reviewCount: 310,
      price: "US$587",
      priceNote: "Starting from",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      name: "2 Friends Beach Hotel",
      location: "Entebbe, Uganda",
      rating: 3,
      ratingLabel: "8.6",
      reviewCount: 273,
      price: "US$160",
      priceNote: "Starting from",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-1">
        Stay at our top unique properties
      </h2>
      <p className="text-gray-600 mb-4">
        From castles and villas to boats and igloos, we have it all
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </div>
    </section>
  );
}

export default UniqueProperties;

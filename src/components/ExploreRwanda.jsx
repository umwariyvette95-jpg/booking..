// ExploreRwanda.jsx
// "Explore Rwanda" — a simple row of 5 destination thumbnails,
// each with a city name and property count underneath.

function ExploreRwanda() {
  const destinations = [
    {
      name: "Kigali",
      count: "1,468 properties",
      image:
        "https://images.unsplash.com/photo-1612630536300-7c0b27e5beda?w=300&h=300&fit=crop",
    },
    {
      name: "Gisenyi",
      count: "48 properties",
      image:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=300&fit=crop",
    },
    {
      name: "Ruhengeri",
      count: "42 properties",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop",
    },
    {
      name: "Kibuye",
      count: "12 properties",
      image:
        "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=300&h=300&fit=crop",
    },
    {
      name: "Kinigi",
      count: "22 properties",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=300&fit=crop",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-1">Explore Rwanda</h2>
      <p className="text-gray-600 mb-4">
        These popular destinations have a lot to offer
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {destinations.map((destination) => (
          <div key={destination.name}>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <p className="font-semibold text-sm">{destination.name}</p>
            <p className="text-gray-500 text-xs">{destination.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreRwanda;

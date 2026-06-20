// PropertyTypes.jsx
// "Browse by property type" — Hotels, Apartments, Resorts, Villas.
// Each one is just an image + a label underneath.

function PropertyTypes() {
  const propertyTypes = [
    {
      name: "Hotels",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      name: "Apartments",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    },
    {
      name: "Resorts",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    },
    {
      name: "Villas",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Browse by property type</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {propertyTypes.map((type) => (
          <div key={type.name}>
            <img
              src={type.image}
              alt={type.name}
              className="w-full h-36 object-cover rounded-lg mb-2"
            />
            <p className="font-semibold">{type.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PropertyTypes;

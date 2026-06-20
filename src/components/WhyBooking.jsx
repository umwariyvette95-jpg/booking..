// WhyBooking.jsx
// The "Why Booking.com?" section — 4 simple cards in a row,
// each with an emoji icon, a bold title, and a short description.

function WhyBooking() {
  // Storing the card data as an array lets us .map() instead of
  // writing the same JSX 4 times — a common beginner-friendly pattern.
  const features = [
    {
      icon: "🏷️",
      title: "Book now, pay at the property",
      description: "FREE cancellation on most rooms",
    },
    {
      icon: "🌟",
      title: "300M+ reviews from fellow travelers",
      description: "Get trusted information from guests like you",
    },
    {
      icon: "🌍",
      title: "2+ million properties worldwide",
      description: "Hotels, guest houses, apartments, and more...",
    },
    {
      icon: "🎧",
      title: "Trusted 24/7 customer service",
      description: "We're always here to help",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Why Booking.com?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-gray-100 rounded-lg p-4">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyBooking;

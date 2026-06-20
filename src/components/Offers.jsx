// Offers.jsx
// The "Offers" section — just one promo card right now ("Getaway Deals"),
// but built so you could easily map over more than one in the future.

function Offers() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-1">Offers</h2>
      <p className="text-gray-600 mb-4">
        Promotions, deals, and special offers for you
      </p>

      <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">No catch. Just getaways.</h3>
          <p className="text-gray-600 mb-4">
            At least 15% off select stays worldwide — just book and go.
          </p>
          <button className="bg-booking-accent hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
            Save with a Getaway Deal
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
          alt="A couple walking on the beach"
          className="hidden sm:block w-40 h-28 object-cover rounded"
        />
      </div>
    </section>
  );
}

export default Offers;

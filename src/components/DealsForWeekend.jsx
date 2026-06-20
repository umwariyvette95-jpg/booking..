// DealsForWeekend.jsx
// "Deals for the weekend" — same PropertyCard component as before,
// just different data, plus the crossed-out original price.

import PropertyCard from "./PropertyCard";

function DealsForWeekend() {
  const deals = [
    {
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
      badge: "Genius",
      name: "Kigali Garden Suit and Homestay",
      location: "Kigali, Rwanda",
      rating: 4,
      ratingLabel: "7.5",
      reviewCount: 31,
      price: "US$37",
      originalPrice: "US$46",
      priceNote: "2 nights",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?w=400&h=300&fit=crop",
      name: "Kivu Hilltop Beach Hotel & Apartment",
      location: "Gisenyi, Rwanda",
      rating: 4,
      ratingLabel: "8.8",
      reviewCount: 6,
      price: "US$86",
      priceNote: "2 nights",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
      badge: "Genius",
      name: "Ikoro Resort Musanze",
      location: "Ruhengeri, Rwanda",
      rating: 3,
      ratingLabel: "8.3",
      reviewCount: 8,
      price: "US$96",
      originalPrice: "US$120",
      priceNote: "2 nights",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      badge: "Genius",
      name: "M Hotel Kigali",
      location: "Kigali, Rwanda",
      rating: 4,
      ratingLabel: "8.4",
      reviewCount: 646,
      price: "US$237",
      originalPrice: "US$293",
      priceNote: "2 nights",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-1">Deals for the weekend</h2>
      <p className="text-gray-600 mb-4">Save on stays for June 26 - June 28</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deals.map((deal) => (
          <PropertyCard key={deal.name} {...deal} />
        ))}
      </div>
    </section>
  );
}

export default DealsForWeekend;

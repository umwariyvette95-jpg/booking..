// Footer.jsx
// The very bottom of the page: 4 columns of links
// (Support, Discover, Terms and settings, Partners, About)
// plus the country/currency selector and copyright line at the bottom.

function Footer() {
  // Each column is just a title + list of link labels.
  // Storing it this way means the JSX below can stay identical
  // for every column — only the data changes.
  const columns = [
    {
      title: "Support",
      links: ["Manage your trips", "Contact Customer Service", "Safety Resource Center"],
    },
    {
      title: "Discover",
      links: [
        "Genius loyalty program",
        "Seasonal and holiday deals",
        "Travel articles",
        "Booking.com for Business",
        "Traveller Review Awards",
        "Car rental",
        "Flight finder",
        "Restaurant reservations",
        "Booking.com for Travel Agents",
      ],
    },
    {
      title: "Terms and settings",
      links: [
        "Privacy Notice",
        "Terms of Service",
        "Accessibility Statement",
        "Partner dispute",
        "Modern Slavery Statement",
        "Human Rights Statement",
      ],
    },
    {
      title: "Partners",
      links: ["Extranet login", "Partner help", "List your property", "Become an affiliate"],
    },
    {
      title: "About",
      links: [
        "About Booking.com",
        "How We Work",
        "Sustainability",
        "Press center",
        "Careers",
        "Investor relations",
        "Corporate contact",
        "Content guidelines and reporting",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-semibold mb-3 text-sm">{column.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Currency selector row */}
      <div className="max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600">
        <span>🇺🇸</span>
        <span>USD</span>
      </div>

      {/* Copyright line */}
      <div className="bg-gray-50 py-6 text-center text-xs text-gray-500">
        <p className="mb-2">
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
        </p>
        <p className="mb-3">Copyright © 1996–2026 Booking.com™. All rights reserved.</p>
        <p className="font-semibold text-gray-700">
          Booking.com · Priceley · KAYAK · agoda · OpenTable
        </p>
      </div>
    </footer>
  );
}

export default Footer;

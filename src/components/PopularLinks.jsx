// PopularLinks.jsx
// "Popular with travelers from Rwanda" — two tabs ("Domestic cities" /
// "International cities" / "Countries") that switch which list of
// plain text links is shown underneath.
//
// This is another simple useState example: we just remember which
// tab is currently selected, and show different content based on it.

import { useState } from "react";

function PopularLinks() {
  const tabs = ["Domestic cities", "International cities", "Countries"];

  // Start with the first tab selected, matching the screenshot.
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Different link lists per tab — just plain example data.
  const linksByTab = {
    "Domestic cities": ["Kigali", "Musanze", "Gisenyi", "Rubavu", "Huye"],
    "International cities": ["Nairobi", "Kampala", "Dar es Salaam", "Bujumbura"],
    Countries: ["Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi"],
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">
        Popular with travelers from Rwanda
      </h2>

      {/* Tab buttons */}
      <div className="flex gap-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={
              tab === activeTab
                ? "bg-blue-50 text-booking-accent border border-booking-accent rounded-full px-4 py-1.5 text-sm font-medium"
                : "text-gray-600 border border-gray-300 rounded-full px-4 py-1.5 text-sm hover:bg-gray-50"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* The links for whichever tab is currently active */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {linksByTab[activeTab].map((link) => (
          <a key={link} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>
    </section>
  );
}

export default PopularLinks;

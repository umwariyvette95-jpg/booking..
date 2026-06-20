// Hero.jsx
// This is the big blue banner with "Find your next stay" and the
// search bar underneath it (Where / Check-in-out / Guests / Search).

import { useState } from "react";

function Hero() {
  // Each input field gets its own simple state.
  // We don't need useReducer here because these fields don't depend
  // on each other — they're independent pieces of memory.
  const [destination, setDestination] = useState("");
  const [travelingForWork, setTravelingForWork] = useState(false);

  // This function runs when the user clicks the "Search" button.
  function handleSearch() {
    // For a real app this would trigger an API call or navigation.
    // For now we just show what was typed, so you can see state working.
    alert(`Searching stays in: ${destination || "(nothing typed yet)"}`);
  }

  return (
    <div className="bg-booking-blue pb-16 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold mb-2">
          Find your next stay
        </h2>
        <p className="text-white text-lg mb-6">
          Search deals on hotels, homes, and much more...
        </p>

        {/* Search bar card */}
        <div className="bg-white rounded-lg p-1 flex flex-col sm:flex-row gap-1 shadow-lg">
          {/* Destination input */}
          <div className="flex-1 border border-yellow-400 rounded px-3 py-2 flex items-center gap-2">
            <span>📍</span>
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Date range — just a static-looking field for this clone */}
          <div className="flex-1 border border-yellow-400 rounded px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
            <span>📅</span>
            Check-in date — Check-out date
          </div>

          {/* Guests selector — also static for this clone */}
          <div className="flex-1 border border-yellow-400 rounded px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
            <span>👤</span>
            2 adults · 0 children · 1 room
          </div>

          {/* Search button — calls handleSearch when clicked */}
          <button
            onClick={handleSearch}
            className="bg-booking-accent hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Search
          </button>
        </div>

        {/* "I'm traveling for work" checkbox — a tiny piece of state */}
        <label className="flex items-center gap-2 text-white text-sm mt-3">
          <input
            type="checkbox"
            checked={travelingForWork}
            onChange={(event) => setTravelingForWork(event.target.checked)}
          />
          I'm traveling for work
        </label>
      </div>
    </div>
  );
}

export default Hero;

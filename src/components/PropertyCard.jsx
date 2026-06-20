// PropertyCard.jsx
// A single reusable card used in 3 different sections of the homepage:
// "Stay at our top unique properties", "Deals for the weekend", and
// "Homes guests love". Rather than copy-pasting the same JSX three
// times, we built one component and pass it different data as props.
//
// It also has its own little piece of state: the heart/save button.
// This is the same pattern from the "Save to Favorites" session —
// useState(false) here is just the simplest version (Step 3),
// since each card on the homepage doesn't need to share its saved
// status with anything else on the page.

import { useState } from "react";

function PropertyCard({
  image,
  badge, // e.g. "Genius" or "Getaway Deal" — optional small label
  name,
  location,
  rating,
  ratingLabel,
  reviewCount,
  price,
  originalPrice, // optional — shown crossed out for deals
  priceNote, // e.g. "Starting from" or "2 nights"
}) {
  // "isSaved" starts as false (not saved). Clicking the heart flips it.
  const [isSaved, setIsSaved] = useState(false);

  function toggleSave() {
    setIsSaved((previous) => !previous);
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image + heart button sit on top of each other */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-36 object-cover" />

        <button
          onClick={toggleSave}
          aria-label={isSaved ? "Remove from saved" : "Save property"}
          className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
          {isSaved ? "❤️" : "🤍"}
        </button>

        {badge && (
          <span className="absolute top-2 left-2 bg-booking-accent text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      {/* Text content below the image */}
      <div className="p-3">
        <p className="text-yellow-500 text-sm mb-1">
          {"★".repeat(rating)}
        </p>
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-gray-500 text-xs mb-2">{location}</p>

        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-800 text-white text-xs font-bold px-1.5 py-0.5 rounded">
            {ratingLabel}
          </span>
          <span className="text-gray-500 text-xs">
            {reviewCount} reviews
          </span>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-xs">{priceNote}</p>
          {originalPrice && (
            <span className="text-gray-400 text-xs line-through mr-1">
              {originalPrice}
            </span>
          )}
          <span className="font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

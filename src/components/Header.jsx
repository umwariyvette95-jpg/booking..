// Header.jsx
// This is the very top of the page: the dark blue bar with the logo,
// the USD / flag / help icons, and the Register / Sign in buttons.
// Below that sits a row of nav links: Stays, Flights, Car rental, etc.

function Header() {
  // Storing the nav links as a plain array makes it easy to add/remove one
  // without touching the JSX below — we just .map() over this list.
  const navLinks = [
    { label: "Stays", icon: "🏨" },
    { label: "Flights", icon: "✈️" },
    { label: "Car rental", icon: "🚗" },
    { label: "Attractions", icon: "🎟️" },
    { label: "Airport taxis", icon: "🚕" },
  ];

  return (
    <div className="bg-booking-blue">
      {/* Top row: logo on the left, account controls on the right */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        <h1 className="text-white text-2xl font-bold">Booking.com</h1>

        <div className="flex items-center gap-4 text-white text-sm">
          <span className="hidden sm:inline">USD</span>
          <span>🇺🇸</span>
          <span className="hidden sm:inline">❓</span>
          <button className="hidden md:inline text-sm hover:underline">
            List your property
          </button>
          <button className="bg-booking-blue border border-white text-white px-3 py-2 rounded hover:bg-white/10">
            Register
          </button>
          <button className="bg-white text-booking-blue px-3 py-2 rounded font-medium hover:bg-gray-100">
            Sign in
          </button>
        </div>
      </div>

      {/* Second row: the category nav links (Stays, Flights, etc.) */}
      <div className="max-w-6xl mx-auto px-4 pb-3">
        <nav className="flex items-center gap-6 text-white text-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href="#"
              // The first link ("Stays") gets a pill background to show
              // it's the active tab, just like on the real site.
              className={
                index === 0
                  ? "bg-white/10 px-3 py-1.5 rounded-full border border-white flex items-center gap-1"
                  : "flex items-center gap-1 hover:underline"
              }
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;

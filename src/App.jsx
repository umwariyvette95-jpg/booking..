// App.jsx
// This is the root component. Its only job is to stack every section
// of the homepage in the right order, top to bottom — just like
// the real Booking.com homepage in the screenshot.
//
// Notice App itself has almost no logic. Each section is its own
// component and manages its own content. That separation is the
// whole point of "component-based development" from the course notes.

import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyBooking from "./components/WhyBooking";
import Offers from "./components/Offers";
import PropertyTypes from "./components/PropertyTypes";
import TrendingDestinations from "./components/TrendingDestinations";
import UniqueProperties from "./components/UniqueProperties";
import ExploreRwanda from "./components/ExploreRwanda";
import DealsForWeekend from "./components/DealsForWeekend";
import HomesGuestsLove from "./components/HomesGuestsLove";
import SignInBanner from "./components/SignInBanner";
import PopularLinks from "./components/PopularLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyBooking />
      <Offers />
      <PropertyTypes />
      <TrendingDestinations />
      <UniqueProperties />
      <ExploreRwanda />
      <DealsForWeekend />
      <HomesGuestsLove />
      <SignInBanner />
      <PopularLinks />
      <Footer />
    </div>
  );
}

export default App;

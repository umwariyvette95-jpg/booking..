// SignInBanner.jsx
// "Travel more, spend less" — the Genius loyalty sign-in prompt.

function SignInBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Travel more, spend less</h2>

      <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between gap-6">
        <div>
          <h3 className="font-bold mb-1">Sign in, save money</h3>
          <p className="text-gray-600 text-sm mb-4">
            Save 10% or more at participating properties — just look for the
            blue Genius label
          </p>
          <div className="flex gap-3">
            <button className="bg-booking-accent hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
              Sign in
            </button>
            <button className="border border-booking-accent text-booking-accent hover:bg-blue-50 px-4 py-2 rounded font-medium transition-colors">
              Register
            </button>
          </div>
        </div>

        {/* Simple gift-box emoji standing in for the Genius graphic */}
        <div className="hidden sm:block text-6xl">🎁</div>
      </div>
    </section>
  );
}

export default SignInBanner;

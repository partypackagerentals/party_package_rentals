export default function PartyPackageRentalsLandingPage() {
  const logo = "/mnt/data/The Party Package Logo_20260407(2).png";

  const packages = [
    {
      name: "The Foam Package",
      price: "$300",
      subtitle: "1 hour attended foam party",
      desc: "Foam cannon, music, beach balls, setup, teardown, and an on-site attendant.",
      badge: "Most Popular",
    },
    {
      name: "The Backyard Battle Package",
      price: "$75",
      subtitle: "24 hour DIY rental",
      desc: "Blasters, darts, inflatable bunkers, and safety gear for an easy backyard setup.",
      badge: "DIY Favorite",
    },
    {
      name: "The Showtime Package",
      price: "From $100",
      subtitle: "movie night and game night",
      desc: "Projector, screen, speaker, and upgrades for backyard movie nights.",
      badge: "Family Night",
    },
    {
      name: "The Snack Bar Package",
      price: "$175",
      subtitle: "choose any 3 machines",
      desc: "Popcorn, cotton candy, snow cones, and more.",
      badge: "Best Value",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <img src={logo} alt="The Party Package Rentals" className="h-16" />
        <a
          href="#book"
          className="rounded-2xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
        >
          Message to Book
        </a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 h-3 w-3 rounded-full bg-pink-400" />
          <div className="absolute top-32 right-16 h-3 w-3 rounded-full bg-yellow-400" />
          <div className="absolute bottom-24 left-1/3 h-3 w-3 rounded-full bg-cyan-400" />
          <div className="absolute bottom-10 right-10 h-3 w-3 rounded-full bg-purple-400" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              <span className="text-pink-500">Small Town.</span>
              <br />
              <span className="text-blue-500">Big Parties.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              We bring the fun to you. Foam parties, backyard battles, movie nights, and more.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#packages"
                className="rounded-2xl bg-blue-500 px-6 py-4 text-white font-semibold"
              >
                See Packages
              </a>
              <a
                href="#book"
                className="rounded-2xl border-2 border-pink-500 px-6 py-4 text-pink-500 font-semibold"
              >
                Message Us
              </a>
            </div>
          </div>

          {/* FOAM IMAGE PLACEHOLDER */}
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-pink-400">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30"
              alt="Foam Party"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <h2 className="text-4xl font-black mb-8">Packages</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl p-6 shadow-lg border">
              <h3 className="text-2xl font-black">{pkg.name}</h3>
              <p className="text-sm text-slate-500 uppercase">{pkg.subtitle}</p>
              <p className="mt-4 text-slate-600">{pkg.desc}</p>
              <div className="mt-4 text-xl font-bold text-pink-500">{pkg.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16 px-6 md:px-10">
        <h2 className="text-4xl font-black mb-8">How It Works</h2>

        <div className="grid gap-6 md:grid-cols-4">
          {["Message Us", "Pick Package", "Pay Deposit", "Party"].map((step, i) => (
            <div key={step} className="rounded-2xl bg-white p-6 shadow">
              <div className="text-2xl font-black text-blue-500">{i + 1}</div>
              <div className="mt-2 font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="px-6 py-16 md:px-10">
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 p-10 text-white text-center">
          <h2 className="text-4xl font-black">Ready to book?</h2>
          <p className="mt-4">Message us your date and package</p>
          <a
            href="mailto:hello@thepartypackagerentals.com"
            className="mt-6 inline-block bg-white text-slate-900 px-6 py-4 rounded-2xl font-semibold"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}

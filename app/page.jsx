export default function PartyPackageRentalsWebsite() {
  const packages = [
    {
      name: "The Backyard Battle Package",
      price: "$75",
      details: "24-hour rental • 25 blasters • 200 darts • 10 sets of eyewear • 8 inflatable hides",
      blurb: "Everything you need for a high-energy backyard Nerf-style party."
    },
    {
      name: "The Build It Package",
      price: "Custom",
      details: "Construction-themed play setup with oversized foam blocks and add-on options",
      blurb: "Perfect for little builders who want a hands-on party experience."
    },
    {
      name: "Movie Night Package",
      price: "Custom",
      details: "Projector + screen setup for backyard movies, gaming, or special events",
      blurb: "Bring the big-screen feeling home for birthdays, family nights, and celebrations."
    },
    {
      name: "Concessions & Add-Ons",
      price: "Custom",
      details: "Popcorn, cotton candy, hot dog roller, bubble fun, and more",
      blurb: "Layer on the extras to make your party feel complete."
    }
  ];

  const faqs = [
    {
      q: "How does pickup work?",
      a: "Most packages are pickup and return. Delivery may be available for an additional fee upon request."
    },
    {
      q: "What area do you serve?",
      a: "We serve Paso Robles and surrounding areas."
    },
    {
      q: "How long is the rental period?",
      a: "Most rentals are for 24 hours unless otherwise noted in the listing."
    },
    {
      q: "What if items are returned dirty or damaged?",
      a: "Returned items should be party-dirty, not disaster-dirty. Cleaning fees, damage fees, and missing item fees are covered in the rental agreement."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-yellow-50 to-cyan-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-pink-300 blur-2xl" />
          <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-cyan-300 blur-2xl" />
          <div className="absolute bottom-10 left-1/3 h-28 w-28 rounded-full bg-yellow-300 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm">
                Small town. Big parties.
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Party rentals that make birthdays feel easy and fun.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                The Party Package Rentals brings playful, ready-to-go party experiences to Paso Robles.
                Pick up your package, set it up, and turn your backyard into the party.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  View Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Book Your Date
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-pink-50 p-5">
                    <div className="text-3xl">🎯</div>
                    <h3 className="mt-3 text-lg font-bold">Backyard Battle</h3>
                    <p className="mt-2 text-sm text-slate-600">Nerf-style action with blasters, darts, eyewear, and inflatable hides.</p>
                  </div>
                  <div className="rounded-3xl bg-cyan-50 p-5">
                    <div className="text-3xl">🍿</div>
                    <h3 className="mt-3 text-lg font-bold">Concession Fun</h3>
                    <p className="mt-2 text-sm text-slate-600">Popcorn, treats, and add-ons that make the whole party feel bigger.</p>
                  </div>
                  <div className="rounded-3xl bg-yellow-50 p-5">
                    <div className="text-3xl">🏗️</div>
                    <h3 className="mt-3 text-lg font-bold">Build It Parties</h3>
                    <p className="mt-2 text-sm text-slate-600">Construction-themed play for kids who want to build, stack, and explore.</p>
                  </div>
                  <div className="rounded-3xl bg-violet-50 p-5">
                    <div className="text-3xl">🎬</div>
                    <h3 className="mt-3 text-lg font-bold">Movie Nights</h3>
                    <p className="mt-2 text-sm text-slate-600">Outdoor movie magic for birthdays, sleepovers, and family events.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Step 1</p>
            <h3 className="mt-2 text-xl font-bold">Choose your package</h3>
            <p className="mt-3 text-slate-600">Pick the party setup that fits your celebration and your space.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Step 2</p>
            <h3 className="mt-2 text-xl font-bold">Pick up or request delivery</h3>
            <p className="mt-3 text-slate-600">Most rentals are easy pickup and return. Delivery may be available on request.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Step 3</p>
            <h3 className="mt-2 text-xl font-bold">Party hard</h3>
            <p className="mt-3 text-slate-600">Set it up, celebrate, and return everything ready for the next adventure.</p>
          </div>
        </div>
      </section>

      <section id="packages" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">Packages</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Start with the package. Add the fun.</h2>
            <p className="mt-4 text-slate-600">
              These are some of our featured party packages. Final package details, add-ons, and availability can be customized.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold leading-tight">{item.name}</h3>
                  <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="mt-4 text-slate-700">{item.blurb}</p>
                <p className="mt-4 text-sm font-medium text-slate-500">{item.details}</p>
                <button className="mt-6 rounded-2xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">
                  Ask About This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">Why families book us</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Big fun without the big stress.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                "Simple pickup-and-return rentals",
                "Unique package options that stand out",
                "Great for birthdays, family nights, and school-age kids",
                "Easy add-ons to build a fuller party experience",
                "Local service with a personal touch",
                "Designed to make hosting feel doable"
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-100 p-5 text-slate-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-300">Service Area</p>
            <h3 className="mt-3 text-3xl font-black">Serving Paso Robles</h3>
            <p className="mt-4 text-slate-300">
              We are built for local families who want something fun, different, and actually manageable.
            </p>
            <div className="mt-8 rounded-3xl bg-white/10 p-6">
              <p className="text-sm text-slate-300">Need something custom?</p>
              <p className="mt-2 text-lg font-semibold">Ask about package add-ons, themed setups, and future availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">A few things people ask</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold">{item.q}</h3>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="text-3xl font-black md:text-5xl">Let’s get your party on the calendar.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Ready to book, ask a question, or check availability? Reach out and let’s build your package.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@thepartypackagerentals.com" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg">
              Email Us
            </a>
            <a href="https://facebook.com" className="rounded-2xl border border-white/60 px-6 py-3 text-sm font-semibold text-white">
              Message on Facebook
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">Replace the contact links with your real email, Facebook page, booking form, or phone number.</p>
        </div>
      </section>
    </div>
  );
}

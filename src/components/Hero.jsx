import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[#292929] bg-[#111]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        {/* Hero Color Area */}
        <div className="hero-grid rounded-2xl px-6 py-10 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Side */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#ccff00]">
                WORKOUT LIBRARY
              </p>

              <h1 className="display-font max-w-xl text-4xl leading-tight uppercase sm:text-5xl lg:text-6xl">
                Train with intent.
                <br />
                Log every set.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#999] md:text-lg">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today's plan, and watch the week's work add up.
              </p>

              <div className="mt-7">
                <Link
                  href="#library"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:scale-[1.02]"
                >
                  Browse Workouts
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/banner.png"
                alt="FitLog workout"
                className="w-full max-w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

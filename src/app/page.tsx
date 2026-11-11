export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07141F] text-[#F3EDE2]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#163D32_0%,transparent_55%),radial-gradient(ellipse_at_90%_0%,#122A38_0%,transparent_45%)]"
      />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-[#D4C09A]">
          CONSTELLA ANGE
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Cloud control for Constellations — never the live path.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#8FB9A8] sm:text-lg">
          Organizations, projects, libraries, and remote management on Vercel.
          Venue production stays offline-first in the native{" "}
          <span className="text-[#F3EDE2]">Constella Ange</span> desktop engine.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Source",
              body: "Bible, songs, sermons, capture, and media libraries.",
            },
            {
              title: "Origin → Target",
              body: "Compose and route into monitors, OBS, and streams.",
            },
            {
              title: "Constellation",
              body: "Virtual groups that connect Sources, Origins, and Targets.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#1E3A48] bg-[#0C1F2C]/80 p-5"
            >
              <h2 className="text-sm font-semibold tracking-wide text-[#D4C09A]">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6E8B7C]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://vercel.com/new/clone?repository-url=https://github.com/josdisk/constella_ange_web"
            className="inline-flex h-11 items-center rounded-full bg-[#A8E0C8] px-5 text-sm font-semibold text-[#07141F] transition hover:bg-[#8FCFB0]"
          >
            Deploy on Vercel
          </a>
          <a
            href="https://v0.dev"
            className="inline-flex h-11 items-center rounded-full border border-[#1E3A48] px-5 text-sm font-medium text-[#F3EDE2] transition hover:border-[#3D9B7A]"
          >
            Open in v0
          </a>
          <a
            href="https://github.com/josdisk/constella_ange_app"
            className="inline-flex h-11 items-center rounded-full border border-[#1E3A48] px-5 text-sm font-medium text-[#8FB9A8] transition hover:border-[#3D9B7A]"
          >
            Native engine repo
          </a>
        </div>
      </div>
    </main>
  );
}

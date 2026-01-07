export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f1e9] text-[#1f1a14]">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f1a14] text-sm font-semibold text-[#f6f1e9]">
              NX
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6b5f52]">
                Launchpad
              </p>
              <p className="text-lg font-semibold">Next Studio</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3b332a] md:flex">
            <a className="transition hover:text-[#0ea5e9]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#f97316]" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-[#0ea5e9]" href="#pricing">
              Pricing
            </a>
          </nav>
          <button className="rounded-full border border-[#1f1a14] px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[#1f1a14] hover:text-[#f6f1e9]">
            Book a demo
          </button>
        </header>

        <main className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d2c4b4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5f52]">
              New release · pipelines on autopilot
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Design, build, and ship your Next.js ideas in one focused studio.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#4a4035]">
              A calm workspace that turns Git pushes into confident releases.
              Blend your branding, roadmap, and deploy plan into a single page
              that feels crafted for your team.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#1f1a14] px-6 py-3 text-sm font-semibold text-[#f6f1e9] transition hover:-translate-y-0.5 hover:bg-[#0f0d0a]">
                Start the build
              </button>
              <button className="rounded-full border border-[#1f1a14] px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/70">
                View workflow
              </button>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-6 rounded-2xl border border-[#e3d8c8] bg-white/80 p-6 text-sm">
              <div>
                <p className="text-2xl font-semibold">3x</p>
                <p className="text-[#6b5f52]">Faster releases</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">12</p>
                <p className="text-[#6b5f52]">Ready playbooks</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">98%</p>
                <p className="text-[#6b5f52]">Pass rate</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-[#e3d8c8] bg-white/90 p-6 shadow-[0_25px_80px_rgba(31,26,20,0.18)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b5f52]">
                    Deploy snapshot
                  </p>
                  <p className="text-xl font-semibold">CI/CD overviewsdasdasdsa</p>
                </div>
                <span className="rounded-full bg-[#fef3c7] px-3 py-1 text-xs font-semibold text-[#92400e]">
                  Live
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Commit changes to GitHub",
                  "Trigger workflow & build",
                  "Ship to cPanel instantly",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-[#efe5d7] bg-[#fdfaf6] px-4 py-3"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f1a14] text-sm font-semibold text-[#f6f1e9]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{step}</p>
                      <p className="text-xs text-[#6b5f52]">
                        Status: waiting on you
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[#1f1a14] px-5 py-4 text-sm text-[#f6f1e9]">
                Push from local, verify with tests, and ship without leaving the
                dashboard.
              </div>
            </div>
          </section>
        </main>

        <section id="features" className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold">A template with intent</h2>
            <p className="max-w-md text-sm text-[#6b5f52]">
              Balanced typography, warm neutrals, and a clear grid keep the
              layout bold while staying readable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Focused hero layout",
                text: "Large headlines and grounded CTAs that guide attention.",
              },
              {
                title: "Structured sections",
                text: "Card-based blocks make it easy to swap real content in.",
              },
              {
                title: "Ready for expansion",
                text: "Add testimonials, blogs, or feature grids without rework.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#e3d8c8] bg-white/90 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6b5f52]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#e3d8c8] bg-white/90 p-8">
            <h2 className="text-2xl font-semibold">Workflow rhythm</h2>
            <p className="mt-4 text-sm leading-7 text-[#6b5f52]">
              A single page can explain the entire release motion. Use this
              section to outline the actions you take before every deploy.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-2xl bg-[#fdfaf6] px-4 py-3">
                Sync with GitHub and lock in tests.
              </div>
              <div className="rounded-2xl bg-[#fdfaf6] px-4 py-3">
                Confirm production config and secrets.
              </div>
              <div className="rounded-2xl bg-[#fdfaf6] px-4 py-3">
                Push to deploy and monitor in real time.
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#1f1a14] bg-[#1f1a14] p-8 text-[#f6f1e9]">
            <h2 className="text-2xl font-semibold">Launch checklist</h2>
            <ul className="mt-6 space-y-4 text-sm text-[#f1e7da]">
              <li>Validate environments with a single command.</li>
              <li>Track every deploy artifact in one place.</li>
              <li>Bring stakeholders into the release timeline.</li>
            </ul>
            <button className="mt-8 rounded-full bg-[#f6f1e9] px-6 py-3 text-sm font-semibold text-[#1f1a14] transition hover:-translate-y-0.5 hover:bg-white">
              Download checklist
            </button>
          </div>
        </section>

        <section id="pricing" className="mt-20">
          <div className="rounded-3xl border border-[#e3d8c8] bg-white/90 p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6b5f52]">
              Starter plan
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Ship your first flow</h2>
            <p className="mt-3 text-sm text-[#6b5f52]">
              Everything you need to learn CI/CD and deploy with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="text-4xl font-semibold">$24</span>
              <span className="text-sm text-[#6b5f52]">per month</span>
              <button className="rounded-full bg-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0284c7]">
                Choose plan
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

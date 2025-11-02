import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background liquid blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Glass content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Enterprise-grade Cyber Defense
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Secure your business with a trusted consultant.
            </h1>
            <p className="mt-4 text-lg text-white/70">
              I help fintech and SaaS teams harden infrastructure, pass audits, and build a culture of security without slowing down product velocity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-emerald-500 text-emerald-950 font-semibold px-5 py-3 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
                Request a security assessment
              </a>
              <a href="#services" className="inline-flex justify-center items-center rounded-xl bg-white/10 border border-white/15 text-white px-5 py-3 hover:bg-white/15 transition">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle gradient veil not blocking scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </section>
  );
}

import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Services from "./components/Services";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white relative">
      {/* Decorative background grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      <Navbar />
      <Hero3D />
      <Services />
      <BlogList />

      {/* Contact + Footer */}
      <section id="contact" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold">Let’s strengthen your security posture</h3>
              <p className="mt-2 text-white/70">
                Share your objectives and constraints — I’ll respond with a focused plan and timeline.
              </p>
              <a href="mailto:hello@cyber.dev" className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 text-emerald-950 font-semibold px-5 py-3 hover:bg-emerald-400 transition">
                hello@cyber.dev
              </a>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
              <h4 className="text-lg font-semibold">Capabilities</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Security architecture reviews</li>
                <li>• Product and API threat modeling</li>
                <li>• SDLC + secure coding enablement</li>
                <li>• Incident response readiness</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} CyberSec Consultant — Built with a glassmorphic, liquid aesthetic.</p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#blog" className="hover:text-white">Blog</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { Shield, Lock, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-emerald-400/30 blur-md" />
            <div className="relative rounded-xl bg-white/5 border border-white/10 p-2">
              <Shield className="h-5 w-5 text-emerald-300" />
            </div>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">CyberSec Consultant</p>
            <p className="text-xs text-emerald-300/80">Defense • Audit • Strategy</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
          <a href="#blog" className="text-white/80 hover:text-white transition">Blog</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="mailto:hello@cyber.dev" aria-label="Email" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Mail className="h-4 w-4 text-white" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Github className="h-4 w-4 text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Linkedin className="h-4 w-4 text-white" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-400/20 border border-emerald-300/30 px-3 py-2 text-sm font-medium text-emerald-100 hover:bg-emerald-400/30 transition">
            <Lock className="h-4 w-4" />
            Book a Security Review
          </a>
        </div>
      </div>
    </header>
  );
}

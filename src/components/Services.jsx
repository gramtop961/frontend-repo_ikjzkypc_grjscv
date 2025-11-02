import { ShieldCheck, Bug, Server, Key } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Security Audits",
    desc: "Comprehensive reviews aligned with ISO 27001, SOC 2, and GDPR best practices.",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    desc: "Application and infrastructure testing with actionable, prioritized findings.",
  },
  {
    icon: Server,
    title: "Cloud Hardening",
    desc: "Zero-trust networking, IAM, and secret management for AWS/GCP/Azure.",
  },
  {
    icon: Key,
    title: "Identity & Access",
    desc: "SSO, MFA, and least-privilege design across teams and services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-2 text-white/70">Practical, outcome-focused engagements tailored to your risk profile.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-xl overflow-hidden">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 border border-emerald-300/30">
                  <Icon className="h-5 w-5 text-emerald-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

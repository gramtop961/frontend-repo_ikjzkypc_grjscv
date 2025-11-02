import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "A practical approach to SOC 2 without stalling product",
    excerpt:
      "How to layer controls, automate evidence, and pass audits while keeping engineering velocity high.",
    tags: ["Compliance", "SOC 2", "Automation"],
    date: "Oct 2025",
  },
  {
    id: 2,
    title: "Top cloud misconfigurations I still see in 2025",
    excerpt:
      "From public S3 buckets to over-permissive IAM — a field guide to fixing the usual suspects.",
    tags: ["Cloud", "AWS", "Best Practices"],
    date: "Sep 2025",
  },
  {
    id: 3,
    title: "Threat modeling for startups: lightweight and effective",
    excerpt:
      "Run a 60-minute workshop that actually drives decisions and reduces risk.",
    tags: ["Threat Modeling", "Startups"],
    date: "Aug 2025",
  },
];

export default function BlogList() {
  return (
    <section id="blog" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Insights & Blog</h2>
          <p className="mt-2 text-white/70">Notes from the field on building resilient, compliant systems.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-xl overflow-hidden">
              <div className="absolute -top-12 -left-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />
              <div className="relative">
                <p className="text-xs text-white/60">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-emerald-200 transition">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 text-white/70 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="mt-5 inline-flex items-center gap-1 text-emerald-200 hover:text-emerald-100">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

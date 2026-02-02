"use client";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Booking Platform",
      desc: "Full-stack booking system with authentication, room management and payment flow.",
      tech: ["Next.js", "Spring Boot", "MySQL", "JWT"],
      link: "https://webcraft-templates1.vercel.app/",
    },
    {
      title: "YOLO Fruit Detection",
      desc: "AI image classification using YOLOv8 for fruit detection and mobile deployment.",
      tech: ["Python", "YOLO", "OpenCV"],
      link: "#",
    },
    {
      title: "Income Manager",
      desc: "Personal finance management web app with monthly targets and analytics.",
      tech: ["Next.js", "Chart.js"],
      link: "#",
    },
  ];

  return (
    <section className="mt-24 space-y-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="group relative overflow-hidden rounded-xl border border-emerald-500/20 bg-black/40 p-6 transition-all duration-300
                       hover:-translate-y-1 hover:border-emerald-400
                       hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]"
          >
            {/* glow overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100
                            bg-gradient-to-br from-emerald-500/10 to-indigo-500/10" />

            <h3 className="relative z-10 text-xl font-semibold text-emerald-300">
              {p.title}
            </h3>

            <p className="relative z-10 mt-2 text-sm text-slate-300 leading-relaxed">
              {p.desc}
            </p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-emerald-500/30 bg-black/60 px-2 py-0.5
                             text-xs text-emerald-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

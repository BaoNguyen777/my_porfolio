"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    name: "Web Templates Platform",
    time: "2021 – Present",
    status: "Main Project · Active",
    role: "Founder · Full Stack Developer",
    desc: "Nền tảng web templates chuẩn UX/UI, tối ưu SEO, hiệu suất cao cho cá nhân & doanh nghiệp.",
    tech: ["Next.js", "Tailwind", "Node.js", "MongoDB", "AWS"],
    link: "https://webcraft-templates1.vercel.app/",
  },
  {
    name: "Hotel Booking System",
    time: "2023",
    status: "Completed",
    role: "Full Stack Developer",
    desc: "Hệ thống booking khách sạn với auth, phân quyền & API.",
    tech: ["React", "Node.js", "JWT"],
  },
  {
    name: "Business Website",
    time: "2022",
    status: "Completed",
    role: "Frontend Developer",
    desc: "Website doanh nghiệp, landing page bán hàng.",
    tech: ["HTML", "CSS", "SEO"],
  },
  {
    name: "Portfolio Website",
    time: "2021",
    status: "Completed",
    role: "Designer · Developer",
    desc: "Portfolio cá nhân với animation & UX hiện đại.",
    tech: ["Next.js", "Animation"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const stepDeg = 360 / projects.length;

  /* 🔧 SCALE VỪA MÀN HÌNH */
  const radius = 240;
  const size = 560;

  return (
    <section className="mx-auto mt-40 w-full max-w-6xl">
      <h2 className="text-center text-5xl font-bold text-emerald-400">
        Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Circular project showcase
      </p>

      <div className="relative mt-24 flex h-[640px] items-center justify-center">
        {/* Vòng tròn */}
        <div
          className="absolute rounded-full border border-emerald-500/30"
          style={{ width: size, height: size }}
        />

        {/* Orbit – CCW */}
        <div
          className="absolute transition-transform duration-700 ease-in-out"
          style={{
            width: size,
            height: size,
            transform: `rotate(${active * stepDeg}deg)`, // CCW
          }}
        >
          {projects.map((p, i) => {
            const angle = i * stepDeg;
            const isActive = i === active;

            return (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateY(-${radius}px)
                    rotate(${-angle - active * stepDeg}deg)
                  `,
                }}
              >
                <div
                  className={`
                    rounded-3xl border bg-black p-6 text-center transition-all duration-700
                    ${isActive
                      ? "w-[380px] scale-125 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.45)]"
                      : "w-48 scale-90 border-white/10 opacity-70"}
                  `}
                >
                  <h3 className="text-lg font-bold text-white">
                    {p.name}
                  </h3>

                  <p className="mt-1 text-xs tracking-widest text-emerald-400">
                    {p.time}
                  </p>

                  {isActive && (
                    <>
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-emerald-300">
                        <CheckCircle size={14} />
                        {p.status}
                      </div>

                      <p className="mt-2 text-xs text-slate-400">
                        {p.role}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-white/80">
                        {p.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {p.tech.map(t => (
                          <span
                            key={t}
                            className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-400 hover:underline"
                        >
                          View project <ExternalLink size={16} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Web Templates Platform",
    time: "2021 – Present",
    desc: "Nền tảng web templates chuẩn UX/UI, hiệu suất cao, dễ custom & scale cho cá nhân và doanh nghiệp.",
    link: "https://webcraft-templates1.vercel.app/",
  },
  {
    name: "Hotel Booking System",
    time: "2023",
    desc: "Hệ thống booking khách sạn với auth, phân quyền, backend API.",
  },
  {
    name: "Business Website",
    time: "2022",
    desc: "Website doanh nghiệp, landing page bán hàng.",
  },
  {
    name: "Portfolio Website",
    time: "2021",
    desc: "Portfolio cá nhân với animation & UX hiện đại.",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const radius = 220;
  const step = (2 * Math.PI) / projects.length;

  return (
    <section className="mx-auto mt-40 w-full max-w-6xl">
      <h2 className="text-center text-5xl font-bold text-emerald-400">
        Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Dự án tiêu biểu – Circular Showcase
      </p>

      <div className="relative mt-24 flex h-[560px] items-center justify-center">
        {/* CIRCLE LINE */}
        <div className="absolute h-[460px] w-[460px] rounded-full border border-emerald-500/30" />

        {/* ROTATING ORBIT */}
        <div
          className="absolute h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `rotate(${-active * (360 / projects.length)}deg)`,
          }}
        >
          {projects.map((p, i) => {
            const angle = i * step - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = i === active;

            return (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 transition-all duration-700"
                style={{
                  transform: `
                    translate(${x}px, ${y}px)
                    ${isActive ? "scale(1.25)" : "scale(0.9)"}
                  `,
                }}
              >
                <div
                  className={`
                    w-40 rounded-2xl border bg-black p-4 text-center
                    ${isActive
                      ? "border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.35)]"
                      : "border-white/10 opacity-70"}
                  `}
                >
                  <div className="font-semibold text-white">{p.name}</div>
                  <div className="mt-1 text-xs tracking-widest text-emerald-400">
                    {p.time}
                  </div>

                  {isActive && (
                    <>
                      <p className="mt-3 text-sm text-white/80">
                        {p.desc}
                      </p>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline"
                        >
                          View project <ExternalLink size={14} />
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

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
        Sản phẩm & dự án tiêu biểu
      </p>

      <div className="relative mt-24 flex h-[520px] items-center justify-center">
        {/* CIRCLE LINE */}
        <div className="absolute h-[460px] w-[460px] rounded-full border border-emerald-500/30" />

        {/* MAIN PROJECT */}
        <div className="absolute z-20 w-[420px] rounded-3xl border border-emerald-500/40 bg-black p-8 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-700">
          <h3 className="text-3xl font-bold text-white">
            {projects[active].name}
          </h3>
          <div className="mt-1 text-sm tracking-widest text-emerald-400">
            {projects[active].time}
          </div>
          <p className="mt-5 text-white/80 leading-relaxed">
            {projects[active].desc}
          </p>

          {projects[active].link && (
            <a
              href={projects[active].link}
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400 hover:underline"
            >
              Xem dự án <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* ORBIT PROJECTS */}
        {projects.map((p, i) => {
          if (i === active) return null;

          const index = (i - active + projects.length) % projects.length;
          const angle = index * step - Math.PI / 2;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className="absolute z-10 transition-all duration-700 hover:scale-110"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="w-36 rounded-xl border border-white/10 bg-black px-4 py-3 text-center text-sm text-white/80">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-slate-400">{p.time}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

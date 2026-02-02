"use client";

import { useEffect, useState } from "react";
import { Code2, Rocket, Globe, CheckCircle2 } from "lucide-react";

type Color = "emerald" | "cyan" | "indigo";

export default function Projects() {
  const colors: Color[] = ["emerald", "cyan", "indigo"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex(i => (i + 1) % colors.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const color = colors[colorIndex];

  const project = {
    name: "Web Templates Platform",
    timeline: "2021 – Present",
    status: "Hoàn thành & đang mở rộng",
    description:
      "Nền tảng web templates chuyên nghiệp dành cho cá nhân & doanh nghiệp, tập trung mạnh vào UX/UI, hiệu suất, khả năng tùy biến và triển khai nhanh vào môi trường production.",
    highlights: [
      "Thiết kế chuẩn UX/UI, animation mượt",
      "SEO & Performance tối ưu",
      "Dễ custom – dễ scale",
      "Triển khai thực tế cho nhiều khách hàng",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
    ],
    metrics: [
      { label: "Templates", value: "20+" },
      { label: "Khách hàng", value: "10+" },
      { label: "UX/UI", value: "100%" },
    ],
    link: "https://webcraft-templates1.vercel.app/",
  };

  const borderColor =
    color === "emerald"
      ? "border-emerald-500/40"
      : color === "cyan"
      ? "border-cyan-500/40"
      : "border-indigo-500/40";

  const glowColor =
    color === "emerald"
      ? "shadow-[0_0_40px_rgba(16,185,129,0.25)]"
      : color === "cyan"
      ? "shadow-[0_0_40px_rgba(34,211,238,0.25)]"
      : "shadow-[0_0_40px_rgba(129,140,248,0.25)]";

  const textColor =
    color === "emerald"
      ? "text-emerald-400"
      : color === "cyan"
      ? "text-cyan-400"
      : "text-indigo-400";

  return (
    <section className="mx-auto mt-36 w-[92%] max-w-6xl">
      {/* TITLE */}
      <h2
        className={`text-center text-5xl font-bold transition-colors duration-1000 ${textColor}`}
      >
        Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Dự án tiêu biểu & sản phẩm chủ lực
      </p>

      {/* PROJECT CARD */}
      <div
        className={`
          group relative mt-20 rounded-3xl border bg-black p-10 transition-all duration-500
          hover:-translate-y-2 hover:scale-[1.01]
          ${borderColor} ${glowColor}
        `}
      >
        {/* STATUS */}
        <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black px-4 py-1 text-sm text-emerald-400">
          <CheckCircle2 size={16} />
          {project.status}
        </div>

        {/* HEADER */}
        <div className="flex items-center gap-3">
          <Code2 className={textColor} />
          <h3 className="text-3xl font-bold text-white">
            {project.name}
          </h3>
        </div>

        {/* TIMELINE */}
        <div className="mt-2 text-sm tracking-widest text-slate-400">
          {project.timeline}
        </div>

        {/* DESC */}
        <p className="mt-6 max-w-3xl leading-relaxed text-white/80">
          {project.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.highlights.map(h => (
            <div
              key={h}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-black px-4 py-2 text-sm text-white/80"
            >
              <Rocket size={14} className={textColor} />
              {h}
            </div>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <Globe size={16} />
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span
                key={t}
                className={`
                  rounded-full border px-4 py-1 text-xs transition-colors duration-500
                  ${borderColor} ${textColor}
                `}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* METRICS */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {project.metrics.map(m => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-black p-5 text-center"
            >
              <div className={`text-2xl font-bold ${textColor}`}>
                {m.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* LINK */}
        <a
          href={project.link}
          target="_blank"
          className={`
            mt-10 inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all
            ${borderColor} ${textColor}
            hover:bg-white/5
          `}
        >
          Xem dự án
          <Rocket size={16} />
        </a>
      </div>
    </section>
  );
}

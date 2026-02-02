"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

type Color =
  | "emerald"
  | "indigo"
  | "amber"
  | "teal"
  | "violet"
  | "rose";

type Project = {
  name: string;
  timeline: string;
  title: string;
  description: string;
  role: string;
  company: string;
  status: "completed" | "progress";
  tech: string[];
  metrics: { label: string; value: string }[];
  color: Color;
  link: string;
  isFlagship?: boolean;
};

/* ================= COLOR MAP ================= */
const colorMap: Record<
  Color,
  {
    text: string;
    softText: string;
    border: string;
    bgSoft: string;
    ring: string;
  }
> = {
  emerald: {
    text: "text-emerald-300",
    softText: "text-emerald-200",
    border: "border-emerald-400/30",
    bgSoft: "bg-emerald-500/15",
    ring: "ring-emerald-400/40",
  },
  indigo: {
    text: "text-indigo-300",
    softText: "text-indigo-200",
    border: "border-indigo-400/30",
    bgSoft: "bg-indigo-500/15",
    ring: "ring-indigo-400/40",
  },
  amber: {
    text: "text-amber-300",
    softText: "text-amber-200",
    border: "border-amber-400/30",
    bgSoft: "bg-amber-500/15",
    ring: "ring-amber-400/40",
  },
  teal: {
    text: "text-teal-300",
    softText: "text-teal-200",
    border: "border-teal-400/30",
    bgSoft: "bg-teal-500/15",
    ring: "ring-teal-400/40",
  },
  violet: {
    text: "text-violet-300",
    softText: "text-violet-200",
    border: "border-violet-400/30",
    bgSoft: "bg-violet-500/15",
    ring: "ring-violet-400/40",
  },
  rose: {
    text: "text-rose-300",
    softText: "text-rose-200",
    border: "border-rose-400/30",
    bgSoft: "bg-rose-500/15",
    ring: "ring-rose-400/40",
  },
};
/* ============================================= */

const projects: Project[] = [
  {
    name: "Webcraft Templates",
    timeline: "2025 — Present",
    title: "Portfolio & Web Templates Platform",
    description:
      "Nền tảng portfolio và web templates bán sẵn, tập trung UI/UX, animation mượt và khả năng tái sử dụng cao.",
    role: "Frontend / Full-stack Developer",
    company: "Personal Brand",
    status: "progress",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Templates", value: "10+" },
      { label: "Clients", value: "5+" },
      { label: "Lighthouse", value: "95+" },
    ],
    color: "emerald",
    link: "https://webcraft-templates1.vercel.app/",
    isFlagship: true,
  },
  {
    name: "AudiA6s",
    timeline: "2024",
    title: "Website doanh nghiệp ô tô",
    description:
      "Website giới thiệu showroom AudiA6s với phong cách sang trọng, responsive & SEO.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed",
    tech: ["Next.js", "Tailwind", "SEO"],
    metrics: [
      { label: "Pages", value: "8+" },
      { label: "SEO", value: "90+" },
      { label: "Devices", value: "100%" },
    ],
    color: "rose",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      <h2 className="text-center text-5xl font-bold text-white">
        Featured Projects
      </h2>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((p, i) => {
          const c = colorMap[p.color];

          return (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{
                scale: p.isFlagship ? 1.12 : 1.07,
                y: -14,
              }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 22,
              }}
              className={`relative rounded-3xl border border-white/10 
                bg-gradient-to-br to-black p-8 backdrop-blur-xl
                ${p.isFlagship ? `ring-2 ${c.ring}` : ""}
              `}
            >
              {/* FLAGSHIP */}
              {p.isFlagship && (
                <div
                  className={`absolute left-5 top-5 flex items-center gap-2 
                    rounded-full px-4 py-1 text-xs font-bold
                    ${c.bgSoft} ${c.text}`}
                >
                  <Sparkles size={14} /> Flagship
                </div>
              )}

              {/* STATUS */}
              <div className="absolute right-5 top-5 text-xs">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/80">
                  {p.status === "completed" ? (
                    <CheckCircle size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {p.status === "completed" ? "Completed" : "In Progress"}
                </span>
              </div>

              {/* NAME */}
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="text-white/60" />
                <span className={`text-lg font-semibold ${c.text}`}>
                  {p.name}
                </span>
              </div>

              <div className="text-sm text-slate-400">{p.timeline}</div>

              {/* TITLE */}
              <h3 className="mt-2 text-xl font-bold text-white">
                <span className={c.softText}>
                  {p.title}
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {p.description}
              </p>

              {/* ROLE */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className={`rounded-full px-3 py-1 ${c.bgSoft} ${c.text}`}>
                  {p.company}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                  {p.role}
                </span>
              </div>

              {/* TECH */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className={`rounded-full border px-3 py-1 text-xs
                      ${idx < 2 ? `${c.border} ${c.text}` : "border-white/10 text-slate-300"}
                    `}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* METRICS */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {p.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                  >
                    <div className={`text-lg font-bold ${c.text}`}>
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-end">
                <span className={`flex items-center gap-2 text-sm font-semibold ${c.text}`}>
                  View Project <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

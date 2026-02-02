
  "use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Briefcase,
  CheckCircle,
  Activity,
} from "lucide-react";

/* ================= DATA ================= */
  const experiences = [
    {
      role: "Backend / Full-stack Developer",
      company: "FPT Software",
      time: "2022 – 2024",
      desc: [
        "Xây dựng và maintain hệ thống backend cho dự án enterprise.",
        "Thiết kế REST API, xử lý authentication (JWT).",
        "Làm việc với MySQL, MongoDB, tối ưu query và performance.",
        "Phối hợp frontend để hoàn thiện luồng nghiệp vụ.",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Docker", "JWT"],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      time: "2021 – 2022",
      desc: [
        "Thiết kế website doanh nghiệp, landing page, booking system.",
        "Triển khai full-stack từ UI → Backend → Deploy.",
        "Làm việc trực tiếp với khách hàng, phân tích yêu cầu.",
      ],
      tech: ["Next.js", "React", "Node.js", "Vercel"],
    },
  ];
/* ================= COLOR MAP ================= */
const colorMap: Record<string, string> = {
  emerald: "border-emerald-500/40 shadow-emerald-500/30",
};

/* ================= COMPONENT ================= */
export default function Experience() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-6xl">
      {/* TITLE */}
      <div className="text-center">
        <p className="mb-3 text-sm tracking-widest text-amber-400">
          🔐 GIT LOG --ONELINE --GRAPH --DECORATE
        </p>
        <h2 className="text-5xl font-bold text-purple-400">
          &lt;Kinh nghiệm /&gt;
        </h2>
      </div>

      {/* CARD */}
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02, y: -6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative mt-20 rounded-3xl border bg-gradient-to-br 
          from-black/70 via-black/60 to-black/80 
          p-8 backdrop-blur-xl ${colorMap[exp.color]}`}
        >
          {/* TERMINAL HEADER */}
          <div className="mb-6 flex items-center justify-between rounded-xl bg-black/40 px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="flex gap-1">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-sm text-orange-400">
                lizai-vietnam.log
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
              ● LIVE
            </span>
          </div>

          {/* HEADER */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-2xl font-bold text-white">
              {exp.role}
            </h3>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
              <Briefcase size={14} className="inline" /> {exp.company}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
              {exp.time}
            </span>
          </div>

          {/* RESPONSIBILITIES */}
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-slate-300">
              🔑 Key Responsibilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {exp.responsibilities.map((r, idx) => (
                <li key={idx} className="flex gap-2">
                  <Terminal size={14} className="mt-1 text-emerald-400" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* STACK */}
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-slate-300">
              ⚙ Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-emerald-500/30 
                  bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-slate-300">
              🏆 Key Achievements
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {exp.achievements.map((a, idx) => (
                <li key={idx} className="flex gap-2">
                  <CheckCircle size={14} className="mt-1 text-emerald-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* LEVEL */}
          <div className="mt-10">
            <div className="mb-2 flex justify-between text-xs text-slate-400">
              <span>Experience Level</span>
              <span className="text-emerald-300">Active</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-orange-400"
                style={{ width: `${exp.level}%` }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

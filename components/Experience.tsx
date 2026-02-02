"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Briefcase,
  CheckCircle,
} from "lucide-react";

/* ================= DATA ================= */
const experiences = [
  {
    role: "Software Engineer",
    company: "FPT Software",
    time: "2022 — 2024",
    responsibilities: [
      "Tham gia phát triển và bảo trì các hệ thống web cho khách hàng enterprise",
      "Làm việc theo mô hình Agile/Scrum với BA và QA",
      "Phát triển backend với Java Spring Boot và RESTful API",
      "Tối ưu truy vấn database và xử lý nghiệp vụ",
      "Fix bug, refactor và đảm bảo coding standard",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Git",
      "Jira",
      "Agile/Scrum",
    ],
    achievements: [
      "Hoàn thành đúng deadline nhiều module quan trọng",
      "Giảm lỗi production nhờ cải thiện validate & exception handling",
      "Làm quen quy trình phát triển phần mềm chuẩn enterprise",
    ],
    level: 75,
    color: "indigo",
  },
  {
    role: "Freelance Full-stack Developer",
    company: "Freelance / Personal Brand",
    time: "2024 — Hiện tại",
    responsibilities: [
      "Thiết kế và phát triển website cho khách hàng cá nhân & doanh nghiệp",
      "Xây dựng frontend với Next.js, Tailwind CSS và animation",
      "Phát triển backend, REST API và database",
      "Tối ưu UI/UX, SEO và hiệu năng",
      "Trao đổi trực tiếp với khách hàng và bàn giao sản phẩm",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Node.js",
      "MySQL",
      "Vercel",
    ],
    achievements: [
      "Hoàn thành nhiều dự án web doanh nghiệp & booking",
      "Xây dựng portfolio và Webcraft Templates",
      "Nhận feedback tốt về UI/UX và tốc độ xử lý",
    ],
    level: 85,
    color: "emerald",
  },
];

/* ================= COLOR MAP ================= */
const colorMap: Record<string, string> = {
  emerald:
    "border-emerald-500/40 shadow-emerald-500/30 hover:shadow-emerald-500/40",
  indigo:
    "border-indigo-500/40 shadow-indigo-500/30 hover:shadow-indigo-500/40",
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

      {/* EXPERIENCE LIST */}
      <div className="mt-20 space-y-20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              mass: 0.7,
            }}
            className={`group relative rounded-3xl border
              bg-gradient-to-br from-black/70 via-black/60 to-black/80
              p-8 backdrop-blur-xl transition-all
              hover:shadow-[0_0_80px_-20px]
              ${colorMap[exp.color]}`}
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
                  {exp.company.toLowerCase().replaceAll(" ", "-")}.log
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                ● LIVE
              </span>
            </div>

            {/* HEADER */}
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">
                {exp.role}
              </h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">
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
                    <Terminal
                      size={14}
                      className="mt-1 text-emerald-400 transition-colors group-hover:text-emerald-300"
                    />
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
                    className="rounded-full border border-white/10 bg-white/5
                      px-3 py-1 text-xs text-slate-300 transition-all
                      group-hover:border-emerald-400/40
                      group-hover:text-emerald-300"
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
                    <CheckCircle
                      size={14}
                      className="mt-1 text-emerald-400 transition-colors group-hover:text-emerald-300"
                    />
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
                  className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-orange-400
                    transition-all group-hover:shadow-[0_0_20px_rgba(52,211,153,0.8)]"
                  style={{ width: `${exp.level}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

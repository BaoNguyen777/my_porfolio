"use client";

import { motion } from "framer-motion";
import { Code2, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

type ProjectStatus = "completed" | "progress";

const projects = [
  {
    name: "Arroo",
    timeline: "2021 — 2023",
    title: "Hệ thống phân tích tài chính",
    description:
      "Hệ thống tính toán và visualization dữ liệu tài chính toàn diện giúp doanh nghiệp xử lý và phân tích báo cáo tài chính phức tạp theo tiêu chuẩn quốc tế.",
    role: "Full-stack Developer & DevOps Engineer",
    company: "Epsilon Tech (Freelance)",
    status: "completed" as ProjectStatus,
    tech: [
      "ReactJS",
      "Material UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "CSV Processing",
    ],
    metrics: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Satisfaction", value: "100%" },
    ],
    theme: "purple",
  },
  {
    name: "Crawler System",
    timeline: "2022 — Present",
    title: "Hệ thống crawler dữ liệu lớn",
    description:
      "Hệ thống crawl dữ liệu quy mô lớn với kiến trúc phân tán, xử lý big data và thu thập dữ liệu từ hàng nghìn nguồn khác nhau.",
    role: "NodeJS Engineer",
    company: "LizAI Vietnam",
    status: "progress" as ProjectStatus,
    tech: [
      "Node.js",
      "Java",
      "Apache Hadoop",
      "Puppeteer",
      "Apache Nutch",
      "Apache Solr",
      "MinIO",
      "AWS EC2",
    ],
    metrics: [
      { label: "Data Processed", value: "10TB+" },
      { label: "Websites", value: "1000+" },
      { label: "Uptime", value: "99.9%" },
    ],
    theme: "green",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      <h2 className="text-center text-5xl font-bold text-white">
        Featured Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Một số sản phẩm & hệ thống tiêu biểu đã triển khai
      </p>

      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`relative rounded-3xl border backdrop-blur-xl
              ${
                p.theme === "purple"
                  ? "border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-black"
                  : "border-emerald-500/30 bg-gradient-to-br from-emerald-900/50 to-black"
              }
            `}
          >
            {/* STATUS */}
            <div className="absolute right-5 top-5">
              <span
                className={`flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold
                  ${
                    p.status === "completed"
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-emerald-500/20 text-emerald-300"
                  }
                `}
              >
                {p.status === "completed" ? (
                  <CheckCircle size={14} />
                ) : (
                  <Clock size={14} />
                )}
                {p.status === "completed" ? "Hoàn thành" : "Đang phát triển"}
              </span>
            </div>

            {/* HEADER */}
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3 text-slate-300">
                <Code2 />
                <span className="text-lg font-semibold">{p.name}</span>
              </div>

              <div className="text-sm tracking-widest text-slate-400">
                {p.timeline}
              </div>

              <h3 className="mt-2 text-xl font-bold text-white">
                {p.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {p.description}
              </p>

              {/* ROLE */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                  {p.company}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                  {p.role}
                </span>
              </div>

              {/* TECH */}
              <div className="mt-6">
                <p className="mb-2 text-sm font-semibold text-white">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* METRICS */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {p.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                  >
                    <div className="text-lg font-bold text-white">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex items-center justify-end">
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white/10">
                  View Details <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

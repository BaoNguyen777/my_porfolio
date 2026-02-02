"use client";

import { motion } from "framer-motion";
import { Code2, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

type ProjectStatus = "completed" | "progress";

const projects = [
  {
    name: "Webcraft Templates",
    timeline: "2025 — Present",
    title: "Portfolio & Web Templates Platform",
    description:
      "Hệ thống portfolio cá nhân và web templates bán sẵn, tập trung vào UI/UX, animation và khả năng tái sử dụng cao cho freelancer và doanh nghiệp nhỏ.",
    role: "Frontend / Full-stack Developer",
    company: "Personal Brand – Webcraft",
    status: "progress" as ProjectStatus,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Vercel",
      "SEO Optimization",
    ],
    metrics: [
      { label: "Templates", value: "10+" },
      { label: "Clients", value: "5+" },
      { label: "Lighthouse", value: "95+" },
    ],
    theme: "green",
  },
  {
    name: "Hotel Booking Platform",
    timeline: "2024 — 2025",
    title: "Hệ thống đặt phòng khách sạn Full-stack",
    description:
      "Website booking khách sạn end-to-end gồm tìm kiếm, xem phòng, đặt phòng và quản lý user/admin. Backend thiết kế RESTful API, dễ mở rộng và tích hợp thanh toán.",
    role: "Full-stack Developer",
    company: "Personal Project",
    status: "completed" as ProjectStatus,
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "JWT Authentication",
      "MySQL",
      "REST API",
    ],
    metrics: [
      { label: "Modules", value: "15+" },
      { label: "APIs", value: "40+" },
      { label: "Performance", value: "A+" },
    ],
    theme: "green",
  },
  {
    name: "YOLO AI – Fruit Detection",
    timeline: "2024",
    title: "Nhận diện & phân loại trái cây bằng AI",
    description:
      "Ứng dụng AI sử dụng YOLOv8 để nhận diện và phân loại trái cây theo hình ảnh, tích hợp vào iOS app phục vụ demo và nghiên cứu ứng dụng.",
    role: "AI Engineer",
    company: "Research Project",
    status: "completed" as ProjectStatus,
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "PyTorch",
      "iOS Integration",
    ],
    metrics: [
      { label: "Accuracy", value: "92%+" },
      { label: "Classes", value: "10+" },
      { label: "FPS", value: "30+" },
    ],
    theme: "green",
  },
  {
    name: "AI Bone Fracture Detection",
    timeline: "2025",
    title: "Chẩn đoán gãy xương từ ảnh X-ray",
    description:
      "Luận văn tốt nghiệp ứng dụng AI để phát hiện gãy xương từ ảnh X-ray bằng YOLO, tập trung vào training pipeline và đánh giá mô hình.",
    role: "AI Researcher",
    company: "Graduation Thesis",
    status: "completed" as ProjectStatus,
    tech: [
      "Python",
      "YOLO",
      "Medical Imaging",
      "Data Labeling",
      "Model Evaluation",
    ],
    metrics: [
      { label: "Dataset", value: "5K+" },
      { label: "Precision", value: "90%+" },
      { label: "Recall", value: "88%+" },
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
                p.theme === "green"
                  ? "border-emerald-500/30 bg-gradient-to-br from-emerald-900/50 to-black"
                  : ""
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

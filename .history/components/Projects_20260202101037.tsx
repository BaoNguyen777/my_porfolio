"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

type ProjectStatus = "completed" | "progress";
type ProjectColor = "emerald" | "indigo" | "rose" | "purple" | "orange" | "pink";

type Project = {
  name: string;
  timeline: string;
  title: string;
  description: string;
  role: string;
  company: string;
  status: ProjectStatus;
  tech: string[];
  metrics: { label: string; value: string }[];
  color: ProjectColor;
  link: string;
  isFlagship?: boolean;
};

/* ================= COLOR SYSTEM ================= */

const colorMap: Record<
  ProjectColor,
  { border: string; bg: string; glow: string; text: string }
> = {
  emerald: {
    border: "border-emerald-500/30",
    bg: "from-emerald-900/70 via-emerald-800/40 to-black",
    glow: "rgba(16,185,129,0.9)",
    text: "text-emerald-300",
  },
  indigo: {
    border: "border-indigo-500/30",
    bg: "from-indigo-900/70 via-indigo-800/40 to-black",
    glow: "rgba(99,102,241,0.9)",
    text: "text-indigo-300",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "from-rose-900/70 via-rose-800/40 to-black",
    glow: "rgba(244,63,94,0.9)",
    text: "text-rose-300",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-900/70 via-purple-800/40 to-black",
    glow: "rgba(168,85,247,0.9)",
    text: "text-purple-300",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "from-orange-900/70 via-orange-800/40 to-black",
    glow: "rgba(249,115,22,0.9)",
    text: "text-orange-300",
  },
  pink: {
    border: "border-pink-500/30",
    bg: "from-pink-900/70 via-pink-800/40 to-black",
    glow: "rgba(236,72,153,0.9)",
    text: "text-pink-300",
  },
};

/* ================= PROJECT DATA ================= */

const projects: Project[] = [
  {
    name: "Webcraft",
    timeline: "2024 — Present",
    title: "Nền tảng Web Templates & Booking System",
    description:
      "Flagship project xây dựng hệ sinh thái web template, landing page và hệ thống booking khách sạn full-stack, tối ưu UI/UX và khả năng mở rộng.",
    role: "Full-stack Developer",
    company: "Personal Product",
    status: "progress",
    tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Templates", value: "20+" },
      { label: "Pagespeed", value: "95+" },
      { label: "Conversion", value: "+40%" },
    ],
    color: "emerald",
    link: "https://webcraft-templates1.vercel.app/",
    isFlagship: true,
  },

  {
    name: "Arroo",
    timeline: "2021 — 2023",
    title: "Hệ thống phân tích tài chính",
    description:
      "Hệ thống tính toán và visualization dữ liệu tài chính toàn diện giúp doanh nghiệp xử lý và phân tích báo cáo phức tạp theo chuẩn quốc tế.",
    role: "Full-stack Developer & DevOps Engineer",
    company: "Epsilon Tech (Freelance)",
    status: "completed",
    tech: [
      "ReactJS",
      "Material-UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "CSV Processing",
    ],
    metrics: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Processing", value: "Realtime" },
      { label: "Satisfaction", value: "100%" },
    ],
    color: "purple",
    link: "#",
  },

  {
    name: "Bone Fracture Detection",
    timeline: "2024",
    title: "AI chẩn đoán gãy xương từ X-ray",
    description:
      "Ứng dụng AI sử dụng YOLO để phát hiện và hỗ trợ chẩn đoán gãy xương từ hình ảnh X-ray, phục vụ nghiên cứu và học thuật.",
    role: "AI Engineer",
    company: "Graduation Thesis",
    status: "completed",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    metrics: [
      { label: "mAP", value: "92%" },
      { label: "Images", value: "5K+" },
      { label: "FPS", value: "25+" },
    ],
    color: "indigo",
    link: "#",
  },

  {
    name: "Fruit Detection AI",
    timeline: "2024",
    title: "Nhận diện trái cây thời gian thực",
    description:
      "Hệ thống nhận diện và phân loại trái cây từ hình ảnh và camera bằng YOLO, tập trung vào tốc độ và khả năng triển khai thực tế.",
    role: "AI Engineer & Full-stack",
    company: "Personal Project",
    status: "completed",
    tech: ["YOLOv8", "OpenCV", "FastAPI", "Next.js"],
    metrics: [
      { label: "Accuracy", value: "95%+" },
      { label: "Classes", value: "10+" },
      { label: "FPS", value: "30" },
    ],
    color: "orange",
    link: "#",
  },

  {
    name: "AudiA6s",
    timeline: "2023",
    title: "Website giới thiệu Audi A6s",
    description:
      "Landing page cao cấp cho dòng xe Audi A6s, tập trung vào hình ảnh, hiệu ứng và cảm giác luxury.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed",
    tech: ["Next.js", "GSAP", "Three.js"],
    metrics: [
      { label: "Lighthouse", value: "96" },
      { label: "CTR", value: "+35%" },
      { label: "Bounce", value: "-20%" },
    ],
    color: "rose",
    link: "#",
  },

  {
    name: "Spa Website",
    timeline: "2023",
    title: "Website Spa & Beauty Service",
    description:
      "Website giới thiệu dịch vụ spa với tone màu nhẹ nhàng, tập trung UX cho khách hàng nữ.",
    role: "Web Designer & Developer",
    company: "Client Project",
    status: "completed",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    metrics: [
      { label: "Conversion", value: "+50%" },
      { label: "Load", value: "<1s" },
      { label: "Clients", value: "500+" },
    ],
    color: "pink",
    link: "#",
  },
];

/* ================= COMPONENT ================= */

export default function Projects() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      <h2 className="text-center text-5xl font-bold text-white">
        Featured Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Một số sản phẩm & hệ thống tiêu biểu đã triển khai
      </p>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((p, i) => {
          const c = colorMap[p.color];

          return (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ scale: p.isFlagship ? 1.1 : 1.06, y: -10 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className={`
                relative overflow-hidden rounded-3xl
                border ${c.border}
                bg-gradient-to-br ${c.bg}
                backdrop-blur-xl
                shadow-[0_0_40px_-10px_${c.glow}]
                hover:shadow-[0_0_90px_-10px_${c.glow}]
                transition-all duration-200
                ${p.isFlagship ? "ring-2 ring-emerald-400/40" : ""}
              `}
            >
              {/* Inner glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

              {/* Flagship badge */}
              {p.isFlagship && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-semibold text-emerald-300 shadow">
                  <Sparkles size={14} /> Flagship
                </div>
              )}

              {/* Status */}
              <div className="absolute right-5 top-5">
                <span
                  className={`flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold border ${c.text}`}
                >
                  {p.status === "completed" ? (
                    <CheckCircle size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {p.status === "completed" ? "Hoàn thành" : "Đang phát triển"}
                </span>
              </div>

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

                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                    {p.company}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                    {p.role}
                  </span>
                </div>

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

                <div className="mt-8 flex justify-end text-white">
                  <ArrowUpRight />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

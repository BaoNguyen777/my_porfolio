"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
  Terminal,
} from "lucide-react";

/* ================= TYPES ================= */
type ProjectStatus = "completed" | "progress";
type Color = "emerald" | "indigo" | "amber" | "teal" | "violet" | "rose";

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
  color: Color;
  link: string;
  isFlagship?: boolean;
};

/* ================= DATA ================= */
const projects: Project[] = [
  {
    name: "Webcraft Templates",
    timeline: "2025 — Present",
    title: "Portfolio & Web Templates Platform",
    description:
      "Nền tảng portfolio và web templates bán sẵn, tập trung UI/UX, animation mượt và khả năng tái sử dụng cao cho freelancer & startup.",
    role: "Frontend / Full-stack Developer",
    company: "Personal Brand",
    status: "progress",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
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
    name: "Hotel Booking Platform",
    timeline: "2024 — 2025",
    title: "Hệ thống đặt phòng khách sạn Full-stack",
    description:
      "Website booking khách sạn end-to-end: tìm kiếm, xem phòng, đặt phòng và quản lý admin với RESTful API.",
    role: "Full-stack Developer",
    company: "Personal Project",
    status: "completed",
    tech: ["Next.js", "Spring Boot", "JWT", "MySQL", "REST API"],
    metrics: [
      { label: "Modules", value: "15+" },
      { label: "APIs", value: "40+" },
      { label: "Performance", value: "A+" },
    ],
    color: "indigo",
    link: "#",
  },
  {
    name: "AudiA6s",
    timeline: "2024",
    title: "Website doanh nghiệp ô tô",
    description:
      "Website giới thiệu showroom AudiA6s với giao diện sang trọng, responsive và tối ưu SEO.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed",
    tech: ["Next.js", "Tailwind CSS", "SEO", "Responsive UI"],
    metrics: [
      { label: "Pages", value: "8+" },
      { label: "SEO", value: "90+" },
      { label: "Devices", value: "100%" },
    ],
    color: "rose",
    link: "#",
  },
  {
    name: "Spa & Physical Therapy",
    timeline: "2024",
    title: "Website Spa & Vật lý trị liệu",
    description:
      "Website giới thiệu dịch vụ spa & vật lý trị liệu, UI nhẹ nhàng, dễ dùng cho khách hàng lớn tuổi.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed",
    tech: ["Next.js", "Tailwind CSS", "UI/UX"],
    metrics: [
      { label: "Services", value: "10+" },
      { label: "Clients", value: "100+" },
      { label: "Bounce", value: "<30%" },
    ],
    color: "teal",
    link: "#",
  },
  {
    name: "AI Bone Fracture Detection",
    timeline: "2025",
    title: "Chẩn đoán gãy xương từ ảnh X-ray",
    description:
      "Luận văn tốt nghiệp ứng dụng YOLO để phát hiện gãy xương từ ảnh X-ray, tập trung pipeline training và đánh giá mô hình.",
    role: "AI Engineer / Researcher",
    company: "Graduation Thesis",
    status: "completed",
    tech: ["Python", "YOLO", "Medical Imaging"],
    metrics: [
      { label: "Dataset", value: "5K+" },
      { label: "Precision", value: "90%+" },
      { label: "Recall", value: "88%+" },
    ],
    color: "violet",
    link: "#",
  },
  {
    name: "Fruit Detection AI",
    timeline: "2024",
    title: "Hệ thống nhận diện trái cây bằng AI",
    description:
      "Ứng dụng AI sử dụng YOLOv8 để nhận diện trái cây realtime từ hình ảnh & camera, triển khai web.",
    role: "AI Engineer & Full-stack Developer",
    company: "Personal Project",
    status: "completed",
    tech: ["YOLOv8", "OpenCV", "FastAPI", "Next.js"],
    metrics: [
      { label: "Accuracy", value: "95%+" },
      { label: "Classes", value: "10+" },
      { label: "FPS", value: "30" },
    ],
    color: "amber",
    link: "#",
  },
];

/* ================= COLOR MAP ================= */
const colorMap: Record<
  Color,
  { border: string; glow: string; text: string }
> = {
  emerald: {
    border: "border-emerald-500/40",
    glow: "shadow-emerald-500/40",
    text: "text-emerald-300",
  },
  indigo: {
    border: "border-indigo-500/40",
    glow: "shadow-indigo-500/40",
    text: "text-indigo-300",
  },
  amber: {
    border: "border-amber-500/40",
    glow: "shadow-amber-500/40",
    text: "text-amber-300",
  },
  teal: {
    border: "border-teal-500/40",
    glow: "shadow-teal-500/40",
    text: "text-teal-300",
  },
  violet: {
    border: "border-violet-500/40",
    glow: "shadow-violet-500/40",
    text: "text-violet-300",
  },
  rose: {
    border: "border-rose-500/40",
    glow: "shadow-rose-500/40",
    text: "text-rose-300",
  },
};

/* ================= COMPONENT ================= */
export default function Projects() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      <h2 className="text-center text-5xl font-bold text-white">
        &lt; Projects /&gt;
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Hệ thống, sản phẩm & nghiên cứu tiêu biểu
      </p>

      <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2">
        {projects.map((p, i) => {
          const theme = colorMap[p.color];

          return (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ scale: 1.09, y: -16 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 22,
                mass: 0.5,
              }}
              className={`relative overflow-hidden rounded-3xl border 
              bg-gradient-to-br from-black/70 via-black/60 to-black/80 
              p-8 backdrop-blur-xl
              hover:shadow-[0_0_80px_-20px]
              ${theme.border} ${theme.glow}`}
            >
              {/* FLAGSHIP */}
              {p.isFlagship && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-5 top-5 flex items-center gap-2 
                  rounded-full bg-yellow-400/20 px-4 py-1
                  text-xs font-bold text-yellow-300 shadow-yellow-400/40 shadow-md"
                >
                  <Sparkles size={14} /> FLAGSHIP
                </motion.div>
              )}

              {/* STATUS */}
              <div className="absolute right-5 top-5 text-xs">
                <span
                  className={`flex items-center gap-2 rounded-full px-3 py-1 
                  ${
                    p.status === "completed"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {p.status === "completed" ? (
                    <CheckCircle size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {p.status === "completed" ? "Completed" : "In Progress"}
                </span>
              </div>

              {/* HEADER */}
              <div className="mb-4 flex items-center gap-3">
                <Terminal className={theme.text} />
                <span className={`text-lg font-semibold ${theme.text}`}>
                  {p.name}
                </span>
              </div>

              <div className="text-sm text-slate-400">{p.timeline}</div>

              <h3 className="mt-2 text-xl font-bold text-white">
                {p.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {p.description}
              </p>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 px-3 py-1 text-white">
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
                    className={`rounded-full border px-3 py-1 text-xs ${theme.text} ${theme.border}`}
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
                    <div className={`text-lg font-bold ${theme.text}`}>
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-end">
                <span
                  className={`flex items-center gap-2 text-sm font-semibold ${theme.text}`}
                >
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

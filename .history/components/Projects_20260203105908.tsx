"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import AnimatedHeader from "./AnimatedHeader";

/* ================= TYPES ================= */
type ProjectStatus = "completed" | "progress";
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
      { label: "Bounce Rate", value: "<30%" },
      { label: "Clients", value: "100+" },
    ],
    color: "teal",
    link: "#",
  },
  {
    name: "AI Bone Fracture Detection",
    timeline: "2025",
    title: "Chẩn đoán gãy xương từ ảnh X-ray",
    description:
      "Luận văn tốt nghiệp ứng dụng AI (YOLO) để phát hiện gãy xương từ ảnh X-ray.",
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
      "Ứng dụng AI sử dụng YOLO để nhận diện và phân loại trái cây theo thời gian thực.",
    role: "AI Engineer & Full-stack Developer",
    company: "Personal Project",
    status: "completed",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Next.js"],
    metrics: [
      { label: "Accuracy", value: "95%+" },
      { label: "Classes", value: "10+" },
      { label: "FPS", value: "30 FPS" },
    ],
    color: "amber",
    link: "#",
  },
];

/* ================= COLOR MAP ================= */
const colorMap: Record<Color, string> = {
  emerald:
    "border-emerald-500/40 from-emerald-900/60 hover:from-emerald-800/80 shadow-emerald-500/50 text-emerald-300",
  indigo:
    "border-indigo-500/40 from-indigo-900/60 hover:from-indigo-800/80 shadow-indigo-500/50 text-indigo-300",
  amber:
    "border-amber-500/40 from-amber-900/50 hover:from-amber-800/70 shadow-amber-500/50 text-amber-300",
  teal:
    "border-teal-500/40 from-teal-900/50 hover:from-teal-800/70 shadow-teal-500/50 text-teal-300",
  violet:
    "border-violet-500/40 from-violet-900/50 hover:from-violet-800/70 shadow-violet-500/50 text-violet-300",
  rose:
    "border-rose-500/40 from-rose-900/50 hover:from-rose-800/70 shadow-rose-500/50 text-rose-300",
};

/* ================= STATUS COLOR ================= */
const statusMap = {
  completed: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    ring: "ring-emerald-400/30",
  },
  progress: {
    bg: "bg-amber-500/20",
    text: "text-amber-300",
    ring: "ring-amber-400/30",
  },
};

/* ================= COMPONENT ================= */
export default function Projects() {
  return (
    <section id="projects" className="mx-auto mt-40 w-[92%] max-w-7xl">
      <AnimatedHeader>Featured Projects</AnimatedHeader>
      <p className="mt-3 text-center text-slate-400">
        Một số sản phẩm & hệ thống tiêu biểu
      </p>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            whileHover={{ scale: p.isFlagship ? 1.12 : 1.07, y: -14 }}
            transition={{ type: "spring", stiffness: 420, damping: 22, mass: 0.6 }}
            className={`group relative rounded-3xl border bg-gradient-to-br to-black p-8 backdrop-blur-xl
              hover:shadow-[0_0_70px_-15px]
              ${colorMap[p.color]}
              ${p.isFlagship ? "ring-2 ring-yellow-400/40 shadow-yellow-500/30" : ""}
            `}
          >
            {/* FLAGSHIP */}
            {p.isFlagship && (
  <motion.div
    initial={{ opacity: 0, y: -4 }}
    animate={{
      opacity: 1,
      y: [0, -6, 0], // 👈 nhúng lên xuống
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.1,
    }}
    className="absolute left-5 top-5 flex items-center gap-2 rounded-full
      bg-gradient-to-r from-yellow-400/30 via-amber-300/30 to-yellow-500/30
      px-4 py-1 text-xs font-bold text-yellow-300
      ring-1 ring-yellow-400/40
      shadow-[0_0_30px_-6px_rgba(250,204,21,0.7)]
      backdrop-blur
    "
  >
    <Sparkles size={14} className="animate-pulse" />
    Flagship Project
  </motion.div>
)}


            {/* STATUS */}
            <div className="absolute right-5 top-5 text-xs">
              <span
                className={`flex items-center gap-2 rounded-full px-3 py-1 font-semibold ring-1
                  ${statusMap[p.status].bg}
                  ${statusMap[p.status].text}
                  ${statusMap[p.status].ring}
                `}
              >
                {p.status === "completed" ? (
                  <CheckCircle size={14} />
                ) : (
                  <Clock size={14} />
                )}
                {p.status === "completed" ? "Completed" : "In Progress"}
              </span>
            </div>

            <div className={`mb-4 flex items-center gap-3 font-semibold ${colorMap[p.color]}`}>
              <Code2 />
              <span>{p.name}</span>
            </div>

            <div className="text-sm text-slate-400">{p.timeline}</div>

            <h3 className={`mt-2 text-xl font-bold ${colorMap[p.color]}`}>
              {p.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {p.description}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {p.metrics.map((m, idx) => (
                <div key={idx} className="rounded-xl bg-black/40 p-4 text-center">
                  <div className={`text-lg font-bold ${colorMap[p.color]}`}>
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>

            <div className={`mt-8 flex justify-end font-semibold ${colorMap[p.color]}`}>
              View Project <ArrowUpRight size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

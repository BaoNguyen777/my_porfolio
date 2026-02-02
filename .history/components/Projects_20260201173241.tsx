// data/projects.ts
const project = [
  {
    id: 1,
    name: "Arroo",
    status: "HOÀN THÀNH",
    title: "Arroo – Hệ thống phân tích tài chính",
    company: "Epsilon Tech (Freelance)",
    role: "Full-stack Developer & DevOps",
    description:
      "Hệ thống tính toán và visualization dữ liệu tài chính toàn diện, hỗ trợ doanh nghiệp phân tích báo cáo phức tạp theo tiêu chuẩn quốc tế.",
    tech: ["ReactJS", "Material UI", "Node.js", "Express", "PostgreSQL"],
    metrics: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Users", value: "500+" },
      { label: "Satisfaction", value: "100%" }
    ],
    color: "purple"
  },

  {
    id: 2,
    name: "Crawler System",
    status: "ĐANG PHÁT TRIỂN",
    title: "Hệ thống Crawler – LizAI Vietnam",
    company: "LizAI Vietnam",
    role: "NodeJS Engineer",
    description:
      "Hệ thống crawl dữ liệu quy mô lớn với kiến trúc phân tán, xử lý big data từ nhiều nguồn khác nhau.",
    tech: ["Node.js", "Java", "Apache Hadoop", "Puppeteer", "Solr", "AWS EC2"],
    metrics: [
      { label: "Data", value: "10TB+" },
      { label: "Websites", value: "1000+" },
      { label: "Uptime", value: "99.9%" }
    ],
    color: "green"
  },

  {
    id: 3,
    name: "Hotel Booking",
    status: "HOÀN THÀNH",
    title: "Website Booking Khách Sạn",
    company: "Personal Project",
    role: "Full-stack Developer",
    description:
      "Website đặt phòng khách sạn full-stack, hỗ trợ tìm kiếm, đặt phòng, quản lý user và admin dashboard.",
    tech: ["Next.js", "Spring Boot", "MySQL", "JWT", "REST API"],
    metrics: [
      { label: "Modules", value: "12+" },
      { label: "Booking Flow", value: "100%" },
      { label: "Performance", value: "Fast" }
    ],
    color: "blue"
  },

  {
    id: 4,
    name: "YOLO Fruits",
    status: "HOÀN THÀNH",
    title: "AI Nhận diện Trái Cây (YOLO)",
    company: "Graduation Project",
    role: "AI Engineer",
    description:
      "Mô hình YOLO dùng để nhận diện và phân loại các loại trái cây theo hình ảnh, triển khai trên iOS.",
    tech: ["Python", "YOLOv8", "OpenCV", "CoreML", "iOS"],
    metrics: [
      { label: "Classes", value: "10+" },
      { label: "Accuracy", value: "95%+" },
      { label: "Inference", value: "Real-time" }
    ],
    color: "orange"
  },

  {
    id: 5,
    name: "Bone AI",
    status: "HOÀN THÀNH",
    title: "AI Chẩn đoán gãy xương",
    company: "Thesis Project",
    role: "AI Researcher",
    description:
      "Ứng dụng AI hỗ trợ chẩn đoán gãy xương từ hình ảnh X-ray, phục vụ nghiên cứu và hỗ trợ bác sĩ.",
    tech: ["YOLO", "Python", "Medical Imaging", "Deep Learning"],
    metrics: [
      { label: "Accuracy", value: "96%" },
      { label: "Dataset", value: "Large" },
      { label: "Use Case", value: "Medical" }
    ],
    color: "red"
  },

  {
    id: 6,
    name: "Portfolio",
    status: "HOÀN THÀNH",
    title: "Portfolio Website Cá Nhân",
    company: "Personal Brand",
    role: "Frontend / Full-stack",
    description:
      "Website portfolio cá nhân thể hiện kỹ năng thiết kế UI, animation, và trình bày dự án chuyên nghiệp.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    metrics: [
      { label: "Design", value: "Modern" },
      { label: "UX", value: "Smooth" },
      { label: "SEO", value: "Optimized" }
    ],
    color: "cyan"
  }
];

// components/ProjectCard.tsx
function ProjectCard({ project }) {
  return (
    <div
      className={`
        relative rounded-3xl p-6
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_80px_rgba(0,0,0,0.4)]
        transition hover:scale-[1.02]
      `}
    >
      {/* Status */}
      <span
        className={`
          absolute right-5 top-5 text-xs px-3 py-1 rounded-full
          ${project.status === "HOÀN THÀNH"
            ? "bg-purple-500/20 text-purple-300"
            : "bg-green-500/20 text-green-300"}
        `}
      >
        {project.status}
      </span>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-sm text-white/60 mt-1">{project.title}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        <span className="px-3 py-1 rounded-full bg-white/10">
          {project.company}
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10">
          {project.role}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tech */}
      <div className="mb-6">
        <p className="text-xs text-white/50 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-3 bg-white/5 text-center"
          >
            <p className="text-sm font-semibold">{m.value}</p>
            <p className="text-xs text-white/50">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ProjectsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}

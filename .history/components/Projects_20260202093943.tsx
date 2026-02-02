type ProjectStatus = "completed" | "progress";

const projects = [
  {
    name: "Hotel Booking Platform",
    timeline: "2024 — 2025",
    title: "Hệ thống đặt phòng khách sạn Full-stack",
    description:
      "Website booking khách sạn end-to-end gồm tìm kiếm, xem phòng, đặt phòng, quản lý user và admin dashboard. Backend thiết kế RESTful API, dễ mở rộng và tích hợp thanh toán trong tương lai.",
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
    theme: "purple",
  },
  {
    name: "YOLO AI – Fruit Detection",
    timeline: "2024",
    title: "Nhận diện & phân loại trái cây bằng AI",
    description:
      "Ứng dụng AI sử dụng YOLOv8 để nhận diện và phân loại trái cây theo hình ảnh. Model được deploy và tích hợp vào iOS app, phục vụ demo học thuật và nghiên cứu ứng dụng AI thực tế.",
    role: "AI Engineer",
    company: "Graduation / Research Project",
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
      "Luận văn tốt nghiệp ứng dụng AI để phát hiện gãy xương từ ảnh X-ray. Sử dụng YOLO cho bài toán detection, tập trung vào pipeline huấn luyện và đánh giá mô hình.",
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
    theme: "purple",
  },
  {
    name: "Portfolio & Web Templates",
    timeline: "2025 — Present",
    title: "Hệ thống portfolio & web templates",
    description:
      "Xây dựng hệ thống website portfolio cá nhân và bộ web templates bán sẵn. Tối ưu UI/UX, animation và khả năng tái sử dụng cho nhiều khách hàng.",
    role: "Frontend Developer",
    company: "Freelance",
    status: "progress" as ProjectStatus,
    tech: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
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
];

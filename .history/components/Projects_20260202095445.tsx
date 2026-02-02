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
    name: "AudiA6s",
    timeline: "2024",
    title: "Website doanh nghiệp & giới thiệu sản phẩm ô tô",
    description:
      "Website giới thiệu showroom ô tô AudiA6s với giao diện sang trọng, chuẩn brand. Tập trung vào UX, responsive và tối ưu SEO cho doanh nghiệp.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed" as ProjectStatus,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "SEO",
    ],
    metrics: [
      { label: "Pages", value: "8+" },
      { label: "SEO Score", value: "90+" },
      { label: "Devices", value: "100%" },
    ],
    theme: "green",
  },
  {
    name: "Spa & Physical Therapy",
    timeline: "2024",
    title: "Website Spa & Cơ sở vật lý trị liệu",
    description:
      "Website giới thiệu dịch vụ spa và vật lý trị liệu, trình bày rõ dịch vụ, máy móc và thông tin liên hệ. Thiết kế nhẹ nhàng, dễ sử dụng cho khách hàng lớn tuổi.",
    role: "Frontend Developer",
    company: "Client Project",
    status: "completed" as ProjectStatus,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
    ],
    metrics: [
      { label: "Services", value: "10+" },
      { label: "Bounce Rate", value: "<30%" },
      { label: "Clients", value: "100+" },
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

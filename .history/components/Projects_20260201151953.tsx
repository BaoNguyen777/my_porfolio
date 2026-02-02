"use client";
import { useEffect, useState } from "react";

export function Projects() {
  const projects = [
    {
      name: "Hotel Booking Platform",
      time: "2021 – 2023",
      desc: "Hệ thống đặt phòng khách sạn full‑stack, hỗ trợ user, admin, booking, payment.",
      tech: ["Next.js", "Node.js", "MongoDB", "JWT", "AWS"],
    },
    {
      name: "Corporate Website System",
      time: "2020 – 2022",
      desc: "Thiết kế & triển khai website doanh nghiệp chuẩn UX/UI, tối ưu SEO & performance.",
      tech: ["React", "Tailwind", "SEO", "UI/UX"],
    },
    {
      name: "Landing Page & Marketing",
      time: "2019 – 2021",
      desc: "Xây dựng landing page chuyển đổi cao cho bán hàng & marketing campaigns.",
      tech: ["HTML", "CSS", "JavaScript", "Animation"],
    },
  ];

  const colors = ["emerald", "cyan", "indigo"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex(i => (i + 1) % colors.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const color = colors[colorIndex];

  return (
    <section className="mx-auto mt-40 w-[92%]">
      <h2
        className={`text-center text-5xl font-bold transition-colors duration-1000
          ${color === "emerald" && "text-emerald-400"}
          ${color === "cyan" && "text-cyan-400"}
          ${color === "indigo" && "text-indigo-400"}
        `}
      >
        Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Một số dự án tiêu biểu đã triển khai thực tế
      </p>

      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`group relative rounded-2xl border bg-black p-7 transition-all duration-500 hover:-translate-y-2
              ${color === "emerald" && "border-emerald-500/40"}
              ${color === "cyan" && "border-cyan-500/40"}
              ${color === "indigo" && "border-indigo-500/40"}
            `}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100
              ${color === "emerald" && "bg-emerald-500/10"}
              ${color === "cyan" && "bg-cyan-500/10"}
              ${color === "indigo" && "bg-indigo-500/10"}
            " />

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-sm tracking-widest text-slate-400">
                {p.time}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      ${color === "emerald" && "bg-emerald-500/20 text-emerald-300"}
                      ${color === "cyan" && "bg-cyan-500/20 text-cyan-300"}
                      ${color === "indigo" && "bg-indigo-500/20 text-indigo-300"}
                    `}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

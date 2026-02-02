"use client";
import { useEffect, useState } from "react";

export function Achievements() {
  const data = [
    {
      year: "2025",
      title: "Hoàn thiện hệ sinh thái Portfolio & SaaS",
      details: [
        "Hoàn thiện portfolio chuẩn UX/UI, animation nâng cao",
        "Triển khai website production cho khách hàng",
        "Xây dựng nền tảng template & SaaS nhỏ",
      ],
    },
    {
      year: "2024",
      title: "Full‑stack & Booking Systems",
      details: [
        "Xây dựng hệ thống booking khách sạn / dịch vụ",
        "Tích hợp auth, phân quyền, backend API",
      ],
    },
    {
      year: "2023",
      title: "Frontend & UI/UX Growth",
      details: [
        "Thiết kế landing page, website doanh nghiệp",
        "Tối ưu UI animation & responsive",
      ],
    },
    {
      year: "2022",
      title: "Đa dạng domain website",
      details: [
        "Website giới thiệu dịch vụ",
        "Portfolio cá nhân & blog",
      ],
    },
    {
      year: "2021"
        },
        {
          year: "2020",
          title: "Foundation Year",
          details: [
            "Bắt đầu sự nghiệp Web Developer với các dự án website doanh nghiệp",
            "Làm quen Full Stack: Frontend, Backend, Database",
            "Xây dựng nền tảng tư duy UX/UI và clean code"
          ]",
      title: "Nền tảng Web Development",
      details: [
        "HTML, CSS, JavaScript nền tảng",
        "ReactJS & tư duy component",
      ],
    },
    {
      year: "2019",
      title: "Khởi đầu hành trình",
      details: [
        "Bắt đầu tự học lập trình web",
        "Thực hiện các project nhỏ",
      ],
    },
  ];

  const colors = ["emerald", "cyan", "indigo"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex(i => (i + 1) % colors.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const color = colors[colorIndex];

  return (
    <section className="mx-auto mt-36 w-[92%]">
      <h2
        className={`text-center text-5xl font-bold transition-colors duration-1000
          ${color === "emerald" && "text-emerald-400"}
          ${color === "cyan" && "text-cyan-400"}
          ${color === "indigo" && "text-indigo-400"}
        `}
      >
        Achievements
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Timeline thành tựu & dự án theo năm
      </p>

      <div className="relative mt-20 flex flex-col items-center">
        {/* LINE BEHIND */}
        <div
          className={`absolute top-0 bottom-0 w-px transition-colors duration-1000 -z-10
            ${color === "emerald" && "bg-emerald-400/40"}
            ${color === "cyan" && "bg-cyan-400/40"}
            ${color === "indigo" && "bg-indigo-400/40"}
          `}
        />

        {data.map(item => (
          <div key={item.year} className="relative mb-20 flex flex-col items-center">
            <div
              className={`mb-4 h-4 w-4 rounded-full transition-all duration-1000
                ${color === "emerald" && "bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.8)]"}
                ${color === "cyan" && "bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]"}
                ${color === "indigo" && "bg-indigo-400 shadow-[0_0_16px_rgba(129,140,248,0.8)]"}
              `}
            />

            <div
              className={`rounded-xl border bg-black/50 px-8 py-5 text-center transition-all duration-1000 max-w-xl
                ${color === "emerald" && "border-emerald-500/40"}
                ${color === "cyan" && "border-cyan-500/40"}
                ${color === "indigo" && "border-indigo-500/40"}
              `}
            >
              <div className="text-2xl font-bold tracking-widest text-white">
                {item.year}
              </div>
              <div className="mt-1 font-medium text-white/80">
                {item.title}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-400">
                {item.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GlitchItem({ item, index }: any) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((Math.random() - 0.5) * 6); // giật lag nhẹ
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{ transform: `translateX(${offset}px)` }}
      className="relative z-10 mb-16 flex flex-col items-center"
    >
      <div className="mb-3 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.9)]" />

      <div className="rounded-xl border border-emerald-500/30 bg-black/50 px-8 py-4 text-center glitch-box">
        <div className="text-2xl font-bold text-emerald-400 tracking-widest">
          {item.year}
        </div>
        <div className="mt-1 text-slate-300 text-sm md:text-base">
          {item.title}
        </div>
      </div>
    </div>
  );
}
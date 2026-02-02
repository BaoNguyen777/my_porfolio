"use client";
import { useEffect, useState } from "react";

export function Achievements() {
  const data = [
    { year: "2025", title: "Hoàn thiện hệ sinh thái Portfolio & SaaS nhỏ" },
    { year: "2024", title: "Full-stack projects & hệ thống booking" },
    { year: "2023", title: "Mở rộng kinh nghiệm Frontend & UI" },
    { year: "2022", title: "Làm việc với nhiều domain website" },
    { year: "2021", title: "Xây dựng nền tảng lập trình web" },
    { year: "2019", title: "Bắt đầu hành trình Web Developer" },
  ];

  const colors = [
    "emerald",
    "cyan",
    "indigo",
  ];

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
      <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Achievements
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Timeline thành tựu & dự án theo năm
      </p>

      <div className="relative mt-20 flex flex-col items-center">
        {/* LINE */}
        <div
          className={`
            absolute top-0 bottom-0 w-px transition-colors duration-1000
            ${color === "emerald" && "bg-emerald-400/60"}
            ${color === "cyan" && "bg-cyan-400/60"}
            ${color === "indigo" && "bg-indigo-400/60"}
          `}
        />

        {data.map(item => (
          <div key={item.year} className="relative z-10 mb-16 flex flex-col items-center">
            {/* DOT */}
            <div
              className={`
                mb-3 h-4 w-4 rounded-full transition-all duration-1000
                ${color === "emerald" && "bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]"}
                ${color === "cyan" && "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"}
                ${color === "indigo" && "bg-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.9)]"}
              `}
            />

            {/* CARD */}
            <div
              className={`
                rounded-xl border bg-black/50 px-8 py-4 text-center transition-all duration-1000
                ${color === "emerald" && "border-emerald-500/40 text-emerald-300"}
                ${color === "cyan" && "border-cyan-500/40 text-cyan-300"}
                ${color === "indigo" && "border-indigo-500/40 text-indigo-300"}
              `}
            >
              <div className="text-2xl font-bold tracking-widest">
                {item.year}
              </div>
              <div className="mt-1 text-sm md:text-base text-white/70">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

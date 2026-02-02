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

  return (
    <section className="mx-auto mt-36 w-[92%]">
      <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Achievements
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Timeline thành tựu & dự án theo năm
      </p>

      <div className="relative mt-20 flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-px bg-emerald-500/30" />

        {data.map((item, i) => (
          <GlitchItem key={item.year} item={item} index={i} />
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

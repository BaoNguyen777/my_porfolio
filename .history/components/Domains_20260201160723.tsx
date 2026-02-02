"use client";
import { useEffect, useState } from "react";

export function Domains() {
  const domains = [
    { title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu" },
    { title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao" },
    { title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán" },
    { title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user" },
    { title: "Portfolio", desc: "Website cá nhân, branding developer" },
    { title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền" },
  ];

  const colors = ["emerald", "cyan", "indigo", "purple"];
  const [active, setActive] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    setColorIndex(active % colors.length);
  }, [active]);

  const color = colors[colorIndex];

  return (
    <section className="relative mx-auto mt-32 w-[92%] overflow-hidden">
      {/* ===== AMBIENT LEFT ===== */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[300px] -translate-y-1/2 blur-3xl"
        style={{
          background:
            color === "emerald"
              ? "#10b981"
              : color === "cyan"
              ? "#22d3ee"
              : color === "indigo"
              ? "#6366f1"
              : "#a855f7",
          opacity: 0.1,
        }}
      />

      {/* ===== AMBIENT RIGHT ===== */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[300px] -translate-y-1/2 blur-3xl"
        style={{
          background:
            color === "emerald"
              ? "#22c55e"
              : color === "cyan"
              ? "#06b6d4"
              : color === "indigo"
              ? "#818cf8"
              : "#c084fc",
          opacity: 0.1,
        }}
      />

      {/* ===== TITLE ===== */}
      <h2
        className={`
          text-center text-5xl font-bold transition-colors duration-1000
          ${color === "emerald" && "text-emerald-400"}
          ${color === "cyan" && "text-cyan-400"}
          ${color === "indigo" && "text-indigo-400"}
          ${color === "purple" && "text-purple-400"}
        `}
      >
        Domains
      </h2>

      <p className="mt-3 text-center text-slate-400">
        Các lĩnh vực website tôi đã triển khai thực tế
      </p>

      {/* ===== CIRCLE AREA ===== */}
      <div className="relative mt-24 flex items-center justify-center">
        {/* CIRCLE LINE */}
        <div
          className={`
            absolute h-[420px] w-[420px] rounded-full border transition-colors duration-1000
            ${color === "emerald" && "border-emerald-500/40"}
            ${color === "cyan" && "border-cyan-500/40"}
            ${color === "indigo" && "border-indigo-500/40"}
            ${color === "purple" && "border-purple-500/40"}
          `}
        />

        {/* DOMAIN NODES */}
        {domains.map((d, i) => {
          const angle = ((i - active) / domains.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 210;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const isActive = i === active;

          return (
            <div
              key={d.title}
              onClick={() => setActive(i)}
              className={`
                absolute cursor-pointer transition-all duration-700 ease-in-out
                ${isActive ? "z-20 scale-110" : "z-10 scale-90"}
              `}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div
                className={`
                  rounded-xl border px-6 py-4 text-center transition-all duration-700
                  ${isActive ? "bg-black" : "bg-black/80"}
                  ${color === "emerald" && "border-emerald-500/40"}
                  ${color === "cyan" && "border-cyan-500/40"}
                  ${color === "indigo" && "border-indigo-500/40"}
                  ${color === "purple" && "border-purple-500/40"}
                `}
              >
                <h3
                  className={`
                    text-lg font-semibold transition-colors duration-700
                    ${color === "emerald" && "text-emerald-300"}
                    ${color === "cyan" && "text-cyan-300"}
                    ${color === "indigo" && "text-indigo-300"}
                    ${color === "purple" && "text-purple-300"}
                  `}
                >
                  {d.title}
                </h3>

                {isActive && (
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {d.desc}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

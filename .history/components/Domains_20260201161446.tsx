"use client";
import { useEffect, useState } from "react";

/* ================== CONFIG ================== */
const domains = [
  { title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu" },
  { title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao" },
  { title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán" },
  { title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user" },
  { title: "Portfolio", desc: "Website cá nhân, branding developer" },
  { title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền" },
];

const colors = [
  "#6366f1", // indigo
  "#22d3ee", // cyan
  "#34d399", // emerald
  "#a78bfa", // violet
  "#f472b6", // pink
  "#facc15", // yellow
];

/* ================== GEAR ================== */
function Gear({ size = 220, color, reverse }: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`opacity-60 ${reverse ? "gear reverse" : "gear"}`}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="6"
        d="
          M100 20 L112 30 L130 28 L138 42 L158 50 L158 65
          L175 80 L168 95 L180 110 L168 125 L175 140 L158 155
          L158 170 L138 178 L130 192 L112 190 L100 200
          L88 190 L70 192 L62 178 L42 170 L42 155 L25 140
          L32 125 L20 110 L32 95 L25 80 L42 65 L42 50
          L62 42 L70 28 L88 30 Z
        "
      />
      <circle cx="100" cy="100" r="32" stroke={color} strokeWidth="6" fill="none" />
    </svg>
  );
}

/* ================== MAIN ================== */
export function Domains() {
  const [active, setActive] = useState(0);
  const [angle, setAngle] = useState(0);

  const radius = 220;
  const step = (2 * Math.PI) / domains.length;
  const color = colors[active];

  /* auto rotate */
  useEffect(() => {
    const id = setInterval(() => {
      setAngle(a => a - 0.002); // ngược chiều kim đồng hồ
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto mt-40 w-full max-w-6xl overflow-hidden">
      <h2
        className="text-center text-5xl font-bold transition-colors duration-700"
        style={{ color }}
      >
        Domains
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Các lĩnh vực website tôi đã triển khai
      </p>

      {/* ===== CENTER ===== */}
      <div className="relative mt-24 flex h-[600px] items-center justify-center">
        {/* Circle line */}
        <div
          className="absolute h-[520px] w-[520px] rounded-full border transition-colors duration-700"
          style={{ borderColor: color }}
        />

        {/* Gears */}
        <div className="absolute -left-44 top-1/2 -translate-y-1/2">
          <Gear color={color} />
        </div>
        <div className="absolute -right-44 top-1/2 -translate-y-1/2">
          <Gear color={color} reverse />
        </div>

        {/* Domain items */}
        {domains.map((d, i) => {
          const a = angle + i * step;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          const isActive = i === active;

          return (
            <div
              key={d.title}
              onClick={() => setActive(i)}
              className={`
                absolute cursor-pointer select-none
                transition-all duration-700 ease-out
                ${isActive ? "z-20 scale-110" : "z-10 scale-90"}
              `}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div
                className={`
                  rounded-2xl border px-6 py-4 text-center
                  transition-all duration-700
                `}
                style={{
                  borderColor: color,
                  background: "rgba(0,0,0,0.95)",
                  boxShadow: isActive
                    ? `0 0 40px ${color}55`
                    : `0 0 20px ${color}33`,
                }}
              >
                <div
                  className="text-lg font-semibold transition-colors duration-700"
                  style={{ color }}
                >
                  {d.title}
                </div>

                {isActive && (
                  <p className="mt-2 max-w-[220px] text-sm text-slate-400">
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

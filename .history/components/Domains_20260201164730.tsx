"use client";

import { useState } from "react";

function Gear({ size = 220, color }: { size?: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className="opacity-60"
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="6"
        d="
          M100 20
          L112 30
          L130 28
          L138 42
          L158 50
          L158 65
          L175 80
          L168 95
          L180 110
          L168 125
          L175 140
          L158 155
          L158 170
          L138 178
          L130 192
          L112 190
          L100 200
          L88 190
          L70 192
          L62 178
          L42 170
          L42 155
          L25 140
          L32 125
          L20 110
          L32 95
          L25 80
          L42 65
          L42 50
          L62 42
          L70 28
          L88 30
          Z
        "
      />
      <circle cx="100" cy="100" r="32" stroke={color} strokeWidth="6" fill="none" />
    </svg>
  );
}

export function Domains() {
  const domains = [
    {
      title: "Corporate Website",
      desc: "Website công ty, giới thiệu dịch vụ & thương hiệu",
      color: "#34d399",
    },
    {
      title: "Landing Page",
      desc: "Trang bán hàng, marketing, chuyển đổi cao",
      color: "#22d3ee",
    },
    {
      title: "E-commerce",
      desc: "Website bán hàng, quản lý sản phẩm & thanh toán",
      color: "#818cf8",
    },
    {
      title: "Booking System",
      desc: "Đặt phòng, dịch vụ, quản lý lịch & user",
      color: "#a78bfa",
    },
    {
      title: "Portfolio",
      desc: "Website cá nhân, branding developer",
      color: "#f472b6",
    },
    {
      title: "Admin Dashboard",
      desc: "Hệ thống quản trị, biểu đồ, phân quyền",
      color: "#fbbf24",
    },
  ];

  const [active, setActive] = useState(0);

  const wrapperSize = 560;
  const circleSize = 440;
  const radius = circleSize / 2;
  const step = (2 * Math.PI) / domains.length;

  const activeColor = domains[active].color;

  return (
    <section className="mx-auto mt-36 w-full overflow-hidden">
      {/* TITLE */}
      <h2
        className="text-center text-5xl font-bold transition-colors duration-1000"
        style={{ color: activeColor }}
      >
        Domains
      </h2>

      <p className="mt-3 text-center text-slate-400">
        Các lĩnh vực website tôi đã triển khai thực tế
      </p>

      <div
        className="relative mx-auto mt-20"
        style={{ width: wrapperSize, height: wrapperSize }}
      >
        {/* ================= FLOW LINES ================= */}
        {/* LEFT LINE – flow DOWN */}
        {/* ================= CURVED FLOW LINES ================= */}
{/* LEFT CURVED LINE */}
<svg
  className="pointer-events-none absolute top-1/2 -translate-y-1/2"
  style={{ left: "-150px" }}
  width="140"
  height={wrapperSize}
  viewBox={`0 0 140 ${wrapperSize}`}
>
  <path
    d={`
      M120 0
      C40 ${wrapperSize * 0.25},
        40 ${wrapperSize * 0.75},
        120 ${wrapperSize}
    `}
    fill="none"
    stroke={activeColor}
    strokeWidth="6"
    strokeLinecap="round"
    strokeDasharray="12 16"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="0"
      to="200"
      dur="6s"
      repeatCount="indefinite"
    />
  </path>
</svg>

{/* RIGHT CURVED LINE */}
<svg
  className="pointer-events-none absolute top-1/2 -translate-y-1/2"
  style={{ right: "-150px" }}
  width="140"
  height={wrapperSize}
  viewBox={`0 0 140 ${wrapperSize}`}
>
  <path
    d={`
      M20 0
      C100 ${wrapperSize * 0.25},
        100 ${wrapperSize * 0.75},
        20 ${wrapperSize}
    `}
    fill="none"
    stroke={activeColor}
    strokeWidth="6"
    strokeLinecap="round"
    strokeDasharray="12 16"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="200"
      to="0"
      dur="6s"
      repeatCount="indefinite"
    />
  </path>
</svg>


        {/* ================= DOMAIN ITEMS ================= */}
        {domains.map((d, i) => {
          const angle = step * (i - active) - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = i === active;

          return (
            <div
              key={d.title}
              className="absolute left-1/2 top-1/2 transition-all duration-[900ms] ease-in-out"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translate(${x}px, ${y}px)
                `,
              }}
            >
              <button
                onClick={() => setActive(i)}
                className="group w-52 rounded-2xl border bg-black p-5 text-center transition-all duration-700"
                style={{
                  borderColor: d.color,
                  opacity: isActive ? 1 : 0.65,
                  transform: isActive ? "scale(1.25)" : "scale(0.95)",
                  boxShadow: isActive
                    ? `0 0 45px ${d.color}88`
                    : `0 0 18px ${d.color}44`,
                }}
              >
                <h3
                  className="text-lg font-semibold transition-colors duration-700"
                  style={{ color: d.color }}
                >
                  {d.title}
                </h3>

                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight: isActive ? "120px" : "0px",
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? "12px" : "0px",
                  }}
                >
                  <p className="text-sm leading-relaxed text-slate-400">
                    {d.desc}
                  </p>
                </div>
              </button>
            </div>
          );
        })}

        {/* ================= CENTER GLOW ================= */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-1000"
          style={{
            background: activeColor,
            opacity: 0.18,
          }}
        />
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes flowDown {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }

        @keyframes flowUp {
          0% {
            background-position: 0% 200%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  );
}

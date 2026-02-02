"use client";

import { useState } from "react";

export function Domains() {
  const domains = [
    { title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu", color: "#34d399" },
    { title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao", color: "#22d3ee" },
    { title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán", color: "#818cf8" },
    { title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user", color: "#a78bfa" },
    { title: "Portfolio", desc: "Website cá nhân, branding developer", color: "#f472b6" },
    { title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền", color: "#fbbf24" },
  ];

  const [active, setActive] = useState(0);

  const wrapperSize = 560;
  const circleSize = 440;
  const radius = circleSize / 2;
  const step = (2 * Math.PI) / domains.length;
  const activeColor = domains[active].color;

  return (
    <section className="mx-auto mt-36 w-full overflow-hidden">
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
        {/* ================= CURVED FLOW LINES (FIXED) ================= */}
        <svg
          width={wrapperSize + 360}
          height={wrapperSize + 360}
          viewBox="0 0 920 920"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {/* LEFT ARC – tròn + xích ra ngoài */}
          <path
            d="
              M 20 140
              A 360 360 0 0 1 260 780
            "
            fill="none"
            stroke={activeColor}
            strokeWidth="8"
            strokeDasharray="14 18"
            opacity="0.65"
            style={{ animation: "dashDown 6s linear infinite" }}
          />

          {/* RIGHT ARC – tròn + xích ra ngoài */}
          <path
            d="
              M 660 140
              A 360 360 0 0 0 660 780
            "
            fill="none"
            stroke={activeColor}
            strokeWidth="8"
            strokeDasharray="14 18"
            opacity="0.65"
            style={{ animation: "dashUp 6s linear infinite" }}
          />
        </svg>

        {/* ================= DOMAIN CIRCLE ================= */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border transition-colors duration-1000"
          style={{
            width: circleSize,
            height: circleSize,
            transform: "translate(-50%, -50%)",
            borderColor: activeColor,
            opacity: 0.45,
          }}
        />

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
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <button
                onClick={() => setActive(i)}
                className="w-52 rounded-2xl border bg-black p-5 text-center transition-all duration-700"
                style={{
                  borderColor: d.color,
                  opacity: isActive ? 1 : 0.65,
                  transform: isActive ? "scale(1.25)" : "scale(0.95)",
                  boxShadow: isActive
                    ? `0 0 45px ${d.color}88`
                    : `0 0 18px ${d.color}44`,
                }}
              >
                <h3 className="text-lg font-semibold" style={{ color: d.color }}>
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
          style={{ background: activeColor, opacity: 0.18 }}
        />
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes dashDown {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -160;
          }
        }

        @keyframes dashUp {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 160;
          }
        }
      `}</style>
    </section>
  );
}

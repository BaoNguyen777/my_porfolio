"use client";
import { useEffect, useMemo, useState } from "react";

export function Domains() {
  const domains = [
    { title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu", color: "#6366f1" },
    { title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao", color: "#22d3ee" },
    { title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán", color: "#34d399" },
    { title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user", color: "#f472b6" },
    { title: "Portfolio", desc: "Website cá nhân, branding developer", color: "#a78bfa" },
    { title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền", color: "#facc15" },
  ];

  const [active, setActive] = useState(0);
  const [angle, setAngle] = useState(0);

  /** xoay chậm – ngược chiều kim đồng hồ */
  useEffect(() => {
    const id = setInterval(() => {
      setAngle(a => a - 0.15);
    }, 16);
    return () => clearInterval(id);
  }, []);

  const radius = 260;

  const positions = useMemo(() => {
    const step = 360 / domains.length;
    return domains.map((_, i) => {
      const a = (step * i + angle - active * step - 90) * (Math.PI / 180);
      return {
        x: Math.cos(a) * radius,
        y: Math.sin(a) * radius,
      };
    });
  }, [angle, active]);

  const activeColor = domains[active].color;

  return (
    <section className="relative mx-auto mt-40 w-[92%] overflow-hidden">
      {/* ===== Ambient glow (PHƯƠNG ÁN 1) ===== */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[300px] -translate-y-1/2 blur-[120px]"
        style={{ background: activeColor, opacity: 0.12 }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[300px] -translate-y-1/2 blur-[120px]"
        style={{ background: activeColor, opacity: 0.12 }}
      />

      <h2
        className="text-center text-5xl font-bold transition-colors duration-1000"
        style={{ color: activeColor }}
      >
        Domains
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Các lĩnh vực website tôi đã triển khai thực tế
      </p>

      {/* ===== CIRCLE WRAPPER ===== */}
      <div className="relative mx-auto mt-24 flex h-[640px] w-[640px] items-center justify-center">
        {/* Circle line */}
        <div
          className="absolute inset-0 rounded-full border transition-colors duration-1000"
          style={{ borderColor: activeColor }}
        />

        {/* ===== Orbit particles (PHƯƠNG ÁN 3) ===== */}
        {[...Array(10)].map((_, i) => {
          const a = ((360 / 10) * i + angle * 1.2) * (Math.PI / 180);
          return (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full"
              style={{
                background: activeColor,
                transform: `translate(${Math.cos(a) * (radius + 22)}px, ${Math.sin(a) * (radius + 22)}px)`,
                opacity: 0.7,
              }}
            />
          );
        })}

        {/* ===== Domain cards ===== */}
        {domains.map((d, i) => {
          const isActive = i === active;
          return (
            <button
              key={d.title}
              onClick={() => setActive(i)}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `
                  translate(${positions[i].x}px, ${positions[i].y}px)
                  scale(${isActive ? 1.25 : 0.9})
                `,
                zIndex: isActive ? 10 : 1,
              }}
            >
              <div
                className={`
                  w-[220px] rounded-2xl border px-5 py-4 text-center
                  transition-all duration-700
                  ${isActive ? "shadow-xl" : ""}
                `}
                style={{
                  borderColor: activeColor,
                  background: "rgba(0,0,0,0.9)",
                }}
              >
                <h3
                  className="text-lg font-semibold transition-colors duration-700"
                  style={{ color: activeColor }}
                >
                  {d.title}
                </h3>

                {isActive && (
                  <p className="mt-2 text-sm text-slate-400">
                    {d.desc}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

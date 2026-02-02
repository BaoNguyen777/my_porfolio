"use client";

import { useState } from "react";

export function Domains() {
    const domains = [
        {
            title: "Corporate Website",
            desc: "Website công ty, giới thiệu dịch vụ & thương hiệu",
            color: "emerald",
        },
        {
            title: "Landing Page",
            desc: "Trang bán hàng, marketing, chuyển đổi cao",
            color: "cyan",
        },
        {
            title: "E-commerce",
            desc: "Website bán hàng, quản lý sản phẩm & thanh toán",
            color: "indigo",
        },
        {
            title: "Booking System",
            desc: "Đặt phòng, dịch vụ, quản lý lịch & user",
            color: "purple",
        },
        {
            title: "Portfolio",
            desc: "Website cá nhân, branding developer",
            color: "pink",
        },
        {
            title: "Admin Dashboard",
            desc: "Hệ thống quản trị, biểu đồ, phân quyền",
            color: "amber",
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
            <h2
                className={`
                  text-center text-5xl font-bold transition-colors duration-1000
                  text-${activeColor}-400
                `}
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
                {/* Circle line */}
                <div
                    className={`
                      absolute left-1/2 top-1/2 rounded-full border transition-colors duration-1000
                      border-${activeColor}-400/40
                    `}
                    style={{
                        width: circleSize,
                        height: circleSize,
                        transform: "translate(-50%, -50%)",
                    }}
                />

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
                                className={`
                                  group w-52 rounded-2xl border bg-black p-5 text-center
                                  transition-all duration-700
                                  ${isActive
                                    ? `scale-125 border-${activeColor}-400 shadow-[0_0_45px_rgba(99,102,241,0.6)]`
                                    : "scale-95 border-slate-700 opacity-70 hover:opacity-100 hover:scale-105"}
                                `}
                            >
                                {/* Title */}
                                <h3
                                    className={`
                                      text-lg font-semibold transition-colors duration-700
                                      ${isActive
                                        ? `text-${activeColor}-300`
                                        : "text-slate-300 group-hover:text-slate-100"}
                                    `}
                                >
                                    {d.title}
                                </h3>

                                {/* Description */}
                                <div
                                    className={`
                                      overflow-hidden transition-all duration-700
                                      ${isActive
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"}
                                    `}
                                >
                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {d.desc}
                                    </p>
                                </div>
                            </button>
                        </div>
                    );
                })}

                {/* Center glow */}
                <div
                    className={`
                      pointer-events-none absolute left-1/2 top-1/2 h-28 w-28
                      -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl
                      bg-${activeColor}-500/15
                      transition-colors duration-1000
                    `}
                />
            </div>
        </section>
    );
}

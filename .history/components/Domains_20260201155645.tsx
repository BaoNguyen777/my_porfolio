"use client";

import { useState } from "react";

export function Domains() {
    const domains = [
        { title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu" },
        { title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao" },
        { title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán" },
        { title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user" },
        { title: "Portfolio", desc: "Website cá nhân, branding developer" },
        { title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền" },
    ];

    const [active, setActive] = useState(0);

    /* ==== SCALE AN TOÀN MÀN HÌNH ==== */
    const wrapperSize = 560;   // tổng khung
    const circleSize = 440;    // đường tròn
    const radius = circleSize / 2;

    const step = (2 * Math.PI) / domains.length;

    return (
        <section className="mx-auto mt-36 w-full overflow-hidden">
            <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Domains
            </h2>
            <p className="mt-3 text-center text-slate-400">
                Các lĩnh vực website tôi đã triển khai thực tế
            </p>

            {/* WRAPPER */}
            <div
                className="relative mx-auto mt-20"
                style={{ width: wrapperSize, height: wrapperSize }}
            >
                {/* CIRCLE LINE */}
                <div
                    className="absolute left-1/2 top-1/2 rounded-full border border-indigo-500/30"
                    style={{
                        width: circleSize,
                        height: circleSize,
                        transform: "translate(-50%, -50%)",
                    }}
                />

                {/* ITEMS */}
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
                                    w-52 rounded-2xl border bg-black p-5 text-left
                                    transition-all duration-500
                                    ${isActive
                                        ? "scale-125 border-indigo-400 shadow-[0_0_40px_rgba(99,102,241,0.55)]"
                                        : "scale-95 border-indigo-500/20 opacity-70 hover:opacity-100 hover:scale-105"}
                                `}
                            >
                                <h3 className="text-lg font-semibold text-indigo-300">
                                    {d.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                    {d.desc}
                                </p>
                            </button>
                        </div>
                    );
                })}

                {/* CENTER GLOW */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-xl" />
            </div>
        </section>
    );
}

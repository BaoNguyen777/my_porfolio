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

    const radius = 260;
    const step = (2 * Math.PI) / domains.length;

    return (
        <section className="mx-auto mt-36 w-full">
            <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Domains
            </h2>
            <p className="mt-3 text-center text-slate-400">
                Các lĩnh vực website tôi đã triển khai thực tế
            </p>

            {/* Wrapper */}
            <div className="relative mx-auto mt-20 h-[650px] w-[650px] max-w-full">
                {/* Circular line */}
                <div className="absolute inset-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/30" />

                {/* Items */}
                {domains.map((d, i) => {
                    const angle = step * (i - active) - Math.PI / 2; // active lên top
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = i === active;

                    return (
                        <div
                            key={d.title}
                            className="absolute left-1/2 top-1/2 transition-all duration-[1000ms] ease-in-out"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                            }}
                        >
                            <button
                                onClick={() => setActive(i)}
                                className={`
                                    w-56 rounded-2xl border bg-black/70 p-5 text-left
                                    backdrop-blur transition-all duration-500
                                    ${isActive
                                        ? "scale-125 border-indigo-400 shadow-[0_0_45px_rgba(99,102,241,0.6)]"
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

                {/* Center glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-xl" />
            </div>
        </section>
    );
}

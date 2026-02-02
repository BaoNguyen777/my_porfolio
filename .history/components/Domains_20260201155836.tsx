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

    const wrapperSize = 560;
    const circleSize = 440;
    const radius = circleSize / 2;
    const step = (2 * Math.PI) / domains.length;

    return (
        <section className="mx-auto mt-36 w-full overflow-hidden">
            <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
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
                    className="absolute left-1/2 top-1/2 rounded-full border border-indigo-500/30 transition-colors duration-700"
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
                                        ? "scale-125 border-indigo-400 shadow-[0_0_45px_rgba(99,102,241,0.6)]"
                                        : "scale-95 border-indigo-500/20 opacity-70 hover:opacity-100 hover:scale-105"}
                                `}
                            >
                                {/* Title */}
                                <h3
                                    className={`
                                      text-lg font-semibold transition-colors duration-700
                                      ${isActive
                                        ? "text-indigo-300"
                                        : "text-slate-300 group-hover:text-indigo-300"}
                                    `}
                                >
                                    {d.title}
                                </h3>

                                {/* Description – chỉ hiện khi active */}
                                <div
                                    className={`
                                      overflow-hidden transition-all duration-700
                                      ${isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
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

                {/* center glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-700" />
            </div>
        </section>
    );
}

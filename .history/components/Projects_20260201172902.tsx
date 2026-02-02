"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  CheckCircle,
  Rocket,
  Globe,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function Projects() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      <h2 className="text-center text-5xl font-bold text-white">
        Projects
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Sản phẩm & hệ sinh thái web templates tôi trực tiếp xây dựng
      </p>

      {/* MAIN PROJECT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/40 via-black to-black p-10"
      >
        {/* STATUS */}
        <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-300">
          <CheckCircle size={16} />
          Production
        </div>

        {/* HEADER */}
        <div className="flex items-center gap-4 text-cyan-300">
          <LayoutTemplate size={36} />
          <span className="text-2xl font-bold">
            Web Templates Platform
          </span>
        </div>

        <div className="mt-2 text-sm tracking-widest text-slate-400">
          2022 — Present
        </div>

        <h3 className="mt-6 text-3xl font-bold text-white">
          Nền tảng thiết kế & phân phối website templates
        </h3>

        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
          Một nền tảng tập trung xây dựng các website template chất lượng cao
          (Portfolio, Business, Landing Page, Booking, SaaS) nhằm giúp cá nhân
          và doanh nghiệp triển khai website nhanh, chuẩn UX/UI và dễ mở rộng.
        </p>

        {/* METRICS */}
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { label: "Templates", value: "15+" },
            { label: "Domains", value: "6+" },
            { label: "Projects Applied", value: "10+" },
            { label: "UX Satisfaction", value: "100%" },
          ].map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{m.value}</div>
              <div className="text-xs text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* TECH */}
        <div className="mt-10">
          <p className="mb-3 text-sm font-semibold text-white">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Framer Motion",
              "Node.js",
              "Vercel",
            ].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 px-4 py-1 text-sm text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://webcraft-templates1.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Live Demo <ArrowUpRight size={16} />
          </a>

          <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white/10">
            View Architecture
          </button>
        </div>
      </motion.div>

      {/* SUB PROJECTS */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            icon: <Globe />,
            title: "Business & Service Templates",
            desc: "Website giới thiệu doanh nghiệp, dịch vụ, phòng khám, studio.",
          },
          {
            icon: <Layers />,
            title: "Portfolio & Personal Brand",
            desc: "Portfolio cho developer, designer, content creator.",
          },
          {
            icon: <Rocket />,
            title: "Landing Page & Booking",
            desc: "Landing page bán hàng, booking khách sạn, dịch vụ.",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-white/10 bg-black/50 p-6 transition"
          >
            <div className="mb-4 text-cyan-400">{s.icon}</div>
            <h4 className="text-lg font-semibold text-white">
              {s.title}
            </h4>
            <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

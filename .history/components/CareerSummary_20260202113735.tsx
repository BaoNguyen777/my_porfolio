"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  Layers,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function CareerSummary() {
  const stats = [
    {
      icon: Briefcase,
      value: "2+",
      label: "Companies",
    },
    {
      icon: Clock,
      value: "3+",
      label: "Years Experience",
    },
    {
      icon: Layers,
      value: "10+",
      label: "Projects",
    },
    {
      icon: Settings,
      value: "25+",
      label: "Technologies",
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="relative rounded-3xl border border-emerald-400/20
        bg-gradient-to-br from-black/70 via-black/60 to-black/80
        p-12 backdrop-blur-xl"
      >
        {/* Title */}
        <div className="mb-8 flex items-center justify-center gap-3 text-white">
          <TrendingUp className="text-emerald-400" size={22} />
          <h2 className="text-xl font-semibold tracking-wide">
            Career Journey Summary
          </h2>
        </div>

        {/* Description */}
        <p className="mx-auto mb-14 max-w-4xl text-center font-mono text-sm leading-relaxed text-slate-300">
          <span className="text-emerald-400">// </span>
          From Junior Developer to Senior-level Full-stack & DevOps Engineer —
          experience spanning frontend & backend development, distributed
          systems, enterprise software at <b>FPT Software</b>, and diverse
          real-world freelance projects.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl
                bg-emerald-500/10 ring-1 ring-emerald-400/30
                transition-all
                group-hover:bg-emerald-400/20
                group-hover:ring-emerald-400/60"
              >
                <stat.icon
                  size={22}
                  className="text-emerald-400 transition-colors group-hover:text-emerald-300"
                />
              </div>

              <div className="text-3xl font-bold text-white">
                {stat.value}
              </div>

              <div className="text-xs uppercase tracking-widest text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

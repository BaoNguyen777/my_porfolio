"use client";

import { motion } from "framer-motion";

export default function AnimatedHeader({
  highlight,
  subtitle,
}: {
  highlight: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.35, // ⚡ nhanh
        ease: "easeOut",
      }}
      className="mb-12 text-center"
    >
      {/* MAIN HEADER */}
      <motion.h2
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 1.6, // ⚡ nhanh hơn nhiều
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          text-4xl md:text-5xl font-bold
          bg-gradient-to-r
          from-emerald-400
          to-cyan-400
          bg-clip-text text-transparent
        "
      >
        {highlight}
      </motion.h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="mt-3 text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

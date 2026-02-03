"use client";

import { motion } from "framer-motion";

export default function AnimatedHeader({
  highlight,
  subtitle,
}: {
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-center mb-10"
    >
      {/* Main Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white"
        animate={{
          y: [0, -8, 0],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {highlight && (
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          className="mt-3 text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

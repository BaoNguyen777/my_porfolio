// components/Gear.tsx
"use client";

import { motion } from "framer-motion";

interface GearProps {
  size?: number;
  color: string;
  reverse?: boolean;
}

export default function Gear({
  size = 180,
  color,
  reverse = false,
}: GearProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "linear",
      }}
      style={{
        filter: "drop-shadow(0 0 18px rgba(0,0,0,0.25))",
      }}
    >
      <path
        d="
        M50 30
        L58 22 L70 26 L72 38
        L82 44 L82 56 L72 62
        L70 74 L58 78 L50 70
        L42 78 L30 74 L28 62
        L18 56 L18 44 L28 38
        L30 26 L42 22 Z
        "
        fill={color}
      />
      <circle cx="50" cy="50" r="14" fill="#0f172a" />
    </motion.svg>
  );
}

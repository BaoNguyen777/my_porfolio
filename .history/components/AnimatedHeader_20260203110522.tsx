"use client";

import { useEffect, useState } from "react";

export default function AnimatedHeader({
  highlight,
  subtitle,
}: {
  highlight: string;
  subtitle?: string;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    let rafId: number;

    const animate = () => {
      frame += 0.03; // ⚡ tốc độ giống hệt
      setOffset(Math.sin(frame) * 12); // ⬆⬇ biên độ 12px
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="mb-12 text-center">
      <h2
        style={{ transform: `translateY(${offset}px)` }}
        className="
          text-4xl md:text-5xl font-bold
          bg-gradient-to-r
          from-emerald-400 to-cyan-400
          bg-clip-text text-transparent
          will-change-transform
        "
      >
        {highlight}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

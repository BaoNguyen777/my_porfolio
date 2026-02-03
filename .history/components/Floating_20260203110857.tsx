"use client";

import { useEffect, useState } from "react";

export default function Floating({
  children,
  amplitude = 12,
  speed = 0.03,
}: {
  children: React.ReactNode;
  amplitude?: number; // biên độ
  speed?: number;     // tốc độ
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    let rafId: number;

    const animate = () => {
      frame += speed;
      setOffset(Math.sin(frame) * amplitude);
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [amplitude, speed]);

  return (
    <div
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

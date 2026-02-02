"use client";

import { useEffect, useMemo, useState } from "react";

type Domain = {
  name: string;
  color: string;
};

const DOMAINS: Domain[] = [
  { name: "Web Templates", color: "#6366f1" },
  { name: "Landing Page", color: "#22c55e" },
  { name: "Ecommerce", color: "#f97316" },
  { name: "Portfolio", color: "#ec4899" },
];

export default function Domains() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDomain = DOMAINS[activeIndex];
  const activeColor = activeDomain.color;

  const wrapperSize = 520;
  const radius = 200;

  // vị trí domain con trên vòng tròn
  const positions = useMemo(() => {
    const angleStep = (2 * Math.PI) / DOMAINS.length;
    return DOMAINS.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black">
      {/* ================= LEFT ORBIT ================= */}
      <svg
        className="pointer-events-none absolute top-1/2 -translate-y-1/2"
        style={{ left: "-240px" }}
        width={wrapperSize}
        height={wrapperSize}
        viewBox={`0 0 ${wrapperSize} ${wrapperSize}`}
      >
        <circle
          cx={wrapperSize / 2}
          cy={wrapperSize / 2}
          r={wrapperSize / 2 - 30}
          fill="none"
          stroke={activeColor}
          strokeWidth="10"
          strokeDasharray="18 22"
          strokeLinecap="round"
          opacity={0.6}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${wrapperSize / 2} ${wrapperSize / 2}`}
            to={`360 ${wrapperSize / 2} ${wrapperSize / 2}`}
            dur="18s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ================= RIGHT ORBIT ================= */}
      <svg
        className="pointer-events-none absolute top-1/2 -translate-y-1/2"
        style={{ right: "-240px" }}
        width={wrapperSize}
        height={wrapperSize}
        viewBox={`0 0 ${wrapperSize} ${wrapperSize}`}
      >
        <circle
          cx={wrapperSize / 2}
          cy={wrapperSize / 2}
          r={wrapperSize / 2 - 30}
          fill="none"
          stroke={activeColor}
          strokeWidth="10"
          strokeDasharray="18 22"
          strokeLinecap="round"
          opacity={0.6}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`360 ${wrapperSize / 2} ${wrapperSize / 2}`}
            to={`0 ${wrapperSize / 2} ${wrapperSize / 2}`}
            dur="18s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ================= DOMAIN CENTER ================= */}
      <div className="relative z-10 flex items-center justify-center">
        {/* vòng tròn domain */}
        <div
          className="relative flex items-center justify-center rounded-full transition-all duration-700"
          style={{
            width: 260,
            height: 260,
            background: `radial-gradient(circle at top, ${activeColor}33, transparent 70%)`,
            border: `2px solid ${activeColor}`,
            boxShadow: `0 0 40px ${activeColor}55`,
          }}
        >
          <span
            className="text-2xl font-semibold tracking-wide"
            style={{ color: activeColor }}
          >
            {activeDomain.name}
          </span>
        </div>

        {/* ================= DOMAIN ITEMS ================= */}
        {DOMAINS.map((domain, index) => {
          const pos = positions[index];
          const isActive = index === activeIndex;

          return (
            <button
              key={domain.name}
              onClick={() => setActiveIndex(index)}
              className="absolute transition-all duration-700 ease-out"
              style={{
                transform: `
                  translate(${pos.x}px, ${pos.y}px)
                  scale(${isActive ? 1.2 : 0.85})
                `,
              }}
            >
              <div
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                style={{
                  color: domain.color,
                  background: `${domain.color}22`,
                  border: `1px solid ${domain.color}`,
                  boxShadow: isActive
                    ? `0 0 18px ${domain.color}`
                    : "none",
                  opacity: isActive ? 1 : 0.7,
                }}
              >
                {domain.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto mt-14 grid w-[92%] grid-cols-1 gap-10 lg:grid-cols-2">
      <Left />
      <Right />
    </section>
  );
}

function Left() {
  return (
    <div className="space-y-6">
      <span className="inline-block rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-400">
        WHOAMI
      </span>

      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Nguyễn Chí Bảo
      </h1>

      <RoleSlider />
      <AboutTyping />
      <Tech />
    </div>
  );
}

/* ================= ROLE SLIDER ================= */

function RoleSlider() {
  const roles = ["Web Designer", "Full Stack Developer", "System Architecture"];

  return (
    <div className="relative h-10 overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60 px-4 glow">
      <div className="absolute left-4 top-0 animate-role-marquee">
        {[...roles, ...roles].map((role, i) => (
          <div key={i} className="flex h-10 items-center text-emerald-400">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= ABOUT TYPING ================= */

function AboutTyping() {
  const scripts = [
    "Tôi là một Full Stack Developer tập trung vào việc xây dựng các sản phẩm web có trải nghiệm người dùng mượt mà, giao diện trực quan và hiệu suất cao. Tôi luôn ưu tiên kiến trúc rõ ràng, code dễ bảo trì, khả năng mở rộng tốt và đảm bảo sản phẩm có thể vận hành ổn định trong môi trường thực tế lâu dài.",

    "Với hơn 3 năm kinh nghiệm làm việc và triển khai website thực tế, tôi đã xây dựng nhiều dự án thuộc các domain khác nhau như website doanh nghiệp, landing page bán hàng, hệ thống booking dịch vụ – khách sạn và nền tảng e-commerce. Mỗi dự án đều được tối ưu từ UI, frontend cho tới backend.",

    "Tôi cam kết mỗi sản phẩm bàn giao đều đạt chuẩn UX/UI, thân thiện với người dùng và phù hợp với mục tiêu kinh doanh. Bên cạnh đó, tôi luôn chú trọng tính ổn định, bảo mật và độ tin cậy của hệ thống, giúp khách hàng yên tâm sử dụng và phát triển lâu dài.",
  ];

  const [text, setText] = useState("");
  const [scriptIndex, setScriptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = scripts[scriptIndex];

    const speedTyping = 35;
    const speedDeleting = 18;
    const pauseAfterTyped = 1200;

    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speedTyping);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseAfterTyped);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, speedDeleting);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setScriptIndex((i) => (i + 1) % scripts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, scriptIndex]);

  return (
    <div
      className="
        relative mt-6 max-w-xl
        text-base md:text-lg
        leading-relaxed text-white/80
        h-[9.5rem] md:h-[8.5rem]
        overflow-hidden
      "
    >
      <span className="absolute inset-0">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}

/* ================= TECH ================= */

function Tech() {
  const techs = ["Node.js", "React", "TypeScript", "MongoDB", "AWS", "Docker"];

  return (
    <div className="flex flex-wrap gap-3">
      {techs.map((t) => (
        <span
          key={t}
          className="rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-sm text-emerald-300"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* ================= RIGHT ================= */

function Right() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-black/40 p-4 glow">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-emerald-400">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>

        <div className="space-y-1 text-sm">
          <p>📞 0123 456 789</p>
          <p>✉️ baonguyen.dev@email.com</p>
          <p>🌐 baonguyen.dev</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stat v="3+" l="Năm kinh nghiệm Web" />
        <Stat v="10+" l="Dự án hoàn thành" />
        <Stat v="100%" l="Chuẩn UX/UI" />
        <Stat v="100%" l="Độ tin cậy" />
      </div>
    </div>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-4 text-center glow">
      <div className="text-2xl font-bold text-emerald-400">{v}</div>
      <div className="text-sm opacity-70">{l}</div>
    </div>
  );
}

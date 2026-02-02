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
      <span className="inline-block rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-400">WHOAMI</span>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">Nguyễn Chí Bảo</h1>
      <RoleSlider />
      <AboutTyping />
      <Tech />
    </div>
  );
}

function RoleSlider() {
  const roles = [
    "Web Designer",
    "Full Stack Developer",
    "System Architecture",
  ];

  return (
    <div className="relative h-10 overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60 px-4 glow">
      <div className="absolute left-4 top-0 animate-role-marquee">
        {[...roles, ...roles].map((role, i) => (
          <div
            key={i}
            className="h-10 flex items-center text-emerald-400"
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}


function AboutTyping() {
  const full = "Tôi là một Full Stack Developer tập trung vào trải nghiệm người dùng, kiến trúc hệ thống và các sản phẩm web đáng tin cậy.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(full.slice(0, i)); i++;
      if (i > full.length) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-indigo-500/20 bg-black/40 p-5 leading-relaxed">
      {text}
    </div>
  );
}

function Tech() {
  const techs = ["Node.js","React","TypeScript","MongoDB","AWS","Docker"];
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map(t => (
        <span key={t} className="rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-sm text-emerald-300">{t}</span>
      ))}
    </div>
  );
}

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
        <Stat v="100%" l="Bảo mật" />
      </div>
    </div>
  );
}

function Stat({ v, l }: any) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-4 text-center glow">
      <div className="text-2xl font-bold text-emerald-400">{v}</div>
      <div className="text-sm opacity-70">{l}</div>
    </div>
  );
}

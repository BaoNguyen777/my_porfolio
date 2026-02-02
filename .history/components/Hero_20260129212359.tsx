// ---------- components/Hero.tsx ----------
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
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">Võ Trúc Nhi</h1>
      <CodeTyping />
      <div className="rounded-xl border border-indigo-500/20 bg-black/40 p-5 leading-relaxed">
        Chuyên gia Backend Developer với hơn 3 năm kinh nghiệm về Node.js, System Architecture và Database Design.
      </div>
      <Tech />
    </div>
  );
}

function CodeTyping() {
  const full = 'const role = "Full-Stack Developer"';
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(full.slice(0, i)); i++;
      if (i > full.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/60 p-4 text-emerald-400 glow">
      <pre>{text}</pre>
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
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-400">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>
        <button className="rounded-lg bg-emerald-500/20 px-4 py-2 text-emerald-300">• Liên hệ</button>
      </div>

      <div className="rounded-xl border border-indigo-500/20 bg-black/50 p-4 text-sm">
        <p className="text-emerald-400">$ npm run dev --mode=production</p>
        <p>&gt; Building for production...</p>
        <p>&gt; Server running on https://localhost:3000</p>
        <p className="text-purple-400">✔ Ready for connections 🚀</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stat v="3+" l="Năm kinh nghiệm" />
        <Stat v="10+" l="Dự án" />
        <Stat v="3" l="Công ty" />
        <Stat v="100%" l="Cam kết" />
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

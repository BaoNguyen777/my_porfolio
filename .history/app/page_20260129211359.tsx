// FULL SOURCE – CLONE UI vonhi.vercel.app (Next.js App Router)
// ==============================
// Stack: Next.js + Tailwind + Framer Motion
// ==============================

// ---------- app/layout.tsx ----------
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Cyber Portfolio",
  description: "Clone UI vonhi.vercel.app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-[#0b1117] text-slate-200 font-mono">{children}</body>
    </html>
  );
}

// ---------- app/page.tsx ----------
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="scanline" />
      <Navbar />
      <Hero />
    </main>
  );
}

// ---------- app/globals.css ----------
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: radial-gradient(circle at 20% 20%, rgba(0,255,200,0.08), transparent 40%),
              radial-gradient(circle at 80% 30%, rgba(120,120,255,0.08), transparent 40%),
              #0b1117;
}

.scanline {
  pointer-events: none;
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    rgba(255,255,255,0.03) 1px,
    transparent 3px
  );
  opacity: 0.25;
}

.glow {
  box-shadow: 0 0 0 1px rgba(16,185,129,.25),
              0 0 20px rgba(16,185,129,.15);
}

// ---------- components/Navbar.tsx ----------
"use client";
import { Home, User, Folder, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="mx-auto mt-4 flex w-[92%] items-center justify-between rounded-xl border border-emerald-500/20 bg-black/40 px-4 py-2 backdrop-blur glow">
      <span className="text-emerald-400">nhivo@portfolio:~$</span>
      <div className="flex gap-2">
        <Item icon={<Home size={16} />} label="Trang chủ" active />
        <Item icon={<User size={16} />} label="Giới thiệu" />
        <Item icon={<Folder size={16} />} label="Dự án" />
        <Item icon={<Briefcase size={16} />} label="Kinh nghiệm" />
        <Item icon={<Mail size={16} />} label="Liên hệ" />
      </div>
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
    </nav>
  );
}

function Item({ icon, label, active }: any) {
  return (
    <button className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all ${active ? "bg-emerald-500/20 text-emerald-300" : "hover:bg-white/5"}`}>
      {icon}{label}
    </button>
  );
}

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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Home, User, Folder, Briefcase, Mail, Terminal, Settings } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1117] text-slate-200 font-mono relative overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(120,120,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[length:100%_3px]" />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="relative z-10 mx-auto mt-4 flex w-[92%] items-center justify-between rounded-xl border border-emerald-500/20 bg-black/40 px-4 py-2 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="text-emerald-400">nhivo@portfolio:~$</span>
      </div>
      <div className="flex gap-2">
        <NavItem icon={<Home size={16} />} label="Trang chủ" active />
        <NavItem icon={<User size={16} />} label="Giới thiệu" />
        <NavItem icon={<Folder size={16} />} label="Dự án" />
        <NavItem icon={<Briefcase size={16} />} label="Kinh nghiệm" />
        <NavItem icon={<Mail size={16} />} label="Liên hệ" />
      </div>
      <div className="flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-purple-600/30" />
        <button className="h-8 w-8 rounded bg-red-500/20" />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active }: any) {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
        active
          ? "bg-emerald-500/20 text-emerald-300"
          : "text-slate-300 hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto mt-14 grid w-[92%] grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-400">
          <Terminal size={16} /> WHOAMI
        </span>

        <h1 className="text-5xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
            Võ Trúc Nhi
          </span>
        </h1>

        <CodeBlock />

        <div className="rounded-xl border border-indigo-500/20 bg-black/40 p-5 leading-relaxed">
          <p>
            Chuyên gia Backend Developer với hơn 3 năm kinh nghiệm về Node.js,
            System Architecture và Database Design. Xây dựng các ứng dụng có thể
            mở rộng với công nghệ hiện đại.
          </p>
        </div>

        <TechStack />
      </div>

      <div className="relative grid gap-6">
        <ProfileCard />
        <TerminalBlock />
        <Stats />
      </div>
    </section>
  );
}

function CodeBlock() {
  const [text, setText] = useState("");
  const full = 'const role = "Full-Stack Developer"';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(t);
    }, 50);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/60 p-4 text-emerald-400">
      <span className="opacity-70">role.js</span>
      <pre className="mt-2 text-lg">{text}</pre>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-black/40 p-4">
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-400">
        <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
      </div>
      <button className="rounded-lg bg-emerald-500/20 px-4 py-2 text-emerald-300">
        • Liên hệ
      </button>
    </div>
  );
}

function TerminalBlock() {
  return (
    <div className="rounded-xl border border-indigo-500/20 bg-black/50 p-4 text-sm">
      <div className="mb-2 text-indigo-400">developer@terminal:~$</div>
      <p className="text-emerald-400">$ npm run dev --mode=production</p>
      <p className="text-slate-300">&gt; Building for production...</p>
      <p className="text-slate-300">&gt; Server running on https://localhost:3000</p>
      <p className="text-purple-400">✔ Ready for connections 🚀</p>
    </div>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Stat value="3+" label="Năm kinh nghiệm" />
      <Stat value="10+" label="Dự án hoàn thành" />
      <Stat value="3" label="Công ty" />
      <Stat value="100%" label="Cam kết" />
    </div>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-4 text-center">
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="text-sm opacity-70">{label}</div>
    </div>
  );
}

function TechStack() {
  const techs = ["Node.js", "React", "TypeScript", "MongoDB", "AWS", "Docker"];
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-lg">
        <Settings size={16} /> Công nghệ sử dụng
      </h3>
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
    </div>
  );
}

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
  const roles = ["Web Designer", "Full Stack Developer", "System Architecture"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-10 overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60 px-4 py-2 text-emerald-400 glow">
      <p className="animate-slide">{roles[index]}</p>
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
        <Stat v="100%" l="Đáng tin cậy" />
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

// ---------- components/SkillsDashboard.tsx ----------
"use client";
import { useState } from "react";

const skills = [
  { name: "Node.js", level: "EXPERT", tag: "Backend Development", desc: "3+ năm kinh nghiệm" },
  { name: "Express.js", level: "ADVANCED", tag: "Backend Development", desc: "RESTful APIs & middleware" },
  { name: "PHP", level: "INTERMEDIATE", tag: "Backend Development", desc: "Symfony framework" },
  { name: "Java", level: "INTERMEDIATE", tag: "Backend Development", desc: "Apache ecosystem" },
  { name: "ReactJS", level: "EXPERT", tag: "Frontend Development", desc: "Hooks, Redux, Context" },
  { name: "Material UI", level: "ADVANCED", tag: "Frontend Development", desc: "Thiết kế component nâng cao" },
  { name: "TypeScript", level: "ADVANCED", tag: "Frontend Development", desc: "Static typing & architecture" },
  { name: "Next.js", level: "ADVANCED", tag: "Frontend Development", desc: "SSR & App Router" },
  { name: "JavaScript", level: "EXPERT", tag: "Frontend Development", desc: "ES6+" },
];

export function SkillsDashboard() {
  const [view, setView] = useState("grid");

  return (
    <section className="mx-auto mt-28 w-[92%]">
      <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Skills Dashboard
      </h2>
      <p className="mt-3 text-center text-slate-400">
        Interactive overview of technical expertise
      </p>

      <div className="mt-10 flex items-center justify-between rounded-xl border border-indigo-500/20 bg-black/40 p-4">
        <div>
          <p className="text-xl font-semibold">{skills.length} Technologies Found</p>
          <p className="text-sm text-slate-400">All technologies</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView("grid")} className={`rounded-lg px-4 py-2 ${view === "grid" ? "bg-indigo-500/30 text-indigo-300" : "hover:bg-white/5"}`}>Grid</button>
          <button onClick={() => setView("list")} className={`rounded-lg px-4 py-2 ${view === "list" ? "bg-indigo-500/30 text-indigo-300" : "hover:bg-white/5"}`}>List</button>
        </div>
      </div>

      <div className={`mt-8 grid gap-6 ${view === "grid" ? "md:grid-cols-3" : "grid-cols-1"}`}>
        {skills.map(s => (
          <div key={s.name} className="rounded-xl border border-emerald-500/20 bg-black/40 p-5 transition hover:scale-[1.02] glow">
            <h3 className="text-xl font-semibold">{s.name}</h3>
            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">{s.tag}</span>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">{s.level}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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

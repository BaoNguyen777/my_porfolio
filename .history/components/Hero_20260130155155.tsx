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
  const techs = ["Node.js", "React", "TypeScript", "MongoDB", "AWS", "Docker"];
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map(t => (
}
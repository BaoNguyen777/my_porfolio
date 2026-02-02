// ---------- app/page.tsx ----------
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { SkillsDashboard } from "@/components/SkillsDashboard";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="scanline" />
      <Navbar />
      <Hero />
      <AboutIntro />
      <SkillsDashboard />
      <Projects />
      <Experience />

    </main>
  );
}





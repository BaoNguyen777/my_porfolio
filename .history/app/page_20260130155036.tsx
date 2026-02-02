"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SkillsDashboard } from "@/components/SkillsDashboard";


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="scanline" />
      <Navbar />
      <Hero />
      <SkillsDashboard />
    </main>
  );
}
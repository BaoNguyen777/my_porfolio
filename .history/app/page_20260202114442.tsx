"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SkillsDashboard } from "@/components/SkillsDashboard";
import { Domains } from "@/components/Domains";
import { Achievements } from "@/components/Achivements";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CareerSummary from "@/components/CareerSummary";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="scanline" />
      <Navbar />
      <Hero />
      <Domains />
      <Achievements />
      <SkillsDashboard />
      <Projects />
      <Experience />
      <CareerSummary />
      <Contact />
    </main>
  );
}
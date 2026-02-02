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





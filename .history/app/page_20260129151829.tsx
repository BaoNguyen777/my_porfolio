// 🔥 PRODUCTION-READY DEV PORTFOLIO – JOB APPLICATION VERSION
// Target: Junior–Middle Full-stack / Backend Developer
// Stack: Next.js 14 (App Router), TailwindCSS, Framer Motion
// Focus: Clear value, real projects, recruiter-friendly

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 text-xs tracking-widest bg-black/40 backdrop-blur">
      <span className="font-bold">BAO NGUYEN</span>
      <div className="flex gap-8 uppercase">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/hero.jpg"
        alt="Bao Nguyen – Full-stack Developer"
        fill
        className="object-cover opacity-40"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-2xl"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Full‑stack Developer</h1>
        <p className="mt-6 text-gray-300">
          I build real-world web applications with clean architecture, strong backend logic,
          and modern UI.
        </p>
        <p className="mt-4 text-sm text-gray-400">Java · Spring Boot · Next.js · AWS</p>
      </motion.div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="text-gray-400 mb-16 max-w-2xl">
        Selected real projects demonstrating backend design, frontend UI, and production thinking.
      </p>
      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ scale: 1.02 }} className="group">
            <div className="relative h-72 mb-6 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition"
              />
            </div>
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-3">{p.desc}</p>
            <ul className="text-sm text-gray-400 mt-3 list-disc list-inside">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-32 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About</h2>
      <p className="text-gray-300 leading-relaxed">
        I am a developer with a strong focus on backend development and system thinking.
        I enjoy building complete products — from database design and APIs to clean, usable interfaces.
        I value readable code, scalability, and practical solutions over hype.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section className="py-24 px-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
        {[
          'Java / Spring Boot',
          'REST API / JWT',
          'Next.js / React',
          'MySQL / PostgreSQL',
          'AWS / Docker',
          'System Design Basics',
          'AI Integration (YOLO)',
          'Git / CI-CD'
        ].map((s) => (
          <div key={s} className="border border-white/10 p-4 text-center text-sm">{s}</div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="py-24 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Experience & Practice</h2>
      <ul className="space-y-6 text-gray-300">
        <li>
          <strong>Full‑stack Projects</strong> – Designed and implemented booking systems,
          admin dashboards, authentication, and payment-ready flows.
        </li>
        <li>
          <strong>Backend‑focused Development</strong> – API design, database modeling,
          security with JWT, performance awareness.
        </li>
        <li>
          <strong>AI Applications</strong> – YOLO-based detection projects integrated into
          real applications.
        </li>
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-gray-400 mt-4">Open for full‑time & freelance opportunities</p>
      <p className="mt-6 text-lg">📧 bao.nguyen.dev@email.com</p>
      <p className="text-sm text-gray-500 mt-2">Ho Chi Minh City · Remote</p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-gray-500">
      © 2026 Bao Nguyen. Built with Next.js.
    </footer>
  )
}

const projects = [
  {
    title: 'Hotel Booking Platform',
    desc: 'A full‑stack hotel booking system built for real‑world usage.',
    points: [
      'Designed REST APIs for booking, rooms, users, and admin management',
      'Implemented authentication & authorization using JWT',
      'Optimized database structure for scalability'
    ],
    tech: 'Spring Boot · Next.js · MySQL · JWT',
    image: '/projects/booking.jpg'
  },
  {
    title: 'AI Image Detection System',
    desc: 'AI-powered application using YOLO for object and image classification.',
    points: [
      'Trained and integrated YOLO models for detection tasks',
      'Connected AI model with frontend for real-time results',
      'Deployed as a demo-ready application'
    ],
    tech: 'YOLOv8 · Python · iOS · Web Integration',
    image: '/projects/ai.jpg'
  }
]

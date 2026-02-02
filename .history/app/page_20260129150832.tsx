// Next.js App Router portfolio – inspired by the provided reference image
// Stack: Next.js 14, TailwindCSS, Framer Motion
// Focus: Strong Hero + Projects immediately after Hero

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      {/* <Projects /> */}
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
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 text-xs tracking-widest bg-black/30 backdrop-blur">
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
        src="/hero.jpg" // replace with your image
        alt="hero"
        fill
        className="object-cover opacity-40"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">FULL‑STACK DEVELOPER</h1>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          I build scalable web apps, clean UI systems, and real‑world products.
        </p>
      </motion.div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative h-72 mb-6">
              <Image src={p.image} alt={p.title} fill className="object-cover grayscale group-hover:grayscale-0 transition" />
            </div>
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <p className="text-xs text-gray-500 mt-3">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-32 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I am a developer focused on building production‑ready applications.
        Experienced in full‑stack development, system design, and AI‑integrated products.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section className="py-24 px-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
        {['Java', 'Spring Boot', 'Next.js', 'React', 'AWS', 'Docker', 'MySQL', 'AI / YOLO'].map((s) => (
          <div key={s} className="border border-white/10 p-4 text-center">{s}</div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="py-24 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <ul className="space-y-6 text-gray-300">
        <li>
          <strong>Full‑stack Developer</strong> – Real projects (Booking, E‑commerce, AI systems)
        </li>
        <li>
          <strong>Backend‑focused</strong> – Java, Spring, REST APIs, system design
        </li>
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold">Let’s work together</h2>
      <p className="text-gray-400 mt-4">bao.nguyen.dev@email.com</p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-gray-500">
      © 2026 Bao Nguyen. All rights reserved.
    </footer>
  )
}

const projects = [
  {
    title: 'Hotel Booking Platform',
    desc: 'Full‑stack booking system with authentication and payment flow.',
    tech: 'Spring Boot · Next.js · MySQL',
    image: '/projects/booking.jpg',
  },
  {
    title: 'AI Fruit Detection',
    desc: 'YOLO‑based image classification and mobile deployment.',
    tech: 'YOLOv8 · Python · iOS',
    image: '/projects/ai.jpg',
  },
]

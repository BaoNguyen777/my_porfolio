"use client";

import { Github, Linkedin, Facebook, Link } from "lucide-react";
import Floating from "./Floating";

export default function ContactPage() {
  return (
    <main id="contact" className="min-h-screen bg-[#0b1220] px-4 py-20 flex items-center justify-center">
      <section className="w-full max-w-6xl">
        {/* Title */}
        <Floating
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            &lt;Liên hệ /&gt;
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            portfolio.contact.description
          </p>
        </Floating/</main>>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">
              portfolio.contact.contact_info
            </h3>

            {[
              {
                label: "EMAIL",
                value: "baonguyen28052001@gmail.com",
                status: "ACTIVE",
              },
              {
                label: "PHONE",
                value: "0353530086",
                status: "ACTIVE",
              },
              {
                label: "LOCATION",
                value: "Ho Chi Minh City, Vietnam",
                status: "ONLINE",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4
                           transition-all hover:border-green-400/60
                           hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}

            {/* Code style info */}
            <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-300 font-mono">
              <p className="text-gray-500 mb-2">developer.js</p>
              <pre>{`const developer = {
  name: "Nguyễn Chí Bảo",
  role: "Fullstack Developer",
  location: "Ho Chi Minh City, Vietnam",
  skills: ["Next.js", "React", "NodeJS", "Java"]
};`}</pre>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="rounded-2xl border border-green-400/30 bg-gradient-to-b
                       from-white/5 to-transparent p-6
                       transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]"
          >
            <p className="text-green-400 font-mono mb-6">
              &gt; Hello, World! Ready to collaborate?
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  placeholder="Name *"
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white placeholder-gray-500
                             focus:outline-none focus:border-green-400/60"
                />
                <input
                  placeholder="Email *"
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white placeholder-gray-500
                             focus:outline-none focus:border-green-400/60"
                />
              </div>

              <input
                placeholder="Subject *"
                className="w-full rounded-lg bg-white/5 border border-white/10
                           px-4 py-3 text-white placeholder-gray-500
                           focus:outline-none focus:border-green-400/60"
              />

              <textarea
                placeholder="Message *"
                className="w-full h-32 rounded-lg bg-white/5 border border-white/10
                           px-4 py-3 text-white placeholder-gray-500
                           focus:outline-none focus:border-green-400/60"
              />

              <button
                type="submit"
                className="w-full mt-4 rounded-xl bg-green-500 py-3 font-semibold text-black
                           hover:bg-green-400 transition-all"
              >
                ▶ Send
              </button>
            </form>
          </div>
          
{/* SOCIAL PLATFORMS */}
<div className="mt-6">
  <h4 className="mb-3 text-sm font-semibold tracking-wider text-white">
    Social platforms
  </h4>

  <div className="flex items-center gap-4">
    <SocialIcon
      href="https://github.com/baonguyen"
      icon={<Github size={18} />}
      label="GitHub"
    />
    <SocialIcon
      href="https://linkedin.com/in/nguyenchibao"
      icon={<Linkedin size={18} />}
      label="LinkedIn"
    />
    <SocialIcon
      href="https://facebook.com/"
      icon={<Facebook size={18} />}
      label="Facebook"
    />
  </div>
</div>

          {/* TECHNOLOGY STACK */}
<div className="mt-6 rounded-2xl border border-emerald-500/20 bg-black/30 p-5 backdrop-blur-xl">
  <h4 className="mb-4 text-sm font-semibold tracking-wider text-emerald-400">
    CÔNG NGHỆ SỬ DỤNG
  </h4>

  <div className="flex flex-wrap gap-3">
    {[
      { name: "Node.js", color: "bg-green-500/15 text-green-400" },
      { name: "React", color: "bg-cyan-500/15 text-cyan-400" },
      { name: "TypeScript", color: "bg-blue-500/15 text-blue-400" },
      { name: "MongoDB", color: "bg-emerald-500/15 text-emerald-400" },
      { name: "AWS", color: "bg-amber-500/15 text-amber-400" },
      { name: "Docker", color: "bg-sky-500/15 text-sky-400" },
    ].map((tech) => (
      <span
        key={tech.name}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all
        hover:scale-110 hover:brightness-125 ${tech.color}`}
      >
        {tech.name}
      </span>
    ))}
  </div>
</div>

        </div>
      </section>
    </main>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="
        group flex h-11 w-11 items-center justify-center
        rounded-full border border-white/15
        bg-black/40 text-slate-300
        transition-all duration-300
        hover:scale-110
        hover:border-emerald-400/80
        hover:text-emerald-400
        hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.8)]
      "
    >
      {icon}
    </a>
  );
}

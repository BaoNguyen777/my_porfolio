"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="mx-auto mt-40 w-[92%] max-w-7xl">
      {/* TITLE */}
      <div className="mb-12 flex items-center gap-3 text-white">
        <span className="text-lg">📇</span>
        <h2 className="text-2xl font-bold">
          portfolio.contact.contact_info
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* LEFT INFO */}
        <div className="space-y-6">
          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center justify-between rounded-2xl border border-white/10
              bg-black/40 p-6 backdrop-blur-xl transition-all
              hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                <Mail />
              </div>
              <div>
                <div className="text-xs text-slate-400">EMAIL</div>
                <div className="font-semibold text-white">
                  nguyenchibao.dev@gmail.com
                </div>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
              ACTIVE
            </span>
          </motion.div>

          {/* PHONE */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center justify-between rounded-2xl border border-white/10
              bg-black/40 p-6 backdrop-blur-xl transition-all
              hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                <Phone />
              </div>
              <div>
                <div className="text-xs text-slate-400">PHONE</div>
                <div className="font-semibold text-white">
                  +84 837 885 985
                </div>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
              ACTIVE
            </span>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center justify-between rounded-2xl border border-white/10
              bg-black/40 p-6 backdrop-blur-xl transition-all
              hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                <MapPin />
              </div>
              <div>
                <div className="text-xs text-slate-400">LOCATION</div>
                <div className="font-semibold text-white">
                  Ho Chi Minh City, Vietnam
                </div>
              </div>
            </div>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
              ONLINE
            </span>
          </motion.div>

          {/* DEV OBJECT */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-sm text-slate-300">
            <div className="mb-2 text-slate-400">developer.js</div>
            <pre className="whitespace-pre-wrap leading-relaxed">
{`const developer = {
  name: "Nguyễn Chí Bảo",
  role: "Full-stack Developer",
  location: "Ho Chi Minh City",
  availability: "Open for freelance & full-time",
};`}
            </pre>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          whileHover={{ boxShadow: "0 0 60px -15px rgba(16,185,129,0.4)" }}
          className="rounded-3xl border border-emerald-500/20
            bg-black/40 p-8 backdrop-blur-xl"
        >
          <div className="mb-6 font-mono text-emerald-400">
            &gt; Hello, World! Ready to collaborate?
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                placeholder="portfolio.contact.form.name *"
                className="input"
              />
              <input
                placeholder="portfolio.contact.form.email *"
                className="input"
              />
            </div>

            <input
              placeholder="portfolio.contact.form.subject *"
              className="input"
            />

            <textarea
              rows={5}
              placeholder="portfolio.contact.form.message *"
              className="input resize-none"
            />

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2
                rounded-xl bg-emerald-500 py-4 font-semibold text-black
                transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
            >
              <Send size={18} />
              portfolio.contact.form.submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* INPUT STYLE (TAILWIND SAFE) */}
      <input
  placeholder="portfolio.contact.form.name *"
  className="w-full rounded-xl border border-white/10 bg-black/40
    px-4 py-3 text-white outline-none
    transition-all duration-300
    focus:border-emerald-400/70
    focus:shadow-[0_0_0_1px_rgba(16,185,129,0.4)]"
/>

    </section>
  );
}

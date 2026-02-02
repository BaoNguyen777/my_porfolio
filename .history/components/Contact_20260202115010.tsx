"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Terminal,
  Send,
  Code2,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-40 w-[92%] max-w-7xl"
    >
      {/* TITLE */}
      <div className="mb-10 flex items-center gap-3 text-white">
        <Terminal className="text-emerald-400" />
        <h2 className="text-2xl font-bold">
          portfolio.contact.contact_info
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT INFO */}
        <div className="space-y-6">
          {[
            {
              icon: <Mail />,
              label: "EMAIL",
              value: "nhivo1604230@gmail.com",
              status: "ACTIVE",
            },
            {
              icon: <Phone />,
              label: "PHONE",
              value: "+84 837 885 985",
              status: "ACTIVE",
            },
            {
              icon: <MapPin />,
              label: "LOCATION",
              value: "Ho Chi Minh City, Vietnam",
              status: "ONLINE",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-emerald-500/20
                bg-gradient-to-br from-emerald-900/30 to-black/60
                p-6 backdrop-blur-xl
                hover:border-emerald-400/60
                hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="text-xs text-slate-400">{item.label}</div>
                  <div className="font-semibold text-white">
                    {item.value}
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}

          {/* CODE CARD */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-sm text-slate-300">
            <div className="mb-3 flex items-center gap-2 text-slate-400">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2">developer.js</span>
            </div>

            <pre className="leading-relaxed">
{`const developer = {
  name: "Võ Trúc Nhi",
  role: "Full-stack / DevOps Engineer",
  location: "Ho Chi Minh City",
  openForWork: true,
};`}
            </pre>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative rounded-3xl border border-emerald-500/30
            bg-gradient-to-br from-black/60 to-emerald-900/20
            p-8 backdrop-blur-xl
            hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]"
        >
          <div className="mb-6 font-mono text-emerald-400">
            {"> Hello, World! Ready to collaborate?"}
            <span className="ml-1 animate-pulse">▌</span>
          </div>

          <form className="space-y-5">
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
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2
                rounded-xl bg-gradient-to-r from-emerald-400 to-green-500
                py-4 font-bold text-black
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)]
                transition"
            >
              <Send size={18} />
              portfolio.contact.form.submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* INPUT STYLE */}
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

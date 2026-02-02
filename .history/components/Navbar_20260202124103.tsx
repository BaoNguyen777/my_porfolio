"use client";

import { Home, User, Folder, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Spacer để không che content */}
      <div className="h-16" />

      <nav
        className="
          fixed top-4 left-1/2 z-50
          w-[92%] max-w-7xl
          -translate-x-1/2
          rounded-xl
          border border-emerald-500/20
          bg-black/50
          px-4 py-2
          backdrop-blur-xl
          shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]
        "
      >
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <span className="font-mono text-sm text-emerald-400">
            baonguyen@portfolio:~$
          </span>

          {/* CENTER */}
          <div className="flex gap-2">
            <Item icon={<Home size={16} />} label="Trang chủ" active />
            <Item icon={<User size={16} />} label="Giới thiệu" />
            <Item icon={<Folder size={16} />} label="Dự án" />
            <Item icon={<Briefcase size={16} />} label="Kinh nghiệm" />
            <Item icon={<Mail size={16} />} label="Liên hệ" />
          </div>

          {/* RIGHT – window dots */}
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
      </nav>
    </>
  );
}

function Item({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`
        group flex items-center gap-2
        rounded-lg px-3 py-1.5 text-sm
        transition-all duration-200
        ${
          active
            ? "bg-emerald-500/20 text-emerald-300 shadow-[0_0_20px_-6px_rgba(16,185,129,0.6)]"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <span
        className={`
          transition-colors
          ${active ? "text-emerald-400" : "text-slate-400 group-hover:text-white"}
        `}
      >
        {icon}
      </span>
      {label}
    </button>
  );
}

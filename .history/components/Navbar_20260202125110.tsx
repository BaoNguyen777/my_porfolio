"use client";

import { useEffect, useState } from "react";
import { Home, User, Folder, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Spacer */}
      <div className="h-20" />

      <nav
        className={`
          fixed top-4 left-1/2 z-50
          w-[92%] max-w-7xl
          -translate-x-1/2
          rounded-xl
          border border-emerald-500/20
          bg-black/50
          px-4 py-2
          backdrop-blur-xl
          shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]
          transition-all duration-300 ease-out
          ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <span
            onClick={() => scrollTo("home")}
            className="cursor-pointer font-mono text-sm text-emerald-400 hover:text-emerald-300"
          >
            baonguyen@portfolio:~$
          </span>

          {/* CENTER */}
          <div className="flex gap-2">
            <Item icon={<Home size={16} />} label="Trang chủ" onClick={() => scrollTo("home")} />
            <Item icon={<User size={16} />} label="Domain" onClick={() => scrollTo("domain")} />
            <Item icon={<Folder size={16} />} label="Dự án" onClick={() => scrollTo("projects")} />
            <Item
              icon={<Briefcase size={16} />}
              label="Kinh nghiệm"
              onClick={() => scrollTo("experience")}
            />
            <Item icon={<Mail size={16} />} label="Liên hệ" onClick={() => scrollTo("contact")} />
          </div>

          {/* RIGHT */}
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
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        group flex items-center gap-2
        rounded-lg px-3 py-1.5 text-sm
        text-slate-300
        transition-all duration-200
        hover:bg-emerald-500/15
        hover:text-emerald-300
      "
    >
      <span className="text-slate-400 transition-colors group-hover:text-emerald-400">
        {icon}
      </span>
      {label}
    </button>
  );
}

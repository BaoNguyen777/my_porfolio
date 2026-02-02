"use client";
import { Home, User, Folder, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="mx-auto mt-4 flex w-[92%] items-center justify-between rounded-xl border border-emerald-500/20 bg-black/40 px-4 py-2 backdrop-blur glow">
      <span className="text-emerald-400">baonguyen@portfolio:~$</span>
      <div className="flex gap-2">
        <Item icon={<Home size={16} />} label="Trang chủ" active />
        <Item icon={<User size={16} />} label="Giới thiệu" />
        <Item icon={<Folder size={16} />} label="Dự án" />
        <Item icon={<Briefcase size={16} />} label="Kinh nghiệm" />
        <Item icon={<Mail size={16} />} label="Liên hệ" />
      </div>
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
    </nav>
  );
}

function Item({ icon, label, active }: any) {
  return (
    <button className={`fixed items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all ${active ? "bg-emerald-500/20 text-emerald-300" : "hover:bg-white/5"}`}>
      {icon}{label}
    </button>
  );
}
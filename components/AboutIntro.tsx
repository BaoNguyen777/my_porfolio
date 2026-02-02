"use client";

import Image from "next/image";
import { Mail, Download } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="mt-20 text-center">
      {/* tên & role */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
        Võ Trúc Nhi
      </h1>

      <p className="mt-3 text-xl text-slate-300">
        Backend Developer • System Architecture • Scalable Apps
      </p>

      {/* mô tả ngắn */}
      <p className="mt-4 max-w-2xl mx-auto text-base text-slate-400 leading-relaxed">
        Tôi là chuyên gia xây dựng các hệ thống backend hiệu quả, có thể mở rộng dùng
        công nghệ hiện đại như Node.js, Spring Boot, AWS và Docker. Tôi đam mê tối ưu
        hiệu năng và đem lại giải pháp rõ ràng cho những thử thách kỹ thuật khó.
      </p>

      {/* nút hành động */}
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#contact"
          className="rounded-lg bg-emerald-500/30 px-5 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/40 transition"
        >
          <Mail size={18} className="inline-block mr-2" /> Liên hệ
        </a>

        <a
          href="/TrucNhi_CV.pdf"
          download
          className="rounded-lg bg-indigo-500/30 px-5 py-2 text-sm font-semibold text-indigo-300 hover:bg-indigo-500/40 transition"
        >
          <Download size={18} className="inline-block mr-2" /> Tải CV
        </a>
      </div>

      {/* ảnh lớn */}
      <div className="relative mx-auto mt-10 h-48 w-48">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          fill
          className="object-cover rounded-full border-4 border-emerald-400 shadow-lg"
        />
      </div>
    </section>
  );
}

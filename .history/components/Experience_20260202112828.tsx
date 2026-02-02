"use client";

import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Backend / Full-stack Developer",
      company: "FPT Software",
      time: "2022 – 2024",
      desc: [
        "Xây dựng và maintain hệ thống backend cho dự án enterprise.",
        "Thiết kế REST API, xử lý authentication (JWT).",
        "Làm việc với MySQL, MongoDB, tối ưu query và performance.",
        "Phối hợp frontend để hoàn thiện luồng nghiệp vụ.",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Docker", "JWT"],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      time: "2021 – 2022",
      desc: [
        "Thiết kế website doanh nghiệp, landing page, booking system.",
        "Triển khai full-stack từ UI → Backend → Deploy.",
        "Làm việc trực tiếp với khách hàng, phân tích yêu cầu.",
      ],
      tech: ["Next.js", "React", "Node.js", "Vercel"],
    },
  ];

  return (
    <section className="mt-24 space-y-10">
      {/* title */}
      <div className="flex items-center gap-3">
        <Briefcase className="text-emerald-400" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      {/* timeline */}
      <div className="relative border-l border-emerald-500/30 pl-6 space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* dot */}
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

            {/* card */}
            <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-6 transition-all
                            hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-emerald-300">
                  {exp.role}
                </h3>
                <span className="text-sm text-slate-400">{exp.time}</span>
              </div>

              <p className="mt-1 text-sm text-indigo-300">
                {exp.company}
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {exp.desc.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-emerald-500/30 bg-black/60 px-2 py-0.5
                               text-xs text-emerald-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

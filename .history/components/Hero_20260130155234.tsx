"use client";
}


function Tech() {
  const techs = ["Node.js", "React", "TypeScript", "MongoDB", "AWS", "Docker"];
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map(t => (
        <span key={t} className="rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-1 text-sm text-emerald-300">{t}</span>
      ))}
    </div>
  );
}


function Right() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-black/40 p-4 glow">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-emerald-400">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>
        <div className="space-y-1 text-sm">
          <p>📞 0123 456 789</p>
          <p>✉️ baonguyen.dev@email.com</p>
          <p>🌐 baonguyen.dev</p>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4">
        <Stat v="3+" l="Năm kinh nghiệm Web" />
        <Stat v="10+" l="Dự án hoàn thành" />
        <Stat v="100%" l="Chuẩn UX/UI" />
        <Stat v="100%" l="Đáng tin cậy" />
      </div>
    </div>
  );
}


function Stat({ v, l }: any) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-4 text-center glow">
      <div className="text-2xl font-bold text-emerald-400">{v}</div>
      <div className="text-sm opacity-70">{l}</div>
    </div>
  );
}
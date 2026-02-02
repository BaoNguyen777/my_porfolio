"use client";
"ReactJS và tư duy component",
],
},
{
year: "2019",
title: "Bắt đầu hành trình Web Developer",
items: [
"Tiếp cận lập trình web",
"Tự học và làm các project nhỏ",
],
},
];


return (
<section className="mx-auto mt-36 w-[92%]">
<h2 className="text-center text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
Achievements
</h2>
<p className="mt-3 text-center text-slate-400">
Hành trình phát triển & các cột mốc quan trọng
</p>


<div className="relative mt-16 border-l border-emerald-500/30 pl-8">
{data.map((item, i) => (
<div key={item.year} className="mb-14 relative">
<div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />


<div className="rounded-xl border border-emerald-500/20 bg-black/40 p-6 glow">
<span className="text-sm text-emerald-400">{item.year}</span>
<h3 className="mt-1 text-xl font-semibold text-white">
{item.title}
</h3>
<ul className="mt-3 list-disc pl-5 space-y-1 text-slate-400">
{item.items.map((it, idx) => (
<li key={idx}>{it}</li>
))}
</ul>
</div>
</div>
))}
</div>
</section>
);
}
"use client";
</div >
</div >
))}
</div >
</section >
);
}


function GlitchItem({ item, index }: any) {
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const id = setInterval(() => {
      setOffset((Math.random() - 0.5) * 6); // giật lag nhẹ
    }, 120);
    return () => clearInterval(id);
  }, []);


  return (
    <div
      style={{ transform: `translateX(${offset}px)` }}
      className="relative z-10 mb-16 flex flex-col items-center"
    >
      <div className="mb-3 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.9)]" />


      <div className="rounded-xl border border-emerald-500/30 bg-black/50 px-8 py-4 text-center glitch-box">
        <div className="text-2xl font-bold text-emerald-400 tracking-widest">
          {item.year}
        </div>
        <div className="mt-1 text-slate-300 text-sm md:text-base">
          {item.title}
        </div>
      </div>
    </div>
  );
}
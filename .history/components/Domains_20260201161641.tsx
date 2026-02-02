import Gear from "@/components/Gear";

const domainColors: Record<string, string> = {
  frontend: "#38bdf8",
  backend: "#a78bfa",
  ai: "#34d399",
  system: "#facc15",
};

export default function Domain({ activeDomain }: { activeDomain: string }) {
  const color = domainColors[activeDomain];

  return (
    <div className="relative flex items-center justify-center w-full h-[320px]">
      
      {/* Gear trái */}
      <div className="absolute left-1/2 -translate-x-[260px]">
        <Gear size={220} color={color} />
      </div>

      {/* Gear phải */}
      <div className="absolute left-1/2 translate-x-[260px]">
        <Gear size={220} color={color} reverse />
      </div>

      {/* DOMAIN CENTER – giữ nguyên */}
      <div className="relative z-10">
        {/* domain hiện tại của bạn */}
      </div>
    </div>
  );
}

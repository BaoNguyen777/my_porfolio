import ScrollHint from "./ScrollHint";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Clouds */}
      <div className="absolute inset-0 bg-[linear-gradient(#38bdf8,#0ea5e9)]" />

      {/* Floating island */}
      <div className="relative z-10">
        <div className="w-72 h-40 bg-green-400 rounded-t-full mx-auto" />
        <div className="w-40 h-24 bg-amber-600 mx-auto clip-triangle" />

        {/* Tree */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="w-6 h-24 bg-amber-700 mx-auto rounded" />
          <div className="w-24 h-16 bg-green-500 rounded-full -mt-2" />
        </div>

        {/* Cute characters */}
        <div className="absolute -left-20 top-16 w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-3xl">
          🐙
        </div>

        <div className="absolute -right-20 top-20 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-3xl">
          🐛
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

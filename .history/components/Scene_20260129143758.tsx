import Image from "next/image";

export default function Scene() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#2bb4e8]">

      {/* Background */}
      <Image
        src="/bg.jpg"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Scroll down */}
      <Image
        src="/scroll-down.png"
        alt="scroll"
        width={90}
        height={120}
        className="absolute right-10 bottom-10 animate-bounce"
      />
    </section>
  );
}

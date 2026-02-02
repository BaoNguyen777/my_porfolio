import Image from "next/image";

export default function Scene() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#2bb4e8]">

      {/* Background */}
      <Image
        src="/bg-sky.png"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Island */}
      <Image
        src="/island.png"
        alt="island"
        width={600}
        height={400}
        className="absolute left-1/2 top-[35%] -translate-x-1/2"
      />

      {/* Tree */}
      <Image
        src="/tree.png"
        alt="tree"
        width={200}
        height={300}
        className="absolute left-1/2 top-[15%] -translate-x-1/2"
      />

      {/* Bird */}
      <Image
        src="/bird.png"
        alt="bird"
        width={140}
        height={140}
        className="absolute left-[48%] top-[20%]"
      />

      {/* Octopus */}
      <Image
        src="/octopus.png"
        alt="octopus"
        width={180}
        height={160}
        className="absolute left-[25%] bottom-[20%]"
      />

      {/* Worm */}
      <Image
        src="/worm.png"
        alt="worm"
        width={220}
        height={200}
        className="absolute right-[20%] bottom-[20%]"
      />

      {/* Mushrooms */}
      <Image
        src="/mushrooms.png"
        alt="mushrooms"
        width={300}
        height={200}
        className="absolute left-[10%] bottom-[15%]"
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

import Scene from "@/components/Scene";

export default function Home() {
  return (
    <>
      <Scene />

      <section className="bg-white py-24 px-8">
        <h2 className="text-orange-500 text-5xl font-extrabold mb-6">
          ABOUT
        </h2>
        <p className="max-w-4xl text-lg leading-relaxed">
          My name is Robby Leonardi, and I am a multidisciplinary designer based in
          New York City...
        </p>
      </section>
    </>
  );
}

import SplitScreen from "@/components/SplitScreen";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SplitScreen />

      {/* Introduction Section */}
      <section className="py-20 bg-zinc-950 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Empowering Industry, <span className="text-orange-500">Protecting People.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Tloumoka Trading is a 100% black woman-owned company dedicated to delivering excellence in Engineering and PPE supply.
            We bridge the gap between industrial capability and personnel safety.
          </p>
        </div>
      </section>
    </div>
  );
}

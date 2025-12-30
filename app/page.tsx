import HeroSection from '@/components/creative/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <HeroSection />

      {/* Additional sections will go here */}
      <section className="py-24 px-4 bg-[#030303]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Build the Future
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join a community of innovators, developers, and visionaries shaping the next era of technology.
          </p>
        </div>
      </section>
    </main>
  );
}

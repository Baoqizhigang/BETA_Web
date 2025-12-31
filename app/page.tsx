import HeroSection from '@/components/creative/HeroSection';
import EventsScroll from '@/components/sections/EventsScroll';
import Partners from '@/components/sections/Partners';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <HeroSection />

      {/* Additional sections will go here */}
      {/* Additional sections will go here */}
      <div className="relative z-10 -mt-32">
        <EventsScroll />
      </div>
      <Partners />

      {/* Footer */}
      <footer className="py-8 text-center text-white/20 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} BETA Foundation. All rights reserved.</p>
      </footer>
    </main>
  );
}

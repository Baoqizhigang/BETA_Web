"use client";

import Prism from './Prism';

export default function HeroSection() {
    return (
        <section className="relative w-full h-[80vh] overflow-hidden flex flex-col items-center justify-center bg-[#030303]">
            {/* Layer 1: Prism Background */}
            <div className="absolute inset-0 z-0">
                <Prism
                    height={3.5}
                    baseWidth={5.5}
                    animationType="rotate"
                    glow={1}
                    noise={0.3}
                    scale={3.6}
                    bloom={1.2}
                    timeScale={0.4}
                />
            </div>

            {/* Layer 2: Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight">
                    Connecting Web3 Talents
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    The premier platform for AI, Blockchain, and Future Tech.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300">
                        Get Started
                    </button>
                    <button className="px-8 py-3 text-gray-400 hover:text-white font-medium transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

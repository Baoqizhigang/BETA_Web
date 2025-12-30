"use client";

import Prism from './Prism';
import { motion } from 'framer-motion';

// "The Ballet Dancer" - Slender, elongated, elegant.
const betaPath = "M 40 190 Q 45 200 60 195 M 40 190 L 40 20 C 40 5 65 5 65 30 C 65 45 40 45 40 45 C 40 45 75 50 75 80 C 75 100 40 100 40 100";

const layers = [
    { z: 0, blur: 0, opacity: 1.0, color: 'white', strokeWidth: 1.5, name: 'Core' },
    { z: 4, blur: 2, opacity: 0.6, color: '#a78bfa', strokeWidth: 2, name: 'Glow Front' },
    { z: -4, blur: 2, opacity: 0.6, color: '#2dd4bf', strokeWidth: 2, name: 'Glow Back' },
    { z: 10, blur: 8, opacity: 0.3, color: '#f472b6', strokeWidth: 4, name: 'Haze Front' },
    { z: -10, blur: 8, opacity: 0.3, color: '#f472b6', strokeWidth: 4, name: 'Haze Back' },
];

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] flex flex-col items-center justify-center bg-[#030303] overflow-hidden">
            {/* Layer 1: Prism Background with Void Mask */}
            <div
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            >
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

                {/* Volumetric Wireframe Beta Symbol */}
                <div style={{ perspective: '1000px' }} className="absolute z-0 flex items-center justify-center">
                    <motion.div
                        animate={{
                            rotateY: -360,
                            opacity: [0.4, 0.8, 0.4] // Breathing animation
                        }}
                        transition={{
                            rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{
                            transformStyle: 'preserve-3d',
                            width: '200px', // Narrower container for "Ballet" shape
                            height: '400px',
                            position: 'relative'
                        }}
                    >
                        {/* Layer Stack for "Particle Haze" Volume */}
                        {layers.map((layer, i) => (
                            <svg
                                key={i}
                                width="200"
                                height="400"
                                viewBox="0 0 100 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0"
                                style={{
                                    transform: `translateZ(${layer.z}px)`,
                                    opacity: layer.opacity,
                                    filter: `blur(${layer.blur}px)`,
                                    mixBlendMode: 'plus-lighter'
                                }}
                            >
                                <path
                                    d={betaPath}
                                    stroke={layer.color}
                                    strokeWidth={layer.strokeWidth}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Layer 2: Content (Moved to Bottom) */}
            <div className="absolute bottom-16 sm:bottom-24 z-10 text-center px-4 max-w-4xl mx-auto w-full">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight drop-shadow-2xl">
                    BETA Foundation
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Berkeley Emerging Technology Association (BETA) is UC Berkeley's leading organization bridging AI, Blockchain, and frontier science innovation. BETA connects researchers, builders, and entrepreneurs across the Bay Area and globally to explore how emerging technologies can shape the next intelligent economy.
                </p>
            </div>
        </section>
    );
}

"use client";

import Prism from './Prism';
import { motion } from 'framer-motion';

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

                {/* 
                   -------------------------------------------
                   NEON TEXT BETA (6-LAYER STACK)
                   -------------------------------------------
                */}
                <div style={{ perspective: '1000px' }} className="absolute z-0 flex items-center justify-center">
                    <motion.div
                        className="relative flex items-center justify-center"
                        animate={{ rotateY: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Stardust Particles */}
                        {[...Array(12)].map((_, i) => {
                            const top = (Math.random() * 200 - 100) + 'px';
                            const left = (Math.random() * 200 - 100) + 'px';
                            const delay = Math.random() * 5;
                            const duration = 2 + Math.random() * 3;

                            return (
                                <motion.div
                                    key={`star-${i}`}
                                    className="absolute rounded-full bg-white shadow-[0_0_4px_white]"
                                    style={{
                                        top,
                                        left,
                                        width: Math.random() > 0.5 ? '2px' : '3px',
                                        height: Math.random() > 0.5 ? '2px' : '3px',
                                        transform: `translateZ(${Math.random() * 60 - 30}px)`
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1.5, 0.5]
                                    }}
                                    transition={{
                                        duration,
                                        repeat: Infinity,
                                        delay,
                                        ease: "easeInOut"
                                    }}
                                />
                            );
                        })}

                        {/* Layer 1: Deep Haze (Pale Cyan Glow) */}
                        <div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            style={{
                                WebkitTextStroke: '30px rgba(165, 243, 252, 0.8)', // Pale Cyan
                                filter: 'blur(30px)',
                                transform: 'translateZ(-20px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </div>

                        {/* Layer 2: Back Tube (Cyan) */}
                        <div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            style={{
                                WebkitTextStroke: '15px rgba(6, 182, 212, 0.5)', // Cyan
                                filter: 'blur(10px)',
                                transform: 'translateZ(-10px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </div>

                        {/* Layer 3: Core Body (Orange) */}
                        <div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            style={{
                                WebkitTextStroke: '10px rgba(255, 181, 120, 0.6)', // Orange
                                filter: 'blur(5px)',
                                transform: 'translateZ(0px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </div>

                        {/* Layer 4: Front Tube (Pale Cyan) */}
                        <div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            style={{
                                WebkitTextStroke: '6px rgba(165, 243, 252, 0.8)', // Pale Cyan
                                filter: 'blur(2px)',
                                transform: 'translateZ(10px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </div>

                        {/* Layer 5: Highlight (Soft White) */}
                        <div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            style={{
                                WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)', // Soft White
                                filter: 'blur(1px)',
                                transform: 'translateZ(15px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </div>

                        {/* Layer 6: The Filament (Flickering Core) */}
                        <motion.div
                            className="absolute font-serif italic text-[300px] text-transparent leading-none select-none"
                            animate={{ opacity: [0.3, 0.8, 0.4, 0.9, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                WebkitTextStroke: '1px white',
                                transform: 'translateZ(20px)',
                                pointerEvents: 'none'
                            }}
                        >
                            β
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* Layer 2: Content (Bottom) */}
            <div className="absolute bottom-10 z-10 text-center px-4 max-w-8xl mx-auto w-full translate-y-0">
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight"
                    animate={{ opacity: [0.3, 0.8, 0.9, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        color: 'rgba(255, 255, 255, 0.1)',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(247, 237, 234, 0) 50%, rgba(255,255,255,0.9) 100%)',
                        filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
                    }}
                >
                    BETA Foundation
                </motion.h1>
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-7xl mx-auto leading-relaxed">
                    Berkeley Emerging Technology Association (BETA) is UC Berkeley's leading organization bridging AI, Blockchain, and frontier science innovation. BETA connects researchers, builders, and entrepreneurs across the Bay Area and globally to explore how emerging technologies can shape the next intelligent economy.
                </p>
            </div>
        </section>
    );
}

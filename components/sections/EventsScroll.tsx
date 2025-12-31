"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import SpotlightCard from '../creative/SpotlightCard';
import LightPillar from '../creative/LightPillar';

const EVENTS = [
    { title: "SCOOP AI HACKATHON", date: "NOV 22-23 2025", desc: "Over 200 developers, researchers, entrepreneurs, and designers from around the world came together and, within just two days, built 70+ cutting-edge projects at the intersection of AI × Web3 × Agentic Systems.", location: "Santa Clara" },
    { title: "AI Investment Summit", date: "NOV 2 2025", desc: "Bringing together leading figures from academia, industry, and the investment community worldwide, this event gathered over 1000 participants to discuss how AI will drive technological innovation, industrial transformation, and capital allocation over the next decade.  With a global perspective and academic depth, we presented a thought-provoking event that connects us to the future.", location: "Berkeley" },
    { title: "BTT Pitch Competition", date: "Aug 10 2025", desc: "Co-hosted with USC, UCLA, and Stanford, this competition was jointly organized with leading Bay Area investment firms such as Uphonest Capital, Upscale X, and Beta University. Thirty outstanding student projects from universities across the U.S. competed, with seven selected as finalists..", location: "Berkeley" },
    { title: "Demo Day", date: "Jun 12 2024", desc: "Brought together 16 cutting-edge projects in AI, medical devices, and smart mobility. Over 30 top investment institutions — including Silicon Valley Bank, CICC Silicon Valley Fund, and Baidu Ventures—participated, providing projects with resources and funding opportunities. Several student participants secured internships as a direct result of the event.", location: "Berkeley" },
    { title: "Venture Summits", date: "NOV 1-3 2024", desc: "Key summits include Plug & Play Summit, GenAI Summit 2024, and HYSTA 2024, fostering dialogue on emerging technologies and entrepreneurship.", location: "San Francisco" },
    { title: "Founder Talks", date: "DEC 10 2024", desc: "Through interviews, roundtables, and site visits, we share the stories of entrepreneurs and investors. This initiative provides students with a gateway to connect with the venture ecosystem.", location: "Berkeley" },
    { title: "SpaceX Case Study", date: "DEC 10 2024", desc: "Mars colonization tech.", location: "Berkeley" },
    { title: "Cyber Security Panel", date: "DEC 17 2024", desc: "Zero trust architecture.", location: "Berkeley" },
];

export default function EventsScroll() {
    const marqueeEvents = [...EVENTS, ...EVENTS];

    return (
        <section className="relative w-full h-[500px] bg-transparent overflow-hidden flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            {/* Layer 1: Background Light (Horizontal LightPillar) */}
            <div className="absolute inset-0 z-0">
                <LightPillar
                    pillarRotation={360}
                    pillarWidth={18}
                    pillarHeight={50}
                    intensity={0.5}
                    rotationSpeed={2.5}
                    topColor="#172554"
                    middleColor="#1a0c55"
                    bottomColor="#083344"
                />
            </div>

            {/* Mix Blend Overlay for the laser look */}
            <div className="absolute inset-0 z-0 bg-transparent mix-blend-screen pointer-events-none" />

            {/* Layer 2: The Marquee Content */}
            <div className="w-full relative z-10 hover-pause">
                <div className="animate-marquee flex gap-8 whitespace-nowrap">
                    {marqueeEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className="w-[450px] flex-shrink-0"
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href="#" className="block h-full">
                                <SpotlightCard className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl h-full">
                                    <div className="p-6 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-cyan-400 font-mono text-sm tracking-widest">{event.date}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Open</span>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2 truncate">{event.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed whitespace-normal line-clamp-2">
                                                {event.desc}
                                            </p>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-xs text-gray-500 uppercase tracking-widest">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {event.location}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

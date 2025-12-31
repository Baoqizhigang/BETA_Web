"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import SpotlightCard from '../creative/SpotlightCard';
import LightPillar from '../creative/LightPillar';

const EVENTS = [
    { title: "AI Summit", date: "OCT 15", desc: "Exploring the future of GenAI.", location: "Moffitt Library" },
    { title: "Blockchain Workshop", date: "OCT 22", desc: "Hands-on solidity dev.", location: "Soda Hall" },
    { title: "Quantum Future", date: "NOV 05", desc: "Quantum computing intro.", location: "Physics Bldg" },
    { title: "BioTech Meetup", date: "NOV 12", desc: "CRISPR and beyond.", location: "Stanley Hall" },
    { title: "Web3 Hackathon", date: "NOV 19", desc: "Build the decentralized web.", location: "VLSB" },
    { title: "Neural Link Talk", date: "DEC 03", desc: "BCI innovations.", location: "Wheeler Hall" },
    { title: "SpaceX Case Study", date: "DEC 10", desc: "Mars colonization tech.", location: "Haas" },
    { title: "Cyber Security Panel", date: "DEC 17", desc: "Zero trust architecture.", location: "Dwinelle" },
];

export default function EventsScroll() {
    const marqueeEvents = [...EVENTS, ...EVENTS];

    return (
        <section className="relative w-full h-[500px] bg-[#030303] overflow-hidden flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            {/* Layer 1: Background Light (Horizontal LightPillar) */}
            <div className="absolute inset-0 z-0">
                <LightPillar
                    pillarRotation={360}
                    pillarWidth={18}
                    pillarHeight={20}
                    intensity={0.4}
                    rotationSpeed={1.5}
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
                            whileHover={{ scale: 1.1, zIndex: 10 }}
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

"use client";

import Link from 'next/link';
import BentoCard from '@/components/creative/BentoCard';
import ShinyText from '@/components/creative/ShinyText';
import { projects } from '@/src/data/scoop-ai-winning-grid';

export default function WinningProjectsGrid() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24">
            <h2 className="text-4xl font-bold text-center mb-10 text-white/80 tracking-widest">
                WINNING PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((item, index) => {
                    const CardContent = (
                        <BentoCard
                            key={index}
                            glowColor={item.theme.color}
                            className="h-40 flex flex-col items-center justify-between p-6 text-center transition-all duration-300 group-hover:scale-[1.02]"
                        >
                            {/* 1. Prize Label (Top) */}
                            {item.prize && item.title !== "News Letter" && (
                                <span className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: item.theme.color }}>
                                    {item.prize}
                                </span>
                            )}
                            {/* Special case for Newsletter top spacing if needed, but per source code it was handled via top label check */}
                            {item.title === "News Letter" && (
                                <div className="mb-auto"></div>
                            )}

                            {/* 2. Project Title (Middle) */}
                            <div className="mb-3">
                                <ShinyText
                                    text={item.title}
                                    disabled={false}
                                    speed={item.theme.speed}
                                    spread={item.theme.spread}
                                    color="#575E5E"
                                    shineColor={item.theme.color}
                                    yoyo={true}
                                    className="text-4xl font-bold block"
                                />
                            </div>

                            {/* 3. Members / Subtitle (Bottom) */}
                            <p className={`text-xs max-w-[100%] leading-relaxed whitespace-pre-line ${item.isExternal ? "text-gray-400 mt-1 italic" : "text-gray-400 font-light"}`}>
                                {item.members}
                            </p>
                            {item.title === "News Letter" && (
                                <div className="mt-auto"></div>
                            )}
                        </BentoCard>
                    );

                    return item.isExternal ? (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                            {CardContent}
                        </a>
                    ) : (
                        <Link key={index} href={item.link} className="block group">
                            {CardContent}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

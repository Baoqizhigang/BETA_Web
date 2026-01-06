"use client";

import Link from 'next/link';
import BentoCard from '@/components/creative/BentoCard';
import ShinyText from '@/components/creative/ShinyText';
import { projectsData } from '@/src/data/hackathon-projects';

// Animation configurations to match the original look
const THEME_CONFIGS: Record<string, { speed: number; spread: number }> = {
    "#26F0FF": { speed: 9, spread: 85 }, // Cyan
    "#0DFC96": { speed: 4, spread: 45 }, // Green
    "#310DFC": { speed: 2, spread: 125 }, // Blue
};

const DEFAULT_THEME = { speed: 6, spread: 95 };

export default function WinningProjectsGrid() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24">
            <h2 className="text-4xl font-bold text-center mb-10 text-white/80 tracking-widest">
                WINNING PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData.map((project, index) => {
                    // Map data to display format
                    const themeConfig = THEME_CONFIGS[project.themeColor] || DEFAULT_THEME;
                    const membersString = project.teamMembers.map(m => m.name).join(', ');
                    const link = `/events/scoop-ai-hackathon/projects/${project.id}`;

                    const CardContent = (
                        <BentoCard
                            glowColor={project.themeColor}
                            className="h-40 flex flex-col items-center justify-between p-6 text-center transition-all duration-300 group-hover:scale-[1.02]"
                        >
                            {/* 1. Prize Label (Top) */}
                            <span className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: project.themeColor }}>
                                {project.prize}
                            </span>

                            {/* 2. Project Title (Middle) */}
                            <div className="mb-3">
                                <ShinyText
                                    text={project.title}
                                    disabled={false}
                                    speed={themeConfig.speed}
                                    spread={themeConfig.spread}
                                    color="#575E5E"
                                    shineColor={project.themeColor}
                                    yoyo={true}
                                    className="text-4xl font-bold block"
                                />
                            </div>

                            {/* 3. Members (Bottom) */}
                            <p className="text-xs max-w-[100%] leading-relaxed whitespace-pre-line text-gray-400 font-light">
                                {membersString}
                            </p>
                        </BentoCard>
                    );

                    return (
                        <Link key={index} href={link} className="block group">
                            {CardContent}
                        </Link>
                    );
                })}

                {/* Constant Item: Newsletter */}
                <a href="https://x.com/Beta_ucb/status/2005187566551871929?s=20" target="_blank" rel="noopener noreferrer" className="block group">
                    <BentoCard
                        glowColor="#310DFC"
                        className="h-40 flex flex-col items-center justify-between p-6 text-center transition-all duration-300 group-hover:scale-[1.02]"
                    >
                        {/* No top label */}
                        <div className="mb-auto"></div>

                        <div className="mb-3">
                            <ShinyText
                                text="News Letter"
                                disabled={false}
                                speed={2}
                                spread={125}
                                color="#575E5E"
                                shineColor="#310DFC"
                                yoyo={true}
                                className="text-4xl font-bold block"
                            />
                        </div>

                        <p className="text-xs max-w-[100%] leading-relaxed whitespace-pre-line text-gray-400 mt-1 italic">
                            Click to view full story on X
                        </p>
                        <div className="mt-auto"></div>
                    </BentoCard>
                </a>
            </div>
        </div>
    );
}

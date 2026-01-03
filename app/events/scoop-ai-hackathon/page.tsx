"use client";
import Link from 'next/link';
import EventPageTemplate from '@/components/templates/EventPageTemplate';
import BentoCard from '@/components/creative/BentoCard';
import ShinyText from '@/components/creative/ShinyText';
import Masonry from '@/components/creative/Masonry';
import { useState, useEffect } from 'react';

// 1. Configuration Constants
const THEMES = {
    CYAN: { color: "#26F0FF", speed: 9, spread: 85 },
    GREEN: { color: "#0DFC96", speed: 4, spread: 45 },
    CYAN1: { color: "#26F0FF", speed: 6, spread: 95 },
    GREEN1: { color: "#0DFC96", speed: 8, spread: 75 },
    BLUE: { color: "#310DFC", speed: 2, spread: 125 },
};

const projects = [
    // --- First Prize (Cyan) ---
    {
        prize: "First Prize",
        title: "Slack-A-Vibe",
        members: "Peggy Zhao, Yukt Mitash, Vincent Deng",
        theme: THEMES.CYAN,
        link: "/events/scoop-ai-hackathon/projects/slack-a-vibe"
    },
    // --- Second Prize (Green) ---
    { prize: "Second Prize", title: "StreamSentry", members: "Achyuth Chembu, Arnav Shyam, Satvik Sharma", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/streamsentry" },
    { prize: "Second Prize", title: "Parallel", members: "Yug Amol More, Severin Spagnola,\nSean Aminov, Nayab Hossain", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/parallel" },
    { prize: "Second Prize", title: "Genius Loci", members: "Wenjie Fu", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/genius-loci" },
    // --- Third Prize (Blue) ---
    { prize: "Third Prize", title: "Whaisper", members: "Jinghan Ma, Xiaochen Yang, Jiqi Yang", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/whaisper" },
    { prize: "Third Prize", title: "Tasteract", members: "Advit Deepak , Garni Gharibian, Nitish Reube", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/tasteract" },
    { prize: "Third Prize", title: "OpenMedicine", members: "Ethan Yang, Himalaya Dua, Pranav Patel", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/openmedicine" },
    { prize: "Third Prize", title: "Research Bro", members: "Chuyao Hua, Lumingyuan Tang, Qihong Ruan", theme: THEMES.CYAN, link: "/events/scoop-ai-hackathon/projects/research-bro" },
    // --- Trae Special (Purple) ---
    { prize: "Trae Special", title: "Orienta", members: "Yanning Zhang, Jincheng Ou, Hao Deng", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/orienta" },
    { prize: "Trae Special", title: "Agent Gig", members: "Allen Shen, Paul Lin, Aakash Sriram", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/agent-gig" },
    { prize: "Trae Special", title: "NEO-NEXUS", members: "Qiao Liu", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/neo-nexus" },
    // --- Special: News Letter ---
    {
        prize: "Follow Us On X", // No top label
        title: "News Letter",
        members: "Click to view full story on X",
        theme: THEMES.BLUE,
        isExternal: true,
        link: "https://x.com/Beta_ucb/status/2005187566551871929?s=20"
    }
];

// Generate Dummy Images
const galleryImages = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    img: i % 2 === 0 ? "/images/ScoopAIHackathon/ScoopAIHackathonPoseterLeft.jpg" : "/images/ScoopAIHackathon/ScoopAIHackathonPoseterRight.jpg",
    height: Math.floor(Math.random() * (600 - 300 + 1) + 300), // Random height for masonry effect
    url: "#"
}));

export default function ScoopAIHackathonPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Lightbox Navigation Logic
    const nextImage = () => setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
    const prevImage = () => setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);

    // Keydown listener for Lightbox
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxIndex]);

    return (
        <EventPageTemplate
            title="SCOOP AI HACKATHON"
            date="NOV 22-23 2025"
            location="Santa Clara"
            description="Over 200 developers, researchers, entrepreneurs, and designers from around the world came together and, within just two days, built 70+ cutting-edge projects at the intersection of AI × Web3 × Agentic Systems."

            videoUrl="https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1"
            posterLeftSrc="/images/ScoopAIHackathon/ScoopAIHackathonPoseterLeft.jpg"
            posterRightSrc="/images/ScoopAIHackathon/ScoopAIHackathonPoseterRight.jpg"
            ctaText="Register Now"
        >
            {/* New Section: 3x4 Grid */}
            <div className="mt-32 w-full max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((item, index) => {
                        const CardContent = (
                            <BentoCard
                                key={index}
                                glowColor={item.theme.color}
                                className="h-40 flex flex-col items-center justify-between p-6 text-center transition-all duration-300 group-hover:scale-[1.02]"
                            >
                                {/* 1. Prize Label (Top) */}
                                {item.prize && (
                                    <span className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: item.theme.color }}>
                                        {item.prize}
                                    </span>
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

            {/* Masonry Gallery Section */}
            <div className="relative z-10 w-full max-w-[95%] mx-auto mt-32 mb-20">
                <h2 className="text-4xl font-bold text-center mb-12 text-white/80 tracking-widest">
                    HACKATHON MOMENTS
                </h2>

                <Masonry
                    items={galleryImages}
                    stagger={0.02}
                    duration={0.5}
                    onItemClick={(item, index) => setLightboxIndex(index)}
                />
            </div>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
                    {/* Main Image */}
                    <img
                        src={galleryImages[lightboxIndex].img}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                        onClick={(e) => e.stopPropagation()}
                    />
                    {/* Navigation Controls (Arrows & Close) could go here */}
                </div>
            )}
        </EventPageTemplate>
    );
}

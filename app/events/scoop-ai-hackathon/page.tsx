"use client";
import Link from 'next/link';
import EventPageTemplate from '@/components/templates/EventPageTemplate';
import WinningProjectsGrid from '@/components/templates/WinningProjectsGrid'; // Import standard component
import Masonry from '@/components/creative/Masonry';
import { useState, useEffect, useMemo } from 'react';
import momentsData from '@/src/data/moments.json';

// 1. Configuration Constants
const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_STEP = 6;

export default function ScoopAIHackathonPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    // Filter/Slice data based on visibleCount
    const visibleMoments = useMemo(() => momentsData.slice(0, visibleCount), [visibleCount]);

    // Lightbox Navigation Logic
    const nextImage = () => setLightboxIndex((prev) => (prev! + 1) % momentsData.length);
    const prevImage = () => setLightboxIndex((prev) => (prev! - 1 + momentsData.length) % momentsData.length);

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
            {/* Winning Projects Section - Now using the shared component */}
            <div className="mt-16 w-full">
                <WinningProjectsGrid />
            </div>

            {/* Masonry Gallery Section */}
            <div className="relative z-10 w-full max-w-[97%] mx-auto mt-0 mb-20 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center mb-12 text-white/80 tracking-widest">
                    HACKATHON MOMENTS
                </h2>

                <div className="w-full">
                    <Masonry
                        items={visibleMoments}
                        stagger={0.02}
                        duration={0.5}
                        onItemClick={(item, index) => setLightboxIndex(index)}
                    />
                </div>

                {/* Load More Button */}
                {visibleCount < momentsData.length && (
                    <button
                        onClick={() => setVisibleCount(prev => prev + LOAD_MORE_STEP)}
                        className="mt-12 px-8 py-3 text-sm font-medium text-white tracking-widest bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:scale-105 transition-all duration-300 pointer-events-auto"
                    >
                        LOAD MORE MEMORIES ({Math.min(visibleCount, momentsData.length)} / {momentsData.length})
                    </button>
                )}
            </div>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center" onClick={() => setLightboxIndex(null)}>

                    {/* Close Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                        className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    {/* Prev Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    {/* Main Image */}
                    <img
                        src={momentsData[lightboxIndex].img}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </EventPageTemplate>
    );
}

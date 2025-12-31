"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import LightRays from '@/components/creative/LightRays';
import ShinyText from '@/components/creative/ShinyText';

interface EventPageTemplateProps {
    title?: string;
    date?: string;
    location?: string;
    description?: string;
    ctaText?: string;
    videoUrl?: string;
}

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function EventPageTemplate({
    title = "EVENT TITLE",
    date = "TBD",
    location = "To Be Announced",
    description = "Event details coming soon.",
    ctaText = "Register Now",
    videoUrl
}: EventPageTemplateProps) {
    const videoId = videoUrl ? getYouTubeId(videoUrl) : null;

    return (
        <main className="min-h-screen bg-black relative selection:bg-cyan-500/30 overflow-hidden flex flex-col">

            <Navbar />

            {/* Background Layer: LightRays */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={0.6}
                    pulsating={false}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.02}
                    className="opacity-80"
                />
            </div>

            {/* Content Layer */}
            {/* Added 'flex-grow', 'justify-center', and 'pb-20' to balance the visual center */}
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 w-full max-w-7xl mx-auto pt-32 pb-20">

                {/* Text Group */}
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">{date}</span>
                        <span className="mx-2 text-white/20">|</span>
                        <span className="text-gray-400 text-sm">{location}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter drop-shadow-2xl">
                        <ShinyText
                            text={title}
                            disabled={false}
                            speed={4}
                            delay={1.1}
                            spread={65}
                            color="#707070"
                            shineColor="#00ffee"
                            yoyo={true}
                            className="block"
                        />
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* YouTube Video Section */}
                {videoId && (
                    <div className="mt-12 w-full max-w-2xl mx-auto animate-fade-in-up">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] border border-white/10 bg-gray-900/50">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="Event Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

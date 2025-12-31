"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import LightRays from '@/components/creative/LightRays';

interface EventPageTemplateProps {
    title?: string;
    date?: string;
    location?: string;
    description?: string;
    ctaText?: string;
}

export default function EventPageTemplate({
    title = "EVENT TITLE",
    date = "TBD",
    location = "To Be Announced",
    description = "Event details coming soon.",
    ctaText = "Register Now"
}: EventPageTemplateProps) {
    return (
        <main className="min-h-screen bg-black relative selection:bg-cyan-500/30">
            {/* Background Layer: LightRays */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#06b6d4"  // 修正：Web3 青色
                    raysSpeed={1.5}      // 修正：慢速呼吸感
                    lightSpread={0.8}    // 修正：聚焦效果
                    rayLength={0.6}      // 修正：合理的长度衰减
                    pulsating={false}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}    // 微调：0.1 更加细腻
                    distortion={0.02}
                    className="opacity-80" // 建议：增加一点透明度防止抢眼
                />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content Layer */}
            <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest">{date}</span>
                    <span className="mx-2 text-white/20">|</span>
                    <span className="text-gray-400 text-sm">{location}</span>
                </div>

                <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                    {title}
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </main>
    );
}

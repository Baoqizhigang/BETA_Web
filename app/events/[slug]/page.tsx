import React from 'react';
import Navbar from '@/components/layout/Navbar';
import LightRays from '@/components/creative/LightRays';
import { EVENTS } from '@/lib/events';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function EventPage({ params }: Props) {
    const { slug } = await params;
    const event = EVENTS.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black relative selection:bg-cyan-500/30">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LightRays
                    raysColor="#06b6d4"
                    raysSpeed={0.2}
                    rayLength={0.6}
                    lightSpread={0.6}
                    intensity={1.0}
                />
            </div>

            <Navbar />

            <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest">{event.date}</span>
                    <span className="mx-2 text-white/20">|</span>
                    <span className="text-gray-400 text-sm">{event.location}</span>
                </div>

                <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                    {event.title}
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    {event.desc}
                </p>
            </div>
        </main>
    );
}

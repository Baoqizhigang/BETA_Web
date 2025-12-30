"use client";
import SpotlightCard from '../creative/SpotlightCard';

const events = [
    {
        title: "AI & Society Summit",
        date: "March 15, 2026",
        location: "Sutardja Dai Hall",
        description: "Exploring the intersection of artificial intelligence and social impact."
    },
    {
        title: "Blockchain zk-Rollup Workshop",
        date: "April 2, 2026",
        location: "Moffitt Library",
        description: "Hands-on workshop with industry experts on zero-knowledge proofs."
    },
    {
        title: "Quantum Computing Futures",
        date: "April 20, 2026",
        location: "Physics Building",
        description: "A deep dive into the next decade of quantum advancements."
    },
    {
        title: "BETA Hackathon Spring '26",
        date: "May 10-12, 2026",
        location: "Pauley Ballroom",
        description: "48-hour builder marathon for Web3 and AI."
    }
];

export default function EventsScroll() {
    return (
        <section className="py-20 bg-[#030303] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <h2 className="text-3xl font-semibold text-white tracking-tight">Upcoming Events</h2>
            </div>

            <div className="flex overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 gap-6 no-scrollbar snap-x snap-mandatory">
                {events.map((event, index) => (
                    <div key={index} className="flex-none w-[300px] md:w-[400px] snap-center">
                        <SpotlightCard className="h-full p-8 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <div className="text-sm font-mono text-cyan-400 mb-2">{event.date}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                            </div>
                            <div className="mt-6 flex items-center text-sm text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                {event.location}
                            </div>
                        </SpotlightCard>
                    </div>
                ))}
            </div>
        </section>
    );
}

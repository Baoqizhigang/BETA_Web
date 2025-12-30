"use client";

const partners = [
    "Google Cloud",
    "AWS",
    "Linux Foundation",
    "Perplexity",
    "Anthropic",
    "OpenAI",
    "BETA University",
    "Berkeley",
    "Stanford",
    "MIT"
];

export default function Partners() {
    return (
        <section className="py-20 border-t border-white/5 bg-[#030303]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Trusted By Industry Leaders</h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="text-white/40 hover:text-white transition-colors duration-300 font-semibold text-lg cursor-default select-none group"
                        >
                            <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

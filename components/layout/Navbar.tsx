"use client";

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="px-12 py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 text-2xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors">
                        BETA
                    </Link>

                    {/* Center Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        <Link
                            href="/"
                            className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            HOME
                        </Link>
                        <Link
                            href="/events"
                            className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            EVENTS
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/join"
                            className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            JOIN
                        </Link>
                    </div>

                    {/* Right Side - Sign In */}
                    <div className="flex items-center">
                        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

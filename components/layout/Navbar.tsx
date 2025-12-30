"use client";

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-semibold text-white tracking-tight">
                            BETA
                        </Link>
                    </div>

                    {/* Center Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            HOME
                        </Link>
                        <Link
                            href="/events"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            EVENTS
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/join"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            JOIN
                        </Link>
                    </div>

                    {/* Right Side - Sign In */}
                    <div className="flex items-center">
                        <button className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

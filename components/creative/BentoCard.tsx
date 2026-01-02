"use client";
import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export default function BentoCard({
    children,
    className = "",
    glowColor = "#26F0FF" // Default to Cyan
}: BentoCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for Glow
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Tilt Values
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // Smooth springs for tilt
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        // Calculate mouse relative to card for Glow
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        mouseX.set(relativeX);
        mouseY.set(relativeY);

        // Calculate tilt
        const width = rect.width;
        const height = rect.height;
        const centerX = rect.left + width / 2;
        const centerY = rect.top + height / 2;

        const mouseXRel = clientX - centerX;
        const mouseYRel = clientY - centerY;

        // Rotation intensity
        const rotateXVal = (mouseYRel / (height / 2)) * -5; // Inverted for natural tilt
        const rotateYVal = (mouseXRel / (width / 2)) * 5;

        rotateX.set(rotateXVal);
        rotateY.set(rotateYVal);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        rotateX.set(5);
        rotateY.set(-5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    // Helper to convert hex to rgba for gradient transparency
    const hexToRgba = (hex: string, alpha: number) => {
        let r = 0, g = 0, b = 0;
        // Handle shorthand #ABC
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <motion.div
            ref={ref}
            // Updated styles: Transparent bg, thin border, backdrop blur
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-[2px] transition-colors duration-300 group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d"
            }}
        >
            {/* Glow Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-40"
                style={{
                    // Refined gradient: Smaller radius and transparency for subtle edge feel
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, ${hexToRgba(glowColor, 0.45)}, transparent 70%)`
                    )
                }}
            />

            {/* Content Content - preserve 3d */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
}

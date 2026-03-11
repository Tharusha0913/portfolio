"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-card rounded-2xl p-6 relative overflow-hidden group ${className}`}
        >
            {/* Subtle highlight gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

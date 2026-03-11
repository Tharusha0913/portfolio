"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
    const variants = {
        primary: "bg-white text-black hover:bg-brand-brown-light hover:text-white",
        secondary: "bg-brand-brown text-white hover:bg-brand-brown-light",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 cinematic-shadow ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
}

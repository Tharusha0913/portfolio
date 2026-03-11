"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const menuCategories = [
    {
        id: "web-dev",
        label: "Web Development",
        title: "Modern Web Applications",
        description: "High-performance websites built with Next.js and React. Scalable, secure, and SEO-optimized.",
        tags: ["Next.js", "E-commerce", "SaaS Platforms", "Landing Pages"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop"
    },
    {
        id: "mobile-apps",
        label: "Mobile Development",
        title: "Cross-Platform Apps",
        description: "Native-like mobile experiences using React Native. iOS and Android from a single codebase.",
        tags: ["React Native", "iOS", "Android", "Fitness Apps"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "ui-ux",
        label: "UI/UX Design",
        title: "User-Centric Design",
        description: "Beautiful, intuitive interfaces that drive engagement and conversion. Design systems that scale.",
        tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "consulting",
        label: "Tech Consulting",
        title: "Technical Strategy",
        description: "Expert advice on architecture, cloud infrastructure, and tech stack selection for startups.",
        tags: ["Cloud Arch", "Code Audits", "Mentorship", "CTO-as-a-Service"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function MegaMenu() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-16 left-0 right-0 mx-auto w-full max-w-5xl bg-[#0d0b0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-8 flex gap-12"
        >
            {/* Column 1: Categories List */}
            <div className="w-1/4 pt-2 border-r border-white/5 pr-8">
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-6">Services</h3>
                <ul className="space-y-4">
                    {menuCategories.map((cat) => (
                        <li key={cat.id}>
                            <button
                                onMouseEnter={() => setActiveCategory(cat)}
                                className={`text-base text-left w-full transition-colors ${activeCategory.id === cat.id ? "text-white font-medium" : "text-white/50 hover:text-white/80"}`}
                            >
                                {cat.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 2: Details */}
            <div className="w-1/3 pt-2 flex flex-col justify-between">
                <div>
                    <h3 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-6">Explore</h3>
                    <Link href="#" className="inline-flex items-center text-xl text-white font-medium mb-4 hover:text-brand-brown-light transition-colors group">
                        {activeCategory.title}
                        <ArrowRight size={20} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                    <p className="text-white/60 leading-relaxed mb-8 text-sm">
                        {activeCategory.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {activeCategory.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs hover:bg-white/10 transition-colors cursor-default border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Column 3: Image */}
            <div className="w-5/12 ml-auto h-[350px] rounded-lg overflow-hidden relative">
                <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
        </motion.div>
    );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

export default function WorkPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = selectedTag
        ? projects.filter(p => p.tags.includes(selectedTag))
        : projects;

    useGSAP(() => {
        // Entrance animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".work-header-content > *", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        })
            .from(".filter-bar", {
                y: 20,
                opacity: 0,
                duration: 0.6,
            }, "-=0.4")
            .from(".project-card-full", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                clearProps: "all"
            }, "-=0.2");

    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-background selection:bg-brand-brown-light/30 text-white">
            <Navbar />

            {/* Header */}
            <section ref={headerRef} className="pt-40 pb-20 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="work-header-content max-w-4xl">
                        <span className="text-brand-brown-light font-medium mb-4 block">• Our Work</span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-[0.9]">
                            Digital designs that <br />
                            <span className="italic text-white/60">tell your story.</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                            A curated selection of my latest projects, exploring the intersection of design, technology, and user experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-12 bg-white/5 sticky top-[72px] z-30 backdrop-blur-xl border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="filter-bar flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${!selectedTag ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                        >
                            All Projects
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 ${selectedTag === tag ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    key={project.id}
                                    className="project-card-full group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-8">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                                <ArrowUpRight size={32} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-3xl font-medium mb-2 group-hover:text-brand-brown-light transition-colors">
                                                    {project.name}
                                                </h3>
                                                <p className="text-white/40">{project.role} — {project.date}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {project.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-white/60 line-clamp-2 text-lg">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-2xl text-white/40">No projects found for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

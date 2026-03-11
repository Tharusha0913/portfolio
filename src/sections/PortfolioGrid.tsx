"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioGrid() {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const revealRef = useRef<HTMLDivElement>(null);
    const cursorLabelRef = useRef<HTMLDivElement>(null);

    // Only show first 5 projects on the home page
    const featuredProjects = projects.slice(0, 5);

    useGSAP(() => {
        // Mouse move handler for the reveal image
        const xTo = gsap.quickTo(revealRef.current, "left", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(revealRef.current, "top", { duration: 0.4, ease: "power3" });

        const xLabelTo = gsap.quickTo(cursorLabelRef.current, "left", { duration: 0.2, ease: "power3" });
        const yLabelTo = gsap.quickTo(cursorLabelRef.current, "top", { duration: 0.2, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xLabelTo(e.clientX);
            yLabelTo(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, { scope: containerRef });

    useEffect(() => {
        // Animate visibility of the reveal image
        if (activeProject !== null) {
            gsap.to(revealRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(cursorLabelRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
            gsap.to(revealRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
            gsap.to(cursorLabelRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [activeProject]);

    return (
        <section id="work" ref={containerRef} className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <div className="max-w-2xl">
                        <span className="text-brand-brown-light font-medium mb-4 block">• Portfolio</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                            Selected <br />
                            <span className="italic text-white/60">Major Projects</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-white/60 text-lg md:mt-10">
                        <p className="mb-6">
                            A collection of digital products and web experiences I've built, focusing on performance, scalability, and user-centric design.
                        </p>
                        <Link href="/work" className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                            View All Work <ArrowUpRight size={16} className="ml-1" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col border-t border-white/10">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col md:flex-row items-center justify-between py-12 border-b border-white/10 transition-colors hover:bg-white/5 px-4 md:px-8 cursor-pointer"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="flex flex-col md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-medium text-white mb-1 group-hover:text-brand-brown-light transition-colors">
                                    {project.name}
                                </h3>
                                <span className="text-white/40 text-sm">{project.date}</span>
                            </div>

                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <p className="text-white/70 text-lg mb-2">{project.role}</p>
                                <p className="text-white/40 text-sm line-clamp-2 group-hover:text-white/60 transition-colors">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex gap-3 md:w-1/3 justify-end">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-4 py-1 rounded-full border border-white/20 text-white/60 text-sm group-hover:border-white/50 group-hover:text-white transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Reveal Image */}
            <div
                ref={revealRef}
                className="fixed top-0 left-0 w-80 h-60 rounded-xl overflow-hidden pointer-events-none opacity-0 scale-0 z-50 -translate-x-1/2 -translate-y-1/2 shadow-2xl"
                style={{ willChange: "transform, left, top" }}
            >
                {featuredProjects.map((project) => (
                    <img
                        key={project.id}
                        src={project.image}
                        alt={project.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* Cursor Label "View" */}
            <div
                ref={cursorLabelRef}
                className="fixed top-0 left-0 w-20 h-20 bg-brand-brown rounded-full flex items-center justify-center text-white text-sm font-medium pointer-events-none opacity-0 scale-0 z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            >
                View
            </div>
        </section>
    );
}

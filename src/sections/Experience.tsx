"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
    {
        id: 1,
        role: "Senior Full Stack Dev",
        company: "DB HUB",
        period: "2025 - 2026",
        description: "Leading the frontend architecture and migration to Next.js 14. Improved site performance by 40%."
    },
    {
        id: 2,
        role: "Junior Developer",
        company: "DB Hub",
        period: "2024",
        description: "Designed and implemented design systems used across 5+ enterprise products."
    },
    {
        id: 3,
        role: "Intern",
        company: "Arthur C Clarke Institute for Modern Technologies (ACCIMT)",
        period: "2023 - 2024",
        description: "Engineered high-performance web interfaces and interactive data visualizations for institutional research projects and monitoring systems using Laravel."
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate the vertical line drawing down
        gsap.fromTo(lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );

        // Animate Experience Items
        const items = gsap.utils.toArray(".experience-item");
        items.forEach((item: any, i) => {
            gsap.from(item, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        });

    }, { scope: containerRef });

    return (
        <section id="experience" ref={containerRef} className="py-32 bg-background-secondary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col mb-20 items-center text-center">
                    <span className="text-brand-brown-light font-medium mb-4 block tracking-wider uppercase text-sm">• Career Path</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Professional Experience
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl">
                        A timeline of my professional journey and the companies I've had the privilege to work with.
                    </p>
                </div>

                <div className="timeline-container relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2 ml-6 md:ml-0">
                        <div ref={lineRef} className="w-full bg-brand-brown-light shadow-[0_0_15px_rgba(139,94,60,0.5)]" />
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`experience-item flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-background border-2 border-brand-brown rounded-full transform md:-translate-x-1/2 translate-y-2 z-10 ml-[22px] md:ml-[5px] shadow-[0_0_0_4px_rgba(10,10,10,1)]"></div>

                                {/* Content Card */}
                                <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-brown/30 transition-colors duration-300 group">
                                        <div className={`flex items-center gap-2 text-brand-brown-light mb-2 text-sm font-medium ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-brown transition-colors">{exp.role}</h3>
                                        <h4 className="text-white/60 text-lg mb-4 flex items-center gap-2 md:inline-flex">
                                            <Briefcase size={16} className="inline md:hidden" />
                                            {exp.company}
                                        </h4>
                                        <p className="text-white/40 leading-relaxed md:text-sm lg:text-base">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternate side */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

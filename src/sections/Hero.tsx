"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Button from "@/components/Button";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("@/components/Hero3DScene"), { ssr: false });

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Text Reveal
        tl.from(headlineRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            delay: 1, // Wait for 3D scene to load a bit
            skewY: 2,
        })
            .from(".hero-text", {
                y: 20,
                opacity: 0,
                duration: 1,
            }, "-=1")
            .from(".hero-buttons", {
                y: 20,
                opacity: 0,
                duration: 1,
            }, "-=0.8");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* 3D Background Scene */}
            <div className="absolute inset-0 z-0">
                <Hero3DScene /> {/* No SSR if possible, but Next.js handles it ok mostly. Ideally dynamic import for Three.js */}
            </div>

            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-20 text-center pointer-events-none">
                <div className="max-w-5xl mx-auto pointer-events-auto">
                    <h1 ref={headlineRef} className="text-6xl md:text-9xl font-serif font-medium tracking-tight mb-8 text-white leading-[0.9] mix-blend-exclusion">
                        Scalable backend systems. <br />
                        <span className="italic text-blue-200">Modern frontend experiences.</span>
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto mix-blend-difference">
                        Full-Stack Developer building robust web platforms using Laravel. Passionate about performance, security, and writing production-ready code.
                    </p>
                    <div className="hero-buttons flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/work" className="w-full md:w-auto">
                            <Button variant="primary" className="w-full md:w-auto px-12 py-4 text-lg bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20">
                                View Projects
                            </Button>
                        </Link>
                        <Button variant="outline" className="w-full md:w-auto px-12 py-4 text-lg border-white/30 hover:bg-white/10 text-white backdrop-blur-sm">
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { Users, Briefcase, Zap, BarChart3, Globe } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Staggered reveal for tools
        gsap.from(".feature-reveal", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".tools-container",
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section id="solutions" ref={containerRef} className="py-24 bg-background-secondary overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Tools Section - Bento Grid */}
                <div className="tools-container mb-32">
                    <div className="feature-reveal max-w-2xl mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            My Technical Expertise
                        </h2>
                        <p className="text-white/50 text-lg">
                            A comprehensive toolkit for building modern, scalable web applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                        {/* Frontend */}
                        <div className="feature-reveal md:col-span-8 row-span-1">
                            <GlassCard className="h-full relative overflow-hidden group">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="\uploads\c68bd6283adc887841adb4ec27979546.webp"
                                        alt="Frontend Development"
                                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                    <div className="w-12 h-12 rounded-xl bg-brand-brown/20 flex items-center justify-center text-brand-brown-light mb-4 backdrop-blur-md">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Laravel Development</h3>
                                    <p className="text-white/70 max-w-md">
                                        Building high-performance applications with <b>Laravel</b>, Bootstrap, and Alpine.js. Specialized in crafting scalable <b>web applications and interactive user interfaces.</b>
                                    </p>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Backend */}
                        <div className="feature-reveal md:col-span-4 row-span-1">
                            <GlassCard className="h-full flex flex-col justify-center relative overflow-hidden group">
                                <div className="relative z-10 p-2 text-left">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">E-commerce & Backend</h3>
                                    <p className="text-white/50 text-sm">Engineering robust services using <b>Laravel</b>. Expert in <b>Shopify integrations</b>, secure webhooks, and automated order fulfillment.</p>
                                </div>
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-brown/20 rounded-full blur-[50px] group-hover:bg-brand-brown/30 transition-colors duration-500" />
                            </GlassCard>
                        </div>

                        {/* DevOps / Enterprise */}
                        <div className="feature-reveal md:col-span-4 row-span-1">
                            <GlassCard className="h-full flex flex-col justify-center relative overflow-hidden group">
                                <div className="relative z-10 p-2 text-left">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Enterprise Systems</h3>
                                    <p className="text-white/50 text-sm">Developing specialized <b>POS systems</b> for retail and hospitality. Features include real-time inventory management and financial analytics.</p>
                                </div>
                                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors duration-500" />
                            </GlassCard>
                        </div>

                        {/* Architecture */}
                        <div className="feature-reveal md:col-span-8 row-span-1">
                            <GlassCard className="h-full relative overflow-hidden group">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/uploads/Document.webp"
                                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                    <div className="w-12 h-12 rounded-xl bg-brand-brown/20 flex items-center justify-center text-brand-brown-light mb-4 backdrop-blur-md">
                                        <BarChart3 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Scalable Architecture</h3>
                                    <p className="text-white/70 max-w-md">Designing high-availability architectures for <b>Order Management Systems</b> and research platforms using PostgreSQL, MySQL, and CodeIgniter.</p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

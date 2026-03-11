"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Cpu, ShieldCheck, Rocket } from "lucide-react";
import GlassCard from "@/components/GlassCard";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const workflowSteps = [
    {
        icon: <Layers size={24} />,
        title: "Strategic Planning",
        description: "Analyzing business requirements to design technical roadmaps that align with long-term goals."
    },
    {
        icon: <Cpu size={24} />,
        title: "Scalable Architecture",
        description: "Building robust foundations using modern design patterns for high-availability systems."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Quality Execution",
        description: "Writing clean, maintainable code with a focus on security, performance, and best practices."
    },
    {
        icon: <Rocket size={24} />,
        title: "Continuous Growth",
        description: "Streamlined deployment workflows and proactive monitoring to ensure zero-downtime scaling."
    }
];

export default function Workflow() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        tl.from(".workflow-reveal", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(".workflow-card", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-background">
            {/* Background decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-brand-brown/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="workflow-reveal text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        My Development <span className="text-brand-brown-light italic">Philosophy</span>
                    </h2>
                    <p className="workflow-reveal text-lg text-white/50 max-w-2xl mx-auto">
                        I don't just write code; I build digital assets designed for performance,
                        scalability, and long-term business success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workflowSteps.map((step, index) => (
                        <div key={index} className="workflow-card">
                            <GlassCard className="h-full group hover:border-brand-brown/30 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-brown-light mb-6 group-hover:bg-brand-brown/10 group-hover:scale-110 transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


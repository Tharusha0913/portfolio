"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.from(contentRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, { scope: containerRef });

    return (

        <section ref={containerRef} id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-card p-12 md:p-24 text-center border-white/10 bg-gradient-to-br from-brand-brown/10 to-transparent">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                    >
                        <source src="/uploads/Whisk_egz3ezy0ktniltnx0cmknwytcznyqtl2emzy0yn.mp4" type="video/mp4" />
                    </video>
                    <div ref={contentRef}>
                        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                            Let's build something <br />
                            <span className="italic text-white/60">extraordinary.</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
                            Whether you have a fully-formed idea or just a spark, I'm here to help you bring it to life with precision and craft.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Button variant="outline" className="px-12 py-4">Send an Email</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
        </section>
    );
}

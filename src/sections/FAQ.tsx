"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
    {
        q: "Are you available for freelance projects?",
        a: "Yes, I am currently accepting new freelance projects. I specialize in building high-performance web applications and unique digital experiences."
    },
    {
        q: "What is your tech stack?",
        a: "I primarily work with Next.js, React, TypeScript, and Tailwind CSS for frontend. For backend, I use Node.js, PostgreSQL, and various cloud services like AWS."
    },
    {
        q: "Do you handle design as well?",
        a: "Absolutely. I have a strong background in UI/UX design and can take your project from initial concept and wireframes to the final polished product."
    },
    {
        q: "What is your typical project timeline?",
        a: "Timelines vary depending on complexity. A standard brochure site might take 2-4 weeks, while a complex web application could take 2-3 months."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".faq-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section id="faq" ref={containerRef} className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="faq-reveal text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
                        Common Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="faq-reveal glass-card rounded-2xl border-white/5 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className="text-lg font-medium text-white">{faq.q}</span>
                                    <div className="text-brand-brown-light">
                                        {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-0 text-white/50 leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

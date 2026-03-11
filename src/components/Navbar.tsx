"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu, { menuCategories } from "./MegaMenu";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projects", href: "/work" },
        { name: "Experience", href: "#experience" },
        { name: "Solutions", href: "#solutions", hasMenu: true },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none flex justify-between items-center container mx-auto gap-4">

            {/* Left Pill - Logo */}
            <div className="pointer-events-auto bg-[#3E2B26] text-white px-5 py-5 rounded-full flex items-center gap-3 shadow-lg border border-white/5 transition-transform hover:scale-105 duration-300">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-6 h-6 border-2 border-white/80 rounded-sm rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-sm" />
                    </div>
                    <span className="font-bold tracking-wide text-xs md:text-sm uppercase">PORTFOLIO WEBSITES</span>
                </Link>
            </div>

            {/* Center Pill - Desktop Navigation */}
            <div
                className="hidden md:flex pointer-events-auto bg-[#231F1D]/90 backdrop-blur-md text-white/70 px-8 py-5 rounded-full items-center gap-8 shadow-lg border border-white/5 relative"
                onMouseLeave={() => setIsMenuOpen(false)}
            >
                {navLinks.map((link) => (
                    <div key={link.name} className="relative h-full flex items-center">
                        <Link
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group py-2 block ${link.hasMenu && isMenuOpen ? "text-white" : "hover:text-white"}`}
                            onMouseEnter={() => link.hasMenu && setIsMenuOpen(true)}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                ))}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <div
                            className="absolute top-full left-0 right-0 pt-6 w-[900px] -translate-x-[20%]"
                            onMouseEnter={() => setIsMenuOpen(true)}
                            onMouseLeave={() => setIsMenuOpen(false)}
                        >
                            <MegaMenu />
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Right Pill - CTA & Mobile Menu */}
            <div className="pointer-events-auto flex items-center gap-2">
                <Link
                    href="#contact"
                    className="hidden md:block bg-[#333333] hover:bg-[#444] text-white px-6 py-5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide transition-all duration-300 shadow-lg border border-white/5 hover:scale-105"
                >
                    GET STARTED
                </Link>

                {/* Mobile Menu Button (inside a small pill) */}
                <button
                    className="md:hidden bg-[#231F1D] text-white p-3 rounded-full shadow-lg border border-white/5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="pointer-events-auto absolute top-full left-0 right-0 mt-4 mx-4 bg-[#1a1a1a] rounded-2xl border border-white/10 p-6 md:hidden shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.hasMenu ? (
                                        <>
                                            <button
                                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                                className="flex items-center justify-between w-full text-lg font-medium text-white/70 hover:text-white"
                                            >
                                                {link.name}
                                                {mobileMenuOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </button>

                                            {/* Mobile Mega Menu Content */}
                                            <AnimatePresence>
                                                {mobileMenuOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 border-l border-white/10 mt-2 space-y-3"
                                                    >
                                                        {menuCategories.map((cat) => (
                                                            <div key={cat.id} className="py-1">
                                                                <h4 className="text-white text-sm font-medium mb-1">{cat.label}</h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {cat.tags.slice(0, 3).map(tag => (
                                                                        <span key={tag} className="text-xs text-white/40">{tag}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-lg font-medium text-white/70 hover:text-white block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="#contact"
                                className="w-full text-center px-6 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wide mt-4 block"
                                onClick={() => setIsOpen(false)}
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

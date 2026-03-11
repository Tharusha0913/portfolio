"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const onHover = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
            gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: "#fff", mixBlendMode: "difference", duration: 0.3 });
        };

        const onLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.3 });
        };

        window.addEventListener("mousemove", moveCursor);

        const hoverables = document.querySelectorAll("a, button, .cursor-hover");
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", onHover);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", onHover);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, { scope: cursorRef }); // Scope probably not needed for window events but keeping consistency

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            <div
                ref={cursorRef}
                className="absolute w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="absolute w-10 h-10 border border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}

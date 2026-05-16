"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        ".gsap-hero",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
      );

      // Editor slide up
      gsap.fromTo(
        ".gsap-editor",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Sidebar slide right
      gsap.fromTo(
        ".gsap-sidebar",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="contents">{children}</div>;
}

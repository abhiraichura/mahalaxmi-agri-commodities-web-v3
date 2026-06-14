"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Sync Lenis with GSAP ScrollTrigger
    const updateScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", updateScrollTrigger);

    return () => {
      window.removeEventListener("resize", updateScrollTrigger);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        syncTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

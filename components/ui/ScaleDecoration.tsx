"use client";

import { useEffect, useRef } from "react";

export default function ScaleDecoration() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!trackRef.current) return;
      const offset = window.scrollY * 0.12;
      trackRef.current.style.transform = `translateY(${offset}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scale-decoration" aria-hidden="true">
      <div className="scale-track" ref={trackRef}>
        {Array.from({ length: 120 }).map((_, i) => (
          <img key={i} src="/scale-dark.svg" alt="" className="scale-segment" />
        ))}
      </div>
    </div>
  );
}

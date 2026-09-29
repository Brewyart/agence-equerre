"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  isTitle = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  isTitle?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isTitle ? "reveal-title" : "reveal"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

"use client";

import { useMemo } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 1 + (i % 3),
        delay: `${(i % 10) * 0.4}s`,
        duration: `${8 + (i % 7)}s`,
        opacity: 0.15 + (i % 5) * 0.08,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-white"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `float ${d.duration} ease-in-out infinite`,
            animationDelay: d.delay,
            boxShadow: "0 0 8px rgba(0,212,255,0.5)",
          }}
        />
      ))}
    </div>
  );
}

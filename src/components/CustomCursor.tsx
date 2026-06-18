"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: Event) => {
      const target = e.target as Element;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setHovered(true);
      }
    };

    const onLeave = () => setHovered(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      // Dot snaps immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px)`;
      }

      // Ring lags behind for smooth effect
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 19}px, ${ringPos.current.y - 19}px)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          width: hovered ? 16 : 10,
          height: hovered ? 16 : 10,
          background: hovered ? "var(--primary)" : "var(--primary)",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9997,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
          mixBlendMode: "multiply",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          width: hovered ? 52 : 38,
          height: hovered ? 52 : 38,
          borderRadius: "50%",
          border: hovered
            ? "2px solid rgba(30, 122, 74, 0.7)"
            : "1.5px solid rgba(30, 122, 74, 0.35)",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9996,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, border-width 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}

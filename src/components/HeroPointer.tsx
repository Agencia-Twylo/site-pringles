"use client";

import { useEffect } from "react";

/** Passa a posição do rato (-1 a 1) para as variáveis CSS --px/--py da hero, para o efeito de profundidade. */
export default function HeroPointer({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (!matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let raf = 0;
    const set = (x: number, y: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onLeave = () => set(0, 0);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [targetId]);

  return null;
}

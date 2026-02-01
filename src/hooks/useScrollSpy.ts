"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset = 100): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + offset;
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}

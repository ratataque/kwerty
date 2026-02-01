"use client";

import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { mainNav } from "@/lib/navigation";

interface UseKeyboardNavigationOptions {
  onOpenCommandPalette?: () => void;
  onToggleHelp?: () => void;
  sections?: string[];
}

function isInputFocused(): boolean {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    (el as HTMLElement).isContentEditable
  );
}

export function useKeyboardNavigation({
  onOpenCommandPalette,
  onToggleHelp,
  sections = [],
}: UseKeyboardNavigationOptions = {}) {
  const router = useRouter();
  const keyBuffer = useRef("");
  const bufferTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (isInputFocused()) return;

      const key = e.key;

      // Escape closes overlays (handled by parent)
      if (key === "Escape") return;

      // / opens command palette
      if (key === "/") {
        e.preventDefault();
        onOpenCommandPalette?.();
        return;
      }

      // ? toggles help
      if (key === "?") {
        e.preventDefault();
        onToggleHelp?.();
        return;
      }

      // Number keys jump to nav items
      if (/^[1-9]$/.test(key)) {
        const idx = parseInt(key) - 1;
        if (idx < mainNav.length) {
          e.preventDefault();
          router.push(mainNav[idx].href);
        }
        return;
      }

      // j/k scroll by section
      if (key === "j" || key === "k") {
        e.preventDefault();
        const sectionEls = sections.length
          ? sections
              .map((id) => document.getElementById(id))
              .filter(Boolean)
          : Array.from(document.querySelectorAll("[data-section]"));

        if (sectionEls.length === 0) {
          window.scrollBy({ top: key === "j" ? 300 : -300, behavior: "smooth" });
          return;
        }

        const scrollY = window.scrollY + 100;
        let currentIdx = -1;
        for (let i = 0; i < sectionEls.length; i++) {
          if ((sectionEls[i] as HTMLElement).offsetTop <= scrollY) {
            currentIdx = i;
          }
        }

        const nextIdx =
          key === "j"
            ? Math.min(currentIdx + 1, sectionEls.length - 1)
            : Math.max(currentIdx - 1, 0);

        (sectionEls[nextIdx] as HTMLElement).scrollIntoView({
          behavior: "smooth",
        });
        return;
      }

      // h/l - prev/next in nav
      if (key === "h" || key === "l") {
        e.preventDefault();
        const currentPath = window.location.pathname;
        const idx = mainNav.findIndex((item) => item.href === currentPath);
        if (idx === -1) return;
        const nextIdx =
          key === "l"
            ? Math.min(idx + 1, mainNav.length - 1)
            : Math.max(idx - 1, 0);
        router.push(mainNav[nextIdx].href);
        return;
      }

      // G = go to bottom
      if (key === "G") {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        return;
      }

      // gg = go to top (key sequence with buffer)
      if (key === "g") {
        if (bufferTimer.current) clearTimeout(bufferTimer.current);

        if (keyBuffer.current === "g") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          keyBuffer.current = "";
          return;
        }

        keyBuffer.current = "g";
        bufferTimer.current = setTimeout(() => {
          keyBuffer.current = "";
        }, 300);
        return;
      }

      keyBuffer.current = "";
    },
    [router, onOpenCommandPalette, onToggleHelp, sections],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);
}

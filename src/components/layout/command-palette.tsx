"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { CommandPaletteItem } from "@/types/navigation";

interface CommandPaletteProps {
  isOpen: boolean;
  query: string;
  results: CommandPaletteItem[];
  selectedIndex: number;
  onQueryChange: (q: string) => void;
  onClose: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onSelect: () => void;
}

export function CommandPalette({
  isOpen,
  query,
  results,
  selectedIndex,
  onQueryChange,
  onClose,
  onMoveUp,
  onMoveDown,
  onSelect,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowUp" || (e.ctrlKey && e.key === "k")) {
      e.preventDefault();
      onMoveUp();
    } else if (e.key === "ArrowDown" || (e.ctrlKey && e.key === "j")) {
      e.preventDefault();
      onMoveDown();
    } else if (e.key === "Enter") {
      e.preventDefault();
      onSelect();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div
        className="absolute inset-0 bg-ctp-crust/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg mx-4 rounded-lg border border-ctp-surface1 bg-ctp-mantle shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ctp-surface1">
          <span className="text-ctp-green">/</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="flex-1 bg-transparent text-sm text-ctp-text placeholder-ctp-overlay0 outline-none"
          />
          <kbd className="px-1.5 py-0.5 text-xs bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-overlay0">
            esc
          </kbd>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-ctp-overlay0">
              No results found
            </p>
          ) : (
            results.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  router.push(item.href);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                  i === selectedIndex
                    ? "bg-ctp-surface0 text-ctp-text"
                    : "text-ctp-subtext0 hover:bg-ctp-surface0/50"
                }`}
              >
                {item.category && (
                  <span className="text-xs text-ctp-overlay0 w-16 shrink-0">
                    {item.category}
                  </span>
                )}
                <span>{item.title}</span>
              </button>
            ))
          )}
        </div>
        <div className="px-4 py-2 border-t border-ctp-surface1 flex gap-4 text-xs text-ctp-overlay0">
          <span>
            <kbd className="px-1 bg-ctp-surface0 rounded">↑↓</kbd> navigate
          </span>
          <span>
            <kbd className="px-1 bg-ctp-surface0 rounded">↵</kbd> open
          </span>
          <span>
            <kbd className="px-1 bg-ctp-surface0 rounded">esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}

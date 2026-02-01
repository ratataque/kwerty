"use client";

import { useState, useMemo, useCallback } from "react";
import { fuzzyMatch } from "@/lib/navigation";
import type { CommandPaletteItem } from "@/types/navigation";

interface UseCommandPaletteReturn {
  isOpen: boolean;
  query: string;
  results: CommandPaletteItem[];
  selectedIndex: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setQuery: (q: string) => void;
  moveUp: () => void;
  moveDown: () => void;
  getSelected: () => CommandPaletteItem | undefined;
}

export function useCommandPalette(
  items: CommandPaletteItem[],
): UseCommandPaletteReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => {
    if (!query.trim()) return items;
    return items.filter(
      (item) =>
        fuzzyMatch(query, item.title) ||
        (item.category && fuzzyMatch(query, item.category)) ||
        (item.description && fuzzyMatch(query, item.description)),
    );
  }, [items, query]);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, close, open]);

  const moveUp = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
  }, [results.length]);

  const moveDown = useCallback(() => {
    setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
  }, [results.length]);

  const getSelected = useCallback(
    () => results[selectedIndex],
    [results, selectedIndex],
  );

  return {
    isOpen,
    query,
    results,
    selectedIndex,
    open,
    close,
    toggle,
    setQuery: (q: string) => {
      setQuery(q);
      setSelectedIndex(0);
    },
    moveUp,
    moveDown,
    getSelected,
  };
}

"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { CommandPalette } from "./command-palette";
import { ShortcutOverlay } from "./shortcut-overlay";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import type { CommandPaletteItem } from "@/types/navigation";

interface SiteShellProps {
  children: React.ReactNode;
  items: CommandPaletteItem[];
}

export function SiteShell({ children, items }: SiteShellProps) {
  const [helpOpen, setHelpOpen] = useState(false);
  const router = useRouter();
  const palette = useCommandPalette(items);

  const toggleHelp = useCallback(() => {
    setHelpOpen((prev) => !prev);
  }, []);

  useKeyboardNavigation({
    onOpenCommandPalette: palette.open,
    onToggleHelp: toggleHelp,
  });

  function handleSelectPalette() {
    const item = palette.getSelected();
    if (item) {
      router.push(item.href);
      palette.close();
    }
  }

  return (
    <>
      <Header onToggleHelp={toggleHelp} />
      <main className="pt-10 min-h-screen">{children}</main>
      <Footer />
      <CommandPalette
        isOpen={palette.isOpen}
        query={palette.query}
        results={palette.results}
        selectedIndex={palette.selectedIndex}
        onQueryChange={palette.setQuery}
        onClose={palette.close}
        onMoveUp={palette.moveUp}
        onMoveDown={palette.moveDown}
        onSelect={handleSelectPalette}
      />
      <ShortcutOverlay isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}

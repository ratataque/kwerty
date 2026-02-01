import type { NavItem, CommandPaletteItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  { label: "home", href: "/", shortcut: "1" },
  { label: "configs", href: "/configs", shortcut: "2" },
  { label: "keyboards", href: "/keyboards", shortcut: "3" },
  { label: "about", href: "/about", shortcut: "4" },
];

export function buildCommandPaletteItems(
  contentItems: { title: string; href: string; category?: string }[],
): CommandPaletteItem[] {
  const navItems: CommandPaletteItem[] = mainNav.map((item) => ({
    id: `nav-${item.href}`,
    title: item.label,
    href: item.href,
    category: "navigation",
  }));

  const content: CommandPaletteItem[] = contentItems.map((item) => ({
    id: `content-${item.href}`,
    title: item.title,
    href: item.href,
    category: item.category ?? "content",
  }));

  return [...navItems, ...content];
}

export function fuzzyMatch(query: string, text: string): boolean {
  const lowerQuery = query.toLowerCase();
  const lowerText = text.toLowerCase();

  if (lowerText.includes(lowerQuery)) return true;

  let qi = 0;
  for (let ti = 0; ti < lowerText.length && qi < lowerQuery.length; ti++) {
    if (lowerText[ti] === lowerQuery[qi]) qi++;
  }
  return qi === lowerQuery.length;
}

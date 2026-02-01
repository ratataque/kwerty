export interface NavItem {
  label: string;
  href: string;
  shortcut?: string;
}

export interface CommandPaletteItem {
  id: string;
  title: string;
  href: string;
  category?: string;
  description?: string;
}

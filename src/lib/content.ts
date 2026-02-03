import fs from "fs";
import path from "path";
import { getContentDir, getAllContentMeta, getMdxSource, parseFrontmatter } from "./mdx";
import type { ContentMeta, ConfigCategory, Contributor, Repo } from "@/types/content";
import type { CommandPaletteItem } from "@/types/navigation";
import { mainNav } from "./navigation";

function readJson<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "content", filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

const CONFIG_CATEGORIES: ConfigCategory[] = ["macos", "arch-linux", "windows", "shared"];

export function getConfigCategories(): {
  category: ConfigCategory;
  label: string;
  description: string;
  count: number;
}[] {
  const labels: Record<ConfigCategory, { label: string; description: string }> = {
    macos: { label: "macOS", description: "AeroSpace, skhd, Karabiner, Sketchybar, Neovim" },
    "arch-linux": { label: "Arch Linux", description: "Hyprland, xremap, rofi, Neovim" },
    windows: { label: "Windows", description: "GlazeWM, Zebar" },
    shared: { label: "Shared", description: "Cross-platform terminal, shell, and tool configs" },
  };

  return CONFIG_CATEGORIES.map((category) => {
    const dir = getContentDir("configs", category);
    const items = getAllContentMeta(dir);
    return {
      category,
      ...labels[category],
      count: items.length,
    };
  });
}

export function getConfigsByCategory(category: string): ContentMeta[] {
  const dir = getContentDir("configs", category);
  return getAllContentMeta(dir);
}

export function getConfig(category: string, slug: string): { meta: ContentMeta; content: string } {
  const dir = getContentDir("configs", category);
  const source = getMdxSource(dir, slug);
  const result = parseFrontmatter(source);
  return { meta: { ...result.meta, slug }, content: result.content };
}

export function getKeyboards(): ContentMeta[] {
  const dir = getContentDir("keyboards");
  return getAllContentMeta(dir);
}

export function getKeyboard(slug: string): { meta: ContentMeta; content: string } {
  const dir = getContentDir("keyboards");
  const source = getMdxSource(dir, slug);
  const result = parseFrontmatter(source);
  return { meta: { ...result.meta, slug }, content: result.content };
}

export function getPlatforms(): ContentMeta[] {
  const dir = getContentDir("platforms");
  return getAllContentMeta(dir);
}

export function getContributors(): Contributor[] {
  return readJson<Contributor[]>("contributors.json");
}

export function getRepos(): Repo[] {
  return readJson<Repo[]>("repos.json");
}

export function getReposByContributor(contributor: string): Repo[] {
  return readJson<Repo[]>("repos.json").filter((r) => r.contributor === contributor);
}

export function buildAllCommandPaletteItems(): CommandPaletteItem[] {
  const items: CommandPaletteItem[] = [];

  // Add main navigation
  items.push(...mainNav.map((item) => ({
    id: `nav-${item.href}`,
    title: item.label,
    href: item.href,
    category: "navigation",
  })));

  // Add all configs grouped by category
  const categories = getConfigCategories();
  for (const cat of categories) {
    const configs = getConfigsByCategory(cat.category);
    items.push(...configs.map((config) => ({
      id: `config-${config.slug}`,
      title: `configs/${cat.category}/${config.slug}`,
      href: `/configs/${cat.category}/${config.slug}`,
      category: cat.category,
      description: config.description,
    })));
  }

  // Add all keyboards
  const keyboards = getKeyboards();
  items.push(...keyboards.map((kb) => ({
    id: `keyboard-${kb.slug}`,
    title: `keyboards/${kb.slug}`,
    href: `/keyboards/${kb.slug}`,
    category: "keyboards",
    description: kb.description,
  })));

  return items;
}

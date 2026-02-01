import { describe, it, expect } from "vitest";
import {
  mainNav,
  buildCommandPaletteItems,
  fuzzyMatch,
} from "@/lib/navigation";

describe("mainNav", () => {
  it("contains expected nav items", () => {
    expect(mainNav).toHaveLength(4);
    expect(mainNav[0].href).toBe("/");
    expect(mainNav[1].href).toBe("/configs");
    expect(mainNav[2].href).toBe("/keyboards");
    expect(mainNav[3].href).toBe("/about");
  });

  it("has shortcut keys 1-4", () => {
    mainNav.forEach((item, i) => {
      expect(item.shortcut).toBe(String(i + 1));
    });
  });
});

describe("fuzzyMatch", () => {
  it("matches exact substring", () => {
    expect(fuzzyMatch("kitty", "Kitty Terminal")).toBe(true);
  });

  it("matches case-insensitive", () => {
    expect(fuzzyMatch("KITTY", "kitty terminal")).toBe(true);
  });

  it("matches fuzzy characters in order", () => {
    expect(fuzzyMatch("kty", "kitty")).toBe(true);
  });

  it("rejects when characters are not in order", () => {
    expect(fuzzyMatch("ytk", "kitty")).toBe(false);
  });

  it("handles empty query", () => {
    expect(fuzzyMatch("", "anything")).toBe(true);
  });

  it("rejects when query is longer than text", () => {
    expect(fuzzyMatch("longquery", "short")).toBe(false);
  });
});

describe("buildCommandPaletteItems", () => {
  it("includes nav items", () => {
    const items = buildCommandPaletteItems([]);
    const navItems = items.filter((i) => i.category === "navigation");
    expect(navItems).toHaveLength(4);
  });

  it("includes content items", () => {
    const items = buildCommandPaletteItems([
      { title: "Kitty", href: "/configs/terminal/kitty", category: "terminal" },
    ]);
    expect(items).toHaveLength(5);
    expect(items[4].title).toBe("Kitty");
  });

  it("uses 'content' as default category", () => {
    const items = buildCommandPaletteItems([
      { title: "Test", href: "/test" },
    ]);
    const contentItem = items.find((i) => i.title === "Test");
    expect(contentItem?.category).toBe("content");
  });
});

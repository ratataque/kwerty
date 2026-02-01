import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import type { CommandPaletteItem } from "@/types/navigation";

const items: CommandPaletteItem[] = [
  { id: "1", title: "Home", href: "/", category: "navigation" },
  { id: "2", title: "Kitty Terminal", href: "/configs/terminal/kitty", category: "terminal" },
  { id: "3", title: "Fish Shell", href: "/configs/terminal/fish", category: "terminal" },
  { id: "4", title: "Neovim", href: "/configs/editor/neovim", category: "editor" },
];

describe("useCommandPalette", () => {
  it("starts closed with empty query", () => {
    const { result } = renderHook(() => useCommandPalette(items));
    expect(result.current.isOpen).toBe(false);
    expect(result.current.query).toBe("");
  });

  it("opens and closes", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });

  it("toggles", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(false);
  });

  it("returns all items when query is empty", () => {
    const { result } = renderHook(() => useCommandPalette(items));
    expect(result.current.results).toHaveLength(4);
  });

  it("filters by query", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.setQuery("kitty"));
    expect(result.current.results).toHaveLength(1);
    expect(result.current.results[0].title).toBe("Kitty Terminal");
  });

  it("filters by category", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.setQuery("terminal"));
    expect(result.current.results).toHaveLength(2);
  });

  it("resets selected index on query change", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => {
      result.current.moveDown();
      result.current.moveDown();
    });
    expect(result.current.selectedIndex).toBe(2);

    act(() => result.current.setQuery("kit"));
    expect(result.current.selectedIndex).toBe(0);
  });

  it("navigates up and down", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.moveDown());
    expect(result.current.selectedIndex).toBe(1);

    act(() => result.current.moveDown());
    expect(result.current.selectedIndex).toBe(2);

    act(() => result.current.moveUp());
    expect(result.current.selectedIndex).toBe(1);
  });

  it("wraps around at boundaries", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.moveUp());
    expect(result.current.selectedIndex).toBe(3);

    act(() => result.current.moveDown());
    expect(result.current.selectedIndex).toBe(0);
  });

  it("returns selected item", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => result.current.moveDown());
    const selected = result.current.getSelected();
    expect(selected?.title).toBe("Kitty Terminal");
  });

  it("resets state on close", () => {
    const { result } = renderHook(() => useCommandPalette(items));

    act(() => {
      result.current.open();
      result.current.setQuery("kitty");
      result.current.moveDown();
    });

    act(() => result.current.close());
    expect(result.current.query).toBe("");
    expect(result.current.selectedIndex).toBe(0);
    expect(result.current.isOpen).toBe(false);
  });
});

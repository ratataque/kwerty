import { describe, it, expect } from "vitest";
import { parseFrontmatter, getMdxFiles, getContentDir } from "@/lib/mdx";

describe("parseFrontmatter", () => {
  it("parses title and description", () => {
    const source = `---
title: "Test Tool"
description: "A test description"
category: "terminal"
contributors: ["user1"]
repos: ["user1/repo"]
platforms: ["linux"]
tags: ["test"]
---

Content here.`;

    const { meta, content } = parseFrontmatter(source);
    expect(meta.title).toBe("Test Tool");
    expect(meta.description).toBe("A test description");
    expect(meta.category).toBe("terminal");
    expect(meta.contributors).toEqual(["user1"]);
    expect(meta.repos).toEqual(["user1/repo"]);
    expect(meta.platforms).toEqual(["linux"]);
    expect(meta.tags).toEqual(["test"]);
    expect(content.trim()).toBe("Content here.");
  });

  it("handles missing optional fields", () => {
    const source = `---
title: "Minimal"
description: "Minimal doc"
category: "tools"
contributors: []
repos: []
platforms: []
tags: []
---
`;

    const { meta } = parseFrontmatter(source);
    expect(meta.title).toBe("Minimal");
    expect(meta.tool).toBeUndefined();
    expect(meta.configPath).toBeUndefined();
  });

  it("defaults empty arrays for missing array fields", () => {
    const source = `---
title: "Bare"
description: "Bare minimum"
category: "tools"
---
`;

    const { meta } = parseFrontmatter(source);
    expect(meta.contributors).toEqual([]);
    expect(meta.repos).toEqual([]);
    expect(meta.platforms).toEqual([]);
    expect(meta.tags).toEqual([]);
  });
});

describe("getMdxFiles", () => {
  it("returns mdx files from content directory", () => {
    const dir = getContentDir("configs", "terminal");
    const files = getMdxFiles(dir);
    expect(files).toContain("kitty");
    expect(files).toContain("fish");
    expect(files).toContain("tmux");
    expect(files).toContain("starship");
  });

  it("returns empty array for nonexistent directory", () => {
    const files = getMdxFiles("/nonexistent/path");
    expect(files).toEqual([]);
  });
});

describe("getContentDir", () => {
  it("builds correct path", () => {
    const dir = getContentDir("configs", "terminal");
    expect(dir).toMatch(/content\/configs\/terminal$/);
  });
});

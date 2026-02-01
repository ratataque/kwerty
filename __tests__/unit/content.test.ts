import { describe, it, expect } from "vitest";
import {
  getConfigCategories,
  getConfigsByCategory,
  getConfig,
  getKeyboards,
  getContributors,
  getRepos,
  getReposByContributor,
} from "@/lib/content";

describe("getConfigCategories", () => {
  it("returns all four categories", () => {
    const categories = getConfigCategories();
    expect(categories).toHaveLength(4);
    const names = categories.map((c) => c.category);
    expect(names).toContain("terminal");
    expect(names).toContain("editor");
    expect(names).toContain("wm");
    expect(names).toContain("tools");
  });

  it("has labels and descriptions", () => {
    const categories = getConfigCategories();
    categories.forEach((cat) => {
      expect(cat.label).toBeTruthy();
      expect(cat.description).toBeTruthy();
    });
  });

  it("counts configs per category", () => {
    const categories = getConfigCategories();
    const terminal = categories.find((c) => c.category === "terminal");
    expect(terminal?.count).toBe(4); // kitty, fish, tmux, starship
  });
});

describe("getConfigsByCategory", () => {
  it("returns terminal configs", () => {
    const configs = getConfigsByCategory("terminal");
    expect(configs.length).toBeGreaterThan(0);
    const slugs = configs.map((c) => c.slug);
    expect(slugs).toContain("kitty");
    expect(slugs).toContain("fish");
  });

  it("returns empty for unknown category", () => {
    const configs = getConfigsByCategory("nonexistent");
    expect(configs).toEqual([]);
  });
});

describe("getConfig", () => {
  it("returns meta and content for a config", () => {
    const { meta, content } = getConfig("terminal", "kitty");
    expect(meta.title).toBe("Kitty Terminal");
    expect(meta.slug).toBe("kitty");
    expect(content).toContain("GPU-accelerated");
  });
});

describe("getKeyboards", () => {
  it("returns keyboard entries", () => {
    const keyboards = getKeyboards();
    expect(keyboards.length).toBeGreaterThan(0);
    const slugs = keyboards.map((k) => k.slug);
    expect(slugs).toContain("corne");
    expect(slugs).toContain("totem");
    expect(slugs).toContain("kinesis-360");
  });
});

describe("getContributors", () => {
  it("returns both contributors", () => {
    const contributors = getContributors();
    expect(contributors).toHaveLength(2);
    const names = contributors.map((c) => c.name);
    expect(names).toContain("ratataque");
    expect(names).toContain("GrimalDev");
  });

  it("has required fields", () => {
    const contributors = getContributors();
    contributors.forEach((c) => {
      expect(c.github).toBeTruthy();
      expect(c.platform).toBeTruthy();
      expect(c.os).toBeTruthy();
      expect(c.editor).toBeTruthy();
    });
  });
});

describe("getRepos", () => {
  it("returns all repos", () => {
    const repos = getRepos();
    expect(repos.length).toBeGreaterThan(10);
  });
});

describe("getReposByContributor", () => {
  it("filters by ratataque", () => {
    const repos = getReposByContributor("ratataque");
    expect(repos.length).toBeGreaterThan(0);
    repos.forEach((r) => expect(r.contributor).toBe("ratataque"));
  });

  it("filters by GrimalDev", () => {
    const repos = getReposByContributor("GrimalDev");
    expect(repos.length).toBeGreaterThan(0);
    repos.forEach((r) => expect(r.contributor).toBe("GrimalDev"));
  });

  it("returns empty for unknown contributor", () => {
    const repos = getReposByContributor("nobody");
    expect(repos).toEqual([]);
  });
});

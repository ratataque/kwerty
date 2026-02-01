import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ContentMeta } from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getContentDir(...segments: string[]): string {
  return path.join(CONTENT_DIR, ...segments);
}

export function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getMdxSource(dir: string, slug: string): string {
  const filePath = path.join(dir, `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}

export function parseFrontmatter(source: string): {
  meta: ContentMeta;
  content: string;
} {
  const { data, content } = matter(source);
  return {
    meta: {
      title: data.title ?? "",
      description: data.description ?? "",
      category: data.category ?? "",
      tool: data.tool,
      contributors: data.contributors ?? [],
      repos: data.repos ?? [],
      configPath: data.configPath,
      platforms: data.platforms ?? [],
      tags: data.tags ?? [],
      slug: data.slug ?? "",
    },
    content,
  };
}

export function getAllContentMeta(dir: string): ContentMeta[] {
  const slugs = getMdxFiles(dir);
  return slugs.map((slug) => {
    const source = getMdxSource(dir, slug);
    const { meta } = parseFrontmatter(source);
    return { ...meta, slug };
  });
}

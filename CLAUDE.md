# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kwerty is a static documentation site showcasing keyboard-centric developer configurations across macOS, Arch Linux, and Windows. Built with Next.js 15 (App Router, static export), MDX content, and Catppuccin Mocha theming.

## Commands

```bash
bun run dev          # Dev server with Turbopack
bun run build        # Production build (static export to out/)
bun run lint         # Next.js linting
bun run test         # Unit tests (Vitest, single run)
bun run test:watch   # Unit tests in watch mode
bun run test:coverage # Coverage report (target: 80%)
bun run test:e2e     # Playwright E2E tests (auto-starts dev server)
```

Docker: `docker compose up dev` (port 3000) or `docker compose up prod` (port 8080, Nginx).

## Architecture

**Static export** — no API routes, all content pre-rendered at build time via `output: "export"` in `next.config.ts`. Images are unoptimized (served as-is from `public/`).

### Content Pipeline

Content lives in `/content/` as MDX with YAML frontmatter:
- `content/configs/{arch-linux,macos,windows,shared}/*.mdx` — tool configurations
- `content/keyboards/*.mdx` — keyboard documentation
- `content/platforms/*.mdx` — platform overviews
- `content/repos.json` — GitHub repository metadata
- `content/contributors.json` — contributor profiles

Processing: `gray-matter` parses frontmatter → `next-mdx-remote/rsc` renders MDX → custom rehype/remark plugins (GFM, slug, Shiki syntax highlighting with Catppuccin Mocha theme).

### MDX Frontmatter Schema

```yaml
title: "Tool Name"
description: "Short description"
category: "arch-linux"          # arch-linux | macos | windows | shared
tool: "tool-id"                 # optional
contributors: ["username"]
repos: ["owner/repo"]           # must match entries in repos.json
configPath: "~/.config/tool/"   # optional
platforms: ["linux"]            # linux | macos | windows
tags: ["tag1", "tag2"]
```

### Routing

- `/` — Home with hero section
- `/configs` → `/configs/{category}/{slug}` — Config detail (catch-all `[...slug]`)
- `/keyboards` → `/keyboards/{slug}` — Keyboard detail
- `/about` — About page

### Key Source Modules

- `src/lib/mdx.ts` — Frontmatter parsing, file reading
- `src/lib/content.ts` — Content loading, command palette item building
- `src/components/content/mdx-renderer.tsx` — Custom MDX element mapping
- `src/components/layout/site-shell.tsx` — Client component managing global keyboard shortcuts and command palette state
- `src/lib/navigation.ts` — Fuzzy matching for command palette

### Images

Store in `public/images/configs/` for config screenshots. Reference in MDX as `![alt](/images/configs/filename.png)`. No Next.js Image optimization (static export).

## Styling

Tailwind v4 with Catppuccin Mocha palette defined as CSS custom properties in `src/app/globals.css`. Monospace-first typography using JetBrains Mono (loaded locally from `public/fonts/`).

Path alias: `@/*` maps to `src/*`.

## Testing

- **Unit tests** in `__tests__/*.test.{ts,tsx}` — Vitest + React Testing Library + happy-dom
- **E2E tests** in `__tests__/e2e/*.spec.ts` — Playwright (Chromium only)
- Setup file: `__tests__/setup.ts`
- Coverage target: 80% (statements, lines, functions)

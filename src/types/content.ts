export interface ContentMeta {
  title: string;
  description: string;
  category: string;
  tool?: string;
  contributors: string[];
  repos: string[];
  configPath?: string;
  platforms: string[];
  tags: string[];
  slug: string;
}

export interface Contributor {
  name: string;
  github: string;
  platform: string;
  os: string;
  wm: string;
  editor: string;
  keyboard: string;
  description: string;
}

export interface Repo {
  name: string;
  fullName: string;
  contributor: string;
  description: string;
  language: string;
  url: string;
  contents: string[];
}

export type ConfigCategory = "terminal" | "editor" | "wm" | "tools";
export type Platform = "linux" | "macos" | "windows";

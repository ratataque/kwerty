import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { PlatformTabs } from "./platform-tabs";

const components = {
  TerminalWindow,
  PlatformTabs,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold text-ctp-text mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl font-bold text-ctp-text mt-8 mb-3 pb-2 border-b border-ctp-surface0"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-bold text-ctp-subtext1 mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-ctp-subtext0 leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-ctp-blue hover:underline" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 text-ctp-subtext0 space-y-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 text-ctp-subtext0 space-y-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-ctp-subtext0" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-ctp-mauve pl-4 my-4 text-ctp-overlay1 italic"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-mauve text-sm"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-lg border border-ctp-surface1 bg-ctp-mantle p-4 overflow-x-auto mb-4 text-sm [&>code]:bg-transparent [&>code]:border-0 [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left px-3 py-2 border-b border-ctp-surface1 text-ctp-subtext1 font-medium"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-3 py-2 border-b border-ctp-surface0 text-ctp-subtext0" {...props} />
  ),
  kbd: (props: React.HTMLAttributes<HTMLElement>) => (
    <kbd
      className="px-1.5 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-green text-xs"
      {...props}
    />
  ),
};

interface MdxRendererProps {
  source: string;
}

export function MdxRenderer({ source }: MdxRendererProps) {
  return (
    <div className="prose-custom">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "catppuccin-mocha",
                  keepBackground: false,
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}

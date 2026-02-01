import { allKeyboardLayouts } from "@/lib/keyboard-layouts";
import { getKeyboard } from "@/lib/content";
import { KeyboardLayout } from "@/components/content/keyboard-layout";
import { MdxRenderer } from "@/components/content/mdx-renderer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface KeyboardPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(allKeyboardLayouts).map((slug) => ({ slug }));
}

export default async function KeyboardDetailPage({ params }: KeyboardPageProps) {
  const { slug } = await params;
  const layout = allKeyboardLayouts[slug];
  const { meta, content } = getKeyboard(slug);

  if (!layout) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-ctp-red">Keyboard not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-xs text-ctp-overlay0 mb-6">
        <Link href="/keyboards" className="hover:text-ctp-text">
          keyboards
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ctp-subtext0">{meta.title}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-ctp-text mb-2">
          {meta.title}
        </h1>
        <p className="text-ctp-subtext0 text-sm mb-4">{meta.description}</p>
        <div className="flex flex-wrap gap-2">
          {meta.platforms.map((p) => (
            <Badge key={p} variant="platform">
              {p}
            </Badge>
          ))}
          {meta.contributors.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
          {meta.tags.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
          <Badge variant="keyboard">
            {layout.layers.length} {layout.layers.length === 1 ? "layer" : "layers"}
          </Badge>
        </div>
      </header>

      <section className="mb-8">
        <KeyboardLayout layout={layout} />
      </section>

      <MdxRenderer source={content} />

      {meta.repos.length > 0 && (
        <div className="mt-8 pt-6 border-t border-ctp-surface0">
          <h3 className="text-xs text-ctp-overlay0 uppercase tracking-wider mb-3">
            Source Repositories
          </h3>
          <div className="flex flex-wrap gap-2">
            {meta.repos.map((repo) => (
              <a
                key={repo}
                href={`https://github.com/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ctp-blue hover:underline"
              >
                {repo}
              </a>
            ))}
          </div>
        </div>
      )}

      <section className="mt-8 pt-6 border-t border-ctp-surface0">
        <h2 className="text-sm text-ctp-overlay0 mb-4 uppercase tracking-wider">
          Details
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-ctp-overlay0">Layout</span>
            <p className="text-ctp-text">
              {layout.rows}x{layout.cols} split
            </p>
          </div>
          <div>
            <span className="text-ctp-overlay0">Layers</span>
            <p className="text-ctp-text">
              {layout.layers.map((l) => l.name).join(", ")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

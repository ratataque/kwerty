import { getConfig, getConfigsByCategory, getConfigCategories } from "@/lib/content";
import { MdxRenderer } from "@/components/content/mdx-renderer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ConfigRouteProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  const categories = getConfigCategories();
  const params: { slug: string[] }[] = [];

  // /configs/[category]
  for (const cat of categories) {
    params.push({ slug: [cat.category] });

    // /configs/[category]/[tool]
    const configs = getConfigsByCategory(cat.category);
    for (const config of configs) {
      params.push({ slug: [cat.category, config.slug] });
    }
  }

  return params;
}

function CategoryPage({ category }: { category: string }) {
  const configs = getConfigsByCategory(category);
  const categories = getConfigCategories();
  const categoryInfo = categories.find((c) => c.category === category);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-ctp-text mb-2">
        {categoryInfo?.label ?? category}
      </h1>
      <p className="text-ctp-overlay0 text-sm mb-8">
        :ls configs/{category}/
      </p>

      {configs.length === 0 ? (
        <p className="text-ctp-overlay0 text-sm">No configs yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {configs.map((config) => (
            <Card
              key={config.slug}
              href={`/configs/${category}/${config.slug}`}
            >
              <h3 className="text-sm font-medium text-ctp-text mb-1">
                {config.title}
              </h3>
              <p className="text-xs text-ctp-subtext0 mb-2">
                {config.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {config.platforms.map((p) => (
                  <Badge key={p} variant="platform">
                    {p}
                  </Badge>
                ))}
                {config.contributors.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function ConfigDetailPage({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  const { meta, content } = getConfig(category, slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-xs text-ctp-overlay0 mb-6">
        <Link href="/configs" className="hover:text-ctp-text">
          configs
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/configs/${category}`} className="hover:text-ctp-text">
          {category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ctp-subtext0">{meta.title}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-ctp-text mb-2">{meta.title}</h1>
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
        </div>
      </header>

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
    </div>
  );
}

export default async function ConfigRoute({ params }: ConfigRouteProps) {
  const { slug } = await params;

  if (slug.length === 1) {
    return <CategoryPage category={slug[0]} />;
  }

  return <ConfigDetailPage category={slug[0]} slug={slug[1]} />;
}

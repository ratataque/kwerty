import type { Repo } from "@/types/content";
import { Badge } from "@/components/ui/badge";

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-ctp-surface1 bg-ctp-surface0 p-4 hover:border-ctp-surface2 transition-colors"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-ctp-text font-medium">{repo.name}</span>
        <Badge>{repo.language}</Badge>
      </div>
      <p className="text-xs text-ctp-subtext0 mb-3">{repo.description}</p>
      <div className="flex flex-wrap gap-1">
        {repo.contents.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="text-xs text-ctp-overlay0 px-1.5 py-0.5 bg-ctp-surface1/50 rounded"
          >
            {tag}
          </span>
        ))}
        {repo.contents.length > 5 && (
          <span className="text-xs text-ctp-overlay0">
            +{repo.contents.length - 5}
          </span>
        )}
      </div>
    </a>
  );
}

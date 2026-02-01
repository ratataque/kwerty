import type { Contributor } from "@/types/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContributorCardProps {
  contributor: Contributor;
}

export function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <Card title={contributor.name}>
      <p className="text-sm text-ctp-subtext0 mb-3">
        {contributor.description}
      </p>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-ctp-overlay0 w-16">OS</span>
          <Badge variant="platform">{contributor.os}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ctp-overlay0 w-16">WM</span>
          <Badge variant="wm">{contributor.wm}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ctp-overlay0 w-16">Editor</span>
          <Badge variant="editor">{contributor.editor}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ctp-overlay0 w-16">Board</span>
          <Badge variant="keyboard">{contributor.keyboard}</Badge>
        </div>
      </div>
      <a
        href={`https://github.com/${contributor.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs text-ctp-blue hover:underline"
      >
        github.com/{contributor.github}
      </a>
    </Card>
  );
}

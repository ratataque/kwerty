import { getConfigCategories } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ConfigCategory } from "@/types/content";

const categoryBadgeVariant: Record<ConfigCategory, "terminal" | "editor" | "wm" | "tools"> = {
  terminal: "terminal",
  editor: "editor",
  wm: "wm",
  tools: "tools",
};

export default function ConfigsPage() {
  const categories = getConfigCategories();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-ctp-text mb-2">configs</h1>
      <p className="text-ctp-overlay0 text-sm mb-8">
        :browse configs/
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <Card
            key={cat.category}
            href={`/configs/${cat.category}`}
            accent={
              cat.category === "terminal"
                ? "#a6e3a1"
                : cat.category === "editor"
                  ? "#cba6f7"
                  : cat.category === "wm"
                    ? "#89b4fa"
                    : "#fab387"
            }
          >
            <div className="flex items-center justify-between mb-2">
              <Badge variant={categoryBadgeVariant[cat.category]}>
                {cat.label}
              </Badge>
              <span className="text-xs text-ctp-overlay0">
                {cat.count} {cat.count === 1 ? "config" : "configs"}
              </span>
            </div>
            <p className="text-sm text-ctp-subtext0">{cat.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

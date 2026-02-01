import { allKeyboardLayouts } from "@/lib/keyboard-layouts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function KeyboardsPage() {
  const layouts = Object.values(allKeyboardLayouts);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-ctp-text mb-2">keyboards</h1>
      <p className="text-ctp-overlay0 text-sm mb-8">
        :ls keyboards/
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {layouts.map((layout) => (
          <Card key={layout.id} href={`/keyboards/${layout.id}`}>
            <div className="mb-2">
              <Badge variant="keyboard">{layout.name}</Badge>
            </div>
            <p className="text-xs text-ctp-subtext0 mb-3">
              {layout.description}
            </p>
            <div className="flex gap-1 flex-wrap">
              {layout.layers.map((layer) => (
                <span
                  key={layer.name}
                  className="text-xs px-1.5 py-0.5 bg-ctp-surface1/50 rounded text-ctp-overlay0"
                >
                  {layer.name}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

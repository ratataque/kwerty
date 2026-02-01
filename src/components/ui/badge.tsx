type BadgeVariant =
  | "terminal"
  | "editor"
  | "wm"
  | "tools"
  | "keyboard"
  | "platform"
  | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantColors: Record<BadgeVariant, string> = {
  terminal: "text-ctp-green border-ctp-green/30 bg-ctp-green/10",
  editor: "text-ctp-mauve border-ctp-mauve/30 bg-ctp-mauve/10",
  wm: "text-ctp-blue border-ctp-blue/30 bg-ctp-blue/10",
  tools: "text-ctp-peach border-ctp-peach/30 bg-ctp-peach/10",
  keyboard: "text-ctp-teal border-ctp-teal/30 bg-ctp-teal/10",
  platform: "text-ctp-yellow border-ctp-yellow/30 bg-ctp-yellow/10",
  default: "text-ctp-subtext0 border-ctp-surface1 bg-ctp-surface0",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs border rounded ${variantColors[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

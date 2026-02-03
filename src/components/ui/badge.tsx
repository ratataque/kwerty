type BadgeVariant =
  | "macos"
  | "arch-linux"
  | "windows"
  | "shared"
  | "keyboard"
  | "platform"
  | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantColors: Record<BadgeVariant, string> = {
  macos: "text-ctp-blue border-ctp-blue/30 bg-ctp-blue/10",
  "arch-linux": "text-ctp-teal border-ctp-teal/30 bg-ctp-teal/10",
  windows: "text-ctp-peach border-ctp-peach/30 bg-ctp-peach/10",
  shared: "text-ctp-green border-ctp-green/30 bg-ctp-green/10",
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

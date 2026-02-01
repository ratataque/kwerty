import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ctp-green/10 text-ctp-green border-ctp-green/30 hover:bg-ctp-green/20",
  secondary:
    "bg-transparent text-ctp-text border-ctp-surface1 hover:border-ctp-surface2 hover:bg-ctp-surface0/50",
  ghost:
    "bg-transparent text-ctp-subtext0 border-transparent hover:text-ctp-text hover:bg-ctp-surface0/50",
};

export function Button({
  variant = "secondary",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const styles = `inline-flex items-center gap-2 px-4 py-2 text-sm border rounded transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

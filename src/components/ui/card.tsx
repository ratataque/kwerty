import Link from "next/link";

interface CardProps {
  href?: string;
  accent?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  href,
  accent,
  title,
  children,
  className = "",
}: CardProps) {
  const inner = (
    <>
      {(accent || title) && (
        <div className="px-4 py-2 border-b border-ctp-surface1 flex items-center gap-2">
          {accent && (
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
          )}
          {title && <span className="text-sm text-ctp-subtext0">{title}</span>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </>
  );

  const styles = `block rounded-lg border border-ctp-surface1 bg-ctp-surface0 overflow-hidden ${
    href ? "hover:border-ctp-surface2 transition-colors" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {inner}
      </Link>
    );
  }

  return <div className={styles}>{inner}</div>;
}

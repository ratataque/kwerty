interface Segment {
  text: string;
  bg?: string;
  fg?: string;
}

interface StatusLineProps {
  segments: Segment[];
  className?: string;
}

export function StatusLine({ segments, className = "" }: StatusLineProps) {
  return (
    <div className={`flex items-center text-xs ${className}`}>
      {segments.map((segment, i) => {
        const bg = segment.bg ?? "var(--color-ctp-surface0)";
        const fg = segment.fg ?? "var(--color-ctp-text)";
        const nextBg =
          i < segments.length - 1
            ? (segments[i + 1].bg ?? "var(--color-ctp-surface0)")
            : "transparent";

        return (
          <span key={i} className="flex items-center">
            <span
              className="px-3 py-1"
              style={{ backgroundColor: bg, color: fg }}
            >
              {segment.text}
            </span>
            <svg width="12" height="24" viewBox="0 0 12 24">
              <polygon points="0,0 12,12 0,24" fill={bg} />
              <polygon points="0,0 12,12 0,24" fill={nextBg} opacity="0" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

interface AsciiArtProps {
  art: string;
  className?: string;
  color?: string;
}

export function AsciiArt({
  art,
  className = "",
  color = "text-ctp-green",
}: AsciiArtProps) {
  return (
    <pre
      className={`font-mono text-xs sm:text-sm md:text-base leading-none select-none ${color} ${className}`}
      style={{
        letterSpacing: '0',
        fontVariantLigatures: 'none',
        fontFeatureSettings: '"liga" 0',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      aria-hidden="true"
    >
      {art}
    </pre>
  );
}

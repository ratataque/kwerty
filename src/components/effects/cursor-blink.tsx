"use client";

interface CursorBlinkProps {
  className?: string;
}

export function CursorBlink({ className = "" }: CursorBlinkProps) {
  return (
    <span
      className={`inline-block w-[0.6em] h-[1.2em] bg-ctp-green align-middle animate-[blink_1s_step-end_infinite] ${className}`}
      aria-hidden="true"
    />
  );
}

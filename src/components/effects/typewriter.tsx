"use client";

import { useState, useEffect } from "react";
import { CursorBlink } from "./cursor-blink";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypeWriterProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedLength >= text.length) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(
      () => setDisplayedLength((prev) => prev + 1),
      speed,
    );
    return () => clearTimeout(timer);
  }, [started, displayedLength, text.length, speed, onComplete]);

  return (
    <span className={className}>
      {text.slice(0, displayedLength)}
      <CursorBlink />
    </span>
  );
}

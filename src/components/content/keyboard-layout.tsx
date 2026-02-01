"use client";

import { useState } from "react";
import type { KeyboardLayout as KeyboardLayoutType, KeyDef } from "@/types/keyboard";

interface KeyboardLayoutProps {
  layout: KeyboardLayoutType;
}

function KeyCap({
  keyDef,
  splitOffset,
}: {
  keyDef: KeyDef;
  splitOffset: number;
}) {
  const [hovered, setHovered] = useState(false);
  const x = keyDef.x + splitOffset;

  const isEmpty = !keyDef.tap && !keyDef.hold;
  const fillColor = isEmpty
    ? "var(--color-ctp-surface0)"
    : "var(--color-ctp-surface1)";
  const strokeColor = hovered
    ? "var(--color-ctp-green)"
    : "var(--color-ctp-surface2)";

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default"
    >
      <rect
        x={x}
        y={keyDef.y}
        width={keyDef.w}
        height={keyDef.h}
        rx={6}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={hovered ? 2 : 1}
      />
      <text
        x={x + keyDef.w / 2}
        y={keyDef.y + (keyDef.hold ? keyDef.h / 2 - 4 : keyDef.h / 2 + 1)}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={
          hovered ? "var(--color-ctp-green)" : "var(--color-ctp-text)"
        }
        fontSize={keyDef.tap.length > 3 ? 9 : 11}
        fontFamily="var(--font-mono)"
      >
        {keyDef.tap}
      </text>
      {keyDef.hold && (
        <text
          x={x + keyDef.w / 2}
          y={keyDef.y + keyDef.h / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--color-ctp-overlay0)"
          fontSize={8}
          fontFamily="var(--font-mono)"
        >
          {keyDef.hold}
        </text>
      )}
    </g>
  );
}

export function KeyboardLayout({ layout }: KeyboardLayoutProps) {
  const [activeLayer, setActiveLayer] = useState(0);
  const layer = layout.layers[activeLayer];

  // Calculate split offset: keys past the gap column get offset
  const gapCol = Math.floor(layout.cols / 2);
  const splitPx = layout.splitGap * 58;

  // Calculate SVG dimensions
  const maxX = Math.max(
    ...layer.keys.map((k) => {
      const offset = k.col >= gapCol ? splitPx : 0;
      return k.x + offset + k.w;
    }),
  );
  const maxY = Math.max(...layer.keys.map((k) => k.y + k.h));

  return (
    <div>
      {layout.layers.length > 1 && (
        <div className="flex gap-1 mb-4">
          {layout.layers.map((l, i) => (
            <button
              key={l.name}
              onClick={() => setActiveLayer(i)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                i === activeLayer
                  ? "bg-ctp-green/20 text-ctp-green border border-ctp-green/30"
                  : "bg-ctp-surface0 text-ctp-overlay0 border border-ctp-surface1 hover:text-ctp-text"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}
      <div className="overflow-x-auto">
        <svg
          viewBox={`-4 -4 ${maxX + 8} ${maxY + 8}`}
          className="w-full max-w-3xl"
        >
          <rect
            x={-4}
            y={-4}
            width={maxX + 8}
            height={maxY + 8}
            fill="var(--color-ctp-mantle)"
            rx={12}
          />
          {layer.keys.map((k, i) => {
            const offset = k.col >= gapCol ? splitPx : 0;
            return <KeyCap key={i} keyDef={k} splitOffset={offset} />;
          })}
        </svg>
      </div>
    </div>
  );
}

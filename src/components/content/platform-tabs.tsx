"use client";

import { useState } from "react";

interface PlatformTabsProps {
  children: React.ReactNode;
  platforms: string[];
}

export function PlatformTabs({ children, platforms }: PlatformTabsProps) {
  const [active, setActive] = useState(0);

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className="my-4">
      <div className="flex gap-1 border-b border-ctp-surface1 mb-4">
        {platforms.map((platform, i) => (
          <button
            key={platform}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 text-xs border-b-2 transition-colors ${
              i === active
                ? "border-ctp-green text-ctp-green"
                : "border-transparent text-ctp-overlay0 hover:text-ctp-text"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>
      <div>{childArray[active]}</div>
    </div>
  );
}

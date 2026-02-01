"use client";

import { TypeWriter } from "@/components/effects/typewriter";

export function HeroTerminal() {
  return (
    <div className="text-left inline-block">
      <p className="text-ctp-subtext0 mb-4">
        <TypeWriter
          text="Keyboard-driven workflows for developers who refuse to touch a mouse."
          speed={30}
        />
      </p>
      <div className="text-sm">
        <span className="text-ctp-green">$ </span>
        <span className="text-ctp-text">kwerty --explore</span>
      </div>
    </div>
  );
}

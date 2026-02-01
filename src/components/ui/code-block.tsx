"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  filename,
  language,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const lines = code.split("\n");

  return (
    <div className="rounded-lg border border-ctp-surface1 bg-ctp-mantle overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-ctp-crust border-b border-ctp-surface1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-ctp-overlay0">{filename}</span>
            {language && (
              <span className="text-xs text-ctp-mauve">{language}</span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="text-xs text-ctp-overlay0 hover:text-ctp-text transition-colors"
            aria-label="Copy code"
          >
            {copied ? "copied!" : "copy"}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <span key={i} className="block">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right mr-4 text-ctp-overlay0 select-none">
                    {i + 1}
                  </span>
                )}
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

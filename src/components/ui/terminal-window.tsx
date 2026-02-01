"use client";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-ctp-surface1 bg-ctp-mantle overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-ctp-crust border-b border-ctp-surface1">
        <span className="w-3 h-3 rounded-full bg-ctp-red" />
        <span className="w-3 h-3 rounded-full bg-ctp-yellow" />
        <span className="w-3 h-3 rounded-full bg-ctp-green" />
        <span className="ml-2 text-xs text-ctp-overlay0">{title}</span>
      </div>
      <div className="p-4 overflow-x-auto">{children}</div>
    </div>
  );
}

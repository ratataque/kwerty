export function Footer() {
  return (
    <footer className="border-t border-ctp-surface1 bg-ctp-crust">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xs text-ctp-overlay0">
          <a
            href="https://github.com/ratataque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ctp-text transition-colors"
          >
            ratataque
          </a>
          <span className="text-ctp-surface1">&</span>
          <a
            href="https://github.com/GrimalDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ctp-text transition-colors"
          >
            GrimalDev
          </a>
        </div>
        <p className="text-xs text-ctp-overlay0">
          Press{" "}
          <kbd className="px-1.5 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-subtext0">
            ?
          </kbd>{" "}
          for help,{" "}
          <kbd className="px-1.5 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-subtext0">
            /
          </kbd>{" "}
          to search
        </p>
      </div>
    </footer>
  );
}

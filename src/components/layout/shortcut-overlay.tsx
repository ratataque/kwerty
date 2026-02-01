"use client";

interface ShortcutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  { key: "j / k", description: "Scroll down / up by section" },
  { key: "h / l", description: "Previous / next page" },
  { key: "g g", description: "Go to top" },
  { key: "G", description: "Go to bottom" },
  { key: "/", description: "Open search" },
  { key: "?", description: "Toggle this help" },
  { key: "1-4", description: "Jump to nav item" },
  { key: "Esc", description: "Close overlay" },
];

export function ShortcutOverlay({ isOpen, onClose }: ShortcutOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-ctp-crust/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md mx-4 rounded-lg border border-ctp-surface1 bg-ctp-mantle shadow-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-ctp-surface1 flex items-center justify-between">
          <span className="text-sm text-ctp-text">:help keybindings</span>
          <kbd className="px-1.5 py-0.5 text-xs bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-overlay0">
            esc
          </kbd>
        </div>
        <div className="p-4">
          <table className="w-full text-sm">
            <tbody>
              {shortcuts.map((s) => (
                <tr key={s.key} className="border-b border-ctp-surface0/50">
                  <td className="py-2 pr-4">
                    <kbd className="px-2 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded text-ctp-green text-xs">
                      {s.key}
                    </kbd>
                  </td>
                  <td className="py-2 text-ctp-subtext0">{s.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

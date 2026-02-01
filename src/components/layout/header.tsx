"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/navigation";

interface HeaderProps {
    onToggleHelp: () => void;
}

export function Header({ onToggleHelp }: HeaderProps) {
    const pathname = usePathname();

    const currentSection =
        mainNav.find((item) => {
            if (item.href === "/") return pathname === "/";
            return pathname.startsWith(item.href);
        })?.label ?? "";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ctp-crust border-b border-ctp-surface1">
            <div className="flex items-center justify-between h-10 px-2 sm:px-4">
                {/* Left: Logo + Current Section */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <Link
                        href="/"
                        className="text-ctp-green font-bold text-xs sm:text-sm shrink-0"
                    >
                        kwerty
                    </Link>
                    {currentSection && (
                        <>
                            <span className="text-ctp-surface1 hidden xs:inline">
                                |
                            </span>
                            <span className="text-xs text-ctp-overlay0 truncate hidden xs:inline">
                                {currentSection}
                            </span>
                        </>
                    )}
                </div>

                {/* Center: Navigation */}
                <nav className="flex items-center gap-0.5 sm:gap-1">
                    {mainNav.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-1.5 sm:px-3 py-1 text-[0.65rem] sm:text-xs rounded transition-colors ${
                                    isActive
                                        ? "text-ctp-green bg-ctp-surface0"
                                        : "text-ctp-subtext0 hover:text-ctp-text hover:bg-ctp-surface0/50"
                                }`}
                            >
                                {/* Show first letter on very small screens, full label on sm+ */}
                                <span className="sm:hidden">{item.label}</span>
                                <span className="hidden sm:inline">
                                    {item.label}
                                </span>
                                {item.shortcut && (
                                    <span className="ml-1.5 text-ctp-overlay0 hidden md:inline">
                                        [{item.shortcut}]
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Vim indicator + Help */}
                <div className="flex items-center gap-1 sm:gap-2 text-xs text-ctp-overlay0 shrink-0">
                    <span className="hidden sm:inline">vim</span>
                    <button
                        onClick={onToggleHelp}
                        className="px-1.5 py-0.5 border border-ctp-surface1 rounded text-ctp-overlay0 hover:text-ctp-text hover:border-ctp-surface2 transition-colors"
                    >
                        ?
                    </button>
                </div>
            </div>
        </header>
    );
}

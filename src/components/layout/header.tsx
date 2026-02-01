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
            <div className="flex items-center justify-between h-10 px-4">
                <div className="flex items-center gap-3">
                    <Link href="/" className="text-ctp-green font-bold text-sm">
                        kwerty
                    </Link>
                    {currentSection && (
                        <>
                            <span className="text-ctp-surface1">|</span>
                            <span className="text-xs text-ctp-overlay0">
                                {currentSection}
                            </span>
                        </>
                    )}
                </div>

                <nav className="flex items-center gap-1">
                    {mainNav.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-1 text-xs rounded transition-colors ${
                                    isActive
                                        ? "text-ctp-green bg-ctp-surface0"
                                        : "text-ctp-subtext0 hover:text-ctp-text hover:bg-ctp-surface0/50"
                                }`}
                            >
                                {item.label}
                                {item.shortcut && (
                                    <span className="ml-1.5 text-ctp-overlay0">
                                        [{item.shortcut}]
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 text-xs text-ctp-overlay0">
                    <span>vim</span>
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

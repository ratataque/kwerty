import { AsciiArt } from "@/components/ui/ascii-art";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlobImage } from "@/components/ui/blob-image";
import { HeroTerminal } from "./hero-terminal";

const KWERTY_ASCII = `
██╗  ██╗██╗    ██╗███████╗██████╗ ████████╗██╗   ██╗
██║ ██╔╝██║    ██║██╔════╝██╔══██╗╚══██╔══╝╚██╗ ██╔╝
█████╔╝ ██║ █╗ ██║█████╗  ██████╔╝   ██║    ╚████╔╝ 
██╔═██╗ ██║███╗██║██╔══╝  ██╔══██╗   ██║     ╚██╔╝  
██║  ██╗╚███╔███╔╝███████╗██║  ██║   ██║      ██║   
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═╝   
`.trimStart();

const sections = [
    {
        title: "Configs",
        href: "/configs",
        badge: "terminal" as const,
        description:
            "Terminal, editor, WM, and tool configurations refined over 4+ years",
    },
    {
        title: "Keyboards",
        href: "/keyboards",
        badge: "keyboard" as const,
        description:
            "Split ergo layouts: Corne, TOTEM, and Kinesis 360 Pro with ZMK firmware",
    },
    {
        title: "About",
        href: "/about",
        badge: "platform" as const,
        description:
            "The philosophy and people behind keyboard-driven development",
    },
];

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
            {/* Hero: Blob + ASCII/Terminal - blob below on mobile, left side on desktop */}
            <section
                data-section
                className="mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full"
            >
                {/* Left: Blob image - below on mobile, left side on desktop */}
                <div className="shrink-0 order-2 lg:order-1 lg:ml-12 flex justify-center relative">
                    <BlobImage src="/ski.jpg" alt="Keyboard Setup" />
                </div>

                {/* Right: ASCII art and terminal */}
                <div className="flex flex-col items-center lg:items-start flex-1 w-full order-1 lg:order-2 lg:pl-12">
                    <AsciiArt art={KWERTY_ASCII} className="mb-6" />
                    <HeroTerminal />
                </div>
            </section>

            <section data-section className="mb-16">
                <h2 className="text-sm text-ctp-overlay0 mb-6 uppercase tracking-wider">
                    explore
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {sections.map((section) => (
                        <Card key={section.href} href={section.href}>
                            <div className="mb-2">
                                <Badge variant={section.badge}>
                                    {section.title}
                                </Badge>
                            </div>
                            <p className="text-sm text-ctp-subtext0">
                                {section.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            <section data-section className="w-[65%] min-w-fit">
                <div className="border border-ctp-surface1 rounded-lg bg-ctp-mantle p-6 text-center">
                    <p className="text-sm text-ctp-overlay0 mb-2">
                        Two setups. Three platforms. One philosophy.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-xs text-ctp-subtext0">
                        <span>
                            <span className="text-ctp-blue">ratataque</span> ·
                            Linux/Arch/Hyprland
                        </span>
                        <span className="text-ctp-surface1">|</span>
                        <span>
                            <span className="text-ctp-mauve">GrimalDev</span> ·
                            macOS/yabai
                        </span>
                    </div>
                </div>
            </section>

            <p className="text-center text-xs text-ctp-overlay0 mt-8">
                press{" "}
                <kbd className="px-1.5 py-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded">
                    j
                </kbd>{" "}
                to scroll
            </p>
        </div>
    );
}

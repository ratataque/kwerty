import { AsciiArt } from "@/components/ui/ascii-art";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <div className="max-w-4xl mx-auto px-4 py-16">
            <section
                data-section
                className="mb-16 text-center flex flex-col items-center"
            >
                <AsciiArt
                    art={KWERTY_ASCII}
                    className="mb-6 mx-auto inline-block"
                />
                <HeroTerminal />
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

            <section data-section>
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

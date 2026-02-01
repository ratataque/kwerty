import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteShell } from "@/components/layout/site-shell";
import { buildAllCommandPaletteItems } from "@/lib/content";
import "./globals.css";

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kwerty - Keyboard-Focused Workflow Hub",
  description:
    "A documentation hub for keyboard-driven developer workflows built over 4+ years on Linux, macOS, and Windows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const commandPaletteItems = buildAllCommandPaletteItems();

  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
          <SiteShell items={commandPaletteItems}>{children}</SiteShell>
        </body>
    </html>
  );
}

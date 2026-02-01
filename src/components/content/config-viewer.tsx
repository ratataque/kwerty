import { TerminalWindow } from "@/components/ui/terminal-window";

interface ConfigViewerProps {
  filename: string;
  language?: string;
  children: React.ReactNode;
}

export function ConfigViewer({
  filename,
  language,
  children,
}: ConfigViewerProps) {
  const title = language ? `${filename} [${language}]` : filename;

  return (
    <TerminalWindow title={title} className="my-4">
      {children}
    </TerminalWindow>
  );
}

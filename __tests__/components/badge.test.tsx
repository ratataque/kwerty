import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it("renders text content", () => {
    render(<Badge>test</Badge>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("applies variant styles", () => {
    const { container } = render(<Badge variant="terminal">term</Badge>);
    const badge = container.firstElementChild;
    expect(badge?.className).toContain("text-ctp-green");
  });

  it("applies default variant when none specified", () => {
    const { container } = render(<Badge>default</Badge>);
    const badge = container.firstElementChild;
    expect(badge?.className).toContain("text-ctp-subtext0");
  });

  it("applies custom className", () => {
    const { container } = render(<Badge className="custom">test</Badge>);
    const badge = container.firstElementChild;
    expect(badge?.className).toContain("custom");
  });
});

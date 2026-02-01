import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { TerminalWindow } from "@/components/ui/terminal-window";

afterEach(cleanup);

describe("TerminalWindow", () => {
  it("renders children", () => {
    const { getByText } = render(
      <TerminalWindow>
        <p>test content</p>
      </TerminalWindow>,
    );
    expect(getByText("test content")).toBeInTheDocument();
  });

  it("displays title", () => {
    const { getByText } = render(
      <TerminalWindow title="my-terminal">
        <p>content</p>
      </TerminalWindow>,
    );
    expect(getByText("my-terminal")).toBeInTheDocument();
  });

  it("uses default title", () => {
    const { getByText } = render(
      <TerminalWindow>
        <p>unique child text</p>
      </TerminalWindow>,
    );
    expect(getByText("terminal")).toBeInTheDocument();
  });

  it("has three colored dots", () => {
    const { container } = render(
      <TerminalWindow>
        <p>content</p>
      </TerminalWindow>,
    );
    const dots = container.querySelectorAll(".rounded-full");
    expect(dots).toHaveLength(3);
  });
});

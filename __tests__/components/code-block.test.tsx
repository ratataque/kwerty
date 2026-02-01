import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { CodeBlock } from "@/components/ui/code-block";

afterEach(cleanup);

describe("CodeBlock", () => {
  it("renders code content", () => {
    const { getByText } = render(<CodeBlock code="const x = 1;" />);
    expect(getByText("const x = 1;")).toBeInTheDocument();
  });

  it("shows filename header when provided", () => {
    const { getByText } = render(
      <CodeBlock code="test" filename="config.lua" />,
    );
    expect(getByText("config.lua")).toBeInTheDocument();
  });

  it("shows language badge when provided", () => {
    const { getByText } = render(
      <CodeBlock code="test" filename="config.lua" language="lua" />,
    );
    expect(getByText("lua")).toBeInTheDocument();
  });

  it("shows line numbers by default", () => {
    const { container } = render(
      <CodeBlock code={"line1\nline2\nline3"} />,
    );
    const lineNumbers = container.querySelectorAll(".select-none");
    expect(lineNumbers).toHaveLength(3);
    expect(lineNumbers[0].textContent).toBe("1");
    expect(lineNumbers[1].textContent).toBe("2");
    expect(lineNumbers[2].textContent).toBe("3");
  });

  it("hides line numbers when disabled", () => {
    const { container } = render(
      <CodeBlock code="line1" showLineNumbers={false} />,
    );
    const lineNumbers = container.querySelectorAll(".select-none");
    expect(lineNumbers).toHaveLength(0);
  });

  it("has copy button when filename is present", () => {
    const { getByLabelText } = render(
      <CodeBlock code="test" filename="file.ts" />,
    );
    expect(getByLabelText("Copy code")).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/card";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card>
        <p>card content</p>
      </Card>,
    );
    expect(screen.getByText("card content")).toBeInTheDocument();
  });

  it("renders as link when href provided", () => {
    const { container } = render(
      <Card href="/test">
        <p>linked card</p>
      </Card>,
    );
    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute("href")).toBe("/test");
  });

  it("renders as div when no href", () => {
    const { container } = render(
      <Card>
        <p>static card</p>
      </Card>,
    );
    const link = container.querySelector("a");
    expect(link).toBeNull();
  });

  it("shows title in header", () => {
    render(
      <Card title="Card Title">
        <p>content</p>
      </Card>,
    );
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("shows accent dot when accent provided", () => {
    const { container } = render(
      <Card accent="#a6e3a1">
        <p>content</p>
      </Card>,
    );
    const dot = container.querySelector(".rounded-full");
    expect(dot).toBeInTheDocument();
  });
});

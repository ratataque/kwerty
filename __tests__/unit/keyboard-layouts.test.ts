import { describe, it, expect } from "vitest";
import {
  corneLayout,
  totemLayout,
  kinesisLayout,
  allKeyboardLayouts,
} from "@/lib/keyboard-layouts";

describe("corneLayout", () => {
  it("has correct metadata", () => {
    expect(corneLayout.id).toBe("corne");
    expect(corneLayout.name).toBe("Corne (CRKBD)");
    expect(corneLayout.rows).toBe(4);
    expect(corneLayout.cols).toBe(13);
  });

  it("has three layers", () => {
    expect(corneLayout.layers).toHaveLength(3);
    expect(corneLayout.layers[0].name).toBe("QWERTY");
    expect(corneLayout.layers[1].name).toBe("Symbols");
    expect(corneLayout.layers[2].name).toBe("Nav");
  });

  it("QWERTY layer has 42 keys", () => {
    expect(corneLayout.layers[0].keys).toHaveLength(42);
  });

  it("keys have required properties", () => {
    const key = corneLayout.layers[0].keys[0];
    expect(key).toHaveProperty("x");
    expect(key).toHaveProperty("y");
    expect(key).toHaveProperty("w");
    expect(key).toHaveProperty("h");
    expect(key).toHaveProperty("tap");
    expect(key).toHaveProperty("row");
    expect(key).toHaveProperty("col");
  });

  it("contains expected alpha keys", () => {
    const qwerty = corneLayout.layers[0].keys;
    const taps = qwerty.map((k) => k.tap);
    expect(taps).toContain("Q");
    expect(taps).toContain("A");
    expect(taps).toContain("Z");
    expect(taps).toContain("Space");
  });
});

describe("totemLayout", () => {
  it("has correct metadata", () => {
    expect(totemLayout.id).toBe("totem");
    expect(totemLayout.rows).toBe(4);
  });

  it("has fewer keys than Corne", () => {
    expect(totemLayout.layers[0].keys.length).toBeLessThan(
      corneLayout.layers[0].keys.length,
    );
  });
});

describe("kinesisLayout", () => {
  it("has correct metadata", () => {
    expect(kinesisLayout.id).toBe("kinesis-360");
    expect(kinesisLayout.rows).toBe(5);
  });

  it("has more keys than Corne", () => {
    expect(kinesisLayout.layers[0].keys.length).toBeGreaterThan(
      corneLayout.layers[0].keys.length,
    );
  });
});

describe("allKeyboardLayouts", () => {
  it("contains all three layouts", () => {
    expect(Object.keys(allKeyboardLayouts)).toHaveLength(3);
    expect(allKeyboardLayouts).toHaveProperty("corne");
    expect(allKeyboardLayouts).toHaveProperty("totem");
    expect(allKeyboardLayouts).toHaveProperty("kinesis-360");
  });
});

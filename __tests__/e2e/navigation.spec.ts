import { test, expect } from "@playwright/test";

test.describe("Site navigation", () => {
  test("home page loads with ASCII art", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("pre")).toBeVisible();
    await expect(page.getByText("kwerty --explore")).toBeVisible();
  });

  test("navigates to configs via card", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Configs").click();
    await expect(page).toHaveURL("/configs");
    await expect(page.getByText("Terminal")).toBeVisible();
  });

  test("navigates to keyboards", async ({ page }) => {
    await page.goto("/keyboards");
    await expect(page.getByText("Corne (CRKBD)")).toBeVisible();
    await expect(page.getByText("TOTEM")).toBeVisible();
  });

  test("navigates to about page", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("ratataque")).toBeVisible();
    await expect(page.getByText("GrimalDev")).toBeVisible();
  });

  test("config detail page renders MDX", async ({ page }) => {
    await page.goto("/configs/terminal/kitty");
    await expect(page.getByText("Kitty Terminal")).toBeVisible();
    await expect(page.getByText("GPU-accelerated")).toBeVisible();
  });

  test("keyboard detail page renders layout", async ({ page }) => {
    await page.goto("/keyboards/corne");
    await expect(page.getByText("Corne (CRKBD)")).toBeVisible();
    await expect(page.locator("svg")).toBeVisible();
  });
});

test.describe("Vim keyboard navigation", () => {
  test("/ opens command palette", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("/");
    await expect(page.getByPlaceholder("Search...")).toBeVisible();
  });

  test("Escape closes command palette", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("/");
    await expect(page.getByPlaceholder("Search...")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByPlaceholder("Search...")).not.toBeVisible();
  });

  test("? opens shortcut overlay", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("?");
    await expect(page.getByText(":help keybindings")).toBeVisible();
  });

  test("number keys navigate to pages", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("2");
    await expect(page).toHaveURL("/configs");
  });
});

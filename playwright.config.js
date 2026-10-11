// @ts-check
import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  // retries: process.env.CI ? 2 : 0,
  retries: 0,

  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on",
    video: "retain-on-failure", //  We need to add this because the line is not generated during initial setup.
    headless: false,
    launchOptions: {
      slowMo: 300, // Can do playback in slowmotion by using this tag
    },
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        Viewport: { width: 1351, height: 633 },
      },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

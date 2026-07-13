import { defineConfig, devices } from "@playwright/test";

const E2E_HOST = "127.0.0.1";
const E2E_PORT = 3100;
const E2E_BASE_URL = `http://${E2E_HOST}:${E2E_PORT}`;
const E2E_BUILD_DIRECTORY = ".next-e2e";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: E2E_BASE_URL,
    trace: "on-first-retry",
  },
  webServer: {
    command: `node ./scripts/prepare-e2e.mjs && NEXT_DIST_DIR=${E2E_BUILD_DIRECTORY} corepack pnpm exec next dev --webpack --hostname ${E2E_HOST} --port ${E2E_PORT}`,
    url: E2E_BASE_URL,
    reuseExistingServer: false,
    cwd: ".",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});

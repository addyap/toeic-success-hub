import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";

// Vitest's default file glob (**/*.spec.ts) also matches the Playwright
// specs under e2e/ — scope it to this project's actual unit/integrity tests
// so `bun run test` doesn't try (and fail) to run Playwright files itself.
export default defineConfig({
  plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] })],
  test: {
    include: ["src/**/*.test.ts"],
  },
});

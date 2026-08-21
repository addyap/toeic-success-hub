import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Lightning CSS's `targets` uses this (major<<16 | minor<<8 | patch) packed
// encoding (matching its own browserslistToTargets helper) rather than plain
// version numbers.
function browserVersion(major: number, minor = 0, patch = 0): number {
  return (major << 16) | (minor << 8) | patch;
}

// Deliberately well below the oklch() support baseline (~Safari 15.4 / Chrome
// 111 / Firefox 113, early-to-mid 2023) so Lightning CSS auto-inserts a
// legacy rgb() fallback ahead of every oklch() value in styles.css.
const lightningcssTargets = {
  chrome: browserVersion(90),
  firefox: browserVersion(88),
  safari: browserVersion(14),
  edge: browserVersion(90),
};

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      // TanStack Start's bundled server entry is redirected to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        defaultPreset: "cloudflare-module",
        // On Vercel, target the Vercel preset so Nitro emits Vercel Functions
        // instead of the Cloudflare default.
        ...(process.env.VERCEL ? { preset: "vercel" } : {}),
      }),
    );
  }

  return {
    // Vite uses PostCSS in dev and Lightning CSS at build by default; forcing
    // Lightning CSS in both keeps dev and build CSS output consistent.
    css: {
      transformer: "lightningcss" as const,
      lightningcss: { targets: lightningcssTargets },
    },
    resolve: {
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    server: { host: "::", port: 8080 },
    plugins,
  };
});

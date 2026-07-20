import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { studyTips } from "@/data/studyTips";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/listening-reading", priority: "0.9", changefreq: "weekly" },
          { path: "/mock-test", priority: "0.9", changefreq: "weekly" },
          { path: "/speaking-writing", priority: "0.9", changefreq: "weekly" },
          { path: "/vocabulary", priority: "0.8", changefreq: "weekly" },
          { path: "/study-tips", priority: "0.8", changefreq: "weekly" },
          ...studyTips.map((tip) => ({
            path: `/study-tips/${tip.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
          // Low priority but indexed: search engines and app stores expect
          // reachable privacy/terms pages, and French law requires the
          // mentions légales to be publicly accessible.
          { path: "/privacy", priority: "0.3", changefreq: "yearly" },
          { path: "/terms", priority: "0.3", changefreq: "yearly" },
          { path: "/legal", priority: "0.3", changefreq: "yearly" },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url><loc>${SITE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

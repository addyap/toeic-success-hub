import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import heroImg from "../assets/hero-study.jpg";
import { absoluteUrl, SITE_NAME, SITE_URL } from "../lib/site";

const ogImage = absoluteUrl(heroImg);

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Prepare for every TOEIC skill — Listening, Reading, Speaking and Writing — with structured guides, interactive practice, timed drills, and a smart vocabulary builder.",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ToeicPath — Modern TOEIC Test Preparation" },
      {
        name: "description",
        content:
          "Prepare for every TOEIC skill — Listening, Reading, Speaking and Writing — with structured guides, interactive practice, timed drills, and a smart vocabulary builder.",
      },
      { name: "author", content: "ToeicPath" },
      { property: "og:title", content: "ToeicPath — Modern TOEIC Test Preparation" },
      {
        property: "og:description",
        content:
          "Structured guides, interactive practice, and vocabulary tools to boost your TOEIC score.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "960" },
      { property: "og:image:alt", content: "A learner studying for the TOEIC at her desk" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      // Preload the latin subset of each self-hosted font — the one that
      // actually renders for the vast majority of visitors — so the browser
      // starts fetching it immediately instead of waiting to parse the CSS
      // first. Every page opens on a heading (Fraunces) plus body copy (Plus
      // Jakarta Sans), so both are on the critical rendering path.
      {
        rel: "preload",
        href: "/fonts/fraunces-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/plus-jakarta-sans-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      // Fonts are self-hosted (see the @font-face rules in styles.css) rather
      // than loaded from fonts.googleapis.com/fonts.gstatic.com, so no
      // preconnect or external stylesheet is needed here — that avoided a
      // third-party request disclosing every visitor's IP to Google.
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Sets the `dark` class before first paint so there is no flash of the wrong
// theme: this runs synchronously in <head>, ahead of body paint, reading the
// same localStorage key ("toeicpath:theme") and system-preference fallback
// that useTheme() (src/lib/theme.ts) reads after hydration. Kept as a plain
// string (not a module import) because it must execute standalone, before any
// bundled JS has loaded.
const THEME_INIT_SCRIPT = `(function(){try{
  var t=localStorage.getItem("toeicpath:theme");
  var dark=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);
  if(dark)document.documentElement.classList.add("dark");
}catch(e){}})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          // Static, hand-written string with no user input — not an XSS vector.
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          // Static, hardcoded JSON — no user input, so this is not an XSS vector.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6fe5c566-e81f-4ca4-a9b3-f7ed4ca5e002"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      {/* Vercel Web Analytics. Like Umami it is cookieless, so it adds no
          consent-banner requirement — but it is a second processor and is
          named as such in /privacy.

          It injects its script from a mount effect, so it lives in the client
          component tree here rather than in RootShell (the document shell).
          Locally it reports mode "development" and loads the debug script, so
          dev traffic does not reach production analytics. */}
      <Analytics />
    </>
  );
}

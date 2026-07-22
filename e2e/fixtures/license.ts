/** A pre-computed token signed with the dev-only test keypair (see
 *  TEST_PUBLIC_KEY_JWK in src/lib/license.ts). Only verifies as valid when
 *  the app is running in a Vite dev build (`import.meta.env.DEV`) — which
 *  is exactly what Playwright's webServer runs, and never what a real
 *  customer's production build serves. Lets tests simulate "already
 *  purchased" without a real Stripe transaction or the real private key. */
export const TEST_VALID_LICENSE_TOKEN =
  "eyJ2IjoxLCJpYXQiOjE3ODQ3NTU2NzExOTZ9.hp1cocrSmGVPGvJKHeSwGI6bTxPpKNWc7wGieQhaL-PsW08pEIJ2uWGlIzUOuiq0BOhS2KZmQQLOjoW8nRIotw";

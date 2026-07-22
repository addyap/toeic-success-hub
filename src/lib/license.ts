/** Client-safe license verification for the one-time "full access" purchase.
 *
 * No accounts, no database: a purchase mints a signed token (see
 * license.server.ts) that this module can verify entirely offline using
 * Web Crypto — the public key below is not a secret, only the matching
 * private key (held server-side, never shipped here) can produce a token
 * that verifies successfully.
 *
 * Token shape: `${base64url(JSON payload)}.${base64url(ECDSA signature)}`.
 * Payload is `{ v: 1, iat: <purchase epoch ms> }` — a stable, unexpiring
 * grant. There is no revocation list, so a refund can't auto-revoke access;
 * that's a manual, accepted tradeoff for a project this size.
 */

const LICENSE_STORAGE_KEY = "toeicpath:license";

const PUBLIC_KEY_JWK: JsonWebKey = {
  crv: "P-256",
  ext: true,
  key_ops: ["verify"],
  kty: "EC",
  x: "A0gzGNmraJ7auvHb_hlItp7zJ8EjbpaDIW7InI4TX0A",
  y: "7gnb9dAlRST8sVHo-bQ6A0zIeH5ima3ReGA7feZRw9A",
};

/** A second, dedicated test-only keypair — its matching private key lives in
 *  e2e/fixtures/license.ts and is used to mint a "purchased" token for E2E
 *  tests, since a real license can only be minted by a real Stripe purchase.
 *  Safe to commit: `import.meta.env.DEV` is a Vite compile-time constant, so
 *  in a production build this whole branch (and this constant) is dead-code
 *  eliminated — a token signed by this key can NEVER verify in what a real
 *  customer receives, only against a local `vite dev` server. */
const TEST_PUBLIC_KEY_JWK: JsonWebKey = {
  crv: "P-256",
  ext: true,
  key_ops: ["verify"],
  kty: "EC",
  x: "qGhMoinpOHBT_nfTeTDuGkbdG7Cp0SiPBrU31XWTAeQ",
  y: "zCI7Fl-GLzJsxzs3ybpVAOJXAL1NI16foffRNsxdZkA",
};

interface LicensePayload {
  v: 1;
  iat: number;
}

function base64UrlToBytes(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

function importPublicKey(jwk: JsonWebKey): Promise<CryptoKey> {
  return crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, [
    "verify",
  ]);
}

/** Verifies a token against an arbitrary public key JWK — the real
 *  verification path is `verifyLicenseToken`, which pins this to the app's
 *  own embedded key; this exists so tests can check the sign/verify logic
 *  itself with a throwaway test keypair, without ever needing the app's
 *  real private key (which must never appear in committed code). */
export async function verifyLicenseTokenWithKey(
  token: string,
  publicKeyJwk: JsonWebKey,
): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payloadB64, sigB64] = parts;
  try {
    const payloadBytes = base64UrlToBytes(payloadB64);
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as LicensePayload;
    if (payload.v !== 1 || typeof payload.iat !== "number") return false;

    const key = await importPublicKey(publicKeyJwk);
    const signature = base64UrlToBytes(sigB64);
    return await crypto.subtle.verify(
      { name: "ECDSA", hash: "SHA-256" },
      key,
      signature as BufferSource,
      new TextEncoder().encode(payloadB64),
    );
  } catch {
    return false;
  }
}

/** Verifies a token's signature and shape against the app's real, embedded
 *  public key (and, only in dev builds, the test-only key — see
 *  TEST_PUBLIC_KEY_JWK). Does not check expiry — licenses don't expire —
 *  only that it was genuinely signed by a recognized key. */
export async function verifyLicenseToken(token: string): Promise<boolean> {
  if (await verifyLicenseTokenWithKey(token, PUBLIC_KEY_JWK)) return true;
  if (import.meta.env.DEV && (await verifyLicenseTokenWithKey(token, TEST_PUBLIC_KEY_JWK))) {
    return true;
  }
  return false;
}

export function getStoredLicenseToken(): string | null {
  try {
    return localStorage.getItem(LICENSE_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function storeLicenseToken(token: string): void {
  try {
    localStorage.setItem(LICENSE_STORAGE_KEY, token);
  } catch {
    // localStorage unavailable (private mode / disabled) — purchase still
    // succeeded server-side, but this device won't remember it locally.
  }
}

/** Reads the stored token (if any) and verifies it. Returns false if there's
 *  no token, it's malformed, or the signature doesn't check out. */
export async function hasValidLicense(): Promise<boolean> {
  const token = getStoredLicenseToken();
  if (!token) return false;
  return verifyLicenseToken(token);
}

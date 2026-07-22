/** Server-only counterpart to license.ts — mints signed license tokens.
 *
 * The .server.ts suffix keeps this out of the client bundle (see
 * vite.config.ts's importProtection / the convention documented in
 * config.server.ts). The private key never leaves this file's callers.
 */
import { getServerConfig } from "./config.server";

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function importPrivateKey(jwk: JsonWebKey): Promise<CryptoKey> {
  return crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, [
    "sign",
  ]);
}

/** Reads and imports the signing key fresh on every call — required on
 *  Cloudflare Workers, where env bindings resolve per-request, not at
 *  module scope (see config.server.ts's env-access convention). */
async function getConfiguredPrivateKey(): Promise<CryptoKey> {
  const raw = getServerConfig().licenseSigningPrivateKeyJwk;
  if (!raw) {
    throw new Error(
      "LICENSE_SIGNING_PRIVATE_KEY_JWK is not set — licenses can't be minted until it is.",
    );
  }
  return importPrivateKey(JSON.parse(raw) as JsonWebKey);
}

async function signToken(key: CryptoKey): Promise<string> {
  const payload = { v: 1 as const, iat: Date.now() };
  const payloadB64 = bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const signatureBuffer = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    new TextEncoder().encode(payloadB64),
  );
  const sigB64 = bytesToBase64Url(new Uint8Array(signatureBuffer));
  return `${payloadB64}.${sigB64}`;
}

/** Mints a token signed with an arbitrary private key JWK — the real minting
 *  path is `mintLicenseToken`, which uses the app's configured env-var key;
 *  this exists so tests can exercise the sign/verify round trip with a
 *  throwaway test keypair, never the real one. */
export async function mintLicenseTokenWithKey(privateKeyJwk: JsonWebKey): Promise<string> {
  return signToken(await importPrivateKey(privateKeyJwk));
}

/** Mints a signed, non-expiring "full access" license token using the app's
 *  real configured key. Call this only after independently confirming
 *  payment (see purchase.functions.ts) — this function itself has no
 *  knowledge of Stripe or payment state. */
export async function mintLicenseToken(): Promise<string> {
  return signToken(await getConfiguredPrivateKey());
}

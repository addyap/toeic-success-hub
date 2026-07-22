import { describe, expect, it } from "vitest";
import { verifyLicenseTokenWithKey, verifyLicenseToken } from "./license";
import { mintLicenseTokenWithKey } from "./license.server";

/** Every test here uses a throwaway keypair generated fresh, never the
 *  app's real production key — that key must never appear in committed
 *  code (see license.ts/license.server.ts header comments). */
async function generateTestKeyPair() {
  const { publicKey, privateKey } = await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    true,
    ["sign", "verify"],
  );
  return {
    publicJwk: (await crypto.subtle.exportKey("jwk", publicKey)) as JsonWebKey,
    privateJwk: (await crypto.subtle.exportKey("jwk", privateKey)) as JsonWebKey,
  };
}

describe("license sign/verify round trip", () => {
  it("a token signed with the private key verifies against the matching public key", async () => {
    const { publicJwk, privateJwk } = await generateTestKeyPair();
    const token = await mintLicenseTokenWithKey(privateJwk);
    expect(await verifyLicenseTokenWithKey(token, publicJwk)).toBe(true);
  });

  it("rejects a token whose signature has been tampered with", async () => {
    const { publicJwk, privateJwk } = await generateTestKeyPair();
    const token = await mintLicenseTokenWithKey(privateJwk);
    // Flip a character in the middle of the signature, not the last one —
    // base64url's trailing character can encode unused "don't care" padding
    // bits, so mutating only the very last char occasionally decodes to the
    // exact same bytes and the token still (correctly) verifies. Middle of
    // the string is always a real coded byte.
    const mid = Math.floor(token.length / 2);
    const replacement = token[mid] === "A" ? "B" : "A";
    const tampered = token.slice(0, mid) + replacement + token.slice(mid + 1);
    expect(await verifyLicenseTokenWithKey(tampered, publicJwk)).toBe(false);
  });

  it("rejects a token signed by a different keypair entirely", async () => {
    const keyA = await generateTestKeyPair();
    const keyB = await generateTestKeyPair();
    const token = await mintLicenseTokenWithKey(keyA.privateJwk);
    expect(await verifyLicenseTokenWithKey(token, keyB.publicJwk)).toBe(false);
  });

  it("rejects malformed tokens without throwing", async () => {
    const { publicJwk } = await generateTestKeyPair();
    for (const garbage of ["", "not-a-token", "a.b.c", "onlyonepart", ".", "..", "a."]) {
      expect(await verifyLicenseTokenWithKey(garbage, publicJwk)).toBe(false);
    }
  });

  it("rejects a well-formed but re-encoded fake payload (can't forge without the private key)", async () => {
    const { publicJwk, privateJwk } = await generateTestKeyPair();
    const real = await mintLicenseTokenWithKey(privateJwk);
    const [, sig] = real.split(".");
    // Swap in a different payload but keep the original (now-mismatched) signature.
    const forgedPayload = btoa(JSON.stringify({ v: 1, iat: 0 }))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    expect(await verifyLicenseTokenWithKey(`${forgedPayload}.${sig}`, publicJwk)).toBe(false);
  });

  it("the real verifyLicenseToken path also rejects tokens signed by an unrelated key", async () => {
    // Doesn't need the app's real private key — just proves an attacker who
    // generates their own keypair can't mint a token that verifies against
    // the app's actual embedded public key.
    const attacker = await generateTestKeyPair();
    const forgedToken = await mintLicenseTokenWithKey(attacker.privateJwk);
    expect(await verifyLicenseToken(forgedToken)).toBe(false);
  });
});

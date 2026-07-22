import { useEffect, useState } from "react";
import { hasValidLicense } from "./license";

/** null while the (async, Web Crypto) check is in flight — callers should
 *  treat null as "not yet known" rather than "unlicensed", so gated content
 *  doesn't flash open-then-shut for an owner whose license just hasn't
 *  verified yet. */
export function useLicense(): boolean | null {
  const [licensed, setLicensed] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    hasValidLicense().then((v) => {
      if (!cancelled) setLicensed(v);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return licensed;
}

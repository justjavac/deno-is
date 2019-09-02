import ci from "https://deno.land/x/ci/mod.ts";

/**
 * Return `true` if the process is running on the CI server.
 *
 * Requires the `--allow-env` flag.
 */
export async function isCI(): Promise<boolean> {
  return ci.isCI;
}

/**
 * Return `true` if the process is running on the CI server synchronously.
 *
 * Requires the `--allow-env` flag.
 */
export function isCISync(): boolean {
  return ci.isCI;
}

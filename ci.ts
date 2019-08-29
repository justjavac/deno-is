import ci from "https://deno.land/x/ci/mod.ts";

/**
 * Return `true` if the process is running on the CI server
 *
 * Requires the `--allow-env` flag.
 */
export default function isCI(): boolean {
  return ci.isCI;
}

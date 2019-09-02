import { hasOwnProperty } from "./util.ts";

function hasSSHClient(): boolean {
  return hasOwnProperty(Deno.env(), "SSH_CLIENT");
}

/**
 * Return `true` if the process is running inside SSH.
 *
 * Requires the `--allow-env` flag.
 */
export async function isSSH(): Promise<boolean> {
  return hasSSHClient();
}

/**
 * Return `true` if the process is running inside SSH synchronously.
 *
 * Requires the `--allow-env` flag.
 */
export function isSSHSync(): boolean {
  return hasSSHClient();
}

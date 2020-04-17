import { readFileStr, readFileStrSync } from "https://deno.land/std/fs/mod.ts";

// see: https://github.com/sindresorhus/is-wsl

/**
 * Return `true` if the process is running inside [Windows Subsystem for Linux][1](Bash on Windows).
 *
 * [1]: https://msdn.microsoft.com/commandline/wsl/about
 * 
 * Requires the `--allow-read` flag.
 */
export async function isWsl(): Promise<boolean> {
  if (Deno.build.os !== "linux") {
    return false;
  }

  try {
    const fullversion: string = await readFileStr("/proc/version");
    return fullversion.toLowerCase().includes("microsoft");
  } catch {
    return false;
  }
}

/**
 * Return `true` if the process is running inside [Windows Subsystem for Linux][1](Bash on Windows) synchronously.
 *
 * [1]: https://msdn.microsoft.com/commandline/wsl/about
 * 
 * Requires the `--allow-read` flag.
 */
export function isWslSync(): boolean {
  if (Deno.build.os !== "linux") {
    return false;
  }

  try {
    const fullversion: string = readFileStrSync("/proc/version");
    return fullversion.toLowerCase().includes("microsoft");
  } catch {
    return false;
  }
}

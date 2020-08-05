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
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile("/proc/version");
    const fullversion: string = decoder.decode(data);
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
    const decoder = new TextDecoder("utf-8");
    const data = Deno.readFileSync("/proc/version");
    const fullversion: string = decoder.decode(data);
    return fullversion.toLowerCase().includes("microsoft");
  } catch {
    return false;
  }
}

import { decode } from "https://deno.land/std/strings/decode.ts";

/**
 * Return `true` if is set to dark mode/theme.
 *
 * see https://stackoverflow.com/questions/25207077/how-to-detect-if-os-x-is-in-dark-mode
 *
 * Requires the `--allow-run` flag.
 */
export async function isDarkMode(): Promise<boolean> {
  if (Deno.platform.os === "mac") {
    try {
      const process: Deno.Process = Deno.run({
        args: ["defaults", "read", "-g", "AppleInterfaceStyle"],
        stdout: "piped",
        stderr: "null"
      });
      const output: string = decode(await process.output());
      process.kill(Deno.Signal.SIGKILL);
      return output.includes("Dark");
    } catch {
      return false;
    }
  }

  return false;
}

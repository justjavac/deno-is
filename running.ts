// see: http://man7.org/linux/man-pages/man2/kill.2.html

/**
 * Return `true` if the given PID is running
 *
 * Requires the `--allow-run` flag.
 */
export default function isRunning(pid: number): boolean {
  try {
    Deno.kill(pid, Deno.Signal.SIGURG);
    return true;
  } catch (e) {
    return (
      e.name === "PermissionDenied" || e.message !== "ESRCH: No such process"
    );
  }
}

import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

// see: https://github.com/sindresorhus/is-docker

function hasDockerEnv(): boolean {
  try {
    Deno.statSync("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}

function hasDockerCGroup(): boolean {
  try {
    return readFileStrSync("/proc/self/cgroup").includes("docker");
  } catch {
    return false;
  }
}

/**
 * Return `true` if the process is running inside a Docker container.
 * 
 * Requires the `--allow-read` flag.
 */
export default function isDocker(): boolean {
  return hasDockerEnv() || hasDockerCGroup();
}

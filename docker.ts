import { readFileStr, readFileStrSync } from "https://deno.land/std/fs/mod.ts";

// see: https://github.com/sindresorhus/is-docker

async function hasDockerEnv(): Promise<boolean> {
  try {
    await Deno.stat("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}

function hasDockerEnvSync(): boolean {
  try {
    Deno.statSync("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}

async function hasDockerCGroup(): Promise<boolean> {
  try {
    return (await readFileStr("/proc/self/cgroup")).includes("docker");
  } catch {
    return false;
  }
}

function hasDockerCGroupSync(): boolean {
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
export async function isDocker(): Promise<boolean> {
  return await hasDockerEnv() || await hasDockerCGroup();
}

/**
 * Return `true` if the process is running inside a Docker container synchronously.
 *
 * Requires the `--allow-read` flag.
 */
export function isDockerSync(): boolean {
  return hasDockerEnvSync() || hasDockerCGroupSync();
}

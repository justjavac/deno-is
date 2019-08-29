import { test, assert } from "./deps.ts";

import isRunning from "../running.ts";

test({
  name: "not running",
  fn(): void {
    assert(!isRunning(12345678));
  }
});

test({
  name: "running",
  fn(): void {
    assert(isRunning(Deno.pid));
  }
});

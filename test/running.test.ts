import { test, assert } from "./deps.ts";

import {isRunning, isRunningSync} from "../running.ts";

test({
  name: "not running",
  fn(): void {
    assert(!isRunningSync(12345678));
  }
});

test({
  name: "running",
  fn(): void {
    assert(isRunningSync(Deno.pid));
  }
});

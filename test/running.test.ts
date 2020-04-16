import { assert } from "./deps.ts";

import { isRunningSync } from "../running.ts";

// Deno.test({
//   name: "not running",
//   fn(): void {
//     assert(!isRunningSync(12345678));
//   },
// });

Deno.test({
  name: "running",
  fn(): void {
    assert(isRunningSync(Deno.pid));
  },
});

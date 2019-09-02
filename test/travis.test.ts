import { runTests, test, assertEquals, assert } from "./deps.ts";

import { isCI, isCISync } from "../ci.ts";

test(function isTravisCISync(): void {
  assert(isCISync());
});

test(async function isTravisCI(): Promise<void> {
  assert(await isCI());
});

runTests();

import { runTests, test, assertEquals, assert } from "./deps.ts";

import isCI from "../ci.ts";

test(function isTravisCI(): void {
  assert(isCI());
});

runTests();

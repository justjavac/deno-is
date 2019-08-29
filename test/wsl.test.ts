import { test, assert } from "./deps.ts";

import isWsl from "../wsl.ts";

test({
  name: "not inside WSL",
  fn(): void {
    assert(!isWsl());
  }
});

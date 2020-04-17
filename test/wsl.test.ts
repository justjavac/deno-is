import { assert } from "./deps.ts";

import { isWsl, isWslSync } from "../wsl.ts";

Deno.test({
  name: "not inside WSL synchronously",
  fn(): void {
    assert(!isWslSync());
  },
});

Deno.test({
  name: "not inside WSL",
  async fn(): Promise<void> {
    assert(!await isWsl());
  },
});

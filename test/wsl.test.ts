import { test, assert } from "./deps.ts";

import {isWsl, isWslSync} from "../wsl.ts";

test({
  name: "not inside WSL synchronously",
  fn(): void {
    assert(!isWslSync());
  }
});

test({
  name: "not inside WSL",
  async fn(): Promise<void> {
    assert(!await isWsl());
  }
});

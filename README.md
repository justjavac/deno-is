# deno-is

[![tag](https://img.shields.io/github/release/justjavac/deno-is)](https://github.com/justjavac/deno-is/releases)
[![Build Status](https://github.com/justjavac/deno-is/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno-is/actions)
[![license](https://img.shields.io/github/license/justjavac/deno-is)](https://github.com/justjavac/deno-is/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.2-green.svg)](https://github.com/denoland/deno)

> Detect the running environment and context of the current script.

## Usage

```ts
import { isRunning, isRunningSync, isCI, isCISync } from "https://deno.land/x/is/mod.ts";

isCISync();
// => false
isRunningSync(Deno.pid);
// => true

await isCI();
// => false
await isRunning(Deno.pid);
// => true

```

or

```ts
import { isCI, isCISync } from "https://deno.land/x/is/ci.ts";

isCISync();
// => false

await isCI();
// => false
```

## Available methods

_alphabetical order_:

| Methods                     | Description                                                                            |
|-----------------------------|----------------------------------------------------------------------------------------|
| `isCI`/`isCISync`           | Whether the process is running on the CI server                                        |
| `isDocker`/`isDockerSync`   | Whether the process is running inside Docker                                           |
| `isGzip`/`isGzipSync`       | Whether a `Uint8Array` is a gzip file                                                  |
| `isRunning`/`isRunningSync` | Whether the process(pid) is running                                                    |
| `isSSH`/`isSSHSync`         | Whether the process is running inside SSH                                              |
| `isWsl`/`isWslSync`         | Whether the process is running inside [Windows Subsystem for Linux][1]                 |

[1]: https://msdn.microsoft.com/commandline/wsl/about

### Credits

- [justjavac](https://github.com/justjavac)

### License

[deno-is](https://github.com/justjavac/deno-is) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.

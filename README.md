# Deno Is

[![Build Status](https://travis-ci.com/justjavac/deno-is.svg?branch=master)](https://travis-ci.com/justjavac/deno-is)

> Detect the running environment and context of the current script.

## Usage

```ts
import { isCI, isWsl } from "https://deno.land/x/is/mod.ts";

isCI();
// => false
isWsl();
// => false
```

or

```ts
import isCI from "https://deno.land/x/is/ci.ts";
isCI();
// => false

import isWsl from "https://deno.land/x/is/wsl.ts";
isWsl();
// => false
```

## Available methods

_alphabetical order_:

| Methods    | Description                                                                            |
|------------|----------------------------------------------------------------------------------------|
| `isCI`     | Whether the process is running on the CI server                                        |
| `isDocker` | Whether the process is running inside Docker                                           |
| `isGzip`   | Whether a `Uint8Array` is a gzip file                                                  |
| `isRunning`| Whether the process(pid) is running                                                    |
| `isWsl`    | Whether the process is running inside [Windows Subsystem for Linux][1]                 |

[1]: https://msdn.microsoft.com/commandline/wsl/about)

### Credits

- [justjavac](https://github.com/justjavac)

### License

[deno-is](https://github.com/justjavac/deno-is) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.

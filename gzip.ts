/**
 * Return `true` if `src` is a gzip file.
 */
export async function isGzip(src: Uint8Array): Promise<boolean> {
  if (src.length < 3) {
    return false;
  }

  return src[0] === 0x1f && src[1] === 0x8b && src[2] === 0x08;
}

/**
 * Return `true` if `src` is a gzip file synchronously.
 */
export function isGzipSync(src: Uint8Array): boolean {
  if (src.length < 3) {
    return false;
  }

  return src[0] === 0x1f && src[1] === 0x8b && src[2] === 0x08;
}

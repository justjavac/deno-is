/**
 * Return `true` if `src` is a gzip file
 */
export default function isGzip(src: Uint8Array): boolean {
  if (src.length < 3) {
    return false;
  }

  return src[0] === 0x1f && src[1] === 0x8b && src[2] === 0x08;
}

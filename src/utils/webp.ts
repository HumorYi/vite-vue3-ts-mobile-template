// 检测WebP支持
export function isWebpSupported() {
  // 非浏览器环境或不支持 Canvas
  if (!window?.CanvasRenderingContext2D) return false

  return document
    .createElement('canvas')
    .toDataURL('image/webp')
    .startsWith('data:image/webp')
}

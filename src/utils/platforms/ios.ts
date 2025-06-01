export function initIos() {
  document.addEventListener('blur', fixInputScroll, true)
}

export function fixInputScroll(e: FocusEvent) {
  const target = e.target as HTMLElement

  if (!['INPUT', 'TEXTAREA'].includes(target.tagName)) return

  setTimeout(() => {
    scrollTo(0, document.documentElement.scrollTop || document.body.scrollTop)
  }, 100)
}

export function handleIosCommunicate(api: string, params: object) {
  // iOS示例：通过WKWebView的messageHandlers
  window.webkit?.messageHandlers?.[api]?.postMessage(params)
}

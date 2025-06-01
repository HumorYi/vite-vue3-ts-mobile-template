export function initAndriod() {
  window.addEventListener('resize', () => {
    fixPositionFixed()
  })
}

export function fixPositionFixed() {
  document.body.style.overflow = 'auto'

  setTimeout(() => {
    document.body.style.overflow = ''
  }, 100)
}

export function handleAndriodCommunicate(api: string, params: object) {
  // Android示例：假设原生已注入window.AndroidBridge对象
  window.AndroidBridge?.[api](params)
}

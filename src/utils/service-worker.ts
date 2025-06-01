// 对不支持 SW 的浏览器提供备选逻辑
self.addEventListener('install', (event: Event) => {
  console.log(event)
  // 兼容检查
  if ('cache' in self) {
    // 正常缓存逻辑
  } else {
    // 降级处理（如使用localStorage存储简单资源）
  }
})

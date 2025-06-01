/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    AndroidBridge: any
    webkit: any
    wx: any
  }
}

// 确保文件被视为模块
export {}

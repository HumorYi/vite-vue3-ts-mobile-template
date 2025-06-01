export const isWechat = /MicroMessenger/i.test(navigator.userAgent)

export function initWechat() {}

// 微信JSSDK调用兼容
export async function handleWechatCommunicate(api: string, params: object) {
  return new Promise((resolve, reject) =>
    window.wx?.ready(() => {
      window.wx[api]({
        ...params,
        success: resolve,
        fail: reject
      })
    })
  )
}

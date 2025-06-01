import { isAndroid, isIOS } from 'vue-device-detect'

import { handleAndriodCommunicate, initAndriod } from './android'
import { handleIosCommunicate, initIos } from './ios'
import { handleWechatCommunicate, initWechat, isWechat } from './wechat'

export function initPlatforms() {
  if (isWechat) initWechat()

  if (isAndroid) initAndriod()
  else if (isIOS) initIos()
}

export async function handlePlatformsCommunicate(api: string, params: object) {
  let fn

  if (isWechat) fn = handleWechatCommunicate
  else if (isAndroid) fn = handleAndriodCommunicate
  else if (isIOS) fn = handleIosCommunicate

  if (!fn) return

  const data = await fn(api, params)

  return data
}

export function initDev() {
  import('vconsole').then(({ default: VConsole }) => new VConsole())
}

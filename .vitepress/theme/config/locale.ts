/**
 * 国际化全局统一配置参数
 */
export const LOCALE = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US'
  // ...更多语言
}

export const localeSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.EN_US,
  // Available Locales
  availableLocales: Object.values(LOCALE)
}

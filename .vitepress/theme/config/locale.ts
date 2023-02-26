/**
 * 国际化全局统一配置参数
 */
export const LOCALE = {
  ZH_CN: 'zh_CN',
  EN_US: 'en_US'
  // ...更多语言
}

export const localeList = [
  {
    text: '简体中文',
    building: false,
    event: LOCALE.ZH_CN
  },
  {
    text: 'English',
    building: true,
    event: LOCALE.EN_US
  }
  // ...更多语言
]

export const localeSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.EN_US,
  // available Locales
  availableLocales: Object.values(LOCALE) // ...更多语言
}

import { LOCALE, localeSetting } from '../config/locale'

// 是否支持该语言
export function supportLanguage(lang: string) {
  const localeList = Object.values(localeSetting.availableLocales)
  return localeList.includes(lang) ? lang : ''
}

// 判断当前文档语言
export function getCurrentLanguage() {
  const currentLocale =
    document.documentElement.lang || location.pathname === '/'
      ? LOCALE.ZH_CN
      : LOCALE.EN_US
  return currentLocale
}

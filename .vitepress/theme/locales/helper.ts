import { LOCALE } from '../config/locale'

// 路径和语言映射表 (默认为中文)
const langAndPathnameMap: Record<string, string> = {
  // '': LOCALE.ZH_CN,
  en: LOCALE.EN_US
}

// 判断当前文档语言 (SSR 问题目前走 vue 生命周期逻辑判断，会有滞后问题)
export function getCurrentLanguage() {
  // const pathLang = location.pathname.slice(1).split('/')[0]
  // let currLang = ''

  // for (const key in langAndPathnameMap) {
  //   if (
  //     Object.prototype.hasOwnProperty.call(langAndPathnameMap, key) &&
  //     key === pathLang
  //   ) {
  //     currLang = langAndPathnameMap[key]
  //   }
  // }

  // const currentLocale =
  //   document.documentElement.lang || currLang || LOCALE.ZH_CN

  return LOCALE.ZH_CN // 默认
}

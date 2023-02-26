// locales/i18n.ts
import { App } from 'vue'
import { createI18n, I18n } from 'vue-i18n'
import { LOCALE } from '../config/locale'
import { getCurrentLanguage } from './helper'
// 按需引入组件库语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
// 本地国际化语言包
import localeLangList from './lang'

let localeData: any = null

function createI18nOptions() {
  const locale = getCurrentLanguage()
  const defaultLocal = localeLangList[locale]
  const message = defaultLocal?.message ?? {}
  localeData = message

  return {
    legacy: false, // composition API
    locale,
    messages: {
      [locale]: message
    }
  }
}

export let i18n: I18n

// 获取组件库语言包
export function getElementPlusLocale() {
  const locale = getCurrentLanguage()
  const localeMap = {
    [LOCALE.ZH_CN]: zhCn,
    [LOCALE.EN_US]: en
    // ...更多语言
  }
  return localeMap[locale]
}

// 本地文件匹配
export function $tc(params: [] | string) {
  if (!localeData) {
    throw new Error('not init localeData!')
  }
  const arr = typeof params === 'string' ? params.split('.') : []
  let data = localeData
  for (let i = 0; i < arr.length; i++) {
    data = data[arr[i]]
  }
  return data
}

export function setupI18n(app: App) {
  const options = createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}

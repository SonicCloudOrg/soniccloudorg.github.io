import { i18n } from './setupI18n'

export function updateI18nLanguage(locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    // @ts-ignore
    i18n.global.locale.value = locale
  }
}

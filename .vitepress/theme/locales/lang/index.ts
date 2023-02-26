import { LOCALE } from '@theme/config/locale'
import en_US from './en_US'
import zh_CN from './zh_CN'

interface LocaleLangList {
  [key: string]: any
}

export default {
  [LOCALE.EN_US]: en_US,
  [LOCALE.ZH_CN]: zh_CN
} as LocaleLangList

import { Theme } from 'vitepress'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {
  ElButton,
  ElCarousel,
  ElCarouselItem,
  ElTooltip,
  ElImage,
  ElCard,
  ElTimeline,
  ElTimelineItem,
  ElDivider,
  ElAvatar,
  ElDescriptions,
  ElDescriptionsItem,
  ElLink,
  ElPopover,
  ElAlert,
  ElRate
} from 'element-plus'

import Layout from './pages/Layout.vue'
import NotFound from './pages/NotFound.vue'
import ContributorList from './components/ContributorList.vue'

import './styles/index.css'

import { jumpToNewURL } from './utils/index'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    // Element 组件
    app.use(ElButton)
    app.use(ElCarousel)
    app.use(ElCarouselItem)
    app.use(ElTooltip)
    app.use(ElImage)
    app.use(ElCard)
    app.use(ElTimeline)
    app.use(ElTimelineItem)
    app.use(ElDivider)
    app.use(ElAvatar)
    app.use(ElDescriptions)
    app.use(ElDescriptionsItem)
    app.use(ElLink)
    app.use(ElRate)
    app.use(ElPopover)
    app.use(ElAlert)
    // 自定义组件
    app.component('ContributorList', ContributorList)

    app.mixin({
      onMounted() {
        // 新老路由兼容
        jumpToNewURL()
      }
    })
  }
} as Theme

export default theme

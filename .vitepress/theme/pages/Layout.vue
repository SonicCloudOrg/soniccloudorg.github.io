<template>
  <Layout>
    <template #layout-bottom>
      <question />
    </template>

    <template #doc-footer-before>
      <!-- 文章贡献者列表 -->
      <ContributorList />
    </template>

    <template #aside-outline-after>
      <DocAsideADs />
    </template>

    <template #sidebar-nav-before>
      <DocAsideSponsors />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import ContributorList from '../components/ContributorList.vue'
import DocAsideSponsors from '../components/DocAsideSponsors.vue'
import DocAsideADs from '../components/DocAsideADs.vue'
import Question from '../components/Question.vue'

const { Layout } = DefaultTheme
</script>

<!-- Hotjar Tracking Code for https://sonic-cloud.cn/ -->
<script>
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2962395, hjsv: 6 }
  a = o.getElementsByTagName('head')[0]
  r = o.createElement('script')
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
</script>

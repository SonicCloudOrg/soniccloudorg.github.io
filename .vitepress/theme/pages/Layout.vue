<template>
  <Layout>
    <template #layout-bottom>
      <QuestionFloat />
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
import { useData } from 'vitepress'
import { updateI18nLanguage } from '../locales/useLocale'
import ContributorList from '../components/ContributorList.vue'
import DocAsideSponsors from '../components/DocAsideSponsors.vue'
import DocAsideADs from '../components/DocAsideADs.vue'
import QuestionFloat from '../components/QuestionFloat.vue'
import { watch } from 'vue'

const { Layout } = DefaultTheme

const { lang } = useData()

// 监听语言切换
watch(lang, (newLang) => {
  updateI18nLanguage(newLang)
})
</script>

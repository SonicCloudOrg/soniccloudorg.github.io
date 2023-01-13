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

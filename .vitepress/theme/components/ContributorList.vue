<template>
  <div class="contributor-list" v-if="contributorList?.length">
    <h2 class="contributor-list__title">本文贡献者</h2>
    <contributor
      class="wrapper"
      v-for="item in contributorList"
      :info="item"
      :key="item"
    />
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, PropType } from 'vue'
import Contributor, { ContributorProps } from './Contributor.vue'
import contributorsList from '../config/contributors'

const props = defineProps({
  list: Array as PropType<ContributorProps[]>
})

const { frontmatter } = useData()

const contributorList = computed(() => {
  if (props.list) {
    return props.list
  } else {
    const contributorsMap: Record<string, ContributorProps> = {}

    contributorsList.forEach((item) => {
      contributorsMap[item.name] = item
    })

    const list = frontmatter.value?.contributors?.map((item: string) => {
      const info = contributorsMap[item]

      // 未找到该配置信息，说明用户信息配置有误，请检查！
      if (!info) {
        return {
          name: 'undefined',
          link: 'undefined',
          avatar: 'undefined'
        } as ContributorProps
      }

      return contributorsMap[item]
    })

    return list || []
  }
})
</script>

<style scoped lang="scss">
.contributor-list {
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider-light);
  padding-top: 24px;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.wrapper {
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
}
</style>

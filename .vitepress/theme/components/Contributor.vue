<template>
  <a class="contributor" :href="info?.link" target="_blank">
    <client-only>
      <el-tooltip :content="info?.name" placement="top">
        <el-avatar :src="info?.avatar" />
      </el-tooltip>
    </client-only>
  </a>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Contributor } from '../types'

export type ContributorProps = Contributor

defineProps({
  info: Object as PropType<ContributorProps>
})
</script>

<style scoped lang="scss">
.contributor {
  display: inline-block;
}
</style>

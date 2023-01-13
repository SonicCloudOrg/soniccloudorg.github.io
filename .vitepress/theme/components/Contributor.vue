<template>
  <a class="contributor" :href="info?.link" target="_blank">
    <el-avatar :src="info?.avatar" />
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

<template>
  <section class="section-box">
    <div class="section-box__title">
      {{ title || '' }}
      <el-divider>
        <span style="color: #909399">{{ dividerContent }}</span>
      </el-divider>
    </div>
    <div class="section-box__content" :style="contentStyle">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  dividerContent: String,
  isCenter: Boolean
})

const contentStyle = computed(() => {
  if (props.isCenter) {
    return {
      textAlign: 'center'
    }
  }
  return undefined
})
</script>

<style scoped lang="scss">
.section-box {
  margin-top: 80px;
  &__title {
    display: block;
    margin-top: 80px;
    padding: 0 20%;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: center;
  }

  &__content {
  }
}
</style>

<template>
  <div style="position: fixed; right: 40px; bottom: 30px">
    <el-popover
      placement="left-end"
      title="😃有什么需要帮助的吗?"
      :width="220"
      trigger="hover"
    >
      <template #default>
        <div>
          1. 有疑问欢迎前往
          <a
            href="https://sonic-cloud.wiki/"
            target="_blank"
            style="text-decoration: none"
          >
            社区
          </a>
          提问哦
        </div>
        <div>
          2. 联系我们？可前往
          <a
            href="https://sonic-cloud.wiki/p/1-contact"
            target="_blank"
            style="text-decoration: none"
          >
            这里
          </a>
        </div>
        <div style="text-align: center; font-size: 12px; margin-top: 10px">
          Made with 🧡 by SonicCloudOrg
        </div>
      </template>
      <template #reference>
        <img style="cursor: pointer" :src="ask" width="40" />
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import ask from '../assets/ask.png'
</script>

<style scoped>
a:visited {
  color: var(--vp-c-theme);
}
</style>

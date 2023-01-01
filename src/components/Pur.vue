<script setup>

const props = defineProps({
  url: String
})
const open = (url) => {
  window.open(url, '_blank')
}
</script>
<template>
  <el-popover
      placement="top"
      :width="200"
      trigger="click"
      v-if="url.length!==0"
  >
    <el-divider>
      购买渠道
    </el-divider>
    <el-link :href="url" target="_blank" type="primary">官方淘宝店</el-link>
    <el-divider>
      咨询渠道
    </el-divider>
    <el-link href="mailto:soniccloudorg@163.com" target="_blank" type="primary">官方邮箱</el-link>
    <el-link href="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/wechat.jpg" target="_blank" type="primary"
             style="margin-left: 20px">企微咨询
    </el-link>
    <template #reference>
      <el-button size="small" type="primary">
        立即购买
      </el-button>
    </template>
  </el-popover>
  <el-button v-else size="small" disabled>
    即将上架，敬请期待...
  </el-button>
</template>
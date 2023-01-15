<template>
  <template v-if="url.length !== 0">
    <!-- <client-only>
      <el-popover placement="top" :width="220" trigger="hover" :visible="true">
        <el-divider> 购买渠道 </el-divider>
        <el-link :href="url" target="_blank" type="primary">官方淘宝店</el-link>
        <el-divider> 咨询渠道 </el-divider>
        <el-link
          href="mailto:soniccloudorg@163.com"
          target="_blank"
          type="primary"
        >
          官方邮箱
        </el-link>
        <el-link
          href="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/wechat.jpg"
          target="_blank"
          type="primary"
          style="margin-left: 20px"
        >
          企微咨询
        </el-link>
        <template #reference> -->
    <a :href="url" target="_blank">
      <el-button type="primary"> 立即购买 </el-button>
    </a>
    <!-- </template>
      </el-popover>
    </client-only> -->
  </template>
  <el-button v-else disabled> 即将上架，敬请期待... </el-button>
</template>

<script setup>
const props = defineProps({
  url: String
})
</script>

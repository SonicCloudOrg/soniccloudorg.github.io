<template>
  <div class="consultant-float">
    <client-only>
      <el-popover
        ref="elPopoverRef"
        placement="left-end"
        title="硬件方案咨询"
        trigger="hover"
        :width="220"
        v-model:visible="visible"
      >
        <el-link
          href="mailto:support@pawao.tech"
          target="_blank"
          type="primary"
        >
          邮箱咨询
        </el-link>
        <el-link
          href="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/wechat.jpg"
          target="_blank"
          type="primary"
          style="margin-left: 20px"
        >
          企微咨询
        </el-link>
        <template #reference>
          <img style="cursor: pointer" :src="consultant" width="40" />
        </template>
      </el-popover>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ElPopover } from 'element-plus'
import { onMounted, ref } from 'vue'
import consultant from '../assets/consultant.png'

const CLOSE_POPOVER_TIMEOUT = 5000

const elPopoverRef = ref<InstanceType<typeof ElPopover>>()
const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    elPopoverRef.value?.hide()
  }, CLOSE_POPOVER_TIMEOUT)
})
</script>

<style scoped>
.consultant-float {
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: var(--vp-z-index-float);
}

a:visited {
  color: var(--vp-c-theme);
}
</style>

<template>
  <template v-if="url.length !== 0">
    <div style="display: flex;justify-content: center">
      <a :href="url" target="_blank" style="margin-right: 10px">
        <el-button type="primary"> 电脑购买</el-button>
      </a>
      <client-only>
        <el-popover placement="top" :width="220" trigger="click">
          <div style="text-align: center">请使用淘宝App扫一扫</div>
          <img class="product-img" :src="code"/>
          <template #reference>
            <el-button type="primary"> 手机购买</el-button>
          </template>
        </el-popover>
      </client-only>
    </div>
  </template>
  <el-button v-else disabled> 即将上架，敬请期待...</el-button>
</template>

<script setup>
const props = defineProps({
  url: String,
  code: Object
})
</script>

<template>
  <h2 class="sponsors-aside-text doc-aside-ads-top">广告 ADS</h2>
  <div class="doc-aside-ads-wrapper">
    <el-carousel
      indicator-position="outside"
      :interval="5000"
      arrow="never"
      style="width: 150px"
    >
      <el-carousel-item v-for="item in ads">
        <a :href="item.url" target="_blank">
          <img style="height: 284px; width: 150px" :src="item.pic" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <a href="mailto:soniccloudorg@163.com" target="_blank" class="become-sponsor">
    <el-button plain style="width: 150px">
      成为赞助商！
    </el-button>
  </a>
</template>

<script setup>
import ad1 from '../assets/ads/ad1.jpg'
import ad2 from '../assets/ads/linux-ad2.jpg'

const ads = [
  {
    url: 'https://sonic-cloud.cn/cabinet.html',
    pic: ad2
  },
  {
    url: 'http://qrcode.testing-studio.com/f?from=Sonic&url=https://ceshiren.com/t/topic/23746',
    pic: ad1
  }
]
</script>

<style>
.doc-aside-ads-top {
  margin-top: 30px;
  padding-top: 1em;
  border-top: 1px solid var(--vp-c-divider-light);
}

.doc-aside-ads-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.doc-aside-ads-wrapper .el-carousel__container{
    height: 284px
}

.become-sponsor {
  margin: 0 auto;
}
</style>

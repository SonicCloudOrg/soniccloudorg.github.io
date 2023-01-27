<template>
  <el-timeline class="version-show">
    <span class="verh1">版本更新记录</span>
    <el-timeline-item
      v-for="(d, i) in data"
      :timestamp="'发布时间：' + d.time"
      placement="top"
      size="large"
      :type="d.time==='unknown'?'primary':'success'"
    >
      <el-card>
        <el-alert
          v-if="(i==0&&d.time!=='unknown') || (data[0].time==='unknown'&&i == 1)"
          style="margin-bottom: 20px"
          type="success"
          :closable="false"
        >
          <template #title>
            <div>
              更新前一定要查看版本迁移指南哦，可点击
              <a href="https://sonic-cloud.cn/deploy?tag=upgrade" target="_blank">这里</a>
              查看！
            </div>
          </template>
        </el-alert>
        <el-button type="primary" plain v-if="d.time === 'unknown'" style="float: right"
                   @click="open('https://sonic-cloud.cn/contribute/con-re.html')">我想参与该版本开发💪
        </el-button>
        <span class="verh1">{{
            d.time === 'unknown' ? d.version + "（预计" +
              new Date(new Date(data[i + 1].time).getTime() + 86400000 * 20).toLocaleDateString() + "发布）"
              : d.version
          }}</span>
        <el-progress v-if="d.time === 'unknown'"
                     :percentage="((new Date(data[i + 1].time).getTime() + 86400000 * 20-new Date().getTime())/86400000/20).toFixed(4)*100"
                     :indeterminate="true"/>
        {{ d.des }}
        <span class="verh2" v-if="d.feat && d.feat.length > 0">新特性</span>
        <div style="line-height: 1.6; text-indent: 30px; font-size: 15px">
          <div v-for="(f, i) in d.feat">
            {{ i + 1 + '、 ' + f.title }}
            <a :href="f.url" v-if="f.url" target="_blank" style="color: #0d84ff">
              #{{ f.url.replace(/[^\d]/g, '') }}</a
            >
          </div>
        </div>
        <span class="verh2" v-if="d.fix && d.fix.length > 0"
        >修复Bug与优化</span
        >
        <div style="line-height: 1.6; text-indent: 30px; font-size: 15px">
          <div v-for="(f, i) in d.fix">
            {{ i + 1 + '、 ' + f.title }}
            <a :href="f.url" v-if="f.url" target="_blank" style="color: #0d84ff">
              #{{ f.url.replace(/[^\d]/g, '') }}</a
            >
          </div>
        </div>
        <span class="verh2" v-if="d.con && d.con.length > 0">贡献者</span>
        <a
          v-for="c in d.con"
          :href="'https://github.com/' + c.name"
          target="_blank"
          style="margin-right: 10px"
        >
          <el-avatar
            :src="
              'https://avatars.githubusercontent.com/u/' + c.avatar + '?v=4'
            "
          ></el-avatar>
        </a>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import data from '../config/version'

const open = (url) => {
  window.open(url, '_blank')
}
</script>

<style>
.version-show {
  text-align: left;
  width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 820px) {
  .version-show {
    margin-left: 0;
    padding: 0 14px;
  }
}

.verh1 {
  display: block;
  font-size: 1.7em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.verh2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.vp-doc ul {
  list-style: none;
}
</style>

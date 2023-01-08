<template>
  <el-timeline class="version-show">
    <span class="verh1">版本更新记录</span>
    <el-timeline-item
      v-for="(d, i) in data"
      :timestamp="'发布时间：' + d.time"
      placement="top"
      type="success"
    >
      <el-card>
        <el-alert
          v-if="i == 0"
          style="margin-bottom: 20px"
          type="success"
          :closable="false"
        >
          <template #title>
            <div>
              更新前一定要查看版本迁移指南哦，可点击
              <a href="https://sonic-cloud.cn/deploy?tag=upgrade">这里</a>
              查看！
            </div>
          </template>
        </el-alert>
        <span class="verh1">{{ d.version }}</span>
        {{ d.des }}
        <span class="verh2" v-if="d.feat && d.feat.length > 0">新特性</span>
        <div style="line-height: 1.6; text-indent: 30px; font-size: 15px">
          <div v-for="(f, i) in d.feat">
            {{ i + 1 + '、 ' + f.title }}
            <a :href="f.url" v-if="f.url" target="_blank">
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
            <a :href="f.url" v-if="f.url" target="_blank">
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

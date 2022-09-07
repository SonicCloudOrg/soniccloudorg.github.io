<script setup>
import Question from "./components/Question.vue"
import Header from "./components/Header.vue"
</script>

<template>
  <el-container direction="vertical">
    <Header/>
    <el-main>
      <router-view/>
      <question/>
    </el-main>
  </el-container>
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-card * {
  color: #606266;
}

.el-tab-pane {
  padding: 0 4%;
}

.el-card {
  border-radius: 25px !important;
}

.back {
  padding: 0px 180px;
}

.el-scrollbar .is-horizontal {
  display: none !important;
}

.demo-tree-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}

.banner {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0 !important;
  height: 100%;
}

code {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 17px;
  font-weight: 500;
  color: #FFFFFF;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: #606266;
  margin-left: 30px;
}

li {
  margin: 12px 0;
}

.el-menu-item {
  margin: 0;
}

.el-timeline-item {
  margin: 0;
}

blockquote {
  border-radius: 5px;
  font: 14px/22px normal helvetica, sans-serif;
  padding: 10px;
  margin: 10px 20px;
  border: 1px solid #dcdfe6;
}

.cont {
  display: flex;
}

.cont a {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.cont img {
  border-radius: 50px;
}

.cont span {
  margin-left: 10px;
}

a:link {
  color: #409EFF
}

a:visited {
  color: #409EFF
}

table {
  width: 100%;
  /*border-collapse: collapse;*/
}

table td, table th {
  border-bottom: 1px solid #C0C4CC;
  padding: 12px;
}

table td {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5fae\8f6f\96c5\9ed1", Arial, sans-serif;
  font-size: 14px;
}

.el-avatar {
  background-color: transparent !important;
}

.el-notification {
  padding: 14px 13px 14px 13px !important;
  width: 170px !important;
}

.el-notification__group {
  margin: 0 !important;
}

.el-notification__title {
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  color: #606266;
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

h2 {
  margin-top: 60px;
  font-size: 1.65rem;
  color: #606266;
}

.el-main {
  padding: 0px;
}

.back .el-tabs {
  width: 165px !important;
}

.back .el-tabs__item {
  width: 140px !important;
  font-size: 13px;
}
</style>

<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    title: "项目管理相关",
    pane: [
      {
        label: "项目管理",
        name: 'project'
      },
      {
        label: "通知机器人",
        name: 'robot'
      },
      {
        label: "版本管理",
        name: 'version'
      },
      {
        label: "模块管理",
        name: 'module'
      },
      {
        label: "Agent中心",
        name: 'agent-center'
      },
      {
        label: "设备中心",
        name: 'device'
      },
    ]
  },
  {
    title: "远程控制相关",
    pane: [
      {
        label: "控制中心",
        name: 'control'
      },
      {
        label: "控件获取",
        name: 'element'
      },
      {
        label: "Terminal",
        name: 'terminal'
      },
      {
        label: "网络抓包",
        name: 'proxy'
      },
      {
        label: "网页调试",
        name: 'webview'
      },
      {
        label: "运行测试",
        name: 'run'
      },
    ]
  },
  {
    title: "测试步骤相关",
    pane: [
      {
        label: "自定义脚本",
        name: 'runScript'
      },
      {
        label: "POCO控件",
        name: "poco"
      }
    ]
  },
  {
    title: "测试管理相关",
    pane: [
      {
        label: "控件元素",
        name: 'element-manage'
      },
      {
        label: "测试用例",
        name: 'cases'
      },
      {
        label: "测试步骤",
        name: 'steps'
      },
      {
        label: "公共步骤",
        name: 'pub'
      },
      {
        label: "全局参数",
        name: 'global'
      },
      {
        label: "测试套件",
        name: 'suite'
      },
      {
        label: "定时任务",
        name: 'quartz'
      },
      {
        label: "测试结果",
        name: 'result'
      },
    ]
  }
])
</script>
<template>
  <doc-tem path="Document" :tree="tree"/>
</template>

<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    title: "快速入门",
    pane: [
      {
        label: "插件介绍",
        name: 're-sib'
      },
      {
        label: "参与开发",
        name: 'dev-sib'
      }
    ]
  },
  {
    title: "功能列表",
    pane: [
      {
        label: "设备信息",
        name: 'sib-device'
      },
      {
        label: "App相关",
        name: 'sib-app'
      },
      {
        label: "挂载镜像",
        name: 'sib-mount'
      },
      {
        label: "进程相关",
        name: 'sib-ps'
      },
      {
        label: "XCTest相关",
        name: 'sib-run'
      },
      {
        label: "电池相关",
        name: 'sib-battery'
      },
      {
        label: "重启关机",
        name: 'sib-reboot'
      },
      {
        label: "代理转发",
        name: 'sib-proxy'
      },
      {
        label: "崩溃收集",
        name: 'sib-crash'
      },
      {
        label: "模拟定位",
        name: 'sib-location'
      },
      {
        label: "屏幕方向",
        name: 'sib-orientation'
      },
      {
        label: "系统日志",
        name: 'sib-syslog'
      },
      {
        label: "屏幕截图",
        name: 'sib-screen'
      },
      {
        label: "文件管理",
        name: 'sib-afc'
      },
      {
        label: "性能监控",
        name: 'sib-perf',
      },
      {
        label: "网页检阅器",
        name: "sib-webinspector"
      }
    ]
  }
])
</script>
<template>
  <doc-tem path="SIB" :tree="tree"/>
</template>

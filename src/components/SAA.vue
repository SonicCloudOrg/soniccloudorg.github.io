<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    title: "快速入门",
    pane: [
      {
        label: "插件介绍",
        name: 're-saa'
      },
      {
        label: "参与开发",
        name: 'dev-saa'
      }
    ]
  },
  {
    title: "功能列表（建设中）",
    pane: [
      {
        label: "物理查找",
        name: 'saa-search',
        disabled: true
      },
      {
        label: "实时触控",
        name: 'saa-touch',
        disabled: true
      },
      {
        label: "远程音频",
        name: 'saa-audio',
        disabled: true
      }, {
        label: "Wifi信息",
        name: 'saa-wifi',
        disabled: true
      }, {
        label: "App列表",
        name: 'saa-app',
        disabled: true
      },
      {
        label: "屏幕方向",
        name: 'saa-orientation',
        disabled: true
      },
    ]
  }
])
</script>
<template>
  <doc-tem path="SAA" :tree="tree"/>
</template>

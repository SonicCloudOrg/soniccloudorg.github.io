<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    title:"系统部署",
    pane:[
      {
        label:"前后端部署",
        name:'back-end'
      },
      {
        label:"Agent端部署",
        name:'agent'
      },
      {
        label: "版本迁移指南",
        name: "upgrade"
      }
    ]
  },
  {
    title:"设备接入",
    pane:[
      {
        label:"安卓设备接入",
        name:'android'
      },
      {
        label:"iOS设备接入",
        name:'ios'
      }
    ]
  }
])

</script>
<template>
 <doc-tem path="Deploy" :tree="tree"/>
</template>
<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    title: "快速入门",
    pane: [
      {
        label: "依赖介绍",
        name: 're-sdc'
      },
      {
        label: "参与开发",
        name: 'dev-sdc'
      }
    ]
  },
  {
    title: "Driver列表",
    pane: [{
      label: "AndroidDriver",
      name: 'androidDriver',
      disabled: true
    }, {
      label: "IOSDriver",
      name: "iOSDriver",
      disabled: true
    }, {
      label: "POCODriver",
      name: "pocoDriver",
      disabled: true
    }]
  }
])
</script>
<template>
  <doc-tem path="SDC" :tree="tree"/>
</template>

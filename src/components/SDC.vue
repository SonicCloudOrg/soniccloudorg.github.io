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
      name: 'sdc-android',
    }, {
      label: "IOSDriver",
      name: "sdc-ios",
    }, {
      label: "PocoDriver",
      name: "sdc-poco",
    }]
  }
])
</script>
<template>
  <doc-tem path="sdc" :tree="tree"/>
</template>

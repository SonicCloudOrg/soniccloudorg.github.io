<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";
const tree = ref([
  {
    title: "快速入门",
    pane: [
      {
        label: "插件介绍",
        name: 're-siwa'
      },
      {
        label: "参与开发",
        name: 'dev-siwa'
      }
    ]
  }
])
</script>
<template>
  <doc-tem path="siwa" :tree="tree"/>
</template>

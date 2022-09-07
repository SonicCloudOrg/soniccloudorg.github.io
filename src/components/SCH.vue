<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";
const tree = ref([
  {
    title:"快速入门",
    pane:[
      {
        label:"插件介绍",
        name:'re-sch'
      },
      {
        label:"参与开发",
        name:'dev-sch'
      }
    ]
  },{
  title: "功能列表",
    pane:[
      {
        label:"批量装包",
        name:'sch-upload'
      },
    ]
  }
])
</script>
<template>
  <doc-tem path="SCH" :tree="tree"/>
</template>
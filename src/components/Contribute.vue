<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";
const tree = ref([
  {
    title:"前言",
    pane:[
      {
        label:"参与开发",
        name:'con-re'
      }
    ]
  },
  {
    title:"项目列表",
    pane:[
      {
        label:"Server端",
        name:'con-server'
      },
      {
        label: "Client端",
        name:'con-client'
      },
      {
        label: "Agent端",
        name:'con-agent'
      }
    ]
  }
])
</script>
<template>
  <doc-tem path="contribute" :tree="tree"/>
</template>
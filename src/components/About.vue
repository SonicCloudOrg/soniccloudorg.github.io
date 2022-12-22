<script setup>
import DocTem from "../components/DocTem.vue"
import {ref} from "vue";

const tree = ref([
  {
    pane: [
      {
        label: "免责声明",
        name: 'policy'
      },
    ]
  }
])
</script>
<template>
  <doc-tem path="about" :tree="tree"/>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import MD from "../components/MD.vue"
import Sponsor from "../components/Sponsors.vue"
import {DArrowRight, DArrowLeft} from "@element-plus/icons"
import ad1 from '../assets/ad1.jpg'
import ad2 from '../assets/linux-ad.jpg'
import ad3 from '../assets/ad3.jpg'
import c2 from "../assets/banner2.png";
import honor from "../assets/honor.png";
import c1 from "../assets/banner.png";
import c0 from "../assets/coo.png";
import c4 from "../assets/banner3.png";

const route = useRoute()
const router = useRouter()
const active = ref("")
const scroll = ref(null)

const props = defineProps({
  path: String,
  tree: Array
})

const handle = (e) => {
  router.push({
    path: props.path,
    query: {tag: e.props.name}
  })
  scroll.value.setScrollTop(0)
}

const getDefaultTag = (data) => {
  for (let i in data) {
    if (data[i].pane && data[i].pane.length > 0) {
      for (let j in data[i].pane) {
        if (data[i].pane[j].name) {
          return data[i].pane[j].name
        }
      }
    }
  }
}
const ads = ref([
  {
    url: "https://sonic-cloud.wiki/d/1255-agentsoniclinux",
    pic: ad2
  },
  {
    url: "https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/ad3.jpg",
    pic: ad3
  },
  {
    url: "https://sonic-cloud.wiki/d/1209-sonic",
    pic: ad1
  },
])
onBeforeMount(() => {
  if (route.query.tag) {
    active.value = route.query.tag
  } else {
    active.value = getDefaultTag(props.tree)
  }
})

let showTag = ref(false)
const styleTag = ref('')
const styleAdTag = ref('right: 170px;')
const switchNav = function () {
  showTag.value = !showTag.value
  styleTag.value = showTag.value ? 'left: 0;' : 'left: -195px;'
  styleAdTag.value = showTag.value ? 'right: 0;' : 'right: 170px;'
}

</script>
<template>
  <el-backtop target=".demo-tree-scrollbar .el-scrollbar__wrap" :bottom="100"></el-backtop>
  <el-scrollbar class="demo-tree-scrollbar" style="height: 100%" ref="scroll">
    <div class="doc-container">
      <!-- 移动端导航栏切换tag -->
      <div class="float-tag" @click="switchNav" :style="{left: showTag ? '165px' : '-25px'}">
        <el-icon color="white" size="24">
          <DArrowRight v-if="!showTag"/>
          <DArrowLeft v-else/>
        </el-icon>
      </div>
      <div class="doc-navigation" :style="styleTag">
        <el-scrollbar style="height: 100%;">
          <div class="sponsor-wrapper">
            <sponsor/>
          </div>
          <div class="nav-block" v-for="t in tree">
            <h4>{{ t.title }}</h4>
            <el-tabs @tab-click="handle" v-model="active" tab-position="left" class="tabs-wrapper">
              <el-tab-pane v-for="p in t.pane" :label="p.label" :name="p.name" :disabled="p.disabled">
              </el-tab-pane>
            </el-tabs>
          </div>
          <div style="margin-bottom: 180px"></div>
        </el-scrollbar>
      </div>
      <div class="doc-ad" :style="styleAdTag">
        <el-carousel indicator-position="outside" :interval="5000" arrow="never">
          <el-carousel-item v-for="o in ads">
            <a :href="o.url" target="_blank">
              <img style="height: 284px;width: 150px" :src="o.pic" alt=""/>
            </a>
          </el-carousel-item>
        </el-carousel>
        <a href="mailto:291028775@qq.com" target="_blank">
          <el-button type="primary" plain size="small" style="width: 150px;">成为赞助商！</el-button>
        </a>
      </div>
      <m-d :active="active"/>
    </div>
  </el-scrollbar>
</template>

<style>
.doc-ad .el-carousel__container{
  height: 284px;
}

.doc-container {
  margin-left: 180px;
  margin-right: 350px;
}

.doc-ad {
  width: 150px;
  top: 20px;
  position: absolute;
  height: 100%;
}

.doc-navigation {
  position: absolute;
  height: 100%;
  text-align: left;
  background-color: #fff;
  z-index: 1;
  transition: left .5s ease-in-out;
}

.sponsor-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 10px;
}

.nav-block {
  padding-left: 16px;
}

.float-tag {
  display: none;
  position: fixed;
  left: -25px;
  top: 250px;
  height: 50px;
  width: 55px;
  border-radius: 50px;
  background-color: rgba(125, 215, 246, .7);
  transition: left .5s ease-in-out;
}

.float-tag .el-icon {
  position: relative;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.tabs-wrapper {
  display: flex;
  justify-content: right;
  margin-right: 25px;
}

@media screen and (max-width: 820px) {
  .doc-container {
    margin: 0;
  }

  .doc-ad {
    position: static;
  }

  .doc-navigation {
    position: fixed;
    top: 59px;
    left: -195px;
    border-right: 1px solid #ccc;
    z-index: 1;
  }

  .float-tag {
    display: unset;
  }
}
</style>

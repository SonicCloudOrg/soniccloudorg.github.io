<script setup>
import logo from '../assets/logo.png'
import ad2 from '../assets/ad2.jpg'
import team from '../assets/team.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import team7 from '../assets/team7.png'
import honor from "../assets/honor.png"
import team8 from '../assets/docker.png'
import msg from '../assets/msg.png'
import a1 from '../assets/ANDROID.jpg'
import a2 from '../assets/APPLE.jpg'
import a3 from '../assets/CAR.png'
import a4 from '../assets/WATCH.png'
import c0 from '../assets/coo.png'
import c1 from '../assets/banner.png'
import c2 from '../assets/banner2.png'
import c4 from '../assets/banner3.png'
import c5 from '../assets/banner4.png'
import con1 from '../assets/con1.jpg'
import con2 from '../assets/con2.jpg'
import con3 from '../assets/con3.jpg'
import con4 from '../assets/con4.jpg'
import con5 from '../assets/con5.jpg'
import con6 from '../assets/con6.jpg'
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import 'vue3-video-play/dist/style.css';
import {videoPlay} from 'vue3-video-play';

const open = (url) => {
  window.open(url, '_blank')
}
const router = useRouter()
const statisticsData = [
  {
    tipContent: 'Sonic组织Follower数量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/github/followers/SonicCloudOrg?style=social'
  },
  {
    tipContent: 'Sonic组织所有仓库总Star数量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/github/stars/SonicCloudOrg?affiliations=OWNER&style=social'
  },
  {
    tipContent: 'Sonic社区总回复数',
    linkUrl: 'https://sonic-cloud.wiki',
    img: 'https://img.shields.io/badge/replies%20-12.8k-ff69b4?style=social&logo=LiveChat'
  },
  {
    tipContent: '镜像仓库总下载量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/badge/Docker%20pulls%20-65.1k-important'
  }
]
const news = ref([
  {
    title: "重磅！全新sib remote功能上线，iOS远程调试的福音！",
    time: "用户可以自己本地sib remote connect就可以像本地链接一样使用啦！",
    url:"https://sonic-cloud.wiki/d/2058-sib-remoteios",
    pic:c5
  },
  {
    title: "iOS WebView/H5调试新姿势",
    time: "Sonic平台周边生态sib推出新功能webinspector啦！",
    url: "https://sonic-cloud.wiki/d/1741-ios-webviewh5",
    pic: honor
  },
  {
    title: "恭喜Sonic获得MTSC 2022年度最佳开源项目评选第一名",
    time: "历时两个多月的初选、海选和专家评审后，「MTSC 2022年度最佳开源项目」评选终于尘埃落定",
    url: "https://sonic-cloud.wiki/d/1471-sonicmtsc-2022",
    pic: c2
  }, {
    title: "Sonic组织已加入OpenCollective啦！",
    time: "",
    url: "https://opencollective.com/soniccloudorg",
    pic: c4
  }
])
const devices = [
  {
    image: a1,
    name: '安卓设备'
  }, {
    image: a2,
    name: 'iOS设备'
  }, {
    image: a3,
    name: '车载设备'
  }, {
    image: a4,
    name: '智能手表'
  }
]
const videoOptions = ref({
  height: 'auto',
  controlBtns: ['audioTrack', 'quality', 'volume', 'fullScreen', 'speedRate'],
});
const conList = ref([con1, con2, con3, con4, con5,con6])
</script>
<template>
  <el-backtop target=".demo-tree-scrollbar .el-scrollbar__wrap" :bottom="100"></el-backtop>
  <el-scrollbar class="demo-tree-scrollbar" style="height: 100%">
    <!-- 顶部标语 -->
    <div style="position: relative;padding: 120px 0;display: flex;align-items: center;justify-content: center">
      <div style="margin-right:50px">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <h1 class="brand-slogan">“ For You，For Free，Forever ”</h1>
        <!-- 相关数据统计 -->
        <div class="statistics">
          <el-tooltip
              v-for="item in statisticsData"
              effect="dark"
              :content="item.tipContent"
              placement="top"
          >
            <a :href="item.linkUrl" class="statistics-link" target="_blank">
              <img :src="item.img"/>
            </a>
          </el-tooltip>
        </div>
        <h4 class="brand-desc">免费开源的云真机测试平台，用心打造更好的使用体验。</h4>
        <div style="text-align: center">
          <el-button type="primary" size="small" @click="router.push('/deploy')">马上使用</el-button>
          <el-button type="primary" size="small" @click="open('https://sonic-cloud.wiki/')">用户社区
          </el-button>
        </div>
        <h5>Made with 🧡 by SonicCloudOrg</h5>
      </div>
      <div>
        <video-play v-bind="videoOptions" src="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/demo.mp4"/>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="container">
      <div class="title">
        <span class="verh2">
          最新动态
        </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="news">
        <el-carousel class="" style="margin-top: 30px" height="400px" indicator-position="outside" :interval="3000">
          <el-carousel-item v-for="o in news">
            <div
                :style="'background:linear-gradient(to bottom right, rgba(64,158,255, 0.3), rgba(0, 0, 0, 0.8)) ,url('+o.pic+');background-size:cover;height:100%;'"
                class="banner">
              <div>
                <span class="verh1 news-title" style="color: aliceblue">{{ o.title }}</span>
                <h3 class="news-time">{{ o.time }}</h3>
                <el-button size="small" v-if="o.url" type="primary" @click="open(o.url)">查看</el-button>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="title">
              <span class="verh2">
                Sonic荣誉墙
              </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div>
        🎉 MTSC 2022年度最佳开源项目评选第一名
      </div>

      <div style="margin-top: 100px">
              <span class="verh2">
                Sonic摘星计划贡献墙
              </span>
        <div style="color: #909399;font-size: 14px">更多用户正在加入...</div>
        <div style="padding: 0 20%;">
          <el-divider>
          </el-divider>
          <el-carousel type="card" height="280px">
            <el-carousel-item v-for="c in conList" :key="c">
              <el-image style="height: 280px" :src="c"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <el-button type="primary" size="large" @click="open('https://sonic-cloud.wiki/d/1510-soniccommitsonic')">我要上墙
        </el-button>
      </div>

      <div class="title">
        <span class="verh2">
          Sonic支持哪些设备？
        </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="devices">
        <el-card class="card-content" shadow="hover" v-for="item in devices">
          <el-avatar :size="50" shape="square" :src="item.image"></el-avatar>
          <p style="font-weight: bold;margin: 0">{{ item.name }}</p>
        </el-card>
      </div>

      <div style="margin-top: 60px">
        <span class="verh2">
          为什么使用Sonic？
        </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="use-case">
        <el-card class="case-content" shadow="hover">
          <img :src="team4" height="40"/>
          <h3>0编码UI自动化</h3>
          <p>积木式创建步骤</p>
          <p>一键分发多设备任务</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team" height="40"/>
          <h3>在线代理抓包</h3>
          <p>一键连接代理抓包</p>
          <p>团队协作轻松快捷</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team2" height="40"/>
          <h3>设备分布式集群</h3>
          <p>支持跨网段多机房</p>
          <p>支持Windows、Mac、Linux平台</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team3" height="40"/>
          <h3>优秀周边生态</h3>
          <p>安卓Apk、sib调试工具</p>
          <p>Jenkins插件、在线抓包工具</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team5" height="40"/>
          <h3>低成本维护</h3>
          <p>拖拽式排序交互</p>
          <p>使用简单便捷</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team6" height="40"/>
          <h3>在线WebView</h3>
          <p>提供在线调试WebView</p>
          <p>一键便利连接devtools</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team7" height="40"/>
          <h3>可视化报表</h3>
          <p>测试截图、日志、录像</p>
          <p>图表展示项目运行情况</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team8" height="40"/>
          <h3>轻松部署维护</h3>
          <p>Docker一键去中心化分布式</p>
          <p>扩容缩容不再繁琐</p>
        </el-card>
      </div>

      <div style="margin-top: 60px">
         <span class="verh2">
          Sonic的价值与产出
         </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="capacity-wrapper">
        <img class="capacity-img" :src="msg"/>
        <el-timeline class="capacity-list" style="text-align: left">
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            Sonic提供图像识别，支持获取poco控件，助力游戏公司测试效率。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            使用Sonic进行跨网段部署，助力海外业务的公司进行专项检测。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            提供定时任务充分利用无人值守时间回归UI测试，省时省力。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            完全开源免费的平台，快速的更新迭代速度，创造了多个领域新技术。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            支持打通Jenkins的DevOps流程，推进项目自动化流程。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            支持无限扩容设备，一键使用Android、iOS设备调试，设备管理不再繁琐。
          </el-timeline-item>
          <el-timeline-item
              type="primary"
              :hollow="true"
          >
            丰富图表展示，用户实时洞察用例执行情况，把控产品质量。
          </el-timeline-item>
        </el-timeline>
      </div>

      <div style="margin-top: 100px">
        <span class="verh1">
          还等什么？马上开始吧！
        </span>
        <div>
          <el-button type="primary" size="large" @click="router.push('/deploy')">马上使用</el-button>
          <el-button type="primary" size="large" @click="open('https://sonic-cloud.wiki/')">用户社区
          </el-button>
        </div>
      </div>

      <div class="title">
              <span class="verh2">
                金牌赞助商
              </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="sponsor">
        <a href="https://www.testing-studio.com/" target="_blank">
          <img src="https://ceshiren.com/uploads/default/original/3X/7/0/70299922296e93e2dcab223153a928c4bfb27df9.jpeg"
               alt="霍格沃兹测试开发学社" width="350"/>
        </a>
        <a style="margin-left: 20px" href="https://ec.diwork.com/" target="_blank">
          <img src="https://ec.diwork.com/html/index/img/newlogo.png" alt="友空间" width="350"/>
        </a>
      </div>
      <a href="mailto:291028775@qq.com" target="_blank">
        <el-button type="primary" plain size="small" style="width: 150px;margin-top:30px">成为赞助商</el-button>
      </a>

      <div class="title">
              <span class="verh2">
                贡献者们
              </span>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div>
        <img src="https://opencollective.com/soniccloudorg/contributors.svg?width=800&button=false"
             alt="contribute" width="950"/>
      </div>

    </div>
    <!-- 页脚 -->
    <el-footer style="margin-top: 75px">
      <el-divider></el-divider>
      <div style="display: flex;justify-content: center;align-content: center;margin-top: 10px">
        <img :src="logo" width="20" height="20"/>
        <span style="margin-left: 10px;font-size: 14px;color: #606266">Copyright © All Rights Reserved Sonic Project for SonicCloudOrg 版权所有</span>
      </div>
      <div style="margin-top: 10px">&nbsp;</div>
    </el-footer>
  </el-scrollbar>
</template>
<style>
@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #D1E3F6 50%, #9BDCF7 50%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3 {
  animation-duration: 5s;
}

.brand-slogan {
  margin-top: 0;
  margin-bottom: 24px;
}

.brand-desc {
  margin: 24px 0;
}

.sponsor {
  display: flex;
  justify-content: center;
  align-items: center
}

.statistics {
  height: 20px;
}

.statistics-link {
  display: inline-block;
  height: 20px;
  margin-left: 20px;
}

.statistics-link:first-child {
  margin-left: 0;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.title {
  margin-top: 80px;
}

.news {
  padding: 0 140px;
}

.news-time {
  color: aliceblue;
}

.devices {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 190px;
}

.card-content {
  width: 180px;
}

.use-case {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.case-content {
  width: 270px;
  margin-bottom: 20px;
}

.capacity-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px
}

.capacity-img {
  height: 300px;
}

@media screen and (max-width: 820px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .news {
    padding: 0;
  }

  .news-title {
    font-size: 22px;
  }

  .news-time {
    font-size: 14px;
  }

  .devices {
    margin: 0;
  }

  .card-content {
    width: 165px;
    margin-bottom: 14px;
  }

  .case-content {
    width: 170px;
    margin-bottom: 10px;
  }

  .capacity-wrapper {
    position: relative;
    display: inline-block;
    margin-top: 10px;
  }

  .capacity-img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 300px;
    margin-bottom: 30px;
    transform: translate(-50%, -50%);
    opacity: .05;
    filter: blur(2px);
  }

  .capacity-list {
    padding-right: 40px;
  }

  .sponsor {
    display: block;
  }
}

</style>

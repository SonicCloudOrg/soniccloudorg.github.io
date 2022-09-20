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
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const open = (url) => {
  window.open(url, '_blank')
}
const router = useRouter()
const statisticsData = [
  {
    tipContent: 'Sonic组织所有仓库总Star数量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/github/stars/SonicCloudOrg?affiliations=OWNER&style=social'
  },
  {
    tipContent: 'Sonic社区总回复数',
    linkUrl: 'https://sonic-cloud.wiki',
    img: 'https://img.shields.io/badge/replies%20-9.5k-ff69b4?style=social&logo=data:image/png;base64,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'
  },
  {
    tipContent: '镜像仓库总下载量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/badge/Docker%20pulls%20-53.9k-important'
  }
]
const news = ref([
  {
    title: "恭喜Sonic获得MTSC 2022年度最佳开源项目评选第一名",
    time: "历时两个多月的初选、海选和专家评审后，「MTSC 2022年度最佳开源项目」评选终于尘埃落定",
    url: "https://sonic-cloud.wiki/d/1471-sonicmtsc-2022",
    pic: c2
  },
  {
    title: "【Sonic摘星计划】参与commit贡献赢取Sonic专属纪念品！",
    time: "为了Sonic更好地发展，在此举行Sonic摘星计划~ 荣誉证书等你来拿！",
    url: "https://sonic-cloud.wiki/d/1510-soniccommitsonic",
    pic: honor
  },
  {
    title: "不想折腾python环境又想跨平台进行iOS自动化怎么办？不妨试试sib~",
    time: "Sonic组织推出的超方便iOS调试工具",
    url: "https://sonic-cloud.wiki/d/1197-pythoniossib",
    pic: c1
  },
  {
    title: "Sonic项目与网易AirtestProject达成合作关系啦！",
    time: "今后双方合作会碰撞出什么样的火花呢？点击下方马上了解！",
    url: "https://sonic-cloud.wiki/d/843-sonicairtestproject",
    pic: c0
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
</script>
<template>
  <el-backtop target=".demo-tree-scrollbar .el-scrollbar__wrap" :bottom="100"></el-backtop>
  <el-scrollbar class="demo-tree-scrollbar" style="height: 100%">
    <!-- 顶部标语 -->
    <div style="position: relative;padding: 120px 0">
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
        <el-button type="primary" size="small" @click="router.push('/Deploy')">马上使用</el-button>
        <el-button type="primary" size="small" @click="open('https://zhuanlan.zhihu.com/p/449187669')">演示视频
        </el-button>
        <el-button type="primary" size="small" @click="open('https://sonic-cloud.wiki/')">用户社区
        </el-button>
      </div>
      <h5>Made with 🧡 by SonicCloudOrg</h5>
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

      <!--      <div class="title">-->
      <!--        <span class="verh2">-->
      <!--          合作伙伴-->
      <!--        </span>-->
      <!--      </div>-->
      <!--      <div style="padding: 0 20%;">-->
      <!--        <el-divider></el-divider>-->
      <!--      </div>-->
      <!--      <div class="sponsor">-->
      <!--        <a href="https://airtest.netease.com/" target="_blank">-->
      <!--          <img src="https://airtest.netease.com/static/img/icon/logo.png" alt="Airtest" width="450"/>-->
      <!--        </a>-->
      <!--      </div>-->

      <!--      <div class="title">-->
      <!--        <span class="verh2">-->
      <!--          金牌赞助商-->
      <!--        </span>-->
      <!--      </div>-->
      <!--      <div style="padding: 0 20%;">-->
      <!--        <el-divider></el-divider>-->
      <!--      </div>-->
      <!--      <div class="sponsor">-->
      <!--        <a href="https://www.testing-studio.com/" target="_blank">-->
      <!--          <img src="https://ceshiren.com/uploads/default/original/3X/7/0/70299922296e93e2dcab223153a928c4bfb27df9.jpeg"-->
      <!--               alt="霍格沃兹测试开发学社" width="450"/>-->
      <!--        </a>-->
      <!--        <a style="margin-top: 20px" href="https://ec.diwork.com/" target="_blank">-->
      <!--          <img src="https://ec.diwork.com/html/index/img/newlogo.png" alt="友空间" width="450"/>-->
      <!--        </a>-->
      <!--      </div>-->

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
          <p>安卓Apk、iOS调试工具</p>
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
          Sonic方案与产出
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
            持续的更新迭代速度，仔细聆听用户的需求。
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
            超低的使用门槛，超便捷的维护方式，趣味交互让用户不再感到繁琐。
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
          <el-button type="primary" size="large" @click="router.push('/Deploy')">马上使用</el-button>
          <el-button type="primary" size="large" @click="open('https://zhuanlan.zhihu.com/p/449187669')">演示视频
          </el-button>
          <el-button type="primary" size="large" @click="open('https://sonic-cloud.wiki/')">用户社区
          </el-button>
        </div>
      </div>

      <!--      <div style="margin-top: 100px">-->
      <!--        <span class="verh1">-->
      <!--          贡献者荣誉墙-->
      <!--        </span>-->
      <!--        <div style="padding: 0 20%;">-->
      <!--          <el-divider></el-divider>-->
      <!--        </div>-->
      <!--      </div>-->

    </div>
    <!-- 页脚 -->
    <el-footer style="margin-top: 75px">
      <el-divider></el-divider>
      <div style="margin-top: 5px;font-size: 13px;color: #606266">
        鸣谢：<a href="https://www.flaticon.com/free-icons/send" title="send icons">Send icons created
        by Freepik</a>， <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons
        created by sonnycandra</a>
      </div>
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

.sponsor a {
  display: block;
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

  .sponsor img {
    width: 300px;
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
}

</style>

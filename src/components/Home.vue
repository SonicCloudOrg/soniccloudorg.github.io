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
    img: 'https://img.shields.io/badge/replies%20-9.8k-ff69b4?style=social&logo=data:image/png;base64,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'
  },
  {
    tipContent: '镜像仓库总下载量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/badge/Docker%20pulls%20-54.3k-important'
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

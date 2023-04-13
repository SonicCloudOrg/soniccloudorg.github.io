<template>
  <!-- 开屏内容 -->
  <section class="hero">
    <div class="hero__left">
      <!-- 开屏背景 -->
      <div class="os-bg-base"></div>
      <div class="os-bg-base os-bg1"></div>
      <div class="os-bg-base os-bg2"></div>

      <!-- 品牌标语 -->
      <h1 class="brand-slogan">“ For You，For Free，Forever ”</h1>

      <!-- 品牌数据统计 -->
      <div class="statistics">
        <template v-for="item in statisticsData" :key="item.tipContent">
          <client-only>
            <el-tooltip :content="item.tipContent" placement="top">
              <a :href="item.linkUrl" class="statistics-link" target="_blank">
                <img :src="item.img"/>
              </a>
            </el-tooltip>
          </client-only>
        </template>
      </div>

      <!-- 品牌描述 -->
      <h4 class="brand-desc">
        {{ $t('home.desc') }}
      </h4>

      <!-- entry -->
      <div class="entry-operation">
        <el-button
          type="primary"
          size="large"
          round
          @click="router.go('/deploy/back-end-deploy')"
        >
          马上使用
        </el-button>
        <el-button
          type="primary"
          size="large"
          round
          @click="open('https://sonic-cloud.wiki/')"
        >
          用户社区
        </el-button>
      </div>

      <!-- 脚标 -->
      <h5 class="footmark">Made with 🧡 by SonicCloudOrg</h5>
    </div>
    <div class="hero__right">
      <video width="800" controls :src="demo"/>
    </div>
  </section>

  <!-- 主体内容 -->
  <div class="container">
    <!--    <section-box title="最新动态">-->
    <!--      <div class="news">-->
    <!--        <el-carousel-->
    <!--          style="margin-top: 30px"-->
    <!--          height="400px"-->
    <!--          indicator-position="outside"-->
    <!--          :interval="3000"-->
    <!--        >-->
    <!--          <el-carousel-item v-for="item in news">-->
    <!--            <div-->
    <!--              :style="-->
    <!--                'background:linear-gradient(to bottom right, rgba(64,158,255, 0.3), rgba(0, 0, 0, 0.8)) ,url(' +-->
    <!--                item.pic +-->
    <!--                ');'-->
    <!--              "-->
    <!--              class="news-banner"-->
    <!--            >-->
    <!--              <span class="news-banner__title">-->
    <!--                {{ item.title }}-->
    <!--              </span>-->
    <!--              <h3 class="news-banner__time" v-if="item.time">-->
    <!--                {{ item.time }}-->
    <!--              </h3>-->
    <!--              <el-button v-if="item.url" type="primary" @click="open(item.url)">-->
    <!--                查看-->
    <!--              </el-button>-->
    <!--            </div>-->
    <!--          </el-carousel-item>-->
    <!--        </el-carousel>-->
    <!--      </div>-->
    <!--    </section-box>-->

    <section-box title="Sonic荣誉及认证">
      <div class="honor-card">
        <el-card v-for="d in honor" class="honor-card-wrapper" shadow="hover">
          <div class="honor-card-content" @click="open(d.url)">
            <img class="honor-img" :src="d.img"/>
            <h4 class="honor-name">{{ d.name }}</h4>
          </div>
        </el-card>
      </div>
    </section-box>

    <section-box title="Sonic支持哪些设备？">
      <div class="devices">
        <el-card
          class="card-content"
          :body-style="{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '180px'
          }"
          shadow="hover"
          v-for="item in devices"
        >
          <img width="50" :src="item.image"/>
          <p>{{ item.name }}</p>
        </el-card>
      </div>
    </section-box>
    <section-box title="为什么使用Sonic？">
      <div class="use-case">
        <el-card class="case-content" shadow="hover">
          <img :src="team4" width="40"/>
          <h3>0编码UI自动化</h3>
          <p>积木式创建步骤</p>
          <p>一键分发多设备任务</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team" width="40"/>
          <h3>在线代理抓包</h3>
          <p>一键连接代理抓包</p>
          <p>团队协作轻松快捷</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team2" width="40"/>
          <h3>设备分布式集群</h3>
          <p>支持跨网段多机房</p>
          <p>支持Windows、Mac、Linux平台</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team3" width="40"/>
          <h3>优秀周边生态</h3>
          <p>安卓Apk、iOS调试工具</p>
          <p>Jenkins插件、在线抓包工具</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team5" width="40"/>
          <h3>低成本维护</h3>
          <p>拖拽式排序交互</p>
          <p>使用简单便捷</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team6" width="40"/>
          <h3>在线WebView</h3>
          <p>提供在线调试WebView</p>
          <p>一键便利连接devtools</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team7" width="40"/>
          <h3>可视化报表</h3>
          <p>测试截图、日志、录像</p>
          <p>图表展示项目运行情况</p>
        </el-card>
        <el-card class="case-content" shadow="hover">
          <img :src="team8" width="40"/>
          <h3>轻松部署维护</h3>
          <p>Docker一键去中心化分布式</p>
          <p>扩容缩容不再繁琐</p>
        </el-card>
      </div>
    </section-box>
    <section-box title="Sonic的价值与产出">
      <div class="capacity-wrapper">
        <img class="capacity-img" :src="msg"/>
        <el-timeline class="capacity-list" style="text-align: left">
          <el-timeline-item type="primary" :hollow="true">
            Sonic提供图像识别，支持获取poco控件，助力游戏公司测试效率。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            使用Sonic进行跨网段部署，助力海外业务的公司进行专项检测。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            提供定时任务充分利用无人值守时间回归UI测试，省时省力。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            完全开源免费的平台，快速的更新迭代速度，创造了多个领域新技术。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            支持打通Jenkins的DevOps流程，推进项目自动化流程。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            支持无限扩容设备，一键使用Android、iOS设备调试，设备管理不再繁琐。
          </el-timeline-item>
          <el-timeline-item type="primary" :hollow="true">
            丰富图表展示，用户实时洞察用例执行情况，把控产品质量。
          </el-timeline-item>
        </el-timeline>
      </div>
    </section-box>

    <section-box title="金牌赞助商">
      <div class="sponsor">
        <div class="sponsor__list">
          <a
            href="http://qrcode.testing-studio.com/f?from=Sonic&url=https://ceshiren.com/"
            target="_blank"
          >
            <img
              src="https://ceshiren.com/uploads/default/original/3X/7/0/70299922296e93e2dcab223153a928c4bfb27df9.jpeg"
              alt="霍格沃兹测试开发学社"
              width="350"
            />
          </a>
          <a
            style="margin-left: 20px"
            href="https://ec.diwork.com/"
            target="_blank"
          >
            <img
              src="https://ec.diwork.com/html/index/img/newlogo.png"
              alt="友空间"
              width="350"
            />
          </a>
        </div>
        <a class="" href="mailto:291028775@qq.com" target="_blank">
          <el-button round plain style="width: 150px; margin-top: 30px">
            成为赞助商！
          </el-button>
        </a>
      </div>
    </section-box>

    <!--    <section-box title="贡献者们">-->
    <!--      <div style="text-align: center">-->
    <!--        <img-->
    <!--          style="display: inline-block"-->
    <!--          src="https://opencollective.com/soniccloudorg/contributors.svg?width=800&button=false"-->
    <!--          alt="contribute"-->
    <!--          width="950"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </section-box>-->
  </div>
</template>

<script setup lang="ts">
import SectionBox from '../components/SectionBox.vue'

// 图片资源
import demo from '../assets/video/demo.mp4'
import mtsc from '../assets/mtsc.png'
import gvp from '../assets/gvp.png'

// 支持设备
import a1 from '../assets/ANDROID.jpg'
import a2 from '../assets/APPLE.jpg'
import a3 from '../assets/CAR.png'
import a4 from '../assets/WATCH.png'
// 使用场景
import team from '../assets/team.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import team7 from '../assets/team7.png'
import team8 from '../assets/docker.png'
// 价值与产出
import msg from '../assets/msg.png'
import {useRouter} from 'vitepress'

const honor = [
  {
    name: "MTSC 2022年度最佳开源项目评选第一名",
    img: mtsc,
    url: "https://sonic-cloud.wiki/d/1471-sonicmtsc-2022"
  },
  {
    name: "开源中国GVP - Gitee最有价值开源项目",
    img: gvp,
    url: "https://sonic-cloud.wiki/d/2955-sonicgvp-gitee"
  },
]

// 品牌数据统计
const statisticsData = [
  {
    tipContent: 'Sonic组织Gitee镜像Star数量',
    linkUrl: 'https://gitee.com/sonic-cloud/sonic-server/stargazers',
    img: 'https://gitee.com/sonic-cloud/sonic-server/badge/star.svg?theme=gvp'
  },
  {
    tipContent: 'Sonic组织Github Follower数量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/github/followers/SonicCloudOrg?style=social'
  },
  {
    tipContent: 'Sonic组织Github仓库总Star数量',
    linkUrl: 'https://github.com/SonicCloudOrg',
    img: 'https://img.shields.io/github/stars/soniccloudorg?style=social'
  },
  {
    tipContent: 'Sonic用户社区总回复数',
    linkUrl: 'https://sonic-cloud.wiki',
    img: 'https://img.shields.io/badge/replies%20-17k-ff69b4?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABiVBMVEUAAAAoq+Ioq+JHuul92PYoq+Ipq+Jdx+4pq+Ipq+Ipq+Ioq+J92PZ92PZ92PZ92PZ92PYpq+Ipq+J92PYpq+J92PYpq+J92PZ92PZMvep82PZ81/Yoq+J92PYoquIpq+J92PZ92PYpq+Ipq+J92PYoq+J82PZ92PYoq+Ioq+J82PZ92PYpq+J92PYoq+Gzs7Mpq+J92PUpq+J92Pazs7PY2Nh92PYpq+J92PYoq+J82PZ81/Z92PZ92PZ81/Xl5eUpq+Ll5eWw3u4pq+J91/V92PZ00/Pl5eUpq+J92PYpq+Ll5eWzs7N92PZ92Pazs7N92Pbl5eV82PZ92PUpq+Kzs7N92PZ82PYpq+KDsMOzs7Pl5eXl5eV92PYpq+Kzs7Pm5uZ61vV81/bk5ORBuOgtruN41fV11PRx0vNtz/JjyvBcxu49tuc6teY2suUxsOTHx8dozfFSwexNvupGu+nExMSF2fSU2/Ko3e9Ww+zR4+ne5ec3q91IrNeYv89ers+BsMOWsbyssrUBQeaHAAAAXXRSTlMA8hkG/OUOBPx8J/nz7ubNqalsa1A+PBcQC/jc2NXU0M/EwryzsaKelpGQhoJ1cmxlWldSUE5EQzYxLyYeG/Xx79XHx7urq6OdmYmFg358enJoZGJeXkpISEJCLhBW59AbAAAB8UlEQVRYw+3VR1MbQRCG4VFCEkiADVgWwYBtwAkwNmAwOeecQ7ckcs45wy9HW4uoRdOMWsuBC+/9qZpDfzXirderrjiv3Wpa2/5+tUNowW2S///hBYDQBn4woz+mpYDW0gbmxq+d422ZoPtNxN/x8pqfyfDQctg3+uN7+nA+wKPfQsTv8fCMwnqI8q5Etq7tywJjK5rHL0ztL2u1w1O/jVrpLF7V5QUgvcMZW/uKc0BqVffoZl0r4Rd1n2SNda3JAAqP7zjXKrcb8aoZTKRmQkyfy7hWubUIf24G/pH8OWB5SwJ1rUUeAI4nZ1DbnwXq1tGQNIMyO3A9PYNUvqdnUOlR+1ODpmdQp3rD3F6EqmZQmcPwyhk4Bz2034/ImDPwFXK88jfIyJP8QbT/JFQ507xPfEjy+F6o8xXZDX5B8tIM5KpSFB6/CUbNR5KXZqCs6fxE/z7lPgtODcHg2XFoE4n+cPxsMNz8FeUdNsFoRvOHdxco90twqtB8IHAje5dVcBoKzu8Ewl0iSjNg1aP7wC1G90+w6tC81rU0A14VvQOlpWPl5dNTFnoG/EroGfCzZdMz4DeJhqqFiQroGfBLTKJnwK+bngG/BAc9A36jihnwakGtAmG6ahc9A36dYZ8tXpDVQs+AXwk9A342d7p4S9E9V8/Td9ry6OsAAAAASUVORK5CYII='
  },
  {
    tipContent: 'Agent端Release总下载量',
    linkUrl: 'https://github.com/SonicCloudOrg/sonic-agent/releases',
    img: 'https://img.shields.io/github/downloads/SonicCloudOrg/sonic-agent/total'
  }
]

// 支持设备
const devices = [
  {
    image: a1,
    name: '安卓设备'
  },
  {
    image: a2,
    name: 'iOS设备'
  },
  {
    image: a3,
    name: '车载设备'
  },
  {
    image: a4,
    name: '智能手表'
  }
]

// 页面跳转
const open = (url: string): void => {
  window.open(url, '_blank')
}

const router = useRouter()
</script>

<style scoped lang="scss">
/* 开屏内容*/
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  /* 减去顶部导航栏高度 */
  height: calc(100vh - 72px);
  padding: 120px 100px;
  overflow-x: hidden;

  &__left {
    flex: 1;
    min-width: 580px;
    margin-right: 50px;
    text-align: center;
  }

  &__right {
    width: 800px;
  }
}

/* 开屏背景样式 */
.os-bg-base {
  position: absolute;
  bottom: 0;
  left: -50%;
  right: -50%;
  top: 0;
  opacity: 0.5;
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #d1e3f6 50%, #9bdcf7 50%);
  z-index: -1;
}

.os-bg1 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.os-bg2 {
  animation-duration: 5s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

/* 品牌标语 */
.brand-slogan {
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 64px;
  font-size: 2.2rem;
  font-weight: 700;
  white-space: pre-wrap;
}

/* 品牌描述 */
.brand-desc {
  margin: 24px 0;
  font-size: 20px;
  font-weight: bold;
}

/* 品牌静态数据统计 */
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

/* entry */
// .entry-operation {
// }

/* 脚标 */
.footmark {
  margin-top: 20px;
}

/* 主体内容 */
.container {
  width: 1200px;
  margin: 0 auto;
}

/* 最新动态 */
.news {
  padding: 0 140px;
}

.news-banner {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  color: aliceblue;
  overflow: hidden;

  &__title {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  &__time {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.83em;
  }
}

/* 荣誉墙 */
.honor-wall {
  text-align: center;
}

/* 贡献墙 */
.cons-wall {
  padding: 0 20%;
  text-align: center;
}

.more-user {
  margin-bottom: 15px;
  color: #909399;
  font-size: 14px;
}

/* 支持设备 */
.devices {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 190px;
}

.card-content {
  border-radius: 25px;

  img {
    display: block;
  }

  p {
    font-weight: bold;
    margin: 0;
  }
}

.honor-name {
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
}

.honor-img {
  height: 240px;
  object-fit: contain;
}

.honor-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.honor-card-wrapper {
  cursor: pointer;
  width: 260px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
}

.honor-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
}

/* 使用场景 */
.use-case {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.case-content {
  width: 270px;
  margin-bottom: 20px;
  border-radius: 25px;
  text-align: center;

  img {
    display: inline-block;
  }

  h3 {
    margin: 18px 0;
    font-size: 1.17em;
    font-weight: bold;
  }

  p {
    margin: 16px 0;
    font-size: 15px;
  }
}

/* 价值与产出 */
.capacity-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.capacity-img {
  height: 300px;
}

/* 快速开始 */
.quick-start {
  display: flex;
  justify-content: center;
}

/* 赞助商 */
.sponsor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    display: inline-block;
  }
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
    opacity: 0.05;
    filter: blur(2px);
  }

  .capacity-list {
    padding-right: 40px;
  }
}
</style>

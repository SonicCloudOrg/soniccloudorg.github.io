<script setup>
import 'vue3-video-play/dist/style.css';
import {videoPlay} from 'vue3-video-play';
import {ref} from "vue";
import th1 from '../assets/th1.png'
import th2 from '../assets/th2.png'
import th3 from '../assets/th3.png'
import user from '../assets/user.png'
import Pur from './Pur.vue'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'

const rate = ref(5)
const videoOptions = ref({
  width: '780px',
  height: '440px',
  controlBtns: ['audioTrack', 'quality', 'volume', 'fullScreen', 'speedRate'],
});
const cabinetDes = ref([
  '采用工业级静电喷塑铝板',
  '3C级防爆钢化玻璃，安全美观',
  '特殊定制铝合金门锁，开关存放方便',
  '空间设计合理，摆放井井有续',
  '内置8块抽拉托盘，可存放80部手机',
  '便捷手机支架，适合多种款式机型',
  '满足不同充电口充电需求',
  '安全充电，管理方便，配备3c标准插排和品牌千兆交换机',
  '内置高速静音散热风扇，静音降温，保证柜内温度',
  '底部配有带刹车万向轮，方便移动柜体'
])
const product = ref([
  {
    pic: p1,
    title: "PAWAO 1.0 散热式机柜",
    des: "含小、中、大规格",
    des2: "可选择散热版、屏蔽版、温控版",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3c3a645eSj7FCR&ft=t&id=696443990660"
  },
  {
    pic: p2,
    title: "PAWAO 1.0 智能集线器",
    des: "提供二进制文件，可HTTP调用",
    des2: "轻松控制集线器USB口通断电",
    url: ""
  },
  {
    pic: p3,
    title: "PAWAO 1.0 智能数据线",
    des: "智能芯片助力充电口降温",
    des2: "支持Type-c、苹果数据线",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.52de3d0dbeP6yr&ft=t&id=693483194887"
  },
  {
    pic: p4,
    title: "PAWAO 迷你工控机",
    des: "小巧工控机，可自定义配置",
    des2: "搭载Ubuntu系统，稳定运行",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.52de3d0dbeP6yr&ft=t&id=690165961688"
  },
  {
    pic: p5,
    title: "PAWAO 六类网线",
    des: "CAT6A成品网线、路由器连接线",
    des2: "可自由选择长度",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.52de3d0dbeP6yr&ft=t&id=691859752465"
  },
  {
    pic: p6,
    title: "PAWAO UPS电源",
    des: "外置电池主机",
    des2: "智能稳压，无惧异常断电",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3c3a645ez8ZN2h&ft=t&id=696193021266"
  },
  {
    pic: p7,
    title: "PAWAO 无线路由器",
    des: "超强覆盖，信号稳定",
    des2: "高速率、超频宽、更疾速",
    url: "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3c3a645ez8ZN2h&ft=t&id=696702703783"
  },
])
const ths = ref([
  {
    url: "https://z.yonyoucloud.com/",
    src: th3
  },
  {
    url: "https://www.yonyou.com/",
    src: th2
  },
  {
    url: "https://pmcloud.yonyoucloud.com/official-index.html",
    src: th1
  }
])
</script>

<template>
  <el-backtop target=".demo-tree-scrollbar .el-scrollbar__wrap" :bottom="100"></el-backtop>
  <el-scrollbar class="demo-tree-scrollbar" style="height: 100%">
    <div style="position: relative;padding: 120px 0;display: flex;align-items: center;justify-content: center">
      <div>
        <div class="bg-c"></div>
        <div class="bg-c bg2-c"></div>
        <div class="bg-c bg3-c"></div>
        <h1 class="brand-slogan-cabinet">PAWAO 真机集群硬件解决方案</h1>

        <h4 class="brand-desc-cabinet">全套完整一体化硬件方案，为您提供企业级使用体验</h4>
      </div>
    </div>
    <div>
      <div style="margin-top: 60px">
        <h2>
          PAWAO 1.0 散热式机柜
        </h2>
      </div>
      <div class="capacity-wrapper-cabinet">
        <video-play v-bind="videoOptions" src="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/cabinet.mp4"/>
        <el-timeline class="capacity-list" style="text-align: left">
          <el-timeline-item
              v-for="i in cabinetDes"
              type="primary"
              :hollow="true"
          >
            {{ i }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <pur url="https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3c3a645eSj7FCR&ft=t&id=696443990660"/>
    </div>

    <div>
      <div style="margin: 160px 0">
        <h2>
          PAWAO 1.0 智能集线器
        </h2>
        预计2023年1月上架...
      </div>
    </div>

    <div class="container">

      <div>
        <div style="margin-top: 60px">
          <h2>
            他们都在用
          </h2>
          <div style="padding: 0 20%;">
            <el-divider></el-divider>
          </div>
          <el-space :size="25" alignment="stretch" style="margin-top: 20px;margin-left: 25px">
            <a v-for="t in ths" :href="t.url" target="_blank">
              <el-avatar shape="square" style="border-radius:22px;box-shadow: 4px 4px 10px #606266;" :src="t.src"
                         :size="100"/>
            </a>
          </el-space>
          <div style="padding: 5%">
            <el-card style="width: 100%;text-align: left">
              <div style="display: flex">
                <el-avatar :src="user" :size="60"/>
                <div style="margin-left: 20px">
                  <div style="display: flex">
                    <h4 style="margin: 0px">友空间团队测试专家</h4>
                    <el-rate disabled v-model="rate" style="width: 200px;margin-left: 10px"/>
                  </div>
                  <el-card style="margin-top: 20px">
                    使用下来体验非常不错，设备鼓包率大大下降，长时间测试与使用能保持电池健康的温度。手机管理，监控，使用变得更快捷，更有效！
                  </el-card>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>

      <div>
        <div style="margin-top: 60px">
          <h2>
            设备充电保护落地效益
          </h2>
          <div style="padding: 0 20%;">
            <el-divider><span style="color: #909399">Sonic实验室结合内测用户三个月实验数据</span></el-divider>
          </div>
          <el-descriptions
              direction="vertical"
              :column="1"
              size="large"
              border
          >
            <el-descriptions-item label="充电时长">工作日24h/天</el-descriptions-item>
            <el-descriptions-item label="电池温度">设备平均温度下降8-11°C</el-descriptions-item>
            <el-descriptions-item label="设备鼓包率">7% -> 1.8%</el-descriptions-item>
            <el-descriptions-item label="设备充电电流">接近额定电流，未出现过冲</el-descriptions-item>
            <el-descriptions-item label="设备充电电压">约4V - 4.2V不等</el-descriptions-item>
          </el-descriptions>
        </div>
      </div>

      <div style="margin-top: 60px">
        <h2>
          所有硬件产品
        </h2>
      </div>
      <div style="padding: 0 20%;">
        <el-divider></el-divider>
      </div>
      <div class="use-case-cabinet">
        <el-card v-for="d in product" class="case-content" shadow="hover">
          <img :src="d.pic" height="80"/>
          <h3>{{ d.title }}</h3>
          <p>{{ d.des }}</p>
          <p>{{ d.des2 }}</p>
          <pur :url="d.url"/>
        </el-card>
      </div>

      <div style="margin-bottom: 100px"></div>
      <el-footer style="margin-top: 75px">
        <el-divider></el-divider>
        <div style="font-size: 10px;color: #909399">
          上述硬件产品不影响Sonic平台正常使用，仅为搭建硬件环境提供采购选择，Sonic平台仍然保持永久开源、免费。
        </div>
        <div style="margin-top: 5px;font-size: 10px;color: #909399">上述部分产品含专利。版权所有，盗版必究。</div>
        <div style="margin-top: 5px;">
          <el-link href="mailto:soniccloudorg@163.com" target="_blank" type="primary">官方邮箱</el-link>
          <el-link href="https://sonic-record-hongkong.oss-cn-hongkong.aliyuncs.com/wechat.jpg" target="_blank"
                   type="primary"
                   style="margin-left: 20px">企微咨询
          </el-link>
        </div>
        <div style="margin-top: 10px">&nbsp;</div>
      </el-footer>
    </div>
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

.bg-c {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #000000 50%, #606266 50%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2-c {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3-c {
  animation-duration: 5s;
}

.brand-slogan-cabinet {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 24px;
}

.brand-desc-cabinet {
  color: #FAFCFF;
  margin: 24px 0;
}

.capacity-wrapper-cabinet {
  display: flex;
  justify-content: center;
  margin-top: 50px
}

.card-content {
  width: 180px;
}

.use-case-cabinet {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.case-content {
  width: 270px;
  margin-bottom: 20px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

@media screen and (max-width: 820px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }


  .card-content {
    width: 165px;
    margin-bottom: 14px;
  }

  .case-content {
    width: 170px;
    margin-bottom: 10px;
  }

  .capacity-wrapper-cabinet {
    position: relative;
    display: inline-block;
    margin-top: 10px;
  }
}
</style>

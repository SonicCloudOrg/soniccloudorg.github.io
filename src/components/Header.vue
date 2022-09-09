<script setup>
import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()

const open = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
    <el-header>
      <img src="../assets/logo2.png" class="logo-wrapper" height="40"/>
      <el-menu :default-active="route.path"
               class="el-menu-demo"
               mode="horizontal"
      >
        <el-menu-item index="/Home" @click="router.push('/Home')">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>相关文档</template>
          <el-menu-item index="/Deploy" @click="router.push('/Deploy')">部署文档</el-menu-item>
          <el-menu-item index="/Document" @click="router.push('/Document')">
            <div style="display: flex"><span>使用文档</span>
              <el-badge type="primary" value="building" class="item" style="margin-top: -2px;margin-left: 5px">
              </el-badge>
            </div>
          </el-menu-item>
          <el-menu-item index="/Contribute" @click="router.push('/Contribute')">
            开发文档
          </el-menu-item>
          <el-menu-item index="1-1" @click="open('https://sonic-cloud.wiki/t/user')">
            <div style="display: flex"><span>企业案例</span>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>周边生态</template>
          <el-menu-item index="/SDC" @click="router.push('/SDC')" disabled>
            <div style="display: flex"><span>sonic-driver-core</span>
              <el-badge type="primary" value="building" class="item" style="margin-top: -2px;margin-left: 5px">
              </el-badge>
            </div>
          </el-menu-item>
          <el-menu-item index="/SIB" @click="router.push('/SIB')">
            sonic-ios-bridge
          </el-menu-item>
          <el-menu-item index="/SAA" @click="router.push('/SAA')">
            sonic-android-apk
          </el-menu-item>
          <el-menu-item index="/SGM" @click="router.push('/SGM')">
            sonic-go-mitmproxy
          </el-menu-item>
          <el-menu-item index="/SCH" @click="router.push('/SCH')">
            sonic-ci-helper
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>其他</template>
          <el-menu-item index="/Version" @click="router.push('/Version')">版本记录
          </el-menu-item>
          <el-menu-item index="1-2" @click="open('https://sonic-cloud.wiki')">
            <div style="display: flex"><span>用户社区</span>
              <el-badge value="Hot!" class="item" style="margin-top: -2px;margin-left: 5px">
              </el-badge>
            </div>
          </el-menu-item>
          <el-menu-item index="/Mine" @click="open('https://sonic-cloud.wiki/p/1-contact')">联系我们</el-menu-item>
        </el-sub-menu>
        <el-menu-item><a href="https://github.com/SonicCloudOrg" target="_blank"><img src="../assets/github.png"
                                                                                      height="30"/></a>
        </el-menu-item>
      </el-menu>
    </el-header>
</template>

<style>
.logo-wrapper {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.el-header {
  position: relative;
}
.el-menu-demo {
  justify-content: flex-end;
}

@media screen and (max-width: 820px) {
  .el-menu-demo {
    padding-left: 270px;
  }
}
</style>

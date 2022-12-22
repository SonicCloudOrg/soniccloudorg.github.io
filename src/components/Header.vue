<script setup>
import {useRoute, useRouter} from "vue-router";
import docsearch from '@docsearch/js';
import '@docsearch/css';
import {onMounted} from "vue";
const route = useRoute()
const router = useRouter()

const open = (url) => {
  window.open(url, '_blank')
}

onMounted(()=>{
  docsearch({
    placeholder:"Search Docs / 文档搜索",
    container: '#docsearch',
    appId: '173PUFCVUH',
    indexName: 'sonic-cloud',
    apiKey: '4c05e65805bc511ab341c44ca5c29e83',
    translations: {
      button: {
        buttonText: "Search Docs / 文档搜索",
        buttonAriaLabel: "Search Docs / 文档搜索",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Clear 清除查询条件",
          resetButtonAriaLabel: "Clear 清除查询条件",
          cancelButtonText: "Cancel 取消",
          cancelButtonAriaLabel: "Cancel 取消",
        },
        startScreen: {
          recentSearchesTitle: "History 搜索历史",
          noRecentSearchesText: "History is empty 没有搜索历史",
          saveRecentSearchButtonTitle: "Save to history 保存至搜索历史",
          removeRecentSearchButtonTitle: "Remove from history 从搜索历史中移除",
          favoriteSearchesTitle: "Favorite 收藏",
          removeFavoriteSearchButtonTitle: "Remove from favorite 从收藏中移除",
        },
        errorScreen: {
          titleText: "Unable to get results 无法获取结果",
          helpText: "You need to check your network connection 你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "Choose 选择",
          navigateText: "Switch 切换",
          closeText: "Close 关闭",
        },
        noResultsScreen: {
          noResultsText: "Unable to find related results 无法找到相关结果",
          suggestedQueryText: "You can try to search 你可以尝试查询",
          reportMissingResultsText: "Do you think the query should have results? 你认为该查询应该有结果？",
          reportMissingResultsLinkText: "Click Feedback 点击反馈",
        },
      },
    },
  });
})
</script>

<template>
    <el-header>
      <img src="../assets/logo2.png" class="logo-wrapper" height="40" style="cursor: pointer" @click="router.push('/home')"/>
      <el-menu :default-active="route.path"
               class="el-menu-demo"
               mode="horizontal"
      >
        <div id="docsearch" style="display: flex;align-items: center;margin-right: 15px"></div>
        <el-menu-item index="/home" @click="router.push('/home')">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>相关文档</template>
          <el-menu-item index="/deploy" @click="router.push('/deploy')">部署文档</el-menu-item>
          <el-menu-item index="/document" @click="router.push('/document')">
            <div style="display: flex"><span>使用文档</span>
            </div>
          </el-menu-item>
          <el-menu-item index="/contribute" @click="router.push('/contribute')">
            开发文档
          </el-menu-item>
          <el-menu-item index="1-1" @click="open('https://sonic-cloud.wiki/t/user')">
            <div style="display: flex"><span>企业案例</span>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>周边生态</template>
          <el-menu-item index="/sib" @click="router.push('/sib')">
            sonic-ios-bridge
          </el-menu-item>
          <el-menu-item index="/saa" @click="router.push('/saa')">
            sonic-android-apk
          </el-menu-item>
          <el-menu-item index="/sgm" @click="router.push('/sgm')">
            sonic-go-mitmproxy
          </el-menu-item>
          <el-menu-item index="/sch" @click="router.push('/sch')">
            sonic-ci-helper
          </el-menu-item>
          <el-menu-item index="/sdc" @click="router.push('/sdc')">
            sonic-driver-core
          </el-menu-item>
          <el-menu-item index="/svc" @click="router.push('/svc')" disabled>
            <div style="display: flex"><span>sonic-vision-core</span>
              <el-badge type="primary" value="building" class="item" style="margin-top: -2px;margin-left: 5px">
              </el-badge>
            </div>
          </el-menu-item>
          <el-menu-item index="/sas" @click="router.push('/sas')" disabled>
            <div style="display: flex"><span>sonic-android-supply</span>
              <el-badge type="primary" value="building" class="item" style="margin-top: -2px;margin-left: 5px">
              </el-badge>
            </div>
          </el-menu-item>
          <el-menu-item index="/siwa" @click="router.push('/siwa')">
            sonic-ios-webkit-adapter
          </el-menu-item>
        </el-sub-menu>
<!--        <el-menu-item index="/Cabinet" @click="router.push('/Home')" disabled>硬件方案(即将开放)</el-menu-item>-->
        <el-menu-item index="/version" @click="router.push('/version')">版本记录
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>其他</template>
          <el-menu-item index="1-2" @click="open('https://sonic-cloud.wiki')">用户社区</el-menu-item>
          <el-menu-item index="/Mine" @click="open('https://sonic-cloud.wiki/p/1-contact')">联系我们</el-menu-item>
          <el-menu-item index="/Open" @click="open('https://opencollective.com/soniccloudorg')">Open Collective</el-menu-item>
          <el-menu-item index="/about" @click="router.push('/about')">免责声明</el-menu-item>
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

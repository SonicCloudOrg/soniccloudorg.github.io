---
contributors:
  - 'ZhouYixun'
  - 'wuxiangin'
---

# 版本迁移指南

本文将介绍如何升级到最新版本。

## 关于版本规则变动

v2.0.0-release 起，Sonic 版本规则更改如下：

1. 第一位是大版本号，基本为一年一更
2. 第二位是有新功能合入就会加 1（特性版本，一般月更）
3. 第三位是修复 Bug 就会加 1（修复版本，一般半周到一周更一次）

以 `v2.0.1` 为例，就是修复 `v2.0.0` 的 Bug。

如果有大量新功能发布，就会更新 `v2.1.0`。

如果 `v2.1.0` 上线后有 Bug，那么下版本就是 `v2.1.1`，如果仍有 Bug，那么会继续发布 `v2.1.2`。

**如果想追求稳定的版本，那么应该是上一个特性版本的最后一个修复版本为最稳定。**

例如 `v2.2.0` 的上一个版本为 `v2.1.15`，那么 `v2.1.15` 版本就是 `v2.1.x` 的最稳定的版本

## 从 v1.4.1-release 以上版本 升级到 v2.0.x ~ v2.3.x
1. 升级前先备份Mysql数据库。
2. 直接前往 <a href="https://sonic-cloud.cn/deploy/back-end-deploy.html" target="_blank">这里</a> 下载最新版本zip，down集群后重新up即可。如果更换了部署目录，旧目录下的`keepFiles`、`imageFiles`、`recordFiles`、`packageFiles`文件夹的内容也要同步到新目录下（部署文档含中国大陆加速镜像部署方式）
3. jar方式部署的Agent前往 <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">这里</a> 下载zip后解压，更新需替换旧版本plugins文件夹与jar文件。Docker版Agent与server同理，前往 <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">这里</a> 重新下载镜像部署即可。（部署文档含中国大陆加速镜像部署方式）

::: tip TIP
---
升级至`v2.3.2`时，因数据结构调整，旧的安卓测试报告中的性能数据信息与新版本结构**不兼容**，因此会出现图表展示异常的问题。

---
升级至`v2.3.x`时，因部分类目录迁移至`tests/handlers`下，可能引起自定义脚本引入包时出错，更改详情可查看 [这里](https://github.com/SonicCloudOrg/sonic-agent/tree/main/src/main/java/org/cloud/sonic/agent/tests/handlers)。

---
从 v1.5.0或以下版本 升级需注意：
1. env 文件最下方新增 LDAP_OBJECT_CLASS=person
2. Agent 端的 jar 部署方式：已知部分 JDK 出现不兼容的问题，Sonic 官方推荐使用 JDK15，可以前往 [这里](https://docs.aws.amazon.com/corretto/latest/corretto-15-ug/downloads-list.html) 安装下载。
3. Agent 的 config/application-sonic-agent.yml 字段有改动，需参考最新版 yml 备注进行配置。
4. Agent 本地环境不再依赖 node、npm、谷歌浏览器、chromedriver，可以卸载来减少 Agent 空间。
:::


## 其他旧版本升级到 v1.4.1-release

0. server 升级前，先备份数据库。
1. **注意！** 升级后图片路径有所更改，所以旧图片会失效！

::: tip 解决方案

1. 可以在数据库将旧图片路径的 **ip:port** 替换为 **ip:前端 port/server**，即可恢复（推荐）。
2. 临时将 docker-compose.yml 文件的 gateway 服务，加上 ports 映射（不推荐），以下为示例代码：

:::

```
sonic-server-gateway:
    image: "registry.cn-hangzhou.aliyuncs.com/sonic-cloud/sonic-server-gateway:v1.4.1-beta"
    hostname: sonic-server-gateway
    environment:
      - SONIC_EUREKA_USERNAME
      - SONIC_EUREKA_PASSWORD
      - SONIC_EUREKA_PORT
      - SONIC_EUREKA_HOST=sonic-server-eureka
      - SECRET_KEY
      - EXPIRE_DAY
    volumes:
      - ./logs/:/logs/
    depends_on:
      - sonic-server-eureka
    networks:
      - sonic-network
    restart: on-failure
    ports:
      - 8094:8094
```

2. 因新版本 **将前后端多个端口合并为单一接口** 暴露，配置时需注意。（注意 env 文件与 docker-compose.yml 文件都需要更换）
3. 因整体架构调整较多，可前往 **前后端部署** 页面重新部署。
4. server 升级后，将旧挂载目录下的 logs、keepFiles、imageFiles、recordFiles、packageFiles 中的内容迁移到新目录下。
5. Agent 改动较大，需要将旧文件全部删除重新部署。配置 yml 时注意 server 的 port 应为 **SONIC_SERVER_PORT**。

## 其他旧版本升级到 v1.4.0-release

1. server 升级前，先备份数据库。
2. 因新版本调整设备数据，尽量将旧版本的 **重复序列号(udId)** 的设备删除至剩一个。（可查看下方常见问题）
3. 因整体架构调整较多，可前往 **前后端部署** 页面重新部署。
4. server 升级后，将旧挂载目录下的 logs、keepFiles、imageFiles、recordFiles、packageFiles 中的内容迁移到新目录下。
5. 如果旧版本没有自定义挂载路径（特别是 simple 版用户），您不知道您的本地文件默认储存在哪里，可以 [参考这里](https://blog.csdn.net/wu_qing_song/article/details/113253437) （如果你不想使用这个方法，可以参考常见问题第二题）。
6. Agent 改动较大，需要将旧文件全部删除重新部署。

## 关于 simple 版本

综合注册架构、通信逻辑、性能优化等因素，从 v1.4.0-beta 开始，集群版与 simple 版合并，并且在 sonic-server 上继续维护，因此 sonic-server-simple 版本不再维护。

## 常见问题（Q&A）

Q1: 我如果不迁移上文提到的若干个文件夹，直接使用新版本自带的文件夹，会发生什么？

A1: 旧版本的图片、录像、截图等信息将失效。当然如果文件不多，直接用新版本也是可以的。

---

Q2: 如果不用上文第四点的方法，还有别的方法吗？

A2: 可以使用 docker cp 指令将容器内的文件复制到宿主机，再迁移到新版本文件夹中。

---

Q3: 为什么1.4.0之前旧版本升级需要删除重复的序列号设备？

A3: 旧版本是以单 Agent 内不可重复，后续考虑到用户会将同一设备在多个 Agent 之间迁移，直接以序列号为标识。安卓目前是极低概率才会出现序列号相同的设备（哪怕相同也有办法修改），而苹果的序列号都是唯一的，所以大家不用担心。

---

::: tip
更多疑问可前往 👉[社区](https://sonic-cloud.wiki)👈 交流
:::

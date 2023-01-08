---
contributors:
  - 'ZhouYixun'
  - 'soniclei'
---

# iOS 设备接入

本文将介绍 iOS 设备接入 Sonic 的准备工作。

## 构建 WebDriverAgent 到设备中

构建 wda 到你的 iOS 设备中，成功后即可脱离 mac，在 win 或 linux 的 Agent 上使用 iOS 设备。

准备工作：Mac、Xcode

1. 拉下 WebDriverAgent 项目。

```bash
git clone https://github.com/appium/WebDriverAgent
# 或
git clone https://github.com/SonicCloudOrg/sonic-ios-wda.git
```

2. 准备个人免费证书（7 天过期），最好还是使用开发者账户。

<ElImage hide-on-click-modal src="./images/ios1.png" :preview-src-list="['./images/ios1.png']"/>
<ElImage hide-on-click-modal src="./images/ios2.png" :preview-src-list="['./images/ios2.png']"/>
<ElImage hide-on-click-modal src="./images/ios3.png" :preview-src-list="['./images/ios3.png']"/>
<ElImage hide-on-click-modal src="./images/ios4.png" :preview-src-list="['./images/ios4.png']"/>

注意：这里第一次往手机上打会报错，是因为没有信任电脑，在设置--通用--描述文件与管理里面信任即可。

4. 修改 sonic 的 agent 下的配置文件。

<ElImage hide-on-click-modal src="./images/ios5.png" :preview-src-list="['./images/ios5.png']"/>

5. 配置完成！接入 Sonic 即可。

<ElImage hide-on-click-modal src="./images/ios6.png" :preview-src-list="['./images/ios6.png']"/>

6. 接入完成后，后续可以脱离 Mac 来使用 iOS（Windows 需要安装 iTunes），如果证书过期，需要重新使用 Mac 安装证书

## 构建 ipa 文件

如果只想构建一次，然后打包成 wda.ipa 共享给其他设备，可以参考这个方式。

手机 udId 必须在开发者账号下。

```bash
$ xcodebuild build-for-testing -scheme WebDriverAgentRunner -sdk iphoneos -configuration Release -derivedDataPath /tmp/derivedDataPath
$ cd /tmp/derivedDataPath
$ cd Build/Products/Release-iphoneos
$ mkdir Payload && mv *.app Payload\
$ zip -r WDA.ipa Payload
$ sib app install WDA.ipa
```

::: tip
关于 sib 的使用，可前往周边生态。
:::

## 常见问题（Q&A）

Q1: 打包 wda 后启动失败。

A1: 请检查 yml 中配置的 bundleId 是否一致、设备是否信任了证书、设备是否信任了电脑。

---

Q2: 使用后没有出现画面，但是按键操作正常。

A1: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/27-ios)。

---

::: tip
更多疑问可前往 👉[社区](https://sonic-cloud.wiki)👈 交流
:::

---
contributors:

- 'ZhouYixun'
- 'soniclei'

---

# iOS 设备接入

本文将介绍 iOS 设备接入 Sonic 的准备工作。

## 接入通用配置

1. 将设备使用USB连接电脑
2. 点击【信任】电脑
3. 将 WebDriverAgent 构建到设备中（首次连接需要，可参考下方构建教学）

## iOS16特殊配置

iOS16需要手动开启开发者选项。

1. 打开设置，进入【隐私与安全性】。
2. 点击【开发者模式】。
3. 如果出现提示重启弹窗，点击重启。
4. 如果启动后询问是否打开开发者模式，点击打开。

## 构建 WebDriverAgent 到设备中

构建 wda 到你的 iOS 设备中。
::: tip 注意
构建成功后即可脱离 Mac，在 Windows 或 Linux 的 Agent 上也可以使用 iOS 设备。准备个人免费证书（7 天过期），最好还是使用开发者账户。
:::
准备工作：Mac、Xcode、开发者账户。

1. 拉取 WebDriverAgent 项目。
```bash
git clone https://github.com/appium/WebDriverAgent
# 或
git clone https://github.com/SonicCloudOrg/sonic-ios-wda.git
```
2. 修改 **WebDriverAgentLib** 和 **WebDriverAgentRunner** 中的Signing Team为自己的开发者账号。
<ElImage hide-on-click-modal src="./images/ios1.png" :preview-src-list="['./images/ios1.png']"/>
3. 修改 **WebDriverAgentRunner** 中 Build Settings 中的 **Product Bundle Identifier**
   为自己的自定义包名（最好保留WebDriverAgentRunner结尾）
   <ElImage hide-on-click-modal src="./images/ios2.png" :preview-src-list="['./images/ios2.png']"/>
   ::: warning 注意
   部分Xcode版本在修改包名后会重置签名的Team，需重新更改第二步中的签名
   :::
4. Scheme 选择 **WebDriverAgentRunner** 作为构建目标，右侧选择目标设备。然后选择 Product -> Build 即可构建。如果想测试
   WebDriverAgent 是否能正常运行，也可以选择 Product -> Test 查看运行日志。
   <ElImage hide-on-click-modal src="./images/ios3.png" :preview-src-list="['./images/ios3.png']"/>
::: warning 注意
如果构建到手机上有错误，可能是因为没有信任证书引起的。请连接网络后，在设置--通用--描述文件与管理里面信任即可。
:::
5. 构建完成！可以前往Agent端config文件夹的yml文件中配置对应的自定义BundleId即可。
::: tip 注意
接入完成后，后续可以脱离 Mac 来使用 iOS（Windows 需要安装 iTunes），如果证书过期，需要重新使用 Mac 安装证书
:::

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

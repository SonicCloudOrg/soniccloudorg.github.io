# sonic-driver-core

本文为Sonic UI自动化Driver核心sonic-driver-core的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-driver-core)

<a href="#">  
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-driver-core?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-driver-core?style=social">
</a>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-driver-core/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-driver-core" />
</a>

## 介绍

> sonic-driver-core是Sonic UI自动化核心，主要直接通过与 
[appium-uiautomator2-server](https://github.com/SonicCloudOrg/sonic-appium-uiautomator2-server) 、[WebDriverAgent](https://github.com/SonicCloudOrg/sonic-ios-wda) 和
 [Poco-SDK](https://github.com/SonicCloudOrg/sonic-sdk-poco) 通信达到自动化效果，减少通信过程中的时延与消耗。

## 快速使用

### 引入依赖

#### Maven Central

```
<dependency>
    <groupId>io.github.soniccloudorg</groupId>
    <artifactId>sonic-driver-core</artifactId>
    <version>1.1.7</version>
</dependency>
```

#### Gradle

```
implementation 'io.github.soniccloudorg:sonic-driver-core:1.1.7'
```

## 设备前置配置

自动化的前置配置Agent已大部分自动安装、检测与转发，如果在您的项目中单独使用sonic-driver-core，请往下翻阅。

### 安卓
> 首次使用安卓需先安装两个uia2依赖（可以前往[appium-uiautomator2-server](https://github.com/SonicCloudOrg/sonic-appium-uiautomator2-server) 自行构建，也可以前往 [这个](https://github.com/SonicCloudOrg/sonic-agent/tree/main/plugins) 目录下下载对应apk）
> 1. appium-uiautomator2-server.apk
> 2. appium-uiautomator2-server-test.apk
> 
> 安装后，执行命令
> ```
> adb shell am instrument -w io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner
> ```
> 然后转发服务端口
> ```
> adb forward tcp:6790 tcp:6790
> ```
> 然后就可以启动Driver
> ```
> AndroidDriver androidDriver = new AndroidDriver("http://localhost:6790");
> ```
> 更多功能介绍可以点击左侧导航栏的【AndroidDriver】

### iOS

> iOS需要打包wda到手机上，教程可以参考 [这里](https://sonic-cloud.gitee.io/#/Deploy?tag=ios) 。
> 
> 打包后，如果在Mac上直接使用XCode进行Build Test就可以忽略这一步。
> 如果在非Mac环境或者不依赖XCode工具则需要 [sib](https://sonic-cloud.gitee.io/#/SIB) 或 tidevice 一类的工具启动wda。
> 
> 以sib为例：
> ```
> sib run wda -b your.bundle.id
> ```
> 然后就可以启动Driver
> ```
> IOSDriver iosDriver = new IOSDriver("http://localhost:8100");
> ```
> 更多功能介绍可以点击左侧导航栏的【IOSDriver】

### POCO

> 使用POCO前需确认游戏应用引擎已经接入对应POCO-SDK，教程可以参考 [这里](https://sonic-cloud.gitee.io/#/Document?tag=poco) 。
> 
> 打包后，打开对应游戏引擎并转发Socket端口。 以安卓、Unity3D引擎为例：
> ```
> adb forward tcp:5001 tcp:5001
> ```
> 然后就可以启动Driver
> ```
> PocoDriver pocoDriver = new PocoDriver(PocoEngine.UNITY_3D);
> ```
> 更多功能介绍可以点击左侧导航栏的【PocoDriver】

## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sdc/re-sdc.md) 发起贡献改善此页

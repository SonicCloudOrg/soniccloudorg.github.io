# 控制中心

这里是关于远程控制设备的基础功能介绍。

## 安卓

### 切换投屏模式
> 安卓投屏有目前版本有两种模式，分别是minicap模式与scrcpy模式（默认）。
> 
> scrcpy已支持安卓5-13大部分机型，minicap支持安卓4.4-12机型。
> 
> 当所选投屏模式与您的设备不兼容时，可以点击投屏区域右侧工具栏来切换投屏模式。
> 
> 当minicap模式下，部分三星手机投屏区域出现黑边时，可以尝试使用投屏区域右侧工具栏的【修复黑屏】解决。

### 切换触控模式

> 安卓触控目前版本有两种模式，分别是sonic-android-apk触控与adb原生触控。
> 
> 安卓投屏触控默认使用 [sonic-android-apk](https://sonic-cloud.gitee.io/#/SAA) 实现实时触控，解决了minitouch在安卓10以上无法实时使用的场景。但是部分特殊情况下，当sonic-android-apk不可用时，可以点击投屏区域右侧工具栏的【修复触控】切换为adb原生触控。

### 远程ADB

> 远程ADB功能自 **v2.0.0-beta** 开始依赖 sonic-android-supply 实现，不再使用 adbkit。可以用ADB远程连接对应设备到本地，可以用于执行测试任务或开发调试等等场景。
> 
> 例如用户自己本地有ADB，则可以复制远程ADB界面的指令到本地执行：
> ```
> adb connect xxx.xxx.xxx.xxx:xxxx
> ```
> 然后输入
> ```
> adb devices
> ```
> 你会看到类似输出
> ```
> List of devices attached
> xxx.xxx.xxx.xxx:xxxx    device
> ```
> 完成！设备已经从Agent连接到用户本地的ADB了，后续可以使用ADB相关指令操作设备。例如查看设备分辨率：
> ```
> adb shell wm size
> ```


### 远程音频

> 远程音频功能目前依赖 [sonic-android-apk](https://sonic-cloud.gitee.io/#/SAA) 实现实时音频传输，开启后可以直接在网页上播放远程设备的实时音频。
> 
> 如果开启后没有音频，可以检查设备是否开启了 sonic-android-apk 的通知栏权限等等，确保 sonic-android-apk 拥有所有权限。

### 物理查找

> 该功能用于设备集群时，设备数量太多导致找物理机器繁琐而设。点击后设备会开启蓝色背景并高亮设备屏幕，易于物理检查时能快速查找对应设备。

## iOS
建设中


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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-control.md) 发起贡献改善此页

---
contributors:
- 'ZhouYixun'
---

# 控制中心

这里是关于远程控制设备的基础功能介绍。

## 安卓设备

### 键盘实时输入
::: tip
该功能需升级至Sonic v2.0.3
:::

远程控制设备时。
1. 鼠标点击到投屏区域内。（如果鼠标再次点击投屏区域外，将停止监听键盘输入）
2. 使用你的电脑键盘直接对网页输入文字。
3. 可以直接发送对应文本到手机里面，支持删除与回车键。

<video class="capacity-video" controls src="./video/input.mp4"/>

::: warning 注意
升级至Sonic v2.3.0后，可以直接点击Sonic输入法下方灰色区域快速跳转到系统输入法设置页进行输入法切换。
:::

### 切换投屏模式
安卓投屏有目前版本有两种模式，分别是minicap模式与scrcpy模式（默认）。

scrcpy已支持安卓5-13大部分机型，minicap支持安卓4.4-12机型。

当所选投屏模式与您的设备不兼容时，可以点击投屏区域右侧工具栏来切换投屏模式。

当minicap模式下，部分三星手机投屏区域出现黑边时，可以尝试使用投屏区域右侧工具栏的【修复黑屏】解决。

### 切换触控模式

安卓触控目前版本有两种模式，分别是sonic-android-apk触控与adb原生触控。

安卓投屏触控默认使用 [sonic-android-apk](https://sonic-cloud.cn/saa) 实现实时触控，解决了minitouch在安卓10以上无法实时使用的场景。但是部分特殊情况下，当sonic-android-apk不可用时，可以点击投屏区域右侧工具栏的【修复触控】切换为adb原生触控。

### 远程ADB

远程ADB功能自 **v2.0.0-beta** 开始依赖 sonic-android-supply 实现，不再使用 adbkit。可以用ADB远程连接对应设备到本地，可以用于执行测试任务或开发调试等等场景。

例如用户自己本地有ADB，则可以复制远程ADB界面的指令到本地执行：
```bash
adb connect xxx.xxx.xxx.xxx:xxxx
adb devices
```
你会看到类似输出
```bash
List of devices attached
xxx.xxx.xxx.xxx:xxxx    device
```
完成！设备已经从Agent连接到用户本地的ADB了，后续可以使用ADB相关指令操作设备。例如查看设备分辨率：
```bash
adb shell wm size
```

### 文件管理

可以上传和拉取文件。

1. 上传文件后，路径需要加上文件名，如上传abc.jpg到/data/local/tmp，则填写/data/local/tmp/123.jpg。
2. 拉取文件时，仅支持单文件操作，如拉取/data/local/tmp/123.jpg，则填写/data/local/tmp/123.jpg。

### 扫描二维码
::: tip
部分OPPO、vivo和子品牌设备需要重启后才能生效。
:::
需要扫描二维码时，可以将二维码图片上传到对应位置，然后扫码时打开相册就能找到对应二维码。

### 重连UIAutomator Server

当默认初始化失败后，需要调整对应的设置，可以前往 [这里](https://sonic-cloud.cn/deploy/android-deploy.html) 检查配置。然后点击【初始化UIAutomator2Server】直至Status为Connected为止。

### 远程音频

远程音频功能目前依赖 [sonic-android-apk](https://sonic-cloud.cn/saa/re-saa.html) 实现实时音频传输，开启后可以直接在网页上播放远程设备的实时音频。

如果开启后没有音频，可以检查设备是否开启了 sonic-android-apk 的通知栏权限等等，确保 sonic-android-apk 拥有所有权限。

### 物理查找

该功能用于设备集群时，设备数量太多导致找物理机器繁琐而设。点击后设备会开启蓝色背景并高亮设备屏幕，易于物理检查时能快速查找对应设备。

## iOS设备

### 切换清晰度
iOS投屏默认使用mjpeg流，默认为高画质。如果您想减轻带宽压力，可以在右侧工具栏切换低画质，可以减少大部分带宽，但画质与帧率也会因此下降。

### 键盘输入（同安卓）

远程控制设备时。
1. 鼠标点击到投屏区域内。（如果鼠标再次点击投屏区域外，将停止监听键盘输入）
2. 使用你的电脑键盘直接对网页输入文字。
3. 可以直接发送对应文本到手机里面。

### Siri指令

可以发送Siri指令给iOS设备。如：

1. 打开浏览器
2. 今天星期几
3. 打开设置

还有很多有趣的Siri指令欢迎探索

### 模拟定位
::: tip
目前发现部分应用不生效。
:::
可以模拟设备所在位置的地理位置，输入经纬度可精确到小数点后五位。

### 剪切板操作
支持直接获取设备的剪切板内容与设置.

设置后需要在设备上长按点击粘贴。

### 远程WDA
WDA远程调试连接对外使用。

例如用户自己本地有Appium，远程WDA链接为http://192.168.1.1:12345 ，则可以:
```java
DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, Platform.IOS);
desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.IOS_XCUI_TEST);
desiredCapabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 3600);
desiredCapabilities.setCapability(IOSMobileCapabilityType.COMMAND_TIMEOUTS, 3600);
desiredCapabilities.setCapability(MobileCapabilityType.NO_RESET, true);
// 填写设备名称, 也可以通过sib获取
desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "My Phone");
desiredCapabilities.setCapability(MobileCapabilityType.UDID, udId);
desiredCapabilities.setCapability("wdaConnectionTimeout", 60000);
desiredCapabilities.setCapability(IOSMobileCapabilityType.WEB_DRIVER_AGENT_URL, "http://192.168.1.1:12345");
desiredCapabilities.setCapability("useXctestrunFile", false);
desiredCapabilities.setCapability(IOSMobileCapabilityType.SHOW_IOS_LOG, false);
desiredCapabilities.setCapability(IOSMobileCapabilityType.SHOW_XCODE_LOG, false);
desiredCapabilities.setCapability("skipLogCapture", true);
desiredCapabilities.setCapability(IOSMobileCapabilityType.USE_PREBUILT_WDA, false);

new IOSDriver("http://localhost:4723/wd/hub", desiredCapabilities);
```
完成！设备已经从Agent连接到你本地的Appium了

### 远程sib

可以在另一个电脑上使用sib控制当前设备。

```bash
sib remote connect --host <you share device pc ip> -p <share port>
```
连接成功后，可以远程发起sib指令操作，如：
```bash
sib perfmon
```


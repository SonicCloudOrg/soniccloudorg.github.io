---
contributors:
- 'ZhouYixun'
---

# AndroidDriver

本文是AndroidDriver文档。 API文档可前往：👉[Java Doc](https://s01.oss.sonatype.org/service/local/repositories/releases/archive/io/github/soniccloudorg/sonic-driver-core/1.1.8/sonic-driver-core-1.1.8-javadoc.jar/!/index.html)

## 设备前置配置
::: tip 注意
自动化的前置配置Agent已自动安装、检测与转发，如果在您的项目中单独使用sonic-driver-core，请往下翻阅。
:::
首次使用安卓需先安装两个uia2依赖（可以前往 [appium-uiautomator2-server](https://github.com/SonicCloudOrg/sonic-appium-uiautomator2-server) 自行构建，仅支持v5.x版本，也可以前往 [这个](https://github.com/SonicCloudOrg/sonic-agent/tree/main/plugins) 目录下下载对应apk）
1. appium-uiautomator2-server.apk
2. appium-uiautomator2-server-test.apk

安装后，执行命令
```bash
adb shell am instrument -w io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner
```
然后转发服务端口
```bash
adb forward tcp:6790 tcp:6790
```
然后就可以启动Driver
```java
AndroidDriver androidDriver = new AndroidDriver("http://localhost:6790");
```

## 剪切板操作

### 设置剪切板
```java
androidDriver.setPasteboard(String contentType, String content);
```

### 获取剪贴板

注意，该API仅在安卓10以下生效。
```java
androidDriver.getPasteboard(String contentType);
```


## 更多文档建设中...


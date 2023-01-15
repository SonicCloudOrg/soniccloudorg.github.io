---
contributors:
- 'ZhouYixun'
---

# 切换WebView

使用切换WebView相关操作注意事项与教学。

## 注意事项

v2.0.0-beta开始，切换WebView时，需确保：
1. 已经打开WebView页面
2. 被测App已经开启WebView的Debug开关。（如果是微信的H5、小程序一类，需确保微信的debugx5已开启）
```java
webView.setWebContentsDebuggingEnabled(true);
```
3. 远控页面的【网页调试】能看到对应WebView

## 关于ChromeDriver

v2.0.0-beta开始，Sonic会自动匹配并下载WebView对应Chrome版本的ChromeDriver，能兼容大概80-85%左右的版本。

但是部分旧Chrome版本或M1版本的缺失，可能造成自动下载失败，这时我们需要手动添加chromeDriver文件到Agent的**webview**目录下。
例：被测WebView的Chrome协议版本为77.0.3865.10，我们需将对应版本的chromeDriver重命名为

Macosx or Linux: 
```bash
77.0.3865.10_chromedriver
```
Windows: 
```bash
77.0.3865.10_chromedriver.exe
```

## 查找AndroidProcess

使用切换WebView页面时，有AndroidProcess可选项，一般默认使用包名对应的process，但是如果WebView放在多进程（例如微信H5），则会切换失败。这时需要我们指定process。

### 开发提供了AndroidManifest.xml
如果您的开发提供了 **AndroidManifest.xml** ，以 **org.sonic.test** 为例：

```xml
<activity 
    android:name=".Hello"
    android:process=":helloworld" />
```

那么AndroidProcess为 **org.sonic.test:helloworld**

### 手动查找

如果App为第三方App或者开发不能提供AndroidManifest.xml，我们也可以手动查找。以 **com.android.browser** 为例（将 com.android.browser 替换为您的被测应用包名）：

1. 打开WebView页面
2. 输入指令

Windows: 
```bash
adb shell ps | findstr com.android.browser
```

Macosx or Linux:
```bash
adb shell ps | grep com.android.browser
```

你会获得类似输出
```bash
u0_a90         8907    517 2321912 340180 0                   0 S com.android.browser
u0_a90         9252    517 2261048 293056 0                   0 S com.android.browser:swan0
```
3. 那么 com.android.browser:swan0 即为 AndroidProcess。如果有多个进程，则需要一一尝试。

## 切换Handle

一般地，一个WebView进程只有一个页面，但是也会有多个页面共用的情况，就像我们的浏览器会有多个Tab的场景。这时我们切换WebView之后，默认进入的是第一个Tab窗口，如果不是我们需要测试的窗口，则需要我们切换。

以微信H5为例：
1. 使用AndroidProcess为 com.tencent.mm:tools（有的微信版本是 com.tencent.mm:appbrand0 ）切换WebView。
2. 这时我们获取页面标题，就会发现默认切换的窗口是微信的【搜一搜】窗口。
3. 然后我们使用【切换Handle】步骤，输入目标页面的标题。（v2.1.0开始，也可以输入页面的页面地址或Handle数组下标定位目标Handle）
4. 然后就可以切换到我们的期望页面，可以开始进行UI自动化操作了。

## 控件操作

控件定位以及操作都是基于 [Selenium](https://github.com/SeleniumHQ/selenium) 框架进行UI自动化，定位教程与相关知识不再此处详细教学了。

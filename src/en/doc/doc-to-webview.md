---
contributors:
- 'ZhouYixun'
---

# Switch WebView

Precautions and teaching related to switching WebView.

## Precautions

Starting from v2.0.0-beta, when switching WebView, make sure:
1. The WebView page has been opened
2. The App under test has enabled the Debug switch of WebView. (If it is WeChat's H5, small programs, etc., you need to make sure that WeChat's debugx5 is turned on)
```java
webView.setWebContentsDebuggingEnabled(true);
```
3. [Web page debugging] on the remote control page can see the corresponding WebView

## About ChromeDriver

Starting from v2.0.0-beta, Sonic will automatically match and download the ChromeDriver corresponding to the Chrome version of WebView, which is compatible with about 80-85% of the versions.

However, the lack of some old Chrome versions or M1 versions may cause the automatic download to fail. At this time, we need to manually add the chromeDriver file to the **webview** directory of the Agent.
Example: The Chrome protocol version of the tested WebView is 77.0.3865.10, we need to rename the corresponding version of chromeDriver to

Mac OS X or Linux:
```bash
77.0.3865.10_chromedriver
```
Windows:
```bash
77.0.3865.10_chromedriver.exe
```

## Find AndroidProcess

When switching WebView pages, there is an option of AndroidProcess. Generally, the process corresponding to the package name is used by default. However, if the WebView is placed in multiple processes (such as WeChat H5), the switching will fail. At this time, we need to specify the process.

### Development provides AndroidManifest.xml
If your development provides **AndroidManifest.xml** , take **org.sonic.test** as an example:

```xml
<activity
     android:name=".Hello"
     android:process=":helloworld" />
```

Then AndroidProcess is **org.sonic.test:helloworld**

### Manual lookup

If the app is a third-party app or the development cannot provide AndroidManifest.xml, we can also search it manually. Take **com.android.browser** as an example (replace com.android.browser with your app package name under test):

1. Open the WebView page
2. Input command

Windows:
```bash
adb shell ps | findstr com.android.browser
```

Mac OS X or Linux:
```bash
adb shell ps | grep com.android.browser
```

you will get output like
```bash
u0_a90 8907 517 2321912 340180 0 0 S com.android.browser
u0_a90 9252 517 2261048 293056 0 0 S com.android.browser:swan0
```
3. Then com.android.browser:swan0 is AndroidProcess. If there are multiple processes, you need to try them one by one.

## Switch Handle

Generally, a WebView process has only one page, but there are also situations where multiple pages are shared, just like our browser has multiple Tab scenarios. At this time, after we switch WebView, the first Tab window is entered by default. If it is not the window we need to test, we need to switch.

Take WeChat H5 as an example:
1. Use AndroidProcess to switch WebView for com.tencent.mm:tools (some WeChat version is com.tencent.mm:appbrand0 ).
2. At this time, we get the title of the page, and we will find that the window switched by default is the [Search] window of WeChat.
3. Then we use the [Switch Handle] step to enter the title of the target page. (Starting from v2.1.0, you can also enter the page address of the page or the subscript of the Handle array to locate the target Handle)
4. Then we can switch to our desired page and start UI automation.

## Control operation

Control positioning and operation are based on [Selenium](https://github.com/SeleniumHQ/selenium) framework for UI automation, positioning tutorials and related knowledge are no longer taught in detail here.

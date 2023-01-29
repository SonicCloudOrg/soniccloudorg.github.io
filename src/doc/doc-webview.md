---
contributors:
- 'ZhouYixun'
---

# WebView/H5调试

使用网页调试时的教学与注意事项。

## 注意事项

v2.0.0-beta开始，使用网页调试时，需确保：
1. 已经打开WebView页面
2. 被测App已经开启WebView的Debug开关。（如果是微信的H5、小程序一类，需确保微信的debugx5已开启）
```java
webView.setWebContentsDebuggingEnabled(true);
```
3. 如果是手机默认的浏览器，部分浏览器需要打开debug开关。
4. 本功能需要转发Devtools服务，官方Docker镜像中已内置，所以仅能在Docker部署前后端的情况下使用。本地开发环境使用需自行开启chrome devtools服务并修改ws地址。

## 安卓

1. 前往WebView页面。
2. 点击【获取webView进程】。
3. 选择对应的进程，点击【马上调试】。
4. 完成！你可以像chrome-devtools一样调试啦！

## iOS

iOS网页调试webkit协议接收器在持续维护中，可以前往 [这里](https://sonic-cloud.cn/siwa/re-siwa.html) 了解更多。

1. 前往系统【设置】。
2. 在应用列表找到Safari浏览器。
3. 点击【高级】 -> 【网页检查器】和【远程自动化】，将两个都打开。
4. 前往WebView页面。
5. 点击【获取webView进程】。
6. 选择对应的进程，点击【马上调试】。
7. 完成！你可以像chrome-devtools一样调试啦！

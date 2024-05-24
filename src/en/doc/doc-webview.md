---
contributors:
- 'ZhouYixun'
---

# WebView/H5 debugging

Teaching and precautions when using web page debugging.

## Precautions

Starting from v2.0.0-beta, when using web page debugging, make sure:
1. The WebView page has been opened
2. The App under test has enabled the Debug switch of WebView. (If it is WeChat's H5, small programs, etc., you need to make sure that WeChat's debugx5 is turned on)
```java
webView.setWebContentsDebuggingEnabled(true);
```
3. If it is the default browser of the mobile phone, some browsers need to enable the debug switch.
4. This function needs to forward the Devtools service, which is already built in the official Docker image, so it can only be used when Docker deploys the front-end and back-end. To use the local development environment, you need to enable the chrome devtools service and modify the ws address by yourself.

## android

1. Go to the WebView page.
2. Click [Get webView process].
3. Select the corresponding process and click [Debug Now].
4. Done! You can debug like chrome-devtools!

## iOS

The iOS web debugging webkit protocol receiver is under continuous maintenance, you can go to [here](https://soniccloudorg.github.io/siwa/re-siwa.html) to learn more.

1. Go to System [Settings].
2. Find the Safari browser in the application list.
3. Click [Advanced] -> [Web Inspector] and [Remote Automation] to enable both.
4. Go to the WebView page.
5. Click [Get webView process].
6. Select the corresponding process and click [Debug Now].
7. Done! You can debug like chrome-devtools!

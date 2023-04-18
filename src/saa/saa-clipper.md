---
contributors:
- 'ZhouYixun'
---

# 剪切板操作

::: tip
本功能需要 `sonic-android-apk` v2.0.7 以上，对应Sonic版本为 v2.5.0
:::

## 前置操作

先启用Sonic输入法
```bash
adb shell ime enable org.cloud.sonic.android/.keyboard.SonicKeyboard
```
再设置Sonic输入法为当前输入法
```bash
adb shell ime set org.cloud.sonic.android/.keyboard.SonicKeyboard
```
然后需要在输入框`使用过`或`激活起`Sonic输入法，让Sonic输入法为后台应用

## 直接使用

该方式经测试目前支持所有安卓版本。

### 设置剪切板内容

```bash
adb shell am broadcast -a SONIC_CLIPPER_SET --es msg "'I like Sonic'"
```
你可以看到类似输出
```
Broadcasting: Intent { act=SONIC_CLIPPER_SET flg=0x400000 (has extras) }
Broadcast completed: result=-1, data="Text is copied into clipboard."
```

### 获取剪切板内容

```bash
adb shell am broadcast -a SONIC_CLIPPER_GET
```
你可以看到类似输出
```
Broadcasting: Intent { act=SONIC_CLIPPER_GET flg=0x400000 }
Broadcast completed: result=-1, data="I like Sonic"
```


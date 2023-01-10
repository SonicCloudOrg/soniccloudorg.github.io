---
contributors:
- 'ZhouYixun'
---

# sonic-android-apk
本文为Sonic安卓助手sonic-android-apk的开发文档。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-android-apk)

<div style="display: flex">
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-android-apk?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-android-apk?style=social">
</div>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-android-apk/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-android-apk" />
</a>

## 开发环境搭建
sonic-android-apk以Kotlin作为开发语言。

1. Android Studio。
2. JDK环境。
3. Fork [sonic-android-apk](https://github.com/SonicCloudOrg/sonic-android-apk) 仓库。
4. 执行git clone指令，将您的仓库代码克隆到本地。
5. 等待依赖下载完毕。
6. 🎉恭喜！您已经可以开始开发了！
7. 开发完毕后，push到自己的仓库，然后可以给Sonic原仓库提起pr哦！随后即可成为Sonic贡献者！（建议贡献前先开启issue讨论，防止跟组织计划进度有冲突哦）


## 打包为apk

打包可直接使用根目录下的gradlew

Linux 或 Mac
```bash
./gradlew assembleDebug
```

Windows
```bash
gradlew assembleDebug
```

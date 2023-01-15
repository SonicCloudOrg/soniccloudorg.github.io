---
contributors:
- 'ZhouYixun'
---

# sonic-android-supply

本文为Sonic原生ADB补充插件sonic-android-supply的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-android-supply)

<div style="display: flex">
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-android-supply?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-android-supply?style=social">
</div>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-android-supply/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-android-supply" />
</a>

## 介绍

**sonic-android-supply** 是Sonic平台扩展ADB功能的插件，用于远程连接、性能监控等等功能。更多功能正在加入中...

## 快速使用

1. 选择下方 **PC对应的平台压缩包** 下载并解压到任意目录。如 **加速链接失效** 或 **想查找旧版本**，请前往 <a href="https://github.com/SonicCloudOrg/sonic-android-supply/releases" target="_blank">这里</a> 下载

::: info Linux:

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_linux_arm64.tar.gz" target="_blank">sonic-android-supply_1.3.7_linux_arm64.tar.gz</a>

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_linux_x86.tar.gz" target="_blank">sonic-android-supply_1.3.7_linux_x86.tar.gz</a>

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_linux_x86_64.tar.gz" target="_blank">sonic-android-supply_1.3.7_linux_x86_64.tar.gz</a>

:::

::: info Macosx:

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_macosx_arm64.tar.gz" target="_blank">sonic-android-supply_1.3.7_macosx_arm64.tar.gz</a>

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_macosx_x86_64.tar.gz" target="_blank">sonic-android-supply_1.3.7_macosx_x86_64.tar.gz</a>

:::

::: info Windows:

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_windows_arm64.tar.gz" target="_blank">sonic-android-supply_1.3.7_windows_arm64.tar.gz</a>

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_windows_x86.tar.gz" target="_blank">sonic-android-supply_1.3.7_windows_x86.tar.gz</a>

👉 <a href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-android-supply/releases/download/v1.3.7/sonic-android-supply_1.3.7_windows_x86_64.tar.gz" target="_blank">sonic-android-supply_1.3.7_windows_x86_64.tar.gz</a>

:::

2. 执行指令（Windows不需要）。
```bash
sudo chmod 777 sas
```
3. 执行指令有输出版本号即可（Windows不需要./）。
```bash
./sas version
```
4. 🎉恭喜！您已经可以开始使用了！请移步到功能列表，如果Mac弹出安全弹窗，可以查看下方常见问题。
5. （附）如果想任意目录下都可以使用sas，需要将sas路径添加到系统环境变量PATH中。

## 名词解释

1. **option** 意为当前指令可用选项，例如：
```bash
sas perfmon -j
```
那么 -j 就是 perfmon 命令的选项。

## 常见问题（Q&A）

Q1: 为什么有的版本的Agent的plugins目录下的是sonic-android-supply.exe而不是sas.exe？

A1: 其实是同一个东西，只是Agent的我方便用户辨认，更改了文件名，实际上作用是一样的。

---

Q2: Mac上使用会有安全弹窗？

A2: Mac：系统偏好设置 -> 安全性与隐私 -> 通用，点击信任或仍要打开。

---

::: tip
更多疑问可前往 👉[社区](https://sonic-cloud.wiki)👈 交流
:::

## 鸣谢

- [https://github.com/codeskyblue/fa](https://github.com/codeskyblue/fa)
- [https://github.com/openstf/adbkit](https://github.com/openstf/adbkit)
- [https://github.com/rapidloop/rtop](https://github.com/rapidloop/rtop)


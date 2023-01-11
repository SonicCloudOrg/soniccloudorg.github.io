---
contributors:
- 'ZhouYixun'
---

# 网页检阅器

开启iOS设备上的网页检阅服务。

## 启动服务

只启动webinspector服务。

```bash
sib webinspector
```

## 启用CDP Adapter

启用后将使用 **sonic-ios-webkit-adapter** 将WebKit协议转换兼容，可直接与Chrome协议交互。
```bash
sib webinspector --cdp
```

## 指定启动端口

一般地，我们需要指定webinspector服务启动端口，可以加上 **-p** 指定。
```bash
sib webinspector -p 9222
```

## 可用选项

| 快捷使用 | 选项名              | 数据类型   | 描述信息                           |
|------|------------------|--------|--------------------------------|
| -u   | --udid           | string | 指定目标udid设备，不指定默认获取列表第一个设备      |
| -p   | --port           | int    | 启动端口                           |
|      | --cdp            |        | 是否启动CDP Adapter（默认为false）      |
|      | --protocol-debug |        | 是否启动protocol debug模式（默认为false） |
|      | --dtx-debug      |        | 是否启动dtx debug模式（默认为false）      |
| -h   | --help           |        | 获取帮助指南                         |


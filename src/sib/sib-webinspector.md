# 网页检阅器

开启iOS设备上的网页检阅服务。

## 启动服务

只启动webinspector服务

```
sib webinspector
```

## 启用CDP Adapter

```
sib webinspector --cdp
```

## 指定启动端口

```
sib webinspector -p 9222
```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -p  | --port | int |  启动端口    |
|   | --cdp | |  是否启动CDP Adapter（默认为false）|
|   | --protocol-debug | |  是否启动protocol debug模式（默认为false）    |
|   | --dtx-debug | |  是否启动dtx debug模式（默认为false）    |
| -h  | --help | |  获取帮助指南  |

## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-webinspector.md) 发起贡献改善此页

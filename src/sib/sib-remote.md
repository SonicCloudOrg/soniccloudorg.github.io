# 远程连接

分享您的设备或连接远程设备。

## 分享你的设备

输入指令

```
sib remote share -u xxxxxx
```

你会看到类似输出
```
2022/12/04 19:53:27 start sharing, target device will share on port:9123
```

说明设备已经在9123端口分享了。

## 可用选项

| 快捷使用 | 选项名    | 数据类型   | 描述信息                      |
|------|--------|--------|---------------------------|
| -u   | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -p   | --port | int    | 分享的本机端口                   |
| -h   | --help |        | 获取帮助指南                    |

## 连接远程设备

输入指令

```
sib remote connect --host 192.168.1.4
```

你会看到类似输出
```
2022/12/04 19:57:57 connect to 192.168.1.4:9123 succeeded, device os version :15.0.1
```
连接成功了！可以直接对该远程设备使用sib指令啦！

## 可用选项

| 快捷使用 | 选项名    | 数据类型   | 描述信息          |
|------|--------|--------|---------------|
|      | --host | string | 指定目标设备所在的host |
| -p   | --port | int    | 目标设备分享的端口     |
| -h   | --help |        | 获取帮助指南        |

## 断连远程设备

输入指令

```
sib remote disconnect --host 192.168.1.4
```

## 可用选项

| 快捷使用 | 选项名    | 数据类型   | 描述信息          |
|------|--------|--------|---------------|
|      | --host | string | 指定目标设备所在的host |
| -p   | --port | int    | 目标设备分享的端口     |
| -h   | --help |        | 获取帮助指南        |

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-remote.md) 发起贡献改善此页
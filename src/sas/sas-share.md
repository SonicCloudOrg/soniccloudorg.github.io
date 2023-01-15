---
contributors:
- 'ZhouYixun'
---

# 远程连接

分享您的设备或连接远程设备。

## 分享你的设备

输入指令

```bash
sas share -s xxxxxx
```

你会看到类似输出
```bash
Connect with port :6174
```

说明设备已经在6174端口分享了。

## 可用选项

| 快捷使用 | 选项名              | 数据类型   | 描述信息                      |
|------|------------------|--------|---------------------------|
| -s   | --serial         | string | 指定目标设备序列号，不指定默认获取列表第一个设备 |
|      | --translate-port | int    | 分享的本机端口，默认为6174           |
| -h   | --help           |        | 获取帮助指南                    |

## 连接远程设备

输入指令

```bash
adb connect xxxx.xxx.xxx.xxx:6174
```

连接成功


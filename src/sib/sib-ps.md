---
contributors:
- 'ZhouYixun'
---

# 进程相关

这里是iOS运行进程相关内容。

## 查看当前设备Process

输入指令
```bash
sib ps
```
您会获得类似的输出
```bash
pipelined 431 /usr/libexec/pipelined 2022-07-21 13:07:45 +0000 UTC
```

---
一般地，如果想输出格式更友好，可以加上 -f 
```bash
sib ps -f
```
 您会获得类似的输出
```bash
[ 
       {
               "isApplication": false,
               "name": "calaccessd",
               "pid": 120,
               "realAppName": "/System/Library/PrivateFrameworks/CalendarDaemon.framework/Support/calaccessd",
               "startDate": "2022-07-20T15:39:00Z"
       }
]
```

## 可用选项

| 快捷使用 | 选项名      | 数据类型   | 描述信息                      |
|------|----------|--------|---------------------------|
| -j   | --json   |        | json格式输出                  |
| -f   | --format |        | 格式化输出                     |
| -u   | --udid   | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -h   | --help   |        | 获取帮助指南                    |


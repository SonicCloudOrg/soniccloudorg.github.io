# 性能监控

对设备进行性能监控。

## 全局性能监控

默认获取所有性能指标。

> 输入指令
> ```
> sib perfmon
> ```
> 您会获得类似的输出
> ```
> NetworkingInfo:
> RxBytes:2, RxPackets:80, TxBytes:0, TxPackets:0, TimeStamp:1662269677798960600
> GPUInfo:
> TilerUtilization:0, DeviceUtilization:0, RendererUtilization:0, TimeStamp:1662269678378279700
> FPSInfo:
> FPS:0, TimeStamp:1662269678378279700
> MemoryInfo:
> ProcessInfo:invalid PID, TimeStamp:1662269678689113900
> CPUInfo:
> SystemCpuCount: 6, SystemCpuUsage:134.157954, ProcessInfo:invalid PID, TimeStamp:1662269677686116500
> ...
> ```

一般地，我们需要对数据进行格式化输出。

> 输入指令
> ```
> sib perfmon -j
> ```
> 您会获得类似的输出
> ```
> {"NetworkingInfo":{"RxBytes":16,"RxPackets":4290,"TxBytes":19,"TxPackets":7290,"TimeStamp":1662269930490505900}}
> {"GPUInfo":{"TilerUtilization":0,"TimeStamp":1662269931091408800,"DeviceUtilization":0,"RendererUtilization":0}}
> {"FPSInfo":{"FPS":0,"TimeStamp":1662269931091408800}}
> {"MemoryInfo":{"AnonMemory":-1,"PhysMemory":-1,"Rss":-1,"Vss":-1,"TimeStamp":1662269931407985100,"ProcessInfo":"invalid PID"}}
> {"CPUInfo":{"SystemCpuCount":6,"TimeStamp":1662269931407985100,"SystemCpuUsage":18.323603002502082,"ProcessInfo":"invalid PID"}}
> {"GPUInfo":{"TilerUtilization":0,"TimeStamp":1662269932113104500,"DeviceUtilization":0,"RendererUtilization":0}}
> {"FPSInfo":{"FPS":0,"TimeStamp":1662269932113104500}}
> {"MemoryInfo":{"AnonMemory":-1,"PhysMemory":-1,"Rss":-1,"Vss":-1,"TimeStamp":1662269932407839100,"ProcessInfo":"invalid PID"}}
> ...
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -p | --pid | int | 指定PID数据 |
| -a |--app-name | string | 指定App名称（对应pid名称） |
| | --cpu | | 获取CPU数据 |
| | --men | | 获取内存数据 |
| | --gpu | | 获取GPU数据 |
| | --fps | | 获取FPS数据 |
| | --network | | 获取网络上下行数据（全局） |
| -j  | --json | | json格式输出    |
| -f  | --format | |  格式化输出    |
| -h  | --help | |  获取帮助指南  |

## 本文贡献者

<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp; &nbsp;
***
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-perf.md) 发起贡献改善此页
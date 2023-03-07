---
contributors:
- 'ZhouYixun'
---

# 性能监控

对设备进行性能监控。

## 全局性能监控

默认获取所有性能指标，如果需要单独获取某个性能指标，可参考最下方可用选项。

输入指令
```bash
sas perfmon
```
您会获得类似的输出
```bash
{"system":{"memInfo":{"memTotal":3992305664,"memFree":130797568,"memBuffers":6369280,"memCached":1512390656,"memUsage":2342748160,"swapTotal":2361389056,"swapFree":1705582592},"networkInfo":{"dummy0":{"ipv4":"","ipv6":"fe80::d82d:d4ff:fe79:21ad/64","rx":0,"tx":890342},"lo":{"ipv4":"127.0.0.1/8","ipv6":"::1/128","rx":118537582,"tx":118537582}},"cpuInfo":{"cpu":{"user":3.3205621,"nice":0.7662835,"system":4.853129,"idle":90.93231,"iowait":0.12771392,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":9.183674},"cpu0":{"user":1.0215664,"nice":0,"system":1.0215664,"idle":9.08059,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":18.75},"cpu1":{"user":0.40816325,"nice":0,"system":0.30612245,"idle":9.387755,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":7.070707},"cpu2":{"user":0.37071362,"nice":0,"system":0.27803522,"idle":8.526413,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":7.070707},"cpu3":{"user":0.084961765,"nice":0,"system":0.16992353,"idle":8.071368,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":3.0612245},"cpu4":{"user":0.15698588,"nice":0,"system":0.47095764,"idle":6.9858713,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":8.247422},"cpu5":{"user":0.07283322,"nice":0,"system":0.36416605,"idle":6.700656,"iowait":0.07283322,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":7.070707},"cpu6":{"user":0.27192387,"nice":0.40788582,"system":0.27192387,"idle":5.710401,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":14.285715},"cpu7":{"user":0.12763241,"nice":0,"system":0.38289726,"idle":5.615826,"iowait":0,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":8.333334}}},"timeStamp":1673784486}
...
```

---
一般地，我们需要指定包名进行监控。默认获取所有性能指标，如果需要单独获取某个性能指标，可参考最下方可用选项。

输入指令
```bash
sas perfmon -p com.android.browser
```
您会获得类似的输出
```bash
{"system":{"memInfo":{"memTotal":3992305664,"memFree":72716288,"memBuffers":6332416,"memCached":1449861120,"memUsage":2463395840,"swapTotal":2361389056,"swapFree":1698242560},"networkInfo":{"dummy0":{"ipv4":"","ipv6":"fe80::d82d:d4ff:fe79:21ad/64","rx":0,"tx":890342},"lo":{"ipv4":"127.0.0.1/8","ipv6":"::1/128","rx":118537582,"tx":118537582}},"cpuInfo":{"cpu":{"user":39.76756,"nice":5.0025268,"system":18.948965,"idle":35.725113,"iowait":0.55583626,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":64.1129},"cpu0":{"user":5.3859963,"nice":1.481149,"system":1.8402153,"idle":2.4236984,"iowait":0.044883303,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":78.629036},"cpu1":{"user":4.7657514,"nice":0.2019386,"system":1.8982229,"idle":3.0694668,"iowait":0.08077545,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":69.354836},"cpu2":{"user":5.280528,"nice":0.29336268,"system":1.6501651,"idle":1.9068573,"iowait":0.07334067,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":79.28287},"cpu3":{"user":4.2016807,"nice":0.302521,"system":1.7478992,"idle":1.9831933,"iowait":0.10084034,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":76.20968},"cpu4":{"user":2.0528772,"nice":0.311042,"system":1.4618974,"idle":3.608087,"iowait":0.031104198,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":51.666664},"cpu5":{"user":2.165127,"nice":0.11547344,"system":1.4145496,"idle":3.4642034,"iowait":0.02886836,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":51.80723},"cpu6":{"user":1.7784964,"nice":0.48504448,"system":1.239558,"idle":3.1258419,"iowait":0.026946913,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":53.036438},"cpu7":{"user":1.844832,"nice":0.25271672,"system":1.1877685,"idle":2.906242,"iowait":0.02527167,"irq":0,"softIrq":0,"steal":0,"guest":0,"cpuUsage":53.252037}}},"process":{"name":"android.browser","pid":"26595","cpuUtilization":130,"phyRSS":83111,"vmRSS":440423504,"threadCount":137,"fps":60},"timeStamp":1673784538}
...
```

## 可用选项

| 快捷使用 | 选项名            | 数据类型   | 描述信息                     |
|------|----------------|--------|--------------------------|
| -s   | --serial       | string | 指定目标设备序列号，不指定默认获取列表第一个设备 |
| -d   | --pid          | int    | 指定PID数据（优先级高于指定包名）       |
| -p   | --package      | string | 指定包名                     |
|      | --sys-cpu      |        | 获取系统CPU数据                |
|      | --sys-mem      |        | 获取系统内存数据                 |
|      | --sys-network  |        | 获取系统网络上下行数据              |
|      | --proc-fps     |        | 获取FPS数据                  |
|      | --proc-threads |        | 获取线程数数据                  |
|      | --proc-cpu     |        | 获取process CPU数据          |
|      | --proc-mem     |        | 获取process 内存数据           |
| -r   | --refresh      | int    | 刷新间隔（默认1000ms）           |
| -j   | --json         |        | json格式输出                 |
| -f   | --format       |        | 格式化输出                    |
| -h   | --help         |        | 获取帮助指南                   |

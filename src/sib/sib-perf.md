---
contributors:
- 'ZhouYixun'
---

# 性能监控

对设备进行性能监控。

## 全局性能监控

默认获取所有性能指标，如果需要单独获取某个性能指标，可参考最下放可用选项。

输入指令
```bash
sib perfmon
```
您会获得类似的输出
```bash
{"type":"sys_cpu","timestamp":1668850076,"nice_load":0,"system_load":-1,"total_load":34.25115764738406,"user_load":-1}
{"type":"sys_disk","timestamp":1668850076,"data_read":139464372224,"data_written":47304048640,"reads_in":10432998,"writes_out":4878146}
{"type":"sys_mem","timestamp":1668850076,"app_memory":56557,"free_memory":6595,"used_memory":121300,"wired_memory":33848,"cached_files":48880,"compressed":16929,"swap_used":120061952}
{"type":"sys_network","timestamp":1668850076,"bytes_in":60876120801,"bytes_out":60920750700,"packets_in":6611416,"packets_out":8500553}
{"type":"gpu","timestamp":1668850077,"tiler_utilization":0,"device_utilization":0,"renderer_utilization":0}
{"type":"fps","timestamp":1668850077,"fps":0}
...
```

---
一般地，我们需要指定包名进行监控。默认获取所有性能指标，如果需要单独获取某个性能指标，可参考最下放可用选项。

输入指令
```bash
sib perfmon -b com.apple.mobilesafari
```
您会获得类似的输出
```bash
{"pid":4253,"proc_perf":{"cpuUsage":0.1118021393889875,"memAnon":40386560,"memResidentSize":53362688,"memVirtualSize":418828779520,"physFootprint":96535592,"pid":4253},"timestamp":1668850295,"type":"process"}
{"type":"network-connection-update","timestamp":1668850292,"rx_bytes":156104,"rx_packets":15888542,"tx_bytes":93105,"tx_packets":8370934,"connection_serial":316}
...
```

## 可用选项

| 快捷使用 | 选项名            | 数据类型   | 描述信息                      |
|------|----------------|--------|---------------------------|
| -u   | --udid         | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -p   | --pid          | int    | 指定PID数据（优先级高于指定包名）        |
| -b   | --bundleId     | string | 指定包名                      |
|      | --sys-cpu      |        | 获取系统CPU数据                 |
|      | --sys-mem      |        | 获取系统内存数据                  |
|      | --sys-disk     |        | 获取系统磁盘数据                  |
|      | --sys-network  |        | 获取系统网络上下行数据               |
|      | --gpu          |        | 获取GPU数据                   |
|      | --fps          |        | 获取FPS数据                   |
|      | --proc-network |        | 获取process网络上下行数据          |
|      | --proc-cpu     |        | 获取process CPU数据           |
|      | --proc-mem     |        | 获取process 内存数据            |
| -r   | --refresh      | int    | 刷新间隔（默认1000ms）            |
| -j   | --json         |        | json格式输出                  |
| -f   | --format       |        | 格式化输出                     |
| -h   | --help         |        | 获取帮助指南                    |

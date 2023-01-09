# 电池相关

获取设备电池信息。

## 获取电池信息

查看已插入设备的电池信息。

> 输入指令
> ```
> sib battery
> ```
> 您会获得类似的输出
> ```
> Serial:F8Y80344QPDHXRY90
> Temperature:21°C
> CycleCount:869
> NominalChargeCapacity:2322mAh
> DesignCapacity:2701mAh
> AbsoluteCapacity:2090mAh
> CurrentCapacity:91
> Voltage:4226mV
> BootVoltage:4229mV
> InstantAmperage:512mA
> AdapterDetailsVoltage:5000mV
> AdapterDetailsWatts:8W
> ```

## 可用选项

| 快捷使用 | 选项名      | 数据类型   | 描述信息       |
|------|----------|--------|------------|
| -u   | --udid   | string | 获取指定udid设备 |
| -j   | --json   |        | json格式输出   |
| -f   | --format |        | 格式化输出      |
| -h   | --help   |        | 获取帮助指南     |

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-battery.md) 发起贡献改善此页
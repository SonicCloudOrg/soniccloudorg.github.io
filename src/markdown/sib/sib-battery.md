# 电池相关

获取设备电池信息。

## 获取电池信息

查看已插入设备的电池信息。（当前版本电池温度尚未能获取）

> 输入指令
> ```
> sib battery -j 
> ```
> 您会获得类似的输出
> ```
> {"batteryList":[{"serialNumber:"xxxxxxxxxx","level":98,"temperature":0}]}
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string| 获取指定udid设备    |
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


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-battery.md) 发起贡献改善此页
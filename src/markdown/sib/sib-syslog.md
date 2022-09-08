# 系统日志

系统日志的实时查看与筛选。

## 获取系统日志

获取系统实时日志。

> 输入指令
> ```
> sib syslog
> ```
 
一般地，我们还会筛选我们需要的信息，此时可以加上 -f 选项。

> 输入指令
> ```
> sib syslog -f myAppTag
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -f  | --filter |  | 筛选的信息    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-syslog.md) 发起贡献改善此页
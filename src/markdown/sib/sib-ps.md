# 进程相关

这里是iOS运行进程相关内容。

## 查看当前设备Process

> 输入指令
> ```
> sib ps
> ```
> 您会获得类似的输出
> ```
> pipelined 431 /usr/libexec/pipelined 2022-07-21 13:07:45 +0000 UTC
> ```

> 一般地，如果想输出格式更友好，可以加上 -f 
> ```
> sib ps -f
> ```
>  您会获得类似的输出
> ```
> [ 
>        {
>                "isApplication": false,
>                "name": "calaccessd",
>                "pid": 120,
>                "realAppName": "/System/Library/PrivateFrameworks/CalendarDaemon.framework/Support/calaccessd",
>                "startDate": "2022-07-20T15:39:00Z"
>        }
> ]

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -j  | --json | | json格式输出    |
| -f  | --format | |  格式化输出    |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-ps.md) 发起贡献改善此页
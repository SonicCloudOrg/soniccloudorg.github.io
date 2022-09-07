# 崩溃收集

崩溃信息的获取与筛选。

## 获取设备崩溃日志

获取设备上已有的崩溃日志。

> 输入指令
> ```
> sib crash
> ```

如果想保留设备上的崩溃报告，仅仅复制到本地，可以加上 -k 选项。

> 输入指令
> ```
> sib crash -k
> ```

如果想指定崩溃日志拉取到本地的路径，可以加上 -p 选项。

> 输入指令
> ```
> sib crash -k -p ./myDic
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -k  | --keep |  | 仅仅复制崩溃报告到本地，不删除设备上已有的崩溃报告    |
| -p  | --path | string |  复制到本地的路径    |
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
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-crash.md) 发起贡献改善此页

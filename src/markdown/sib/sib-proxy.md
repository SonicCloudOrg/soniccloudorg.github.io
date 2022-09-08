# 代理转发

系统服务端口或unix进程转发。

## 转发TCP端口

转发TCP服务请求。

> 输入指令
> ```
> sib proxy -r 8100 -l 8101
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -r  | --remote-port | int | 设备TCP服务端口    |
| -l  | --local-port | int |  转发到本机的端口    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 转发unix服务
暂未开放。

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-proxy.md) 发起贡献改善此页
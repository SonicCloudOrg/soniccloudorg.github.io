# 挂载镜像

给您的设备挂载开发者镜像。

## 注意事项
一般地，sib会自动帮您挂载开发者镜像，但是特殊情况下发生报错时，用户也可以使用本章指令进行手动挂载。

## 马上挂载

> 输入指令
> ```
> sib mount
> ```
> 
> 一般地，如果指定设备，可以加上 -u
> ```
> sib mount -u xxxxxxxxx
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
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
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-mount.md) 发起贡献改善此页
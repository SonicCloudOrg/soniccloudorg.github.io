# 网络IP信息

获取设备的MAC、IPv4、IPv6。

## 注意事项

需要前往【设置】先将对应WIFI的【私有地址】关闭，才能获取正确的IP地址。

## 查看当前设备网络

> 输入指令
> ```
> sib ip
> ```
> 您会获得类似的输出
> ```
> d4:61:da:51:7e:76 192.168.1.10 2409:8a1e:6a51:f010:3d45:6e80:a386:a090
> ```

> 一般地，为了可读性更强，可以加上 -j 或者 -f
> ```
> sib ip -f
> ```
>  您会获得类似的输出
> ```
> {
>     "mac": "d4:61:da:51:7e:76",
>     "ipv4": "192.168.1.10",
>     "ipv6": "2409:8a1e:6a51:f010:b02f:7b78:b023:7050"
> }
> ```


## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -j  | --json | | json格式输出    |
| -f  | --format | |  格式化输出    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-ip.md) 发起贡献改善此页
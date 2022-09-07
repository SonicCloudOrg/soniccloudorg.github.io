# 模拟定位

用于模拟定位经纬度信息。

## 开始模拟定位

马上发起模拟定位（部分应用无法生效）。

> 输入指令
> ```
> sib location set --long 10.123123 --lat -11.01
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
|   | --long | float | 经度，可精确到小数点后六位（必须）    |
|   | --lat | float | 纬度，可精确到小数点后六位（必须）   |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 恢复定位

恢复设备原始真实定位。

> 输入指令
> ```
> sib location unset
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
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-location.md) 发起贡献改善此页
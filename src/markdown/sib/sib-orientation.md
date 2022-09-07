# 屏幕方向

获取手机屏幕旋转方向。

## 获取屏幕旋转方向。

获取当前屏幕旋转方向。

> 输入指令
> ```
> sib orientation
> ```
> 您会获得类似的输出
> ```
> orientation: 1
> ```

一般地，如果想持续监听，可以加上 -w 选项。
> 输入指令
> ```
> sib orientation -w
> ```
> 您会获得类似的输出
> ```
> orientation: 1
> orientation: 2
> ```

## 屏幕方向结果对应

|  旋转结果 | 对应方向  | 方向描述
|  ----  | ----  | ---- |
| 0  | unknown | 设备的方向未知。  | 
| 1  | portrait|   设备处于纵向模式，设备直立，底部有 Home 按钮。(0°)  |
| 2  | portraitUpsideDown|  该设备处于纵向模式，但上下颠倒，设备直立，Home 按钮位于顶部。(180°) |
| 3 |landscapeRight| 设备处于横向模式，设备直立，Home 按钮位于右侧。(270°)|
| 4 |landscapeLeft|设备处于横向模式，设备直立，Home 按钮位于左侧。(90°) |

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -w  | --watch | |  持续监听屏幕旋转    |
| -h  | --help | |  获取帮助指南  |

## 本文贡献者

<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp; &nbsp;
***
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-orientation.md) 发起贡献改善此页
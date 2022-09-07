# 设备信息

获取iOS设备列表和详情。

## 查看设备列表

查看已插入设备的列表。

> 输入指令
> ```
> sib devices
> ```
> 您会获得类似的输出
> ```
> 0000****-001****6F****E online
> 0000****-00****3*F****E online
> ```

如果需要查看设备详情，只需在基础上加上 **-d** 或 **--detail** 选项。

> 输入指令
> ```
> sib devices -d
> ```
>
> 一般地，为了有更好的可读性，我们还会加上 **-f** 或 **--format** 选项来格式化输出。
>
> ```
> sib devices -d -f
> ```
>
> 您会获得类似的输出
> ```
> {
>         "deviceList": [
>                 {
>                         "deviceId": 1,
>                         "connectionSpeed": 0,
>                         "connectionType": "USB",
>                         "locationId": 0,
>                         "productId": 4776,
>                         "serialNumber": "0000****-001****6F****E",
>                         "status": "online",
>                         "deviceDetail": {
>                                 "generationName": "iPhone 13 Pro",
>                                 "deviceName": "iPhone",
>                                 "deviceColor": "1",
>                                 "deviceClass": "iPhone",
>                                 "productVersion": "15.4.1",
>                                 "productType": "iPhone14,2",
>                                 "productName": "iPhone OS",
>                                 "passwordProtected": true,
>                                 "modelNumber": "*****",
>                                 "serialNumber": "*****",
>                                 "simStatus": "kCTSIMSupportSIMStatusReady",
>                                 "phoneNumber": "+86 *****",
>                                 "cpuArchitecture": "arm64e",
>                                 "protocolVersion": "2",
>                                 "regionInfo": "CH/A",
>                                 "telephonyCapability": true,
>                                 "timeZone": "Asia/Shanghai",
>                                 "uniqueDeviceID": "*****",
>                                 "wifiAddress": "*****",
>                                 "wirelessBoardSerialNumber": "*****",
>                                 "bluetoothAddress": "*****",
>                                 "buildVersion": "*****"
>                         }
>                 }
>         ]
> }
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -d  | --detail | | 查看设备详情    |
| -f  | --format | |  格式化输出    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取所有设备  |
| -h  | --help | |  获取帮助指南  |


## 监听设备列表

简单监听设备拔插。

> 输入指令
> ```
> sib devices listen
> ```
> 您会获得类似的输出
> ```
> 0000****-001****6F****E online
> 0000****-00****3*F****E offline
> ```

监听设备拔插时也可以获取详情，用法与 sib devices 一致。

> 输入指令
> ```
> sib devices listen -d -f
> ```
> 输出参考 sib devices -d

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -d  | --detail | | 查看设备详情    |
| -f  | --format | |  格式化输出    |
| -h  | --help | |  获取帮助指南  |

## 获取指定信息

> 输入指令
> ```
> sib info -d com.apple.mobile.battery -f
> ```
> 您会获得类似的输出
> ```
> {
>         "BatteryCurrentCapacity": 99,
>         "BatteryIsCharging": true,
>         "ExternalChargeCapable": false,
>         "ExternalConnected": true,
>         "FullyCharged": false,
>         "GasGaugeCapability": true,
>         "HasBattery": true
> }
> ```


## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -d  | --domain | string| 设备详情的Domain    |
| -k  | --key | string| 设备详情的Domain的指定Key    |
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
不够详细？[点此](https://gitee.com/sonic-cloud/sonic-cloud/edit/master/src/markdown/sib/sib-device.md) 发起贡献改善此页





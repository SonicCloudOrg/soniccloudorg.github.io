# App相关

这里是与App的主要交互。

## 查看App列表

> 输入指令
> ```
> sib app list
> ```
> 您会获得类似的输出
> ```
> WeChat com.xxxxx.xxxx 1.0.0
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -j  | --json | | json格式输出    |
| -f  | --format | |  格式化输出    |
| -s  | --system | |  输出系统App    |
| -i | --icon | | 输出App图标（Base64） |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 启动App

> 输入指令
> ```
> sib app launch -b com.xxxx.xxxx
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -b  | --bundleId | string | App包名（必须）    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 终止App

> 输入指令
> ```
> sib app kill -b com.xxxx.xxxx
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -b  | --bundleId | string | App包名（必须）    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 安装App

> 输入指令
> ```
> sib app install -p ./xxx.ipa
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -p  | --path | string | ipa文件路径（必须）    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 卸载App

> 输入指令
> ```
> sib app uninstall -b com.xxxx.xxxx
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -b  | --bundleId | string | App包名（必须）    |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-app.md) 发起贡献改善此页

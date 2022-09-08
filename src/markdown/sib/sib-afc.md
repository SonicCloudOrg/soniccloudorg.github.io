# 文件管理

管理测试设备中的文件。

## cat文件
> 输入指令
> ```
> sib afc cat -f /Document/test.log
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -f  | --file | string | 文件路径（必须） |
| -b  | --bundleId | string | 指定应用的路径 |
| -h  | --help | |  获取帮助指南  |

## ls指令
> 输入指令
> ```
> sib afc ls -f ./Document/
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -f  | --folder | string | 文件夹路径（必须） |
| -b  | --bundleId | string | 指定应用的路径 |
| -h  | --help | |  获取帮助指南  |

## mkdir指令
> 输入指令
> ```
> sib afc mkdir -f ./Document/test
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -f  | --folder | string | 文件夹路径（必须） |
| -b  | --bundleId | string | 指定应用的路径 |
| -h  | --help | |  获取帮助指南  |

## pull指令
> 输入指令
> ```
> sib afc pull -d ./Document/test -l ./abc
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -d  | --device-path | string | 设备目标文件夹路径（必须） |
| -l  | --local-path | string | 保存到本地路径（必须） |
| -h  | --help | |  获取帮助指南  |

## push指令
> 输入指令
> ```
> sib afc push -d ./Document/test -l ./abc
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -d  | --device-path | string | 设备目标文件夹路径（必须） |
| -l  | --local-path | string | 保存到本地路径（必须） |
| -h  | --help | |  获取帮助指南  |

## rm指令
> 输入指令
> ```
> sib afc rm -f ./Document/test/abc.log
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -f  | --file | string | 删除文件路径（必须） |
| -h  | --help | |  获取帮助指南  |

## rmtree指令
> 输入指令
> ```
> sib afc rmtree -f ./Document/test
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -f  | --folder | string | 删除文件夹路径（必须） |
| -h  | --help | |  获取帮助指南  |

## stat指令
> 输入指令
> ```
> sib afc stat -p ./Document/test
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -p  | --path | string | 文件或文件夹路径（必须） |
| -h  | --help | |  获取帮助指南  |

## tree指令
> 输入指令
> ```
> sib afc tree -f ./Document/test
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -b  | --bundleId | string | 指定应用的路径 |
| -f  | --folder | string | 文件夹路径（必须） |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-afc.md) 发起贡献改善此页
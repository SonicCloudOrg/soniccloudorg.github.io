# 屏幕截图

从您的设备获取屏幕截图。

## 马上获取
> 输入指令
> ```
> sib screenshot
> ```
一般地，我们会指定结果路径。
> 输入指令
> ```
> sib screenshot -p ./abc
> ``` 
还可以根据需要指定截图文件的文件名。
> 输入指令
> ```
> sib screenshot -p ./abc -n my_file_name
> ``` 
甚至，还可以根据需要指定截图文件的后缀名。
> 输入指令
> ```
> sib screenshot -p ./abc -n my_file_name -t jpeg
> ``` 

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -p  | --path | string | 生成路径，默认当前目录 |
| -n  | --name | string | 文件名，默认为随机uuid字符串 |
| -t  | --type | string | 后缀名，只能填写png或jpeg，默认为png |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-screen.md) 发起贡献改善此页
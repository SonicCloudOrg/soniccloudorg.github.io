# XCTest相关

本文介绍如何发起XCTest。

## 启动 WebDriverAgent Server

> 输入指令
> ```
> sib run wda
> ```
> 即可简单启动 WebDriverAgent！可以浏览器访问 http://localhost:8100/status 查看wda状态。

一般地，我们的bundleId都是自定义的， 这时候可以加上 **-b** 或 **--bundleId** 选项指定，如果不包含 **.xctrunner** 会自动补全。

> 输入指令
> ```
> sib run wda -b org.cloud.sonic.WebDriverAgentRunner
> ```

如果我们需要自定义wda的启动port和转发port，我们可以加上 **--server-local-port** 选项和 **--server-remote-port** 来指定.

> 输入指令
> ```
> sib run wda -b org.cloud.sonic.WebDriverAgentRunner --server-local-port=8101 --server-remote-port=8200
> ```
> 可以浏览器访问 http://localhost:8200/status 查看wda状态。

类似地，mjpeg-server的配置也是如此。

> 输入指令
> ```
> sib run wda -b org.cloud.sonic.WebDriverAgentRunner --mjpeg-local-port=8101 --mjpeg-remote-port=8200
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -b  | --bundleId | string | WebDriverAgent的包名（支持模糊匹配）    |
| | --disable-mjpeg-proxy |  | 不转发mjpeg-server服务端口 |
| | --disable-show-log |  | 不打印WebDriverAgentRunner服务的日志 |
| | --mjpeg-local-port | int | mjpeg-server本地启动端口 |
| | --mjpeg-remote-port | int | mjpeg-server转发端口 |
| | --server-local-port | int | WebDriverAgentRunner本地启动端口 |
| | --server-remote-port | int | WebDriverAgentRunner转发端口 |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
| -h  | --help | |  获取帮助指南  |

## 其他XCTest

> 输入指令
> ```
> sib run xctest -b your.app.bundleId
> ```

一般地，我们会启动时带上多个参数
> 输入指令
> ```
> sib run xctest -b your.app.bundleId -e TEST_ENV_1=hello -e TEST_ENV_2=world
> ```

## 可用选项

|  快捷使用 | 选项名  | 数据类型 | 描述信息 |
|  ----  | ----  | ---- | ---- |
| -b  | --bundleId | string |测试包的包名（支持模糊匹配）    |
| -e  | --env | []string | 附带参数    |
| -u  | --udid | string | 指定目标udid设备，不指定默认获取列表第一个设备  |
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sib/sib-run.md) 发起贡献改善此页
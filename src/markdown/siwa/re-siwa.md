# sonic-ios-webkit-adapter

本文为用于谷歌浏览器调试的webkit协议接收器sonic-ios-webkit-adapter的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-ios-webkit-adapter)

<a href="#">  
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-ios-webkit-adapter?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-ios-webkit-adapter?style=social">
</a>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-ios-webkit-adapter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-ios-webkit-adapter" />
</a>

## 介绍

> **sonic-ios-webkit-adapter** 用作 iOS H5 自动化的底层框架，如 auto touch、性能采集等，
> 以及提供给前端一个开源易用的 iOS webdebug tool，而如果不使用 adapter，则是暴露原生的 iOS webkit ws 服务，
> 可以通过 iOS webkit debug tool 工具进行调试（参考： [webkit-webinspector](https://github.com/p0358/webkit-webinspector) ），在后续版本中，我们将会对devtool 进行二次开发，完善 sonic 的 H5 自动化前端。

## 快速使用

```
go get -u github.com/SonicCloudOrg/sonic-ios-webkit-adapter
```

## iOS web测试基础原理浅谈

> 当前的主流H5调试，基本上都是基于浏览器开放的debug ws服务来进行的。我们通过连接这些ws，然后发送对应的协议过去，即可达到debug的目的，例如iOS获取elements，则需要按照协议通过ws发送getDocument方法到webkit里面，等待ws server返回对应的element信息。iOS的webkit protocol详细可参考：[WebKit/Source/JavaScriptCore/inspector/protocol at main · WebKit/WebKit · GitHub](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore/inspector/protocol) ，里面通过划分域的形式，已经将协议分为主要的20-30个文件。

## 如何开启iOS web debug服务？

> 不同于安卓只需要简单的去开发者模式里开启webview的debug模式，iOS由于其封闭性，开启web debug非常麻烦。我们需要发送相关的DTX协议给iOS内置的com.apple.webinspector（参考:[sonic-gidevice/webinspector.go at main · SonicCloudOrg/sonic-gidevice · GitHub](https://github.com/SonicCloudOrg/sonic-gidevice/blob/main/webinspector.go) 、[sonic-ios-bridge/src/webinspector at main · SonicCloudOrg/sonic-ios-bridge · GitHub](https://github.com/SonicCloudOrg/sonic-ios-bridge/tree/main/src/webinspector) ）。
> 
> 大体流程如下：通过gidevice启动相关的webinspector server方法，随后DTX发送对应的**connect id**到webinspector，
> 
> 这时候会返回对应的DTX信息，我们会根据DTX信息的case标志(Selector参数)进行webinspector client的初始化处理。
> 
> 该过程中会得到当前设备中的webkit**应用pid和base page信息**（根据一些技术文章，如果iOS的应用有developer证书，则可以开启H5调试，后续开发维护时会进行验证其真实性）。根据这些pid和page信息，当需要对某个webkit应用进行web debug时，创建一个**senderid**，并将其发送到webinspector中，**让webkit开启debug服务**，我们只需要发送相关的协议信息就行。

## 协议兼容

> 虽然iOS的webkit inspector是发展最早的一个网页调试器，但是由于iOS的封闭性和其他的一些因素，后续的其他内核的浏览器调试并没有使用iOS的webkit调试协议，基于易用性考虑，sonic参考[google/ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) 、[RemoteDebug/remotedebug-ios-webkit-adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) 这两个项目，用golang重写了一遍，只需要使用sib的webinspector adapter模式，即可通过chrome devtool简单调试iOS的safari。核心思路是sib将发送协议信息这个关键步骤做成ws服务，采用双向代理的模式，通过[SonicCloudOrg/sonic-ios-webkit-adapter](https://github.com/SonicCloudOrg/sonic-ios-webkit-adapter) **拦截iOS webkit调试协议和Chrome DevTools Protocol协议之间的特异方法，将其转换成双方可接受的调试协议和返回结果**。

### 案例

> 如果我们需要获取当前页面下导航栏中的历史信息时，Chrome DevTools Protocol的做法是ws里发送Page域中的getNavigationHistory方法到当前调试的应用中，等待返回的结果就行。比较可惜的是，这个方法直接发送到iOS webkit中，iOS webkit会返回信息告知并没有这个方法，不过iOS webkit可以通过曲线救国的方式达到类似的效果。首先，我们先看Chrome DevTools Protocol中getNavigationHistory的返回信息是什么（参考：[Chrome Devtools Protocol](https://github.com/ChromeDevTools/devtools-protocol/blob/master/json/browser_protocol.json) ）
```
    {
        "id": "TransitionType",
        "description": "Transition type.",
        "type": "string",
        "enum": [
            "link",
            "typed",
            "address_bar",
            "auto_bookmark",
            "auto_subframe",
            "manual_subframe",
            "generated",
            "auto_toplevel",
            "form_submit",
            "reload",
            "keyword",
            "keyword_generated",
            "other"
        ]
    }
    
    {
        "name": "getNavigationHistory",
        "description": "Returns navigation history for the current page.",
        "returns": [
            {
                "name": "currentIndex",
                "description": "Index of the current navigation history entry.",
                "type": "integer"
            },
            {
                "name": "entries",
                "description": "Array of navigation history entries.",
                "type": "array",
                "items": {
                    "$ref": "NavigationEntry"
                }
            }
        ]
    }
    
    
    {
        "id": "NavigationEntry",
        "description": "Navigation history entry.",
        "type": "object",
        "properties": [
            {
                "name": "id",
                "description": "Unique id of the navigation history entry.",
                "type": "integer"
            },
            {
                "name": "url",
                "description": "URL of the navigation history entry.",
                "type": "string"
            },
            {
                "name": "userTypedURL",
                "description": "URL that the user typed in the url bar.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Title of the navigation history entry.",
                "type": "string"
            },
            {
                "name": "transitionType",
                "description": "Transition type.",
                "$ref": "TransitionType"
            }
        ]
    }
```
> 由返回结构可知，最重要的是url和titile（其他信息可自定义生成），所以思路可以这样：
> 
> 通过中间层拦截到这个特异性的方法，然后将这个方法替换成iOS webkit protocol下Runtime域的evaluate方法（evaluate方法的使用说明参考：[iOS webkit protocol Runtime](https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/inspector/protocol/Runtime.json)），发送window.location.href，获取全局windows对象下的location.href结果，然后再次使用Runtime域evaluate方法，发送window.title，获取全局windows对象下的title结果，然后按照getNavigationHistory的返回结构组合获取到的这些信息，再返回到devtool中。

### 大体设计

> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/siwa-design.png" :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/siwa-design.png']" style="width: 80%"/>

### 不同调试协议之间的[API差异](http://compatibility.remotedebug.org/) 概览

> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/siwa-api-diff.png" :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/siwa-api-diff.png']" style="width: 90%"/>

## 本文贡献者

<div class="cont">
<a href="https://github.com/aoliaoaoaojiao" target="_blank">
<img src="https://avatars.githubusercontent.com/u/53102695?v=4" width="50"/>
<span>aoliaoaoaojiao</span>
</a>
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp; &nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/siwa/re-siwa.md) 发起贡献改善此页

# 自定义脚本

使用自定义脚本执行UI自动化。（该功能需升级至Sonic v2.0.0版本）

## 一、Groovy(Java)脚本 （推荐）

### 能力介绍

执行自定义脚本前，会将基础stepHandler传入Groovy引擎。

包括：
> 1. log对象，可以操作测试报告输出文本
> 2. androidDriver，可以操作UIAutomator2-Server
> 3. iosDriver，可以操作Wda
> 4. 全局参数，可以对全局参数进行存取
> 5. Sonic的自定义步骤，可以直接复用
> 6. 其他，包括PocoDriver、设备信息等等

stepHandler以外能力，可以直接import对应包进行实现。

包括但不限于：
> 1. RestTemaplate，可以进行Rest Api操作。
> 2. Process，可以运行本地指令等等。
> 3. fastJson和其他包。

### 输出日志到测试报告

> 直接使用
> ```
> androidStepHandler.log.sendStepLog(1, "我是普通日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(2, "我是通过日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(3, "我是告警日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(4, "我是异常日志", "步骤详细日志")
> ```
> 
> 入参分别为：**日志级别**、**步骤简述**、**步骤详细日志**
> 
> 日志级别有四种，从1-4分别是：INFO、PASS、WARN、ERROR

### 引用全局参数

> 全局参数默认存放在androidStepHandler.globalParams，是com.alibaba.fastjson.JSONObject对象。使用时可以直接
> ```
> String test = androidStepHandler.globalParams.getString("Hello")
> androidStepHandler.log.sendStepLog(1, "获取全局参数Hello", "值：" + test)
> ```

### 获取设备信息

> Android: 
> ```
> String udId = androidStepHandler.iDevice.getSerialNumber()
> androidStepHandler.log.sendStepLog(1, "获取udId", "值：" + udId)
> ```
>
> iOS: 
> ```
> String udId = iosStepHandler.udId
> iosStepHandler.log.sendStepLog(1, "获取udId", "值：" + udId)
> ```


### 示例脚本展示

#### 调用第三方Rest API
建设中...

#### 循环点击POCO控件
建设中...

#### adb操作
建设中...

#### 运行本地command指令
建设中...

## 二、Python （不推荐）

建设中...

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-script.md) 发起贡献改善此页

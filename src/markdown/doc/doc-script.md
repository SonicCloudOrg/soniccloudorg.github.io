# 自定义脚本

使用自定义脚本执行UI自动化。

## Groovy(Java)脚本 （推荐）

### 能力介绍

执行自定义脚本前，会将基础stepHandler传入Groovy引擎。

包括：
1. log对象，可以操作测试报告输出文本
2. androidDriver，可以操作UIAutomator2-Server
3. iosDriver，可以操作Wda
4. 全局参数，可以对全局参数进行存取
5. Sonic的自定义步骤，可以直接复用
6. 其他，包括PocoDriver、设备信息等等

stepHandler以外能力，可以直接import对应包进行实现。

包括但不限于：
1. RestTemaplate，可以进行Rest Api操作。
2. Process，可以运行本地指令等等。
3. fastJson和其他包。

### 输出到测试报告

```
androidStepHandler.log.sendLog()
```

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

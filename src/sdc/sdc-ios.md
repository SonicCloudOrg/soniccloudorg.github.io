---
contributors:
- 'ZhouYixun'
---

# IOSDriver

本文是IOSDriver文档。 API文档可前往：👉[Java Doc](https://s01.oss.sonatype.org/service/local/repositories/releases/archive/io/github/soniccloudorg/sonic-driver-core/1.1.23/sonic-driver-core-1.1.23-javadoc.jar/!/index.html)

## 设备前置配置

iOS需要打包wda到手机上，教程可以参考 [这里](https://sonic-cloud.cn/deploy/ios-deploy.html) 。

打包后，如果在Mac上直接使用XCode进行Build Test就可以忽略这一步。
如果在非Mac环境或者不依赖XCode工具则需要 [sib](https://sonic-cloud.cn/sib/re-sib.html) 或 tidevice 一类的工具启动wda。

以sib为例：
```bash
sib run wda -b your.bundle.id
```
然后就可以启动Driver
```java
IOSDriver iosDriver = new IOSDriver("http://localhost:8100");
```

## 更多文档建设中...


---
contributors:
- 'ZhouYixun'
---

# sonic-driver-core

本文为Sonic UI自动化Driver核心sonic-driver-core的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-driver-core) 

👉[Java Doc](https://s01.oss.sonatype.org/service/local/repositories/releases/archive/io/github/soniccloudorg/sonic-driver-core/1.1.28/sonic-driver-core-1.1.28-javadoc.jar/!/index.html)

<div style="display: flex">
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-driver-core?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-driver-core?style=social">
</div>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-driver-core/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-driver-core" />
</a>

## 介绍

sonic-driver-core是Sonic UI自动化核心，主要直接通过与 

1. [appium-uiautomator2-server](https://github.com/SonicCloudOrg/sonic-appium-uiautomator2-server) 
2. [WebDriverAgent](https://github.com/SonicCloudOrg/sonic-ios-wda) 
3. [Poco-SDK](https://github.com/SonicCloudOrg/sonic-sdk-poco) 

通信达到自动化效果，减少通信过程中的时延与消耗。

API文档可前往：👉[Java Doc](https://s01.oss.sonatype.org/service/local/repositories/releases/archive/io/github/soniccloudorg/sonic-driver-core/1.1.28/sonic-driver-core-1.1.28-javadoc.jar/!/index.html)

## 快速使用

### Maven Central

```xml
<dependency>
    <groupId>io.github.soniccloudorg</groupId>
    <artifactId>sonic-driver-core</artifactId>
    <version>1.1.28</version>
</dependency>
```

### Gradle

```groovy
implementation 'io.github.soniccloudorg:sonic-driver-core:1.1.28'
```



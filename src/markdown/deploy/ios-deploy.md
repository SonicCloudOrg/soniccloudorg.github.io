# iOS设备接入
本文将介绍iOS设备接入Sonic的准备工作。

## 构建 WebDriverAgent 到设备中
构建wda到你的iOS设备中，成功后即可脱离mac，在win或linux的Agent上使用iOS设备。

准备工作：Mac、Xcode

> 1. 拉下WebDriverAgent项目。
> ```
> git clone https://github.com/appium/WebDriverAgent 
> 或 
> git clone https://github.com/SonicCloudOrg/sonic-ios-wda.git
> ```
> 2. 准备个人免费证书（7天过期），最好还是使用开发者账户。
>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios1.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios1.png']" style="width: 80%"/>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios2.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios2.png']" style="width: 80%"/>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios3.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios3.png']" style="width: 80%"/>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios4.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios4.png']" style="width: 80%"/>
>
> 注意：这里第一次往手机上打会报错，是因为没有信任电脑，在设置--通用--描述文件与管理里面信任即可。
> 
> 4. 修改sonic的agent下的配置文件。
>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios5.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios5.png']" style="width: 80%"/>
>
> 5. 配置完成！接入Sonic即可。
>
> <el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios6.png"
> :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/master/src/assets/ios6.png']" style="height: 380px"/>
> 
> 6. 接入完成后，后续可以脱离Mac来使用iOS（Windows需要安装iTunes），如果证书过期，需要重新使用Mac安装证书


## 构建ipa文件
如果只想构建一次，然后打包成wda.ipa共享给其他设备，可以参考这个方式。

手机udId必须在开发者账号下。
> ```
> $ xcodebuild build-for-testing -scheme WebDriverAgentRunner -sdk iphoneos -configuration Release -derivedDataPath /tmp/derivedDataPath
> $ cd /tmp/derivedDataPath
> $ cd Build/Products/Release-iphoneos # path might be different
> $ mkdir Payload && mv *.app Payload\
> $ zip -r WDA.ipa Payload
> $ sib app install WDA.ipa
> ```
> 关于sib的使用，可前往周边生态。

## 常见问题:

> 1. 打包wda后启动失败。
>
> >请检查yml中配置的bundleId是否一致、设备是否信任了证书、设备是否信任了电脑。
> 2. 使用后没有出现画面，但是按键操作正常。
> 
> >解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/27-ios)。
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多疑问可前往👉[社区](https://sonic-cloud.wiki)👈交流

## 本文贡献者
<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
<a href="https://gitee.com/soniclei" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABHZJREFUeF7tm9tXIkcQxj8EATcqCnIRRVQWdc0m+f8f8pSHvO3DZt1VXJSr3FXuwnLJqVmHiMcNXcrpMTnVLz7w9UzXb77uqao52n7/488xZCgRsAksJU6GSGCpsxJYDFYCS2BxCDC0cmYJLAYBhlScJbAYBBhScZbAYhBgSMVZAotBgCEVZwksBgGGVJwlsBgEGFJxlsBiEGBIxVkCi0GAIRVnCSwGAYbUUmfZ7XZshQLw+7x4s7QEh8MOm802Wf5wOEL/Wx/1RguFUhk39QYjtPlLLYMV349iM+CHw+FQimo8HqPV7iCZzuL65lZpzrxF2mGRm94fxuFd90y5SDWwb4MBLjM55K6KqlPmptMO6yC2i61QcArUYDBEs91GvdFEp9s1grMv2OFZXcHqyjKW3K4pPQFLJC9RqtTmBkLlQlphra+t4vjgLVxOp7E22lrV2g0+nycxHA5/uN5wMIC9nW24XN/n0bhtNPHh44lKjHPTaIW1H41gZzuMhftD/Oa2jo9fEv8Kyow06PfhILaHxfszbjAY4CyZQqlSnRuMWRfSCusovg9yCY3RaGScPenc1aw1Tn7/7fgIPu/axJXZqyK+XqaV579UaBksSguSqQxyBfWD2nQmxmNjCxfKFSSSqZcyUJ6vFZZxuG+GYGZS5WoNn07PlRdrtVArrKB/A4ex3UluNRqPUSpXcZHJotfrW81i5v21wqLVvD+KI7Dhm1rYcDQyEs5q7RrFSvXVgtMOi17/7+IxeNc8Tz5JOosGwyE6na5R3lBq0Wi1Zj51HQLtsCgoyuJj0QhCgQ2lcofShEarjXyhhErtWgeXJ+9hCSxzJeQyqg9pW75ZcmNhYWEmiGarbVl9aCmsx2T8G1741tfgWVmB2+2C/QfwKNvP5AtGnqZzvCpYjwMncASQzje3yzX1M23NZCqLfLGkjderhvWQAmX+0ciWUVSbg7bkh78+K5VL8yD6n4FFwZLTqGQyC3HqVpwZ3Qc99aE2WL8eH2Lds2q0Wig9SFykje4nd/x8FEfwPk+jpDaTu8JFOsu9zLP02mA9LKLp/1/yheKz6rqpYvz/Ciu6HTZ6UmZ60O508ek0AfrLGQ87D88pxjn3eqzV5izPyjKOD+OTA1q18fdwwdRhje1GJonsXa+Hk9Nz1Jt6MnxtsCjot3tRRMKhqRYxvdFS2fzMzJycubMVxuLi9w8ctJWL5Qq+JJIvMQtrrlZYVOb88u7gybrwrtdHs9VCo9lGr98zgnA5XfCsLhtJqgnJjI4K75Ozc/Y2ZtF5JNYKywAwo5BWCabTvcP5RQo1zZ/EtMMyYdC2ioQ34XQuqvAxNNTKoS7E11TakjaOZbBMQuFQwCikfzK+SDtgt/9TTNNLgABRY5BcRHkZ9+2p/CQUhJbDUljjq5EILMajEFgCi0GAIRVnCSwGAYZUnCWwGAQYUnGWwGIQYEjFWQKLQYAhFWcJLAYBhlScJbAYBBhScZbAYhBgSMVZAotBgCEVZwksBgGGVJwlsBgEGNK/AbDkeexTOAtZAAAAAElFTkSuQmCC" width="50"/>
<span>soniclei</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/deploy/ios-deploy.md) 发起贡献改善此页
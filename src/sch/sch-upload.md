---
contributors:
- 'ZhouYixun'
---

# 批量装包流程

这里是Sonic推荐批量装包流程。本文将讲述如何用sonic-ci-helper插件与Sonic结合。

::: tip 大致流程
1. 安装插件后，配置信息。
2. 通过Jenkins将打包产物（apk或ipa）通过插件上传至Sonic。
3. 通过插件触发上传后续的运行测试套件任务。
4. 通过测试套件完成设备批量安装效果。
::: 

## 插件必要配置
以下为使用插件前的必要配置，配置项名称会因为Jenkins的安装语言而有差异。

1. 前往【系统管理】->【系统设置】
2. 将【Jenkins Location】的Jenkins URL填写正确，正常为 http://[Jenkins服务的ipv4]:[Jenkins服务的端口]/jenkins/
3. 将【Sonic云测平台配置】的Sonic云测平台Url填写正确，例：http://SONIC_SERVER_HOST:SONIC_SERVER_PORT

## 将安装包上传至Sonic平台
配置项名称会因为Jenkins的安装语言而有差异。

1. 在Jenkins原有打包Job中，在 **Build** 阶段选择【上传安装包至Sonic】。
2. 填写安装包所在目录。例您的安装包在/abc/def/sonic.apk，那么填写/abc/def。
3. 选择对应的项目。（如果遇到报错，可能是因为上方的Sonic Url配置不正确）。
4. 输入鉴权Token，可前往Sonic平台右上角用户头像处生成填入。
5. （附）如果需要上传包后触发测试套件，可以点击【高级/Advance】输入测试套件id。
6. 点击保存，触发构建，成功后可以前往Sonic对应项目中的安装包列表信息查看。


## 测试套件达到批量装包效果
1. 新增用例。
2. 测试步骤中选择【安装应用】->【已有安装包列表安装】即可。
3. 自动检测对应平台，默认选取最新包，您也可以加上分支名进行筛选。
4. 将用例添加到测试套件中。
5. 将测试套件id添加到Jenkins插件中。


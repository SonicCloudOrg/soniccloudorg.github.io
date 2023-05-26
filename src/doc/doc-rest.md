---
contributors:
- 'ZhouYixun'
---

# REST API

这里是Sonic的Http协议Rest API文档使用教程。

## 查看文档

1. 点击页面右上角头像悬浮框的 [关于Sonic]
2. 点击REST API
3. 即可进入文档页面

## 在线调试HTTP接口
1. 搜索/login接口，进行登陆
2. 获取登陆后的返回值，这便是你的Token。（也可以直接在Sonic头像下拉框的创建Token直接生成）
3. 前往API页面的【文档管理】
4. 点击【全局参数】
5. 新增一个名为SonicToken的全局参数，value的值为你的Token，类型选择header。
6. 完成！可以选择你需要调试的Http接口愉快的在线调试啦～

## 部分HTTP API讲解

### 通过REST API占用设备并获取远程调试信息
::: tip
该功能需升级至Sonic v2.5.0
:::
1. 参考REST API的文档发起对应HTTP请求
2. 请求后，设备将进入`占用中`状态，可占用时长会受后台管理中心的最大占用时长影响，使用完毕记得再次发起 **释放设备** 的请求哦。
3. 可以使用返回的结果进行远程adb连接、远程wda连接等。

> ${baseURL}/api/controller/devices/occupy

| Body字段              | 字段解析                                                                       | 例子      |
|---------------------|----------------------------------------------------------------------------|---------|
| udId                | 设备udId（必填）                                                                 | abcdefg | 
| sasRemotePort       | （仅Android设备生效）设备adb远程连接端口。非必填，为0或不填时不暴露也不启动对应服务，建议取值范围30000-65535。         | 30001   | 
| uia2RemotePort      | （仅Android设备生效）设备uia2 server远程连接端口。非必填，为0或不填时不暴露也不启动对应服务，建议取值范围30000-65535。 | 30002   | 
| sibRemotePort       | （仅iOS设备生效）设备sib远程连接端口。非必填，为0或不填时不暴露也不启动对应服务，建议取值范围30000-65535。             | 30003   | 
| wdaServerRemotePort | （仅iOS设备生效）设备wda server远程连接端口。非必填，为0或不填时不暴露也不启动对应服务，建议取值范围30000-65535。      | 30004   | 
| wdaMjpegRemotePort  | （仅iOS设备生效）设备wda mjpeg远程连接端口。非必填，为0或不填时不暴露也不启动对应服务，建议取值范围30000-65535。       | 30005   | 

### 通过REST API释放设备
::: tip
该功能需升级至Sonic v2.5.0，与 `通过REST API占用设备并获取远程调试信息` 接口配合使用。
:::
1. 参考REST API的文档发起对应HTTP请求
> ${baseURL}/api/controller/devices/release?udId=xxxx
2. 请求后，设备将进入解除`占用中`状态，并且占用期间的sas、sib、uia2、wda等服务也会一并释放资源。

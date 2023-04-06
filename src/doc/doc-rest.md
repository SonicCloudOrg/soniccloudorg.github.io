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

## 调试HTTP接口
1. 搜索/login接口，进行登陆
2. 获取登陆后的返回值，这便是你的Token。（也可以直接在Sonic头像下拉框的创建Token直接生成）
3. 前往API页面的【文档管理】
4. 点击【全局参数】
5. 新增一个名为SonicToken的全局参数，value的值为你的Token，类型选择header。
6. 完成！可以选择你需要调试的Http接口愉快的在线调试啦～

## 获取设备远程调试端口
::: tip
该功能需升级至Sonic v2.5.0
:::
1. 参考REST API的文档发起对应HTTP请求
2. 将获得的地址在终端输入

**安卓**
```bash
adb connect xxx.xxx.xxx.xxx:xxxxx
```
**iOS**
```bash
sib remote connect --host xxx.xxx.xxx.xxx --port xxxxx
```
3. 完成！
4. 请求后，设备将进入`占用中`状态，使用完毕记得再次发起 **释放设备** 的请求哦

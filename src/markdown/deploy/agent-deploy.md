# Agent端部署
本文将介绍如何部署Agent端。
<el-alert style="margin-top: 20px" title="注意" show-icon type="info" description="谨记一个主机只能部署一个Agent端，每个Agent的Key不能重复使用，多台设备可接入同一Agent" :closable="false"/>

## Docker部署 **（注：仅Ubuntu可用！）** 
该方式将一次性部署Agent端以及所需环境。

准备工作：Docker，Sonic前后端部署完毕
> 1. 从部署好的前端界面【设备中心】的【Agent中心】新增Agent，记录Agent的Key。
>
> 2. <a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/docker-compose.yml" target="_blank">点击这里</a> 下载最新的docker-compose.yml，参考注释修改里面的内容。（如果你是非中国大陆用户，请 <a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/docker-compose2.yml" target="_blank">点击这里</a> 下载）
>
> 3. 执行以下指令（自行根据提示更改参数）。
>
> ```
> docker-compose up -d
> ```
>
> 4. 部署完毕！自行插入设备即可。


## jar方式
该方式将以本地jar包部署Agent端、Appium等等环境。

准备工作：npm，**jdk15或以上**，安卓SDK，谷歌浏览器，chromedriver.exe
> 1. 从部署好的前端界面【设备中心】的【Agent中心】新增Agent，记录Agent的Key。
> 2. 将jdk路径设置到系统环境变量，命名为JAVA_HOME。
> 3. （如不需要接入安卓设备可跳过）将安卓SDK设置到系统环境变量，命名为ANDROID_HOME。打开SDKManager，下载 **built-tools** 和 **platform-tools**。确保platform-tools目录存在，adb指令可用。
> 4. 将JAVA_HOME、ANDROID_HOME、ANDROID_HOME/platform-tools添加到系统PATH中。
> 5. （如不使用在线webView功能可跳过）[在这里](http://npm.taobao.org/mirrors/chromedriver/) 下载与Agent本机谷歌浏览器 **版本对应** 的chromedriver.exe，并放到跟谷歌浏览器安装同目录下（可以谷歌浏览器地址栏输入chrome://version，就看到安装目录了。大部分在这个目录C:\Program Files\Google\Chrome\Application，有时候在Program Files(x86)里面）。
> 6. 执行以下指令后，确保appium指令可用。
> ```
> npm i -g appium
> ```
> 7. 选择 **PC对应的平台zip** 下载并解压到任意目录（标记为 **工作目录** ，如链接失效，请自行前往 <a href="https://github.com/SonicCloudOrg/sonic-agent/releases" target="_blank">这里</a> 下载）
> 
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/sonic-agent-v1.5.0-release-linux_x86.zip" target="_blank">sonic-agent-v1.5.0-release-linux_x86.zip</a>
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/sonic-agent-v1.5.0-release-linux_x86_64.zip" target="_blank">sonic-agent-v1.5.0-release-linux_x86_64.zip</a>
>  > 
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/sonic-agent-v1.5.0-release-macosx_x86_64.zip" target="_blank">sonic-agent-v1.5.0-release-macosx_x86_64.zip</a>
>  > 
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/sonic-agent-v1.5.0-release-windows_x86.zip" target="_blank">sonic-agent-v1.5.0-release-windows_x86.zip</a>
>  > 
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-agent/releases/download/v1.5.0-release/sonic-agent-v1.5.0-release-windows_x86_64.zip" target="_blank">sonic-agent-v1.5.0-release-windows_x86_64.zip</a>
> 
> 8. 赋予 **工作目录** 所有权限，然后确保解压后的mini、webview、config、plugins文件夹与jar同级
> 
> ```
> $ sudo chmod -R 777 xxxxx
> ```
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后可以列出文件夹检查一下。
> ```
> $ cd xxxxx    
> $ tree 
> 
> │  sonic-agent-xxxx.jar
> │
> ├─config
> │      application-sonic-agent.yml
> ├─plugins
> ├─mini
> ├─webview
> ```
> 9. 修改config文件夹中 **application-sonic-agent.yml** 的配置信息，保存。
> 10. 在 **工作目录** 路径下执行以下指令。
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**快速启动** （*注意！如果你是windows用户，请先在控制台输入 **chcp 65001** 并回车，再输入以下指令*）
> ```
> java -Dfile.encoding=utf-8 -jar sonic-agent-xxxx.jar
> ```
> 11. 部署完毕！自行插入设备即可（设备请竖直放置或平摊放置，左右旋转放置有可能影响坐标定位）。

## 常见问题

> 1. 明明配置好了ANDROID_HOME，并且adb可用，为什么还是检测不到ANDROID_HOME？
>
> >需要配置好ANDROID_HOME之后，PATH里面也需要配置好。确认echo %ANDROID_HOME% (win) 或 echo $ANDROID_HOME (mac 或 linux) 输出正确。
> 2. 查看日志发现与Server没有连上，该怎么解决？
> >主要分为多种情况:
> >1. Key配置不正确，一个Key只能一个Agent使用。
> >2. 所有ip不能使用localhost、127.0.0.1之类的配置。
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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/deploy/agent-deploy.md) 发起贡献改善此页


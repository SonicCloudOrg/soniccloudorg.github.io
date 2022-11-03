# Agent端

本文将介绍如何搭建Agent端开发环境。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-agent)

<a href="#">  
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-agent?style=social">
<img style="margin-left: 10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-agent?style=social">
</a>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-agent/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-agent" />
</a>

## 搭建步骤

**准备工作**：**jdk15**、Idea

> 1. Fork [sonic-agent](https://github.com/SonicCloudOrg/sonic-agent) 仓库。
> 2. 执行git clone指令，将您的仓库代码克隆到本地。
> 3. 根据注释修改config的application-sonic-agent.yml，开发环境时，**sonic.server.port** 填写为gateway服务端口，**org/cloud/sonic/agent/transport/TransportConnectionThread.java** 与 **org/cloud/sonic/agent/tools/file/UploadTools.java** 去掉url中的 **/server**。
> 4. 默认plugins目录下的sonic-ios-bridge、sonic-android-supply和sonic-go-mitmproxy都为开发环境的包，不一定跟您开发环境的平台一致，可以根据您的开发系统去仓库下载对应的包。（注意版本要对应resources/application.yml下的版本哦，如果不想下载，将application-sonic-agent.yml的ios、use-sas和sgm的enable改为false。）
> 5. 如果idea启动，记得更改pom.xml中properties.platform的平台。（旧版本代码只需idea选择对应profile）
> 5. 启动AgentApplication。
> 6. 恭喜，搭建完毕！
> 7. 开发完毕后，push到自己的仓库，然后可以给Sonic原仓库提起pr哦！（建议贡献前先开启issue讨论，防止跟组织计划进度有冲突哦）

## 本文贡献者
<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
</div>

&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/contribute/con-agent.md) 发起贡献改善此页

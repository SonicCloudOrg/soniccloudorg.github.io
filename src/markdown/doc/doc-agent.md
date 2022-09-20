# Agent中心

对Agent进行管理。

## 新增Agent

> 1. 点击【新增Agent】。
> 2. 输入Agent名称。
> 3. 设置高温值，拖动进度条或在右方输入温度值进行设置(可选，默认值为45℃)。
> 4. 设置高温超时，输入超时时间进行设置(可选，默认值为15min)。
> 5. 设置机器人类型，目前可选择钉钉、企业微信和飞书机器人(可选)。
> 6. 设置WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中(可选)。
> 7. 设置Secret，输入群机器人的密钥(可选)。
> 8. 点击【确定】，Agent创建成功。
>
> 注意，当机器人设置参数错误时，不会发送告警，请确保设置参数正确。

## 复制Agent Key

> 在Agent列表中，点击【点击复制】按钮，复制Agent Key并用做Agent端部署参数进行使用。

## 编辑Agent

> 1. 点击【编辑】，对Agent信息进行修改。
> 2. 输入Agent名称，修改当前Agent名称。
> 3. 编辑高温值，拖动进度条或在右方输入温度值进行设置。
> 4. 编辑高温超时，输入超时时间进行设置。
> 5. 编辑机器人类型，目前可选择钉钉、企业微信和飞书机器人。
> 6. 编辑WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中。
> 7. 编辑Secret，输入群机器人的密钥。
> 8. 点击【确定】，Agent编辑成功。

## 查看Agent

> 1. 在Agent列表中可查看已创建Agent的基础信息，包括Agent名称、host、port、运行系统、运行版本及状态。
> 2. 点击【自动刷新】按钮，开启/关闭自动刷新Agent状态。

## 终止Agent

> 点击【终止运行】按钮，终止运行当前Agent，Agent状态变更为 [离线] 状态。
>
> 注意，当设备为 [在线] 状态时，才可以被终止运行。

## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
<a href="https://github.com/yyz20001111" target="_blank">
<img src="https://avatars.githubusercontent.com/u/61265897?v=4" width="50"/>
<span>yyz20001111</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-agent.md) 发起贡献改善此页
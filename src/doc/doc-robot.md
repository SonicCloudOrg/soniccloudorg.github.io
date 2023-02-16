---
contributors:
- 'ZhouYixun'
- 'upengfei'
- 'ayumi760405'
---

# 通知机器人
介绍各类型机器人接入方式。

## 钉钉群机器人

1. 选择需要发送机器人的群聊，点击右上方【群设置】。
2. 点击【智能群助手】。
3. 点击【添加机器人】。
4. 选择【自定义】机器人。
5. （可选）点击安全设置里面的【加签】，下方出现的即为Sonic平台的【机器人密钥】，复制该密钥填写到项目中。
6. 点击【完成】按钮，机器人将添加完成，此时出现的WebHook即为Sonic平台的【机器人Hook】，复制该WebHook填写到项目中。
7. 完成！平台即可推送消息。

## 飞书群机器人

1. 选择需要发送机器人的群聊，点击【设置】。
2. 点击【群机器人】。
3. 点击【添加机器人】。
4. 选择【自定义机器人】。
5. （可选）点击安全设置里面的【签名校验】，出现的即为Sonic平台的【机器人密钥】，复制该密钥填写到项目中。
6. 点击【完成】按钮，机器人将添加完成，此时出现的WebHook即为Sonic平台的【机器人Hook】，复制该WebHook填写到项目中。
7. 完成！平台即可推送消息。

## 企业微信机器人

1. 选择需要发送机器人的群聊，点击【设置】。
2. 点击【添加机器人】。
3. 点击【新创建一个机器人】。
4. 点击【完成】按钮，机器人将添加完成，此时出现的WebHook即为Sonic平台的【机器人Hook】，复制该WebHook填写到项目中。
5. 完成！平台即可推送消息。

## 友空间机器人

1. 选择要发送机器人的群组，进入群组，点击【设置】
2. 点击【群机器人】。
3. 点击【添加机器人】->【自定义机器人】（也可选择已有机器人）。
4. 点击【添加】按钮，机器人添加完成，此时出现的webHook即为Sonic平台的【机器人Hook】，复制该webHook填写到项目中。
5. 完成!平台即可推送消息。

## Telegram机器人

1. 在Telegram內透过[@BotFather](https://t.me/BotFather) 建立Telegram机器人且取得机器人Token。
2. 在Telegram内将机器人加入指定聊天或聊天群组。
3. 利用`https://api.telegram.org/bot{Token}/getUpdates` 连结取得chatId
4. 将以下连结`https://api.telegram.org/bot{Token}/sendMessage?chat_id={chatId}`的Token和chatId取代组成webHook。
5. 组成的webHook即为Sonic平台的【机器人Hook】，复制该webHook填写到项目中。
6. 完成！平台即可推送消息。
7. [Telegram Bot API参考连结](https://core.telegram.org/bots/api)

## LINE Notify

1. 登入[Line Notify](https://notify-bot.line.me/doc/en/)且进入个人页面。
2. 点击【发行权杖(Token)】并设定名称及选取要接收通知的群组。
3. 按下发行后取得【权杖(Token)】。
4. 取得的Token即为Sonic平台的【机器人Hook】，复制该Token填写到项目中。
5. 完成！平台即可推送消息。
6. [Line Notify API参考连结](https://notify-bot.line.me/doc/en/)

## Slack机器人

1. 登录到[Slack App](https://api.slack.com/apps)，然后点击"Create New App"按钮创建一个App。
2. 在App详情中，点击"Features" -> "Incoming Webhooks" -> "Activate Incoming Webhooks"。
3. 接着点击"Add New Webhook to Workspace"按钮，然后选择你要发送的个人或者频道(channel)。
4. 回到APP详情界面，复制刚才生成的Webhook URL。
5. 进入Sonici平台，在消息推送设置页面选择Slack Bot, Webhook填写刚才复制的URL即可。


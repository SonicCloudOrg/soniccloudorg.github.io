---
contributors:
- 'ZhouYixun'
- 'upengfei'
- 'ayumi760405'
- 'stephenwang1011'
---

# Notify robot
Introduces the access methods of various types of robots.

## DingTalk group robots

1. Select the group chat where the robot needs to be sent, and click [Group Settings] on the upper right.
2. Click [Intelligent Group Assistant].
3. Click [Add Robot].
4. Select [Custom] robot.
5. (Optional) Click [Add Signature] in the security settings, and the [Robot Key] of the Sonic platform appears below, copy the key and fill it in the project.
6. Click the [Finish] button, and the robot will be added. The WebHook that appears at this time is the [Robot Hook] of the Sonic platform. Copy the WebHook and fill it in the project.
7. Done! The platform can push the message.

## Feishu group robot

1. Select the group chat where the robot needs to be sent, and click [Settings].
2. Click [Group Robots].
3. Click [Add Robot].
4. Select 【Custom Robot】.
5. (Optional) Click [Signature Verification] in the security settings, and the [Robot Key] of the Sonic platform will appear, copy the key and fill it in the project.
6. Click the [Finish] button, and the robot will be added. The WebHook that appears at this time is the [Robot Hook] of the Sonic platform. Copy the WebHook and fill it in the project.
7. Done! The platform can push the message.

## Enterprise WeChat Robot

1. Select the group chat where the robot needs to be sent, and click [Settings].
2. Click [Add Robot].
3. Click 【Create a new robot】.
4. Click the [Finish] button, and the robot will be added. The WebHook that appears at this time is the [Robot Hook] of the Sonic platform. Copy the WebHook and fill it in the project.
5. Done! The platform can push the message.

## Friends Space Robot

1. Select the group to send the robot to, enter the group, and click [Settings]
2. Click [Group Robots].
3. Click [Add Robot] -> [Custom Robot] (you can also select an existing robot).
4. Click the [Add] button, and the robot is added. The webHook that appears at this time is the [Robot Hook] of the Sonic platform. Copy the webHook and fill it in the project.
5. Done! The platform can push the message.

## Telegram Bot

1. Create a Telegram bot through [@BotFather](https://t.me/BotFather) in Telegram and obtain a bot token.
2. Add the robot to the specified chat or chat group in Telegram.
3. Use `https://api.telegram.org/bot{Token}/getUpdates` link to get chatId
4. Replace the Token and chatId of the following link `https://api.telegram.org/bot{Token}/sendMessage?chat_id={chatId}` to form a webHook.
5. The formed webHook is the [Robot Hook] of the Sonic platform, copy the webHook and fill it in the project.
6. Done! The platform can push the message.
7. [Telegram Bot API Reference Link](https://core.telegram.org/bots/api)

## LINE Notify

1. Log in to [Line Notify](https://notify-bot.line.me/doc/en/) and enter the personal page.
2. Click [Issue Token] and set the name and select the group to receive notifications.
3. Press Release to get 【Token】.
4. The obtained Token is the [Robot Hook] of the Sonic platform, copy the Token and fill it in the project.
5. Done! The platform can push the message.
6. [Line Notify API reference link](https://notify-bot.line.me/doc/en/)

## Slack Bot

1. Log in to [Slack App](https://api.slack.com/apps), and click the "Create New App" button to create an App.
2. In the App details, click "Features" -> "Incoming Webhooks" -> "Activate Incoming Webhooks".
3. Then click the "Add New Webhook to Workspace" button, and then select the person or channel you want to send.
4. Go back to the APP details interface and copy the Webhook URL just generated.
5. Enter the Sonici platform, select Slack Bot on the message push setting page, and fill in the URL just copied for Webhook.

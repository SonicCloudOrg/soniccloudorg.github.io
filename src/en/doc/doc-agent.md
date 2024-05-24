---
contributors:
- 'ZhouYixun'
- 'ArryListY'
- 'shinyvince'
---

# Agent Center

Manage Agents.

::: tip
Have questions about Agent deployment? You can go to [Agent deployment document](https://soniccloudorg.github.io/en/deploy/agent-deploy.html) to view~
:::

## Add Agent

1. Click [Add Agent].
2. Enter the Agent name.
3. Set the high temperature value, drag the progress bar or enter the temperature value on the right to set (optional, the default value is 45°C).
4. Set the high temperature timeout, enter the timeout time to set (optional, the default value is 15min).
5. Set the robot type. Currently, DingTalk, Enterprise WeChat and Feishu robots can be selected (optional).
6. Set the WebHook, select the corresponding robot type, copy the robot webhook and paste it into the input box (optional).
7. Set Secret, enter the secret key of the group robot (optional).
8. Click [OK], the Agent is created successfully.

::: tip note
When the robot setting parameters are wrong, no alarm will be sent, please make sure the setting parameters are correct.
:::

## Copy Agent Key

Obtain the Key of the Agent for deployment on the Agent side.

1. In the Agent list, select the corresponding newly added Agent.
2. Click the [Click to copy] button

## Edit Agent

1. Click [Edit] to modify the Agent information.
2. Enter the Agent name to modify the current Agent name.
3. Edit the high temperature value, drag the progress bar or enter the temperature value on the right to set.
4. Edit the high temperature timeout, enter the timeout time to set.
5. Edit the robot type, currently you can choose DingTalk, Enterprise WeChat and Feishu robots.
6. Edit the WebHook, select the corresponding robot type, copy the robot webhook and paste it into the input box.
7. Edit Secret and enter the secret key of the group robot.
8. Click [OK], Agent editing is successful.

## View Agent

1. In the Agent list, you can view the basic information of the created Agent, including Agent name, host, port, operating system, operating version, and status.
2. Click the [Auto Refresh] button to enable/disable automatic refresh of the Agent status.

## Terminate Agent

Remotely stop the Agent service.

1. Find the corresponding Agent in the Agent list.
2. Click the [Stop Running] button to stop running the current Agent. Agent status will change to [Offline] status.

::: warning note
When the Agent is in [Online] state, it can be terminated.
:::

## Frequently Asked Questions (Q&A)

Q1: Why does it still show as offline after the Agent is connected?

A1: You need to manually refresh the page or turn on [Auto Refresh] just after connecting. If you haven’t connected all the time, you need to check the Agent log and check the filled Server IP and Agent Key.

---

Q2: Do you feel that the remote control device is stuck, or the packaging time is too long?

A2: For this problem, we can look at the following two points:
1. It is recommended that the Agent use a wired network environment instead of a wireless network.
2. Check whether the data cable connected to the device is intact. It is recommended to use a USB3.0 data cable or a data cable from an official hardware solution.

---

Q3: There will be sonic-android-supply or other plug-in security pop-up windows when starting on Mac?

A3: Mac: System Preferences -> Security & Privacy -> General, click Trust or Open anyway.

---
::: tip
For more questions, please go to 👉[Community](https://discord.gg/c9ZD6jSyTE)👈 to communicate
:::

---
contributors:
- 'ZhouYixun'
- 'soniclei'
- 'shinyvince'
---

# Agent side deployment

This article will introduce how to deploy the Agent side.

::: tip note
Remember that only one Agent can be deployed on one host, the Key of each Agent cannot be reused, and multiple devices can be connected to the same Agent.

In order to use it normally, please keep it consistent with the server version.

Considering scenarios such as bandwidth consumption and data transmission speed during remote control, it is recommended that the Agent use a wired network environment instead of a wireless network.
:::

## jar deployment

This method will deploy Agent, Appium and other environments with local jar packages.

1. **Some JDKs are known to be incompatible. Sonic officially recommends using JDK17**, you can go [here](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html) to install the downloads.
2. Add an Agent from the [Agent Center] of the deployed front-end interface [Device Center], and record the Key of the Agent.
3. (Skip if you do not need to connect to the Android device) Set the Android SDK to the system environment variable and name it ANDROID_HOME. Open SDKManager and download **platform-tools**. Make sure the platform-tools directory exists and the adb command is available.
4. Add ANDROID_HOME, ANDROID_HOME/platform-tools to the system PATH.
5. Select **PC corresponding platform zip** to download and unzip to any directory (marked as **working directory**, **if the following acceleration link fails**, please go to <a href="https://github.com/SonicCloudOrg/sonic-agent/releases" target="_blank">here</a> download)

::: info Linux

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-linux_x86.zip" target="_blank">sonic-agent-v2.4.0-linux_x86.zip</a>

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-linux_x86_64.zip" target="_blank">sonic-agent-v2.4.0-linux_x86_64.zip</a>

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-linux_arm64.zip" target="_blank">sonic-agent-v2.4.0-linux_arm64.zip</a>

:::

::: info Macosx

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-macosx_x86_64.zip" target="_blank">sonic-agent-v2.4.0-macosx_x86_64.zip</a>

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-macosx_arm64.zip" target="_blank">sonic-agent-v2.4.0-macosx_arm64.zip</a>

:::

::: info Windows

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-windows_x86.zip" target="_blank">sonic-agent-v2.4.0-windows_x86.zip</a>

👉 <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/sonic-agent-v2.4.0-windows_x86_64.zip" target="_blank">sonic-agent-v2.4.0-windows_x86_64.zip</a>

:::

6. Grant all permissions to the **working directory**, and then make sure that the decompressed mini, config, plugins folders are at the same level as the jar

```bash
$ sudo chmod -R 777 xxxxx
```

You can then list the folders to check.

```bash
$ cd xxxxx
$ tree

# ├─sonic-agent-xxxx.jar
# │
# ├─config
# │ ├─application-sonic-agent.yml
# ├─plugins
# ├─mini
```

7. Modify the configuration information of **application-sonic-agent.yml** in the config folder and save it.
8. Execute the following commands under the path of **Working Directory**.

::: tip
Notice! If you are a windows user, please enter `chcp 65001` in the console and press Enter, and then enter the following command
:::

```bash
java -Dfile.encoding=utf-8 -jar sonic-agent-xxxx.jar
```

9. Deployment complete! Just insert the device by yourself (please place the device vertically or flatly, and rotate it left and right may affect the coordinate positioning).

## Docker deployment

::: danger warning
Docker deployment is only available for Ubuntu! Only available for Ubuntu! Only available for Ubuntu!

For non-Ubuntu systems, please use the above **jar method to deploy**!
:::

This method will deploy the Agent and the required environment at one time.

Preparatory work: Docker, Sonic front and back ends are deployed

1. Add an Agent from the [Agent Center] of the deployed front-end interface [Device Center], and record the Key of the Agent.
2. [Click here](https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/docker-compose.yml) to download the latest docker-compose. yml, refer to the comments to modify the content inside. (If the acceleration link fails, please go to <a href="https://github.com/SonicCloudOrg/sonic-agent/releases" target="_black">here</a> to download)
3. Execute the following instructions (change the parameters by yourself according to the prompts).

```bash
docker-compose up -d
```
::: tip If you are a user from mainland China and access to DockerHub is slow, you can choose one of the following two points:
- Configure domestic accelerated image sources (recommended)
- <a href="https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-agent/releases/download/v2.4.0/docker-compose-zh.yml" target="_blank"> Click here</a> to download docker-compose-zh.yml and execute the following instructions to directly use the accelerated image (not recommended, the acceleration source may be unstable or the network fluctuates, and docker-compose -f docker-compose- zh.yml down)
```bash
docker-compose -f docker-compose-zh.yml up -d
```
:::
4. Deployment is complete! Just plug in the device yourself.
5. (Appendix) If you are not familiar with Docker, it is recommended to use jar deployment.

## Frequently Asked Questions (Q&A)

Q1: Obviously configured ANDROID_HOME, and adb is available, why is it still not detected ANDROID_HOME?

A1: After configuring ANDROID_HOME, PATH also needs to be configured. Verify that `echo %ANDROID_HOME%` (win) or `echo $ANDROID_HOME` (mac or linux) outputs correctly.

---

Q2: Check the log and find that it is not connected to the server, how to solve it?

A2: Mainly divided into a variety of situations:

1. The Key configuration is incorrect, and a Key can only be used by one Agent.
2. All ip cannot use localhost, 127.0.0.1 and other configurations.

---

Q3: Check the logs and find that the time zone is incorrect, and the time zone of the host machine is correct. How to solve it?

A3: You can refer to [this post](https://sonic-cloud.wiki/d/2297)

---

Q4: There will be sonic-android-supply or other plug-in security pop-up windows when starting on Mac?

A4: Mac: System Preferences -> Security & Privacy -> General, click Trust or Open anyway.

---

::: tip
For more questions, please go to 👉[Community](https://sonic-cloud.wiki)👈 to communicate
:::

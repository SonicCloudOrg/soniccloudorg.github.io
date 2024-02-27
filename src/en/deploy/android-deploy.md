---
contributors:
- 'ZhouYixun'
- 'wuxiangin'
- 'lanlanz'
- 'shinyvince'
---

# Android device access

This article will introduce the related content of connecting Android devices to Sonic.

## General access steps

All devices need to be connected according to this step.

1. Plug one end of the usb cable into the Agent and the other end into the phone
2. Enter the [Settings] page of the mobile phone
3. Go to the [About Phone] page
4. Click [Version Number] multiple times (please look down for differences between different brands) until the developer option is enabled
5. Go to developer options
6. Turn on usb debugging
7. Keep the device upright or flat

::: tip TIP

If you need to collect performance information, you can additionally open the following options
1. Click [GPU rendering mode analysis] in the developer options (some models are called [HWUI rendering mode analysis])
2. In [GPU rendering mode analysis], click to select [in adb shell dumpsys gfxinfo]

If the versions of Sonic plug-in, uiautomator2, and uiautomator2-test are updated after upgrading Sonic, the phone may restore related power optimization.
Therefore, you need to check again to ensure that the Sonic plug-in, uiautomator2, and uiautomator2-test battery optimization are configured correctly.

:::

Different content of each brand can be read down 👇

## HUAWEI

1. Go to [Settings] -> [About Phone] -> [Version Number] and click multiple times to open the developer options
2. Enter the developer options, close [Monitor ADB installed applications]
3. Go to【System and Update】->【Language and Input Method】to close the secure keyboard

## XiaoMi

1. Enter【Settings】->【My Device】->【All Parameters】->【MIUI Version】Multiple clicks to enable developer options
2. Open the developer page, [USB installation] and [USB debugging (safe mode)] are turned on, and some options need to insert a SIM card, which can be pulled out after the configuration is completed.
3. [MIUI Optimization] at the bottom of the developer is off
4. Go to the phone manager and open [Application Management]
5. Click [Permissions]
6. Click the setting icon in the upper right corner
7. Turn off permission monitoring and USB installation monitoring
8. 【Language and input method】Turn off the safe keyboard
9. [Settings] -> [Power Saving and Battery] Settings icon in the upper right corner -> [Application Smart Power Saving]
10. Find sonic, uiautomator2, uiautomator2-test -> [unlimited]

## OPPO

1. Enter【Settings】->【System Management】->【About Phone】->【Version Information】->【Software Version】Multiple clicks to enable developer options
2. Enter the developer options, open the bottom [Disable permission monitoring], close [USB verification application]
3. Open the system power settings
4. Turn off the power optimization of Sonic plug-in, uiautomator2, uiautomator2-test
5. [Others] -> [Keyboard and Input Method] Close the safe keyboard

## vivo

1. Enter【Settings】->【System Management】->【About Phone】->【Version Information】->【Software Version】Multiple clicks to enable developer options
2. Enter the developer options, enable [Security Permissions] and [USB Simulate Click]
3. [Others] -> [Keyboard and Input Method] Close the safe keyboard
4. Turn off the power optimization of Sonic plug-in, uiautomator2, uiautomator2-test

## OnePlus

1. Go to [Settings] -> [About Phone] -> [Version Number] and click multiple times to open the developer options
2. Go to [Settings] -> [System] -> [Developer Options] and enable [USB Debugging]
3. Go to [Settings] -> [System] -> [Developer Options] -> [Default USB Configuration] to select file transfer
4. Go to [Settings] -> [Battery] -> [Battery Optimization], turn off the power optimization of Sonic plug-in, uiautomator2, uiautomator2-test (if you can’t find it, you need to go to the fifth step first)
5. Some OnePlus devices need to enable 【Prohibit Permission Monitoring】

## Meizu

1. Open [Mobile Manager] -> [Settings] -> [Flyme Payment Protection] and turn it off.

## Frequently Asked Questions (Q&A)

Q1: [Driver initialization failed! 】Prompts such as

A1: There are many situations when viewing logs:

1. If the word apksigner appears, please confirm that the built-tool of Android SDK is correct and there is apksigner.jar under platform-tool
2. If the words "shell command error" appear, it is usually because the device permission is not enabled.

---

Q2: The OPPO phone shows a prompt similar to requires:android.permission.WRITE_SECURE_SETTINGS

A2: Generally, the device has not enabled [Prohibit permission monitoring] at the bottom of the developer options.

---

::: tip
For more questions, please go to 👉[Community](https://discord.gg/c9ZD6jSyTE)👈 to communicate
:::

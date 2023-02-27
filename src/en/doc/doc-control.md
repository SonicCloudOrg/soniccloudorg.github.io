---
contributors:
- 'ZhouYixun'
---

# Control Panel

Here is an introduction to the basic functions of the remote control device.

## Android Devices

### Keyboard real-time input
::: tip
This function needs to be upgraded to Sonic v2.0.3
:::

When controlling the device remotely.
1. Click the mouse into the projection area. (If the mouse clicks outside the projection area again, it will stop listening to keyboard input)
2. Use your computer keyboard to directly enter text on the web page.
3. You can directly send the corresponding text to the phone, and support delete and enter keys.

<video class="capacity-video" controls src="./video/input.mp4"/>

::: warning note
After upgrading to Sonic v2.3.0, you can directly click the gray area below the Sonic input method to quickly jump to the system input method setting page to switch input methods.
:::

### Switch the projection mode
The current version of Android screen mirroring has two modes, namely minicap mode and scrcpy mode (default).

scrcpy already supports most models of Android 5-13, and minicap supports Android 4.4-12 models.

When the selected projection mode is not compatible with your device, you can click the toolbar on the right side of the projection area to switch the projection mode.

When in minicap mode, black borders appear in the projection area of some Samsung mobile phones, you can try to use [Fix Black Screen] in the toolbar on the right side of the projection area to solve the problem.

### Switch touch mode

The current version of Android touch has two modes, namely sonic-android-apk touch and adb native touch.

By default, the Android projection touch uses [sonic-android-apk](https://sonic-cloud.cn/saa) to realize real-time touch, which solves the scenario that minitouch cannot be used in real time on Android 10 or higher. But in some special cases, when the sonic-android-apk is not available, you can click [Repair Touch] on the toolbar on the right side of the projection area to switch to adb native touch.

### Remote ADB

The remote ADB function has relied on sonic-android-supply since **v2.0.0-beta** and no longer uses adbkit. ADB can be used to remotely connect the corresponding device to the local, which can be used to perform test tasks or develop and debug scenarios.

For example, if the user has ADB locally, he can copy the commands of the remote ADB interface to execute locally:
```bash
adb connect xxx.xxx.xxx.xxx:xxxx
adb devices
```
You will see output similar to
```bash
List of devices attached
xxx.xxx.xxx.xxx:xxxx device
```
Finish! The device has been connected to the user's local ADB from the Agent, and you can use ADB related commands to operate the device later. For example to view device resolution:
```bash
adb shell wm size
```

### File management

Files can be uploaded and pulled.

1. After uploading the file, the path needs to add the file name, such as uploading abc.jpg to /data/local/tmp, then fill in /data/local/tmp/123.jpg.
2. When pulling files, only single-file operations are supported, such as pulling /data/local/tmp/123.jpg, fill in /data/local/tmp/123.jpg.

### Scan QR code
::: tip
Some OPPO, vivo and sub-brand devices need to be restarted to take effect.
:::
When you need to scan a QR code, you can upload the QR code picture to the corresponding location, and then open the album when scanning the code to find the corresponding QR code.

### Reconnect UIAutomator Server

When the default initialization fails, you need to adjust the corresponding settings, you can go to [here](https://sonic-cloud.cn/en/deploy/android-deploy.html) to check the configuration. Then click [Initialize UIAutomator2Server] until the Status is Connected.

### Remote Audio

The remote audio function currently relies on [sonic-android-apk](https://sonic-cloud.cn/saa/re-saa.html) to realize real-time audio transmission. After opening, the real-time audio of the remote device can be played directly on the web page.

If there is no audio after opening, you can check whether the device has enabled the notification bar permission of sonic-android-apk, etc., to ensure that sonic-android-apk has all permissions.

### Physical Lookup

When this function is used in a device cluster, it is cumbersome to find a physical machine due to too many devices. After clicking, the device will turn on the blue background and highlight the device screen, which is easy to quickly find the corresponding device during physical inspection.

## iOS Devices

### Toggle clarity
iOS screencasting uses mjpeg stream by default, and the default is high quality. If you want to reduce bandwidth pressure, you can switch to low quality in the right toolbar, which can reduce most of the bandwidth, but the quality and frame rate will also drop.

### Keyboard input (same as Android)

When controlling the device remotely.
1. Click the mouse into the projection area. (If the mouse clicks outside the projection area again, it will stop listening to keyboard input)
2. Use your computer keyboard to directly enter text on the web page.
3. You can directly send the corresponding text to the phone.

### Siri commands

Siri commands can be sent to iOS devices. like:

1. Open your browser
2. What day is it today?
3. Open Settings

There are many interesting Siri commands welcome to explore

### Simulation Positioning
::: tip
Currently found that some applications do not work.
:::
It can simulate the geographic location of the device location, and the input of latitude and longitude can be accurate to five decimal places.

### Clipboard operation
Supports directly obtaining the clipboard content and settings of the device.

After setting, you need to long press and click paste on the device.

### Remote WDA
The WDA remote debugging connection is used externally.

For example, the user has Appium locally, and the remote WDA link is http://192.168.1.1:12345, then you can:
```java
DesiredCapabilitiesdesiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, Platform.IOS);
desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.IOS_XCUI_TEST);
desiredCapabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 3600);
desiredCapabilities.setCapability(IOSMobileCapabilityType.COMMAND_TIMEOUTS, 3600);
desiredCapabilities.setCapability(MobileCapabilityType.NO_RESET, true);
// Fill in the device name, you can also get it through sib
desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "My Phone");
desiredCapabilities.setCapability(MobileCapabilityType.UDID, udId);
desiredCapabilities.setCapability("wdaConnectionTimeout", 60000);
desiredCapabilities.setCapability(IOSMobileCapabilityType.WEB_DRIVER_AGENT_URL, "http://192.168.1.1:12345");
desiredCapabilities.setCapability("useXctestrunFile", false);
desiredCapabilities.setCapability(IOSMobileCapabilityType.SHOW_IOS_LOG, false);
desiredCapabilities.setCapability(IOSMobileCapabilityType.SHOW_XCODE_LOG, false);
desiredCapabilities.setCapability("skipLogCapture", true);
desiredCapabilities.setCapability(IOSMobileCapabilityType.USE_PREBUILT_WDA, false);

new IOSDriver("http://localhost:4723/wd/hub", desiredCapabilities);
```
Finish! The device has been connected from the Agent to your local Appium

### remote sib

You can use sib to control the current device on another computer.

```bash
sib remote connect --host <you share device pc ip> -p <share port>
```
After the connection is successful, you can remotely initiate the sib command operation, such as:
```bash
sib perfmon
```

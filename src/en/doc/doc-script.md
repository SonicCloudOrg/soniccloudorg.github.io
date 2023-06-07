---
contributors:
- 'ZhouYixun'
- 'mmagi'
---

# custom script

Use custom scripts to perform UI automation. (This function needs to be upgraded to Sonic v2.0.0 version)

## 1. Groovy (Java) script (recommended 🔥)

### Ability Introduction

::: tip Sonic official recommendation reason
1. You can directly use all built-in functions and variables of Agent.
2. The Groovy engine is compatible with the Java language and can be well combined with Java. It can directly run Java code or mix Groovy and Java.
3. Groovy has a simple syntax, is easy to expand, and has a low learning threshold.
4. Run directly on the JVM, no need to configure additional environment.
5. Wait...
   :::

#### Default built-in content
Before executing custom scripts, the basic StepHandler is passed to the Groovy engine.

including but not limited to:
1. The log object, which can manipulate the output text of the test report
2. androidDriver, can operate UIAutomator2-Server
3. iosDriver, can operate Wda
4. Global parameters, you can access the global parameters
5. Sonic's custom steps can be reused directly
6. Others, including PocoDriver, device information, etc.
::: tip More built-in methods can be viewed
   [AndroidStepHandler](https://github.com/SonicCloudOrg/sonic-agent/blob/main/src/main/java/org/cloud/sonic/agent/tests/handlers/AndroidStepHandler.java)

[IOSSstepHandler](https://github.com/SonicCloudOrg/sonic-agent/blob/main/src/main/java/org/cloud/sonic/agent/tests/handlers/IOSSstepHandler.java)
:::
#### Extendability
Capabilities other than StepHandler can be implemented by directly importing the corresponding package or directly referencing it.

including but not limited to:
1. RestTemaplate, which can perform Rest Api operations.
2. Java's built-in Process can run local instructions.
3. SibTool, a tool class for using sib.
4. AndroidDeviceBridgeTool, which is used to operate some tool classes of adb.
5. fastJson and other packages and so on.

### Output log to test report

Manipulate **androidStepHandler.log** directly using
```groovy
androidStepHandler.log.sendStepLog(1, "I am a general log", "Step detailed log")
androidStepHandler.log.sendStepLog(2, "I passed the log", "Step detailed log")
androidStepHandler.log.sendStepLog(3, "I am an alarm log", "Step detailed log")
androidStepHandler.log.sendStepLog(4, "I am an exception log", "Step detailed log")
```

The input parameters are: **log level**, **step description**, **step detailed log**

There are four log levels, from 1-4: INFO, PASS, WARN, ERROR

It is also possible to extract LogUtil and StepType usage to make scripts more readable
```groovy
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;

def test(){
   LogUtil log = androidStepHandler.log
   log.sendStepLog(StepType.INFO,"Hello","world")
   log.sendStepLog(StepType.PASS,"Hello","world")
   log.sendStepLog(StepType.WARN,"Hello","world")
   log.sendStepLog(StepType.ERROR,"Hello","world")
}

test()
```

### Reference global parameters

Global parameters are stored in androidStepHandler.globalParams by default, which is a com.alibaba.fastjson.JSONObject object. can be used directly
```groovy
String test = androidStepHandler.globalParams.getString("Hello")
androidStepHandler.log.sendStepLog(1, "Get the global parameter Hello", "Value: " + test)
```

::: tip
For more global parameters and temporary parameters, please refer to [this post](https://sonic-cloud.wiki/d/2369)
:::

### Get device serial number

Android:
```groovy
String udId = androidStepHandler.iDevice.getSerialNumber()
androidStepHandler.log.sendStepLog(1, "Get udId", "Value: " + udId)
```

iOS:
```groovy
String udId = iosStepHandler.udId
iosStepHandler.log.sendStepLog(1, "Get udId", "Value: " + udId)
```

### Assertions

There are assertEquals, assertNotEquals, assertNull, assertNotNull and other methods that can be used directly

```groovy
import static org.testng.Assert.*;

assertEquals(1+1,2)
```

Assertion failures throw exceptions and custom script steps are marked as failed

### Exit Driver

If there is an instrument-based framework (such as fastbot, uiautomator2-python, poco-service, etc.) in your third-party tools, it will conflict with Sonic's existing processes and cause a blocking state. At this time, we can stop Sonic's Driver first.

#### Android:

There are two ways to close AndroidDriver:
1. Close with built-in function (recommended)
```groovy
import org.cloud.sonic.agent.bridge.android.AndroidDeviceBridgeTool;
//Stop Driver
androidStepHandler.getAndroidDriver().closeDriver()

//Third party operation
//xxxxxx

//Restart Driver
int port = AndroidDeviceBridgeTool.startUiaServer(androidStepHandler.iDevice);
androidStepHandler.startAndroidDriver(androidStepHandler.iDevice, port)
```

2. Use adb to forcibly stop the instrument service (not recommended)
```groovy
import org.cloud.sonic.agent.bridge.android.AndroidDeviceBridgeTool;
//Stop UIAutomator2-server
AndroidDeviceBridgeTool.executeCommand(androidStepHandler.iDevice,"am force-stop io.appium.uiautomator2.server")
AndroidDeviceBridgeTool.executeCommand(androidStepHandler.iDevice,"am force-stop io.appium.uiautomator2.server.test")

//Third party operation
//xxxxxx

//Restart Driver
int port = AndroidDeviceBridgeTool.startUiaServer(androidStepHandler.iDevice);
androidStepHandler.startAndroidDriver(androidStepHandler.iDevice, port)
```

#### iOS:
```groovy
import org.cloud.sonic.agent.bridge.ios.SibTool;
//Stop Driver
iosStepHandler. closeIOSDriver()

//Third party operation
//xxxxxx

//Restart Driver
iosStepHandler.startIOSDriver(udId, SibTool.startWda(udId)[0]);
```


### Sample script display

#### Call third-party Rest API

The following is an example of asserting the response result and outputting it to the test report after using the RestTemplate to call the third-party Rest API.

```groovy
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.cloud.sonic.agent.tools.SpringTool;
import org.springframework.web.client.RestTemplate;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;

import static org.testng.Assert.*;

def testRestApi(){
       LogUtil log = androidStepHandler.log
       RestTemplate restTemplate = SpringTool.getBean(RestTemplate.class)
       HttpHeaders headers = new HttpHeaders()
       headers.add("SonicToken", "xxxxxxx")
       JSONObject result = restTemplate.exchange("http://localhost:8094/api/controller/projects/list", HttpMethod.GET,new HttpEntity<>(headers),JSONObject.class).getBody()
       assertEquals(result. getInteger("code"),2000)
       log.sendStepLog(StepType.INFO,"rest api assert","result: "+result.toJSONString())
}

testRestApi()
```

#### adb shell operation

The following is an example of the output of the adb shell command, including one-time output and continuous output.

```groovy
import org.cloud.sonic.agent.bridge.android.AndroidDeviceBridgeTool;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;
import com.android.ddmlib.IShellOutputReceiver;
import java.util.concurrent.TimeUnit;

def test(){
         LogUtil log = androidStepHandler.log
         String out = AndroidDeviceBridgeTool.executeCommand(androidStepHandler.iDevice,"wm size")
         log.sendStepLog(StepType.INFO,"Get screen size",out)
}

def testLong(){
         LogUtil log = androidStepHandler.log
         androidStepHandler.iDevice.executeShellCommand("dumpsys window displays",
                         new IShellOutputReceiver() {
                             @Override
                             public void addOutput(byte[] bytes, int i, int i1) {
                                 String res = new String(bytes, i, i1);
                                 log.sendStepLog(StepType.INFO,"Dump windows msg",res)
                             }

                             @Override
                             public void flush() {
                             }

                             @Override
                             public boolean isCancelled() {
                                 return false;
                             }
                         }, 0, TimeUnit. MILLISECONDS);
}

test()
testLong()
```

#### Execute fastbot
The following shows how to execute fastbot and continuously output the log to the test report. Note: Make sure that there are fastbot-related jars on the device before execution. For details, please refer to the fastbot documentation.

Because the bottom layer of fastbot has a conflict with the instrumentation of uia2 (although Sonic will deal with it later, it is best to avoid conflicts), so execute closeDriver() first, and then startDriver() again after running
```groovy
import org.cloud.sonic.agent.bridge.android.AndroidDeviceBridgeTool;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;
import com.android.ddmlib.IShellOutputReceiver;
import java.util.concurrent.TimeUnit;

def testFastbot(){
         LogUtil log = androidStepHandler.log
         androidStepHandler.getAndroidDriver().closeDriver()
         androidStepHandler.iDevice.executeShellCommand("CLASSPATH=/sdcard/monkeyq.jar:/sdcard/framework.jar:/sdcard/fastbot-thirdpart.jar exec app_process /system/bin com.android.commands.monkey.Monkey -p package_name - -agent reuseq --running-minutes duration(min) --throttle delay(ms) -v -v",
                         new IShellOutputReceiver() {
                             @Override
                             public void addOutput(byte[] bytes, int i, int i1) {
                                 String res = new String(bytes, i, i1);
                                 log.sendStepLog(StepType.INFO,"FastBot log",res)
                             }

                             @Override
                             public void flush() {
                             }

                             @Override
                             public boolean isCancelled() {
                                 return false;
                             }
                         }, 0, TimeUnit. MILLISECONDS);
         int port = AndroidDeviceBridgeTool.startUiaServer(androidStepHandler.iDevice);
         androidStepHandler.startAndroidDriver(androidStepHandler.iDevice, port)
}

testFastbot()
```

#### Run the local command command

The following is an example of running the Agent's local PC command and continuously outputting the command result to the test report after running the command.

```groovy
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;

def testCmd(){
             String system = System.getProperty("os.name").toLowerCase();
             if (system. contains("win")) {
                 Runtime.getRuntime().exec("cmd /c calc");
             } else {
                 Runtime.getRuntime().exec("sh -c echo Hello");
             }
}

def testCmdForLongTime(){
             LogUtil log = androidStepHandler.log
             Process ps = null;
             String system = System.getProperty("os.name").toLowerCase();
             if (system. contains("win")) {
                 ps = Runtime.getRuntime().exec("cmd /c calc");
             } else {
                 ps = Runtime.getRuntime().exec("sh -c echo Hello");
             }
             InputStreamReader inputStreamReader = new InputStreamReader(ps. getInputStream());
             BufferedReader stdInput = new BufferedReader(inputStreamReader);
             String s;
             while (ps. isAlive()) {
                 try {
                     if ((s = stdInput. readLine()) != null) {
                         log.sendStepLog(StepType.INFO,"ps msg",s)
                     }
                 } catch (IOException e) {
                     e.printStackTrace();
                 }
             }
             stdInput. close();
             inputStreamReader. close();
}

testCmd()
testCmdForLongTime()
```

::: tip More reference examples
If you want to refer to more script examples, you can go to <a href="https://sonic-cloud.wiki/t/script" target="_blank">here</a> to view official or user-shared examples!
:::

## 2. Python script

### Ability Introduction

::: info vs Groovy script
Python cannot be used as the built-in engine of the Agent, so the built-in methods and packages of the Agent cannot be used. Python scripts can only use some of the parameters passed by the Agent, and dependencies need to be installed locally, which greatly reduces flexibility compared with Groovy scripts.
:::
### Pre-environment

Python environment, pip environment.

::: tip
Note! If Agent running on Windows system, make sure to set the Python output charset to UTF-8 to avoid garbled output from scripts. Execute 
```bash
set PYTHONIOENCODING=UTF-8
```
to set an environment variable for the Python before starting the Agent.
:::

### Available parameters

Regardless of Android or iOS, Sonic will pass three parameters to the Python script, arg depends on times are:
1. sessionId. Android is the sessionId of uia2, and iOS is the sessionId of wda.
2. Device udId.
3. Global parameter Json string.
4. Remote URL address (available after v2.5.3 update)

### Exit Driver

If there is an instrument-based framework (such as fastbot, uiautomator2-python, poco-service, etc.) in your third-party tools, it will conflict with Sonic's existing processes and cause a blocking state. At this time, we can stop Sonic's Driver first.

####Android:

Use adb to force stop the instrument service
```python
import os
udId = sys.argv[1:][1]
os.system("adb -s {udId} shell am force-stop io.appium.uiautomator2.server".format(udId))
os.system("adb -s {udId} am force-stop io.appium.uiautomator2.server.test".format(udId))
```

### Sample script display

#### Test directly with Sonic's already started appium uiautomator2 server

The following is an example script for testing directly with Sonic's already started appium uiautomator2 server.
```python
import sys
import os
from common.models import AndroidSelector
from uia2.driver import AndroidDriver


def test_demo(adb_serial_num:str, uia_url:str):
    package_name = "com.android.settings"

    # Launch App
    os.system(
        f"adb -s {adb_serial_num} shell monkey -p {package_name} -c android.intent.category.LAUNCHER 1")

    # Connect to uia2 server
    driver = AndroidDriver(uia_url)
    p = driver.get_page_source()
    print(p)
    e = driver.find_element(AndroidSelector.XPATH, "//*[@text='设置']")
    if e is not None:
        print(e.get_text())
        e.send_keys("Hello")


if __name__ == '__main__':
    # uia_url available after v2.5.3 update
    session_id, adb_serial_num, global_pramas, uia_url = sys.argv[1:]
    print(session_id, adb_serial_num, global_pramas, uia_url)
    test_demo(adb_serial_num, uia_url)
```
::: tip More reference examples
If you want to refer to more script examples, you can go to <a href="https://sonic-cloud.wiki/t/script" target="_blank">here</a> to view official or user-shared examples!
:::

## Import template

The script templates managed on the [Script Template] page can be imported and used during editing. There are two import modes:
1. Append, append the template to the current editing script
2. Replace, replace the current editing script with the template

## Usage Specifications and Suggestions

In order to reduce maintenance costs during use, the Sonic organization recommends script management as follows:

1. Save common methods/functions to 【Script Module Management】.
2. When using the script, use the import module to append the method/function to the current script and reference it.
3. It is recommended to extract and maintain repeatedly referenced parameters and methods.

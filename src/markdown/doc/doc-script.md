# 自定义脚本

使用自定义脚本执行UI自动化。（该功能需升级至Sonic v2.0.0版本）

## 一、Groovy(Java)脚本 （推荐⭐）

### 能力介绍

执行自定义脚本前，会将基础stepHandler传入Groovy引擎。

包括：
> 1. log对象，可以操作测试报告输出文本
> 2. androidDriver，可以操作UIAutomator2-Server
> 3. iosDriver，可以操作Wda
> 4. 全局参数，可以对全局参数进行存取
> 5. Sonic的自定义步骤，可以直接复用
> 6. 其他，包括PocoDriver、设备信息等等

stepHandler以外能力，可以直接import对应包进行实现。

包括但不限于：
> 1. RestTemaplate，可以进行Rest Api操作。
> 2. Process，可以运行本地指令等等。
> 3. fastJson和其他包。

### 输出日志到测试报告

> 直接使用
> ```
> androidStepHandler.log.sendStepLog(1, "我是普通日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(2, "我是通过日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(3, "我是告警日志", "步骤详细日志")
> androidStepHandler.log.sendStepLog(4, "我是异常日志", "步骤详细日志")
> ```
> 
> 入参分别为：**日志级别**、**步骤简述**、**步骤详细日志**
> 
> 日志级别有四种，从1-4分别是：INFO、PASS、WARN、ERROR
> 
> 也可以提取LogUtil和StepType使用，使脚本更有可读性
> ```
> import org.cloud.sonic.agent.tests.LogUtil;
> import org.cloud.sonic.agent.common.interfaces.StepType;
> 
> def test(){
>   LogUtil log = androidStepHandler.log
>   log.sendStepLog(StepType.INFO,"Hello","world")
>   log.sendStepLog(StepType.PASS,"Hello","world")
>   log.sendStepLog(StepType.WARN,"Hello","world")
>   log.sendStepLog(StepType.ERROR,"Hello","world")
> }
> 
> test()
> ```

### 引用全局参数

> 全局参数默认存放在androidStepHandler.globalParams，是com.alibaba.fastjson.JSONObject对象。使用时可以直接
> ```
> String test = androidStepHandler.globalParams.getString("Hello")
> androidStepHandler.log.sendStepLog(1, "获取全局参数Hello", "值：" + test)
> ```

### 获取设备信息

> Android: 
> ```
> String udId = androidStepHandler.iDevice.getSerialNumber()
> androidStepHandler.log.sendStepLog(1, "获取udId", "值：" + udId)
> ```
>
> iOS: 
> ```
> String udId = iosStepHandler.udId
> iosStepHandler.log.sendStepLog(1, "获取udId", "值：" + udId)
> ```


### 示例脚本展示

#### 调用第三方Rest API

以下是使用RestTemplate调用第三方Rest API后，对响应结果断言以及输出到测试报告的示例。

```
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.cloud.sonic.agent.common.models.HandleDes;
import org.cloud.sonic.agent.tools.SpringTool;
import org.springframework.web.client.RestTemplate;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;

import static org.testng.Assert.*;

def testRestApi(){
      LogUtil log =  androidStepHandler.log
      RestTemplate restTemplate = SpringTool.getBean(RestTemplate.class)
      HttpHeaders headers = new HttpHeaders()
      headers.add("SonicToken", "xxxxxxx")
      JSONObject result = restTemplate.exchange("http://localhost:8094/api/controller/projects/list", HttpMethod.GET,new HttpEntity<>(headers),JSONObject.class).getBody()
      assertEquals(result.getInteger("code"),2000)
      log.sendStepLog(StepType.INFO,"rest api assert","result: "+result.toJSONString())
}

testRestApi()
```

#### 循环点击POCO控件

以下是获取全局参数以及通过循环对poco控件进行拖拽的示例。

也可以直接通过androidStepHandler.getAndroidDriver()、androidStepHandler.getIOSDriver()、androidStepHandler.getPocoDriver()进行操作。可以参考周边生态 sonic-driver-core 。

```
import org.cloud.sonic.agent.common.models.HandleDes;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;

def testPoco(){
      LogUtil log =  androidStepHandler.log
      HandleDes handleDes = new HandleDes()
      log.sendStepLog(StepType.INFO,"Global",androidStepHandler.globalParams.getString("xxxx"))
      androidStepHandler.startPocoDriver(handleDes,"UNITY_3D",5001)
      for(int i=0;i<5;i++){
        androidStepHandler
          .pocoSwipe(handleDes,"Star"+[i],"poco(\"playDragAndDrop\").child(\"star\")["+i+"]",
                    "Shell","poco(\"shell\")")
        log.sendStepLog(StepType.INFO,"Poco Swipe","Move Done.")
      }
      androidStepHandler.closePocoDriver(handleDes)
}

testPoco()
```

#### adb shell操作

以下是对adb shell命令输出的示例，包括一次性输出以及持续性输出。

```
import org.cloud.sonic.agent.bridge.android.AndroidDeviceBridgeTool;
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;
import com.android.ddmlib.IShellOutputReceiver;
import java.util.concurrent.TimeUnit;

def test(){
        LogUtil log =  androidStepHandler.log
        String out = AndroidDeviceBridgeTool.executeCommand(androidStepHandler.iDevice,"wm size")
        log.sendStepLog(StepType.INFO,"Get screen size",out)
}

def testLong(){
        LogUtil log =  androidStepHandler.log
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
                        }, 0, TimeUnit.MILLISECONDS);
}

test()
testLong()
```

#### 运行本地command指令

以下是运行Agent本地PC指令和运行指令后持续输出指令结果到测试报告的示例。

```
import org.cloud.sonic.agent.tests.LogUtil;
import org.cloud.sonic.agent.common.interfaces.StepType;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;

def testCmd(){
            String system = System.getProperty("os.name").toLowerCase();
            if (system.contains("win")) {
                Runtime.getRuntime().exec("cmd /c calc");
            } else {
                Runtime.getRuntime().exec("sh -c echo Hello");
            }
}

def testCmdForLongTime(){
            LogUtil log =  androidStepHandler.log
            Process ps = null;
            String system = System.getProperty("os.name").toLowerCase();
            if (system.contains("win")) {
                ps = Runtime.getRuntime().exec("cmd /c calc");
            } else {
                ps = Runtime.getRuntime().exec("sh -c echo Hello");
            }
            InputStreamReader inputStreamReader = new InputStreamReader(ps.getInputStream());
            BufferedReader stdInput = new BufferedReader(inputStreamReader);
            String s;
            while (ps.isAlive()) {
                try{
                    if ((s = stdInput.readLine()) != null) {
                        log.sendStepLog(StepType.INFO,"ps msg",s)
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            stdInput.close();
            inputStreamReader.close();
}

testCmd()
testCmdForLongTime()
```

## 二、Python脚本

建设中...

## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-script.md) 发起贡献改善此页

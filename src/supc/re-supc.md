---
contributors:
- 'ZhouYixun'
---

# sonic-uiautomator2-python-client

本文为sonic-uiautomator2-python-client的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-uiautomator2-python-client)

<div style="display: flex">
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-uiautomator2-python-client?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-uiautomator2-python-client?style=social">
<img style="margin-left:10px" src="https://img.shields.io/pypi/v/sonic-uia2-client">
<img style="margin-left:10px" src="https://img.shields.io/pypi/dm/sonic-uia2-client">
</div>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-uiautomator2-python-client/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-uiautomator2-python-client" />
</a>

## 介绍
目前Sonic的自动化依赖了 [appium-uiautomator2-server](https://github.com/appium/appium-uiautomator2-server)，但是我们绕开了Appium Server来直接使用。

考虑到有IDE用户想直接调用uia远程url的使用场景，我们进行了预研，发现Github上只看到一个Python绕开Appium Server单独跟appium-uiautomator2-server交互的项目 [appium-uiautomator2-client](https://github.com/xsoloking/appium-uiautomator2-client)，但是未能兼容最新appium-uiautomator2-server v5.x API的baseUrl，并且没有发布在pypi。尝试过跟作者接触但是没有回复，于是决定组织自己写一个维护。

Java版本的可以看我们组织自己维护的 [sonic-driver-core](https://github.com/SonicCloudOrg/sonic-driver-core)。

## 如何使用
1. 安装uia2 server

> 你需要先安装 `sonic-appium-uiautomator2-server.apk` 和 `sonic-appium-uiautomator2-server-test.apk` ，可以从这里下载 [这里](https://github.com/SonicCloudOrg/sonic-agent/tree/main/plugins).
>
> 当然你也可以自己构建 [前往这里](https://github.com/SonicCloudOrg/sonic-appium-uiautomator2-server)

2. 启动 uiautomator2 server
```bash
adb shell am instrument -w io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner
```

3. 转发端口

```bash
adb forward tcp:6790 tcp:6790
```

4. 安装依赖
```bash
pip install -U sonic-uia2-client
```

5. 编写你的脚本
```python
from common.models import AndroidSelector
from uia2.driver import AndroidDriver
import os


class TestDriver:

    def __init__(self):
        self.uia_url = "http://localhost:6790"
        self.adb_serial_num = "DAISKnlasido"
        self.package_name = "com.android.settings"

    def test_demo(self):
        # launch App
        os.system(
            "adb -s {} shell monkey -p {} -c android.intent.category.LAUNCHER 1".format(self.adb_serial_num,
                                                                                        self.package_name))
        
        # connect remote uia2 server
        driver = AndroidDriver(self.uia_url)
        p = driver.get_page_source()
        print(p)
        e = driver.find_element(AndroidSelector.XPATH, "//*[@text='设置']")
        if e is not None:
            print(e.get_text())
            e.send_keys("Hello")
```

### 致谢

- [appium/appium-uiautomator2-server](https://github.com/appium/appium-uiautomator2-server)
- [xsoloking/appium-uiautomator2-client](https://github.com/xsoloking/appium-uiautomator2-client)

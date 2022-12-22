# 安卓设备接入
本文将介绍安卓设备接入Sonic相关内容。

## 通用接入步骤
所有设备都需要按照这个步骤接入。

各品牌不同内容可往下翻阅。

> 1. 将usb线一端插入Agent，另一端插入手机
> 2. 进入手机【设置】页面
> 3. 进入【关于手机】页面
> 4. 点击多次【版本号】（不同品牌的差异请往下查找），直到开启开发者选项
> 5. 进入开发者选项
> 6. 打开usb调试
> 7. 保持设备竖放或平放

## 华为

> 1. 进入【设置】->【关于手机】->【版本号】多次点击开启开发者选项
> 2. 进入开发者选项，关闭【监控ADB安装应用】
> 3. 进入【系统和更新】->【语言和输入法】关闭安全键盘

## 小米
> 1. 进入【设置】->【我的设备】->【全部参数】->【MIUI版本】多次点击开启开发者选项
> 2. 打开开发者页面，【USB安装】和【USB调试（安全模式）】打开，部分选项需要插入SIM卡，可以配置完成后拔出。
> 3. 开发者最底下【MIUI优化】关闭
> 4. 前往手机管家，打开【应用管理】
> 5. 点击【权限】
> 6. 点击右上角设置icon
> 7. 关闭权限监控与USB安装监控
> 8. 【语言与输入法】关闭安全键盘

## OPPO
> 1. 进入【设置】->【系统管理】->【关于手机】->【版本信息】->【软件版本】多次点击开启开发者选项
> 2. 进入开发者选项，开启最下方【禁止权限监控】，关闭【USB验证应用】
> 3. 打开系统电量设置
> 4. 将Sonic插件、uiautomator2、uiautomator2-test的电量优化关闭
> 5. 【其他】->【键盘与输入法】关闭安全键盘

## vivo
> 1. 进入【设置】->【系统管理】->【关于手机】->【版本信息】->【软件版本】多次点击开启开发者选项
> 2. 进入开发者选项，开启【安全权限】与【USB模拟点击】
> 3. 【其他】->【键盘与输入法】关闭安全键盘
> 4. 将Sonic插件、uiautomator2、uiautomator2-test的电量优化关闭

## OnePlus
> 1. 进入【设置】->【关于手机】->【版本号】多次点击开启开发者选项
> 2. 进入【设置】->【系统】->【开发者选项】，开启【USB调试】
> 3. 进入【设置】->【系统】->【开发者选项】->【默认USB配置】选择文件传输
> 4. 进入【设置】->【电池】->【电池优化】，将Sonic插件、uiautomator2、uiautomator2-test的电量优化关闭（如果找不到，需要先进行第五步）
> 5. 部分OnePlus需要开启【禁止权限监控】

## 魅族
> 1. 打开【手机管家】->【设置】->【Flyme支付保护】，将其关闭。


## 常见问题
> 1. 远控后出现【Driver初始化失败！】之类的提示
> >查看日志会有多种情况：
> > 1. 如果出现apksigner的字样，请确认安卓SDK的built-tool正确以及platform-tool下有apksigner.jar
> > 2. 如果出现shell指令出错的字样，一般是设备权限没打开。
> 2. OPPO手机出现requires:android.permission.WRITE_SECURE_SETTINGS类似的提示
> >一般是设备没有在开发者选项最下方开启【禁止权限监控】
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多疑问可前往👉[社区](https://sonic-cloud.wiki)👈交流
 
## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
<a href="https://gitee.com/wuxiangin" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABVtJREFUeF7tmnuIVFUcx79zd3e2dfbBbvuwfVRY5CISCyqVlSIoEaySCIF/2IOgKIoCIzCNjCLpIRRElhBR/iEkUuBGhSviA0u2x5ayWJmUrrszO+uusw93Hjszce4608/j3Ln3Nzt3poXf/XP4nnN+9zPf8zu/85vxLP3ozyTkcUTAI7AccTJFAss5K4HFYCWwBBaHAEMrOUtgMQgwpOIsgcUgwJCKswQWgwBDKs4SWAwCDKk4S2AxCDCk4iyBxSDAkIqzBBaDAEMqzhJYDAIMqThLYDEIMKTiLIHFIMCQ5tVZ99/iw7aVjairKDFDGBiPYctBP/qCEduQFjWUY8ea+WiuKktrhyansf1wAD0Xp9jjOWvbTn5VkFdYas49G9rQXl9uTj8ZTeDdE8Po+n3MNp6HF9fg2btuREWpkdZGppPY/dMIPu8dZY9XgJ/pumg7jiPIO6xXVzWh844qM4Z4Iom9p0N4//th25jeXD0fa26rvE538K8JvNzttx3/0n0N2LCoBoaHt67txESQd1iPdNTiySV1KC/1mMv80H8Fz309kDWmeWUGPl3figW1XlN3JZaA+kw950ajePzLfvOzbM8nD7XizqYbTMlYJI4dR4PoPjfBYWGrzTusZS0V2L6qCY2+UnPxC6EYXvhmAOdDMctgVi+oxJYVDaguL0E0nsSv/jCWNFeYLhmLJPDO8SC+PTtuOV7Pd07WtCWTQZB3WGoN7rf8/D312Li4BiWGByNTcew9dRmPddTC5zWQSAL7+0J4+3jQ8v3WtVdj8/L6tBuP/j2Jzd8N5sIj6xhXYNH8EUsksaf3Mnb1XLIM5MPOFihHqufMcARbu/1478FmtNXMnIy/BcJ44qt+y/H6ep/1juLjnpG5AUv/prMlabqF1L/qDpwZw+tHhrDzgZuw4laf+cJ2JcSutS1Y2jwDWznzjSNDOPbP5NyApeeQsyNRbNx3PmPwtGSYmk7gg5OX8MXpEJ5aVodHO2pRZniQrYTQ11LO3LT/Qt5BqQld2YZqYrq1sn3br6xsxNr2aqizkxaSeoFr5U7qYupMN2i5BosmbStnqPJg97oWLLxaxOqFJC1wrUoImq+oM+cULFoOqMC7/hjHa4cD17wD1WQqYKnrrGon6mA3rjg0YNecpReamU406r5MMGg+ywRTz1duXHEKAkstop9o2w4F8Mvgf5di6opM20yHoQPvXFiNF5fXm/UY52qV6xZ1zVkqIHqi6flEB2GVwClQvYSg+cqtK07BnEVPNL0Sp1ssW2mQrYSwc2auDrIa56qz1KL0RPtxYApPH5hpm9DkPTg+ja2H/DgVCF8XJwVOS4Oba8quqfKddidmA9B1WFZ1FIVol5ipNlV00nzF6Xv9r2HRls1ENIG3jgUxGUukO6pOEjMFrvKWOijUVSh1+ba7Ds0GUMFyllqItmxSYMLTifRVxklipvlN9bV2nhg2G4V3t84z38Xuoj1nYKlAactGtU8i8WS6K+qkuUdPTgV8X18I97b5zK6EkxbOnIJFj3h1qVbP7XUzXVGniZmefD8PTpnjVbOQ0+efLTTXE7wKkCbjUDgOw/Cgymtk7SboL6Y3CCu9BrwlHked2NlCSo0vCCz9mE8tzknM+l0zNYdbXdFMgAsCSy1Mt1EqEE5i1u+aag7VhXWrK1pUWHQbqUByScz6z2VudkWLCkvfRrkkZv1nNje7okWFla8kW8x5CpazivmS+VpbYDFICiyBxSDAkIqzBBaDAEMqzhJYDAIMqThLYDEIMKTiLIHFIMCQirMEFoMAQyrOElgMAgypOEtgMQgwpOIsgcUgwJCKsxiw/gVw7asb4BK8xQAAAABJRU5ErkJggg==" width="50"/>
<span>wuxiangin</span>
</a>
<a href="https://gitee.com/lanlanz" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAARZJREFUaEPtlMENAWEQhWdPIg560IBCnBSgCneJNtw0oIoNPUhwk3AQRCI21irAYWdlMGa/Pb+dzLzvvT/ZjjqF1OhLODg4bQgHBywQhnAwB4h0MKAv50AYwsEcINLBgPJoEWkiHcyBj0a62e1LuzeWpNGS/LyT42wo2WbxUws52NJ+CBNpyzzpZtFhnU86FR2mw7qkWKrosKWbdJgOW+ZJN4sO63zSqegwHdYlxVJFhy3drHWHH9eTZKtUijwr9fS+X8olnZTq3hF8LdJVlrut53KYDqr8otZysNqqPxV+lLBHTzjYIxXLnSBs6abHWRD2SMVyJwhbuulxFoQ9UrHcCcKWbnqcBWGPVCx3grClmx5n1Y7wE1DsXXjHsZ4HAAAAAElFTkSuQmCC" width="50"/>
<span>lanlanz</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/deploy/android-deploy.md) 发起贡献改善此页

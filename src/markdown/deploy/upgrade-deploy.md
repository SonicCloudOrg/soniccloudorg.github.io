# 版本迁移指南

本文将介绍如何升级到最新版本。

## 关于版本规则变动
v2.0.0-release起，Sonic版本规则更改如下：

1. 第一位是大版本号，基本为一年一更
2. 第二位是有新功能合入就会加1（特性版本，一般月更）
3. 第三位是修复Bug就会加1（修复版本，一般半周到一周更一次）

以v2.0.1为例，就是修复2.0.0的Bug。

如果有大量新功能发布，就会更新2.1.0。

如果2.1.0上线后有Bug，那么下版本就是2.1.1，如果仍有Bug，那么会继续发布2.1.2。

**如果想追求稳定的版本，那么应该是上一个特性版本的最后一个修复版本为最稳定。**

例如2.2.0的上一个版本为2.1.15，那么2.1.15版本就是2.1.x的最稳定的版本

## 从 v1.4.x 或 v1.5.x 或 v2.0.x 升级到 v2.1.2
> 0. 升级前先备份Mysql数据库。
> 1. 直接前往 <a href="https://sonic-cloud.gitee.io/#/Deploy?tag=back-end" target="_blank">这里</a> 下载最新版本zip，down集群后重新up即可。（部署文档含中国大陆加速镜像部署方式）
> 2. jar方式部署的Agent前往 <a href="https://sonic-cloud.gitee.io/#/Deploy?tag=agent" target="_blank">这里</a> 下载zip后解压，更新需替换旧版本plugins文件夹与jar文件。
> 3. （附）Docker版Agent与server同理，前往 <a href="https://sonic-cloud.gitee.io/#/Deploy?tag=agent" target="_blank">这里</a> 重新下载镜像部署即可。（部署文档含中国大陆加速镜像部署方式）

## 从v2.0.0-release升级到v2.0.x

> 0. 升级前先备份Mysql数据库。
> 1. 在server目录下执行docker-compose down
> 2. 直接下载最新版docker-compose.yml
> 3. 执行docker-compose up -d
> 4. jar方式部署的Agent更新需替换旧版本plugins文件夹与jar文件
> 5. （附）Docker版Agent与server同理，下载最新版docker-compose.yml后，执行docker-compose up -d 重新下载镜像部署即可。

## 从v1.5.0-release升级到v2.0.0-release
> 0. server升级前，先备份数据库。
> 1. 执行docker-compose down
> 2. 替换旧docker-compose.yml为最新版docker-compose.yml。
> 3. .env文件最下方新增LDAP_OBJECT_CLASS=person
> 4. 执行docker-compose up -d
> 5. Agent更新需替换旧版本plugins文件夹与jar文件。
> 6. Agent端的jar部署方式：**已知部分JDK出现不兼容的问题，Sonic官方推荐使用JDK15**，可以前往 [这里](https://docs.aws.amazon.com/corretto/latest/corretto-15-ug/downloads-list.html) 安装下载。
> 7. Agent的config/application-sonic-agent.yml字段有改动，需参考最新版yml备注进行配置。
> 8. Agent本地环境不再依赖node、npm、谷歌浏览器、chromedriver，可以卸载来减少Agent空间。

## 从v1.4.1-release升级到v1.5.0-release

> 0. server升级前，先备份数据库。
> 1. 执行docker-compose down
> 2. 更改旧docker-compose.yml文件中v1.4.1-release为v1.5.0-release（或直接下载最新版docker-compose.yml）
> 3. 执行docker-compose up -d
> 4. Agent更新需替换旧版本plugins文件夹与jar文件。

## 其他旧版本升级到v1.4.1-release

> 0. server升级前，先备份数据库。
> 1. **注意！** 升级后图片路径有所更改，所以旧图片会失效！
>
> > 解决方案：
> > 1. 可以在数据库将旧图片路径的 **ip:port** 替换为 **ip:前端port/server**，即可恢复（推荐）。
> > 2. 临时将docker-compose.yml文件的gateway服务，加上ports映射（不推荐），以下为示例代码：
> ```
> sonic-server-gateway:
>     image: "registry.cn-hangzhou.aliyuncs.com/sonic-cloud/sonic-server-gateway:v1.4.1-beta"
>     hostname: sonic-server-gateway
>     environment:
>       - SONIC_EUREKA_USERNAME
>       - SONIC_EUREKA_PASSWORD
>       - SONIC_EUREKA_PORT
>       - SONIC_EUREKA_HOST=sonic-server-eureka
>       - SECRET_KEY
>       - EXPIRE_DAY
>     volumes:
>       - ./logs/:/logs/
>     depends_on:
>       - sonic-server-eureka
>     networks:
>       - sonic-network
>     restart: on-failure
>     ports:
>       - 8094:8094
> ```
>
> 2. 因新版本 **将前后端多个端口合并为单一接口** 暴露，配置时需注意。（注意env文件与docker-compose.yml文件都需要更换）
> 3. 因整体架构调整较多，可前往 **前后端部署** 页面重新部署。
> 4. server升级后，将旧挂载目录下的logs、keepFiles、imageFiles、recordFiles、packageFiles中的内容迁移到新目录下。
> 5. Agent改动较大，需要将旧文件全部删除重新部署。配置yml时注意server的port应为 **SONIC_SERVER_PORT**。

## 其他旧版本升级到v1.4.0-release

> 1. server升级前，先备份数据库。
> 2. 因新版本调整设备数据，尽量将旧版本的 **重复序列号(udId)** 的设备删除至剩一个。（可查看下方常见问题）
> 3. 因整体架构调整较多，可前往 **前后端部署** 页面重新部署。
> 4. server升级后，将旧挂载目录下的logs、keepFiles、imageFiles、recordFiles、packageFiles中的内容迁移到新目录下。
> 5. 如果旧版本没有自定义挂载路径（特别是simple版用户），您不知道您的本地文件默认储存在哪里，可以 [参考这里](https://blog.csdn.net/wu_qing_song/article/details/113253437) （如果你不想使用这个方法，可以参考常见问题第二题）。
> 6. Agent改动较大，需要将旧文件全部删除重新部署。

## 关于simple版本

综合注册架构、通信逻辑、性能优化等因素，从v1.4.0-beta开始，集群版与simple版合并，并且在sonic-server上继续维护，因此sonic-server-simple版本不再维护。

## 常见问题

> 1. 我如果不迁移上文提到的若干个文件夹，直接使用新版本自带的文件夹，会发生什么？
> > 旧版本的图片、录像、截图等信息将失效。当然如果文件不多，直接用新版本也是可以的。
> 2. 如果不用上文第四点的方法，还有别的方法吗？
> > 可以使用 docker cp 指令将容器内的文件复制到宿主机，再迁移到新版本文件夹中。
> 3. 为什么旧版本需要删除重复的序列号设备？
> > 旧版本是以单Agent内不可重复，后续考虑到用户会将同一设备在多个Agent之间迁移，直接以序列号为标识。安卓目前是极低概率才会出现序列号相同的设备（哪怕相同也有办法修改），而苹果的序列号都是唯一的，所以大家不用担心。
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多疑问可前往👉[社区](https://sonic-cloud.wiki)👈交流

## 本文贡献者

<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
<a href="https://gitee.com/wuxiangin" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABIBJREFUaEPtWWtoVEcYPXef2Wyy28TNxphERYvGEIKlBlE0EqqIEEURCyKtiKAQWixYCorFSqUtVUFBfKGI9ofQYhWNiKiIz7ao+EAkaitRY8yrGxOzeezj3jI3zDru3bvZ3Tum7jr3T8hmvrnnfOc7832zkabseaTgPXokQTjD1RYKZ7jAEAoLhTMsA6KkM0xQDR2hsFA4wzIgSjrDBBWHlihpUdIZlgFR0skImm014eCiEozLsyEsKzhyrws7/ujQ3aK8wI6f5oxEUa5VXePrC2PzxTZcfuLXjVldlY/lk/NgNUl43BnAimNN6A3KycB8Y61hhbfNLUL1WKe66aVGP9aeeaEL5tMKN76YOgIOi0ldE5QVHLrdib3XfboxP8weiTnjc9S/n/2nB+vPtaRMlgQaJswq0PgygOW/6yvw7Swv5pe5IDGQh0rSkSWj8WG+LaHkJJIJw4RnjnFiwywv8h3mIUv0l8WlKPPY0e4PqdgKnBY86wriq9PNeNoV1OBNZu9EyHJRmGxCVQiEFRy81Yn9N7UlyoK/0dyn4psyygF/QMbWax2of9Ctwfz55Dys+jgfdouEho4BfHb0WaK8dNcZVpjszPqs/uErbLrQqnkhLX2zJOHo/S7174vL3epP8vvPV9o1MRtrClE7IRfkPwUnG7rx/cW2d4Mwq8Td1n6sPN6kAUYPN6ooWfD1dA+cNhP0YqgF+kIydv71L369N5goIw8XhaeWZOO7Gi882Ra0+UPYcL4Vt14Mli15Rrut2D5vFErd1ohnyef0M+LpjRdacf3565iqYgc21RSqPo+1Z6qkuRAmL6dqkB657VoHTjS89mTtRFdETfZUpqoPhBTsu+nD4dudER5sC9OrgFRIcyNMW46iaD35zYwC1a9h5c2+y7a06B67vtqLhZNciLVfKkRpDDfCrI//bOrFl6eaI7gOLCxBZWGWpm2xJ3f0FEVj4p3iqRDnRpj1HNtbPypyYPMnhfA6LfjbF8DS355GcLKjafdAGD9ease5xz1gR9B4ffp/JUxeTlVhwbNejDUa0pbGzuILylxYO90DkpDoakmFJBvDTWGyKfVdkBlAqLcDMQ4mEsNagR5o1POKMvSFJNkEcCUcS012nIxuPQQsawU6i2+dW6R+zlZKssT01nMlzHqPjIL7bvgic3a81sIealuutqOuaoTas3lcB6OJcyVMNt89v1idkcmwUP/gFZZVfgCreXCcjDU+khhawsQKZF3txFy47GYu18G3TpiC7w/JuNPSj2ml2XEvCAQQtUKWxYS7Lf0o99ohy9AMIzzKmrvCdKqyWST0BmS4s8xxr4CEBGuFnoCMHJtpyKtmquS5E47+GocAIzNyXf3zuBh31RarBxV9eF0H33pJkxew4BP5rovErJnmwdIKN8wmiet1cFgIs+ATbS2zx+VgXXWBeljxvA4OC+FU/TUccdw9PBygjbxDEDaSvXSIFQqng0pGMAqFjWQvHWKFwumgkhGMQmEj2UuHWKFwOqhkBKNQ2Ej20iFWKJwOKhnB+B+YXeFDS52DfAAAAABJRU5ErkJggg==" width="50"/>
<span>wuxiangin</span>
</a>
</div>


&nbsp; &nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/deploy/upgrade-deploy.md) 发起贡献改善此页

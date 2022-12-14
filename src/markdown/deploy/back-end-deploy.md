# 前后端部署

本文将介绍如何部署Sonic的Server端与Client端。

## 快速部署

该方式将一次性部署前后端。

准备工作：docker-compose、Docker、MySQL
> 0. 需提前建数据库库！字符集为utf8，排序规则为utf8_general_ci
> 1. <a target="_blank" href="https://gh.flyinbug.top/gh/https://github.com/SonicCloudOrg/sonic-server/releases/download/v2.1.1/sonic-server-v2.1.1.zip">点击这里</a> 下载最新版本的 **zip** 文件到任意目录（如加速链接失效，请自行前往 <a href="https://github.com/SonicCloudOrg/sonic-server/releases" target="_black">这里</a> 下载）。
> 2. 解压zip，更改.env中的信息。（无需改动docker-compose.yml文件。env配置项内容可查看下方表格。如果您的系统没显示.env，在本页最下方【常见问题】查看解决方案）
> 3. 当前目录下执行以下指令
> ```
> docker-compose up -d
> ```
> 如果您为中国大陆用户，我们建议使用加速镜像（后续down的时候需要docker-compose -f docker-compose-zh.yml down）
> ```
> docker-compose -f docker-compose-zh.yml up -d
> ```
> 4. 前后端部署完毕！（因Eureka心跳机制，刚启动完毕微服务间互相访问需要3~5分钟，请耐心等候）打开浏览器访问 [http://localhost:3000](http://localhost:3000)，然后可 **直接前往** Agent端部署。
> 5. （附）如果您是经验丰富的运维人员，也可以前往Eureka页面查看各微服务状态。

## .env配置项解释

| 字段名                    | 解释                                                          | 示例                       |
|------------------------|-------------------------------------------------------------|--------------------------|
| SONIC_SERVER_HOST      | 部署sonic-server机器的ipv4地址，不能使用localhost、127.0.0.1。**可以使用域名。** | 192.168.0.1              |
| SONIC_SERVER_PORT      | 整个服务端对外暴露端口，默认3000。**可以使用80**                               | 3000                     |
| SONIC_EUREKA_USERNAME  | Eureka的用户名（为提高安全性，不建议使用默认值，可以更改为其他任意字符串）                    | sonic                    |
| SONIC_EUREKA_PASSWORD  | Eureka的密码（为提高安全性，不建议使用默认值，可以更改为其他任意字符串）                     | sonic                    |
| SONIC_EUREKA_PORT      | Eureka启动端口（一般不需要改动）                                         | 9090                     |
| MYSQL_HOST             | MySQL服务的host，不能使用localhost、127.0.0.1.                       | 192.168.0.1              |
| MYSQL_PORT             | MySQL服务的端口（一般默认为3306）                                       | 3306                     |
| MYSQL_DATABASE         | Sonic服务要用到的数据库                                              | sonic                    |
| MYSQL_USERNAME         | MySQL数据库用户名                                                 | root                     |
| MYSQL_PASSWORD         | MySQL数据库密码                                                  | Sonic!@#123              |
| SECRET_KEY             | token加密密钥（为提高安全性，不建议使用默认值，可以更改为其他任意字符串）                     | sonic                    |
| EXPIRE_DAY             | token有效天数                                                   | 14                       |
| PERMISSION_ENABLE      | 是否开启权限配置                                                    | true                     |
| PERMISSION_SUPER_ADMIN | 超管用户名                                                       | sonic                    |
| REGISTER_ENABLE        | 是否开启用户注册                                                    | true                     |
| NORMAL_USER_ENABLE     | 是否开启普通用户登录                                                  | true                     |
| LDAP_USER_ENABLE       | 是否开启LDAP用户登录                                                | true                     |
| LDAP_USER_ID           | LDAP user id 搜索字段                                           | cn                       |
| LDAP_BASE_DN           | LDAP user 搜索用户组                                             | users                    |
| LDAP_BASE              | LDAP Base DN                                                | ou=system                |
| LDAP_USERNAME          | LDAP Base DN 管理员用户名                                         | uid=admin,ou=system      |
| LDAP_PASSWORD          | LDAP Base DN 管理员密码                                          | Sonic!@#123              |
| LDAP_URL               | LDAP 服务 URL                                                 | ldap://192.168.0.1:10389 |
| LDAP_OBJECT_CLASS      | LDAP筛选class，默认为person                                       | person                   |

## 使用自己的Eureka

如果您自己有Eureka服务，可以查看本小节。

> 1. 将**docker-compose.yml**文件去掉Eureka服务。
> 2. 将**docker-compose.yml**的SONIC_EUREKA_HOST填写为自己Eureka服务的host。
> 3. 将.env中的配置修改为自己Eureka服务的信息。
> 4. 完成！

## 常见问题

> 1. 浏览器访问前端无误，但是注册时出现【系统出错了】或【发生未知异常】。
>
> > 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/35-sonic)
> 2. 查看日志发现是MySQL没有连上，该怎么解决？
> > 主要分为多种情况:
> >1. MySQL没有开启远程访问权限。
> >2. 因为采用Docker容器部署，127.0.0.1或localhost这种ip地址是无效的。
> >3. 公司网络限制等等特殊情况。
> >
> >解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/33-mysql)。
> 3. 目前文件挂载在Docker默认目录，怎样才能挂载到自定义的文件目录呢？
>
> > 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/120-sonic)。
>4. Mac系统解压后没看到.env文件，怎么解决呢？
>
> > 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/707-mac)
> 5. Linux系统解压后没看到.env文件，怎么解决呢？
>
> > 可以使用 ls -a 指令查看隐藏文件
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多疑问可前往👉[社区](https://sonic-cloud.wiki)👈交流

## 本文贡献者

<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
<a href="https://gitee.com/soniclei" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABHZJREFUeF7tm9tXIkcQxj8EATcqCnIRRVQWdc0m+f8f8pSHvO3DZt1VXJSr3FXuwnLJqVmHiMcNXcrpMTnVLz7w9UzXb77uqao52n7/488xZCgRsAksJU6GSGCpsxJYDFYCS2BxCDC0cmYJLAYBhlScJbAYBBhScZbAYhBgSMVZAotBgCEVZwksBgGGVJwlsBgEGFJxlsBiEGBIxVkCi0GAIRVnCSwGAYbUUmfZ7XZshQLw+7x4s7QEh8MOm802Wf5wOEL/Wx/1RguFUhk39QYjtPlLLYMV349iM+CHw+FQimo8HqPV7iCZzuL65lZpzrxF2mGRm94fxuFd90y5SDWwb4MBLjM55K6KqlPmptMO6yC2i61QcArUYDBEs91GvdFEp9s1grMv2OFZXcHqyjKW3K4pPQFLJC9RqtTmBkLlQlphra+t4vjgLVxOp7E22lrV2g0+nycxHA5/uN5wMIC9nW24XN/n0bhtNPHh44lKjHPTaIW1H41gZzuMhftD/Oa2jo9fEv8Kyow06PfhILaHxfszbjAY4CyZQqlSnRuMWRfSCusovg9yCY3RaGScPenc1aw1Tn7/7fgIPu/axJXZqyK+XqaV579UaBksSguSqQxyBfWD2nQmxmNjCxfKFSSSqZcyUJ6vFZZxuG+GYGZS5WoNn07PlRdrtVArrKB/A4ex3UluNRqPUSpXcZHJotfrW81i5v21wqLVvD+KI7Dhm1rYcDQyEs5q7RrFSvXVgtMOi17/7+IxeNc8Tz5JOosGwyE6na5R3lBq0Wi1Zj51HQLtsCgoyuJj0QhCgQ2lcofShEarjXyhhErtWgeXJ+9hCSxzJeQyqg9pW75ZcmNhYWEmiGarbVl9aCmsx2T8G1741tfgWVmB2+2C/QfwKNvP5AtGnqZzvCpYjwMncASQzje3yzX1M23NZCqLfLGkjderhvWQAmX+0ciWUVSbg7bkh78+K5VL8yD6n4FFwZLTqGQyC3HqVpwZ3Qc99aE2WL8eH2Lds2q0Wig9SFykje4nd/x8FEfwPk+jpDaTu8JFOsu9zLP02mA9LKLp/1/yheKz6rqpYvz/Ciu6HTZ6UmZ60O508ek0AfrLGQ87D88pxjn3eqzV5izPyjKOD+OTA1q18fdwwdRhje1GJonsXa+Hk9Nz1Jt6MnxtsCjot3tRRMKhqRYxvdFS2fzMzJycubMVxuLi9w8ctJWL5Qq+JJIvMQtrrlZYVOb88u7gybrwrtdHs9VCo9lGr98zgnA5XfCsLhtJqgnJjI4K75Ozc/Y2ZtF5JNYKywAwo5BWCabTvcP5RQo1zZ/EtMMyYdC2ioQ34XQuqvAxNNTKoS7E11TakjaOZbBMQuFQwCikfzK+SDtgt/9TTNNLgABRY5BcRHkZ9+2p/CQUhJbDUljjq5EILMajEFgCi0GAIRVnCSwGAYZUnCWwGAQYUnGWwGIQYEjFWQKLQYAhFWcJLAYBhlScJbAYBBhScZbAYhBgSMVZAotBgCEVZwksBgGGVJwlsBgEGNK/AbDkeexTOAtZAAAAAElFTkSuQmCC" width="50"/>
<span>soniclei</span>
</a>
</div>


&nbsp; &nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/deploy/back-end-deploy.md) 发起贡献改善此页

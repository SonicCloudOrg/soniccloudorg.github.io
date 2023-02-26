---
contributors:
  - 'ZhouYixun'
  - 'soniclei'
---

# Front-end and back-end deployment

This article shows you how to deploy the Server and Client sides of Sonic.

## Quick deploy

In this mode, the front and back ends are deployed at one time.

preparatory work: docker-compose, Docker, MySQL

1. Create a MySQL database. The database name can be customized. Note that the character set is utf8 and the collation rule is utf8_general_ci. If you want MySQL to start with Sonic (not recommended), refer to the `Built-in MySQL in docker-compose.yml` section at the bottom of this page.
2. [Click here](https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-server/releases/download/v2.3.2/sonic-server-v2.3.2.zip) Download the latest version of the **zip** file to any directory. (If the accelerator link fails, please go by yourself <a href="https://github.com/SonicCloudOrg/sonic-server/releases" target="_black">here</a> download)
3. Unzip and change the information in.env. Do not modify docker-compose.yml file. For details about the env configuration item, see the following table. If your system does not display.env, see the solution at the bottom of the page under FAQs)
4. Run the following command in the current directory

```bash
docker-compose up -d
```

::: tip If you are a user in mainland China and DockerHub access is slow, you can choose one of the following two points for operation:

- Configuring a Domestic accelerated Mirror Source (Recommended)
- Run the following command to directly use the accelerator mirror (not recommended, because the accelerator source may be unstable or the network fluctuates. This command is required in the down state `docker-compose -f docker-compose-zh.yml` down）

```bash
docker-compose -f docker-compose-zh.yml up -d
```

:::

5. The front and rear ends are deployed!(Due to the Eureka heartbeat mechanism, it takes 3 to 5 minutes for microservices to access each other. Please wait patiently)Open a browser and visit [http://localhost:3000](http://localhost:3000)，Then you can **directly deploy** the Agent。
6. (Attached) If you are experienced operation and maintenance personnel, you can also visit the Eureka page to check the status of each micro-service.

## .env configuration item description

| params                 | description                                                                                                                               | example                  |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| SONIC_SERVER_HOST      | localhost or 127.0.0.1 cannot be used as the ipv4 address of the machine where the sonic-server is deployed. **can use domain names.**    | 192.168.0.1              |
| SONIC_SERVER_PORT      | The whole server is exposed to external ports. The default port is 3000. **can use 80**                                                   | 3000                     |
| SONIC_EUREKA_USERNAME  | User name for Eureka (For security purposes, the default value is not recommended, but can be changed to any other string, excluding `@`) | sonic                    |
| SONIC_EUREKA_PASSWORD  | Eureka password (For security purposes, the default value is not recommended. You can change it to any other string, excluding `@`)       | sonic                    |
| SONIC_EUREKA_PORT      | Eureka start port (usually no change is required）                                                                                         | 9090                     |
| MYSQL_HOST             | The host of the MySQL service cannot be localhost or 127.0.0.1.                                                                           | 192.168.0.1              |
| MYSQL_PORT             | MySQL service port (default 3306）                                                                                                         | 3306                     |
| MYSQL_DATABASE         | Data to be used by the Sonic service                                                                                                      | sonic                    |
| MYSQL_USERNAME         | MySQL database user name                                                                                                                  | root                     |
| MYSQL_PASSWORD         | MySQL password                                                                                                                            | Sonic!@#123              |
| SECRET_KEY             | token 加密密钥（为提高安全性，不建议使用默认值，可以更改为其他任意字符串）                                                                                                  | sonic                    |
| EXPIRE_DAY             | token 有效天数                                                                                                                                | 14                       |
| PERMISSION_ENABLE      | 是否开启权限配置                                                                                                                                  | true                     |
| PERMISSION_SUPER_ADMIN | 超管用户名                                                                                                                                     | sonic                    |
| REGISTER_ENABLE        | 是否开启用户注册                                                                                                                                  | true                     |
| NORMAL_USER_ENABLE     | 是否开启普通用户登录                                                                                                                                | true                     |
| LDAP_USER_ENABLE       | 是否开启 LDAP 用户登录                                                                                                                            | true                     |
| LDAP_USER_ID           | LDAP user id 搜索字段                                                                                                                         | cn                       |
| LDAP_BASE_DN           | LDAP user 搜索用户组                                                                                                                           | users                    |
| LDAP_BASE              | LDAP Base DN                                                                                                                              | ou=system                |
| LDAP_USERNAME          | LDAP Base DN 管理员用户名                                                                                                                       | uid=admin,ou=system      |
| LDAP_PASSWORD          | LDAP Base DN 管理员密码                                                                                                                        | Sonic!@#123              |
| LDAP_URL               | LDAP 服务 URL                                                                                                                               | ldap://192.168.0.1:10389 |
| LDAP_OBJECT_CLASS      | LDAP 筛选 class，默认为 person                                                                                                                  | person                   |

## 使用自己的 Eureka

如果您自己有 Eureka 服务，可以查看本小节。

1. 将 **docker-compose.yml** 文件去掉 Eureka 服务。
2. 将 **docker-compose.yml** 的 SONIC_EUREKA_HOST 填写为自己 Eureka 服务的 host。
3. 将.env 中的配置修改为自己 Eureka 服务的信息。
4. 完成！

## 在 docker-compose.yml 中内置 MySQL（不推荐）

因 Docker 挂载时如果出现操作不当或数据迁移时的风险会引起 MySQL 容易数据丢失，因此 docker-compose.yml 默认没有附带 MySQL 镜像。

::: warning 警告
该方式不一定兼容所有 Docker 版本与 Linux 系统与 Mysql 版本，操作前应当备份当前数据。而且更新时会导致 MySQL 容器停止与删除，因此推荐 MySQL 单独部署或使用已有 MySQL 服务。
:::

如果想 MySQL 随着 sonic 一同启动，你可以进行如下操作：

1. 当前目录下创建`mysql`文件夹

```shell
mkdir -p mysql/log mysql/data mysql/conf
```

2. 将.env 中的`MYSQL_HOST`改为`sonic-mysql`
3. 在 docker-compose.yml 中加入以下 **注释部分** 的内容

```
version: '3'
services:
  sonic-server-eureka:
  .
  .
  .
  .
  .
  sonic-client-web:
    image: "sonicorg/sonic-client-web:SONIC_VERSION"
    environment:
      - SONIC_SERVER_HOST
      - SONIC_SERVER_PORT
    networks:
      - sonic-network
    depends_on:
      - sonic-server-gateway
    restart: on-failure
    ports:
      - "${SONIC_SERVER_PORT}:80"
# ==== MySQL ====
  sonic-mysql:
    image: "mysql:5.7"
    hostname: sonic-mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD}
      - MYSQL_DATABASE
    volumes:
      - ./mysql/log:/var/log/mysql
      - ./mysql/data:/var/lib/mysql
      - ./mysql/conf:/etc/mysql
    ports:
      - "3306:3306"
    networks:
      - sonic-network
# ==== End ====

networks:
  sonic-network:
    driver: bridge
```

4. 执行 `docker-compose up -d` 即可。

## 常见问题（Q&A）

Q1: 浏览器访问前端无误，但是注册时出现【系统出错了】或【发生未知异常】。

A1: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/35-sonic)

---

Q2: 查看日志发现是 MySQL 没有连上，该怎么解决？

A2: 主要分为多种情况:

- MySQL 没有开启远程访问权限。
- 因为采用 Docker 容器部署，127.0.0.1 或 localhost 这种 ip 地址是无效的。
- 公司网络限制等等特殊情况。

解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/33-mysql)。

---

Q3: 目前文件挂载在 Docker 默认目录，怎样才能挂载到自定义的文件目录呢？

A3: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/120-sonic)。

---

Q4: Mac 系统解压后没看到.env 文件，怎么解决呢？

A4: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/707-mac)

---

Q5: Linux 系统解压后没看到.env 文件，怎么解决呢？

A5: 可以使用 ls -a 指令查看隐藏文件

---

::: tip
更多疑问可前往 👉[社区](https://sonic-cloud.wiki)👈 交流
:::

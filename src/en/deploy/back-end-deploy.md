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
2. [Click here](https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-server/releases/download/v2.6.4/sonic-server-v2.6.4.zip) Download the latest version of the **zip** file to any directory. (If the accelerator link fails, please go by yourself <a href="https://github.com/SonicCloudOrg/sonic-server/releases" target="_black">here</a> download)
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

| params                 | description                                                                                                                                       | example                  |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| SONIC_SERVER_HOST      | localhost or 127.0.0.1 cannot be used as the ipv4 address of the machine where the sonic-server is deployed. **can use domain names.**            | 192.168.0.1              |
| SONIC_SERVER_PORT      | The whole server is exposed to external ports. The default port is 3000. **can use 80**                                                           | 3000                     |
| SONIC_EUREKA_USERNAME  | User name for Eureka (For security purposes, the default value is not recommended, but can be changed to any other string, excluding `@` and `%`) | sonic                    |
| SONIC_EUREKA_PASSWORD  | Eureka password (For security purposes, the default value is not recommended. You can change it to any other string, excluding `@` and `%`)       | sonic                    |
| SONIC_EUREKA_PORT      | Eureka start port (usually no change is required）                                                                                                 | 9090                     |
| MYSQL_HOST             | The host of the MySQL service cannot be localhost or 127.0.0.1.                                                                                   | 192.168.0.1              |
| MYSQL_PORT             | MySQL service port (default 3306）                                                                                                                 | 3306                     |
| MYSQL_DATABASE         | Data to be used by the Sonic service                                                                                                              | sonic                    |
| MYSQL_USERNAME         | MySQL database user name                                                                                                                          | root                     |
| MYSQL_PASSWORD         | MySQL password                                                                                                                                    | Sonic!Hello              |
| SECRET_KEY             | Token secret key（To improve security, it is not recommended to use the default value, which can be changed to any other string）                   | sonic                    |
| EXPIRE_DAY             | Token expire day                                                                                                                                  | 14                       |
| PERMISSION_ENABLE      | Enable permission module                                                                                                                          | true                     |
| PERMISSION_SUPER_ADMIN | Super admin user name                                                                                                                             | sonic                    |
| REGISTER_ENABLE        | Enable register module                                                                                                                            | true                     |
| NORMAL_USER_ENABLE     | Enable normal user login                                                                                                                          | true                     |
| LDAP_USER_ENABLE       | Enable LDAP user login                                                                                                                            | true                     |
| LDAP_USER_ID           | LDAP user id search                                                                                                                               | cn                       |
| LDAP_BASE_DN           | LDAP user base dn                                                                                                                                 | users                    |
| LDAP_BASE              | LDAP Base DN                                                                                                                                      | ou=system                |
| LDAP_USERNAME          | LDAP Base DN admin username                                                                                                                       | uid=admin,ou=system      |
| LDAP_PASSWORD          | LDAP Base DN admin pwd                                                                                                                            | Sonic!@#123              |
| LDAP_URL               | LDAP service URL                                                                                                                                  | ldap://192.168.0.1:10389 |
| LDAP_OBJECT_CLASS      | LDAP filter class, default person                                                                                                                 | person                   |

## Use your own Eureka

If you have your own Eureka service, you can view this section.

1. Remove Eureka service from **docker-compose.yml** .
2. Replace SONIC_EUREKA_HOST to your own Eureka service from **docker-compose.yml** .
3. Replace your own Eureka service info form .env .
4. Done!

## Built-in MySQL in docker-compose.yml（Not recommended）

Because MySQL is prone to data loss due to improper operation or data migration risks during Docker mounting, so docker-compose.yml does not come with a MySQL image by default.

::: warning
This method is not necessarily compatible with all Docker versions, Linux systems and Mysql versions, and the current data should be backed up before operation. Moreover, the MySQL container will be stopped and deleted during the update, so it is recommended to deploy MySQL alone or use the existing MySQL service.
:::

If you want MySQL to start with sonic, you can do the following:

1. Create the `mysql` folder in the current directory

```shell
mkdir -p mysql/log mysql/data mysql/conf
```

2. Change `MYSQL_HOST` in .env to `sonic-mysql`
3. Add the following **comment section** to docker-compose.yml

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

4. Just execute `docker-compose up -d`.

## Frequently Asked Questions（Q&A）

Q1: The browser accesses the front end without errors, but 【system error】 or 【unknown exception occurred】 appears during registration.

A1: The solution can refer to [this post](https://sonic-cloud.wiki/d/35-sonic)

---

Q2: Check the log and find that MySQL is not connected, how to solve it?

A2: Mainly divided into a variety of situations:

- MySQL does not have remote access permissions enabled.
- Due to the deployment of Docker containers, ip addresses such as 127.0.0.1 or localhost are invalid.
- Special circumstances such as corporate network restrictions.

The solution can refer to [this post](https://sonic-cloud.wiki/d/33-mysql).

---

Q3: At present, the files are mounted in the default directory of Docker, how can they be mounted to a custom file directory?

A3: The solution can refer to [this post](https://sonic-cloud.wiki/d/120-sonic).

---

Q4: The Mac system does not see the .env file after decompression, how to solve it?

A4: The solution can refer to [this post](https://sonic-cloud.wiki/d/707-mac)

---

Q5: I don't see the .env file after decompressing the Linux system, how to solve it?

A5: You can use the ls -a command to view hidden files

---

::: tip
For more questions, please go to 👉[Community](https://discord.gg/c9ZD6jSyTE)👈 to communicate
:::

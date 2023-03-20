---
contributors:
- 'ZhouYixun'
- 'wuxiangin'
---

# Version Migration Guide

This article describes how to upgrade to the latest version.

## Regarding version rule changes

From v2.0.0-release, the Sonic version rules are changed as follows:

1. The first digit is the major version number, which is basically updated once a year
2. The second digit is 1 will be added when new functions are integrated (feature version, generally updated monthly)
3. The third place is to fix the bug and it will add 1 (fixed version, usually updated every half a week to a week)

Taking `v2.0.1` as an example, it is to fix the bug of `v2.0.0`.

If a large number of new features are released, it will be updated to `v2.1.0`.

If there are bugs after `v2.1.0` goes online, then the next version will be `v2.1.1`, if there are still bugs, then `v2.1.2` will continue to be released.

**If you want to pursue a stable version, then the last fix version of the previous feature version should be the most stable. **

For example, the previous version of `v2.2.0` is `v2.1.15`, then `v2.1.15` is the most stable version of `v2.1.x`

## Upgrade from v2.0.x ~ v2.3.x to v2.4.x
1. Back up the Mysql database before upgrading.
2. Go directly to <a href="https://sonic-cloud.cn/deploy/back-end-deploy.html" target="_blank">here</a> to download the latest version zip, down cluster and then up again That's it. If the deployment directory is changed, the contents of the `keepFiles`, `imageFiles`, `recordFiles`, and `packageFiles` folders in the old directory should also be synchronized to the new directory (deployment documents include Chinese mainland accelerated image deployment methods)
3. The jdk deployed by Agent jar requires upgrading to **jdk17**, you can go to <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">here</a> Download the zip and decompress it. The old version plugins folder and jar file need to be replaced for the update. The Docker version of Agent is the same as the server, just go to <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">here</a> and re-download the image for deployment. (Deployment documents include accelerated image deployment methods in mainland China)
4. Eureka default port changed from 9090 to 8761

## Upgrade from v1.4.1-release or above to v2.0.x ~ v2.3.x
1. Back up the Mysql database before upgrading.
2. Go directly to <a href="https://sonic-cloud.cn/deploy/back-end-deploy.html" target="_blank">here</a> to download the latest version zip, down cluster and then up again That's it. If the deployment directory is changed, the contents of the `keepFiles`, `imageFiles`, `recordFiles`, and `packageFiles` folders in the old directory should also be synchronized to the new directory (deployment documents include Chinese mainland accelerated image deployment methods)
3. For the Agent deployed in jar mode, go to <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">here</a>, download the zip and decompress it, the update needs to be replaced Old version plugins folder and jar file. The Docker version of Agent is the same as the server, just go to <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank">here</a> and re-download the image for deployment. (Deployment documents include accelerated image deployment methods in mainland China)

::: tip TIP
---
When upgrading to `v2.3.2`, due to the adjustment of the data structure, the performance data information in the old Android test report is **incompatible** with the structure of the new version, so there will be an abnormal problem in the chart display.

---
When upgrading to `v2.3.x`, due to the migration of some category directories to `tests/handlers`, it may cause errors when custom scripts import packages. For details of changes, please check [here](https://github.com/SonicCloudOrg/sonic-agent/tree/main/src/main/java/org/cloud/sonic/agent/tests/handlers).

---
Notes for upgrading from v1.5.0 or below:
1. Add LDAP_OBJECT_CLASS=person at the bottom of the env file
2. The jar deployment method on the Agent side: Some JDKs are known to be incompatible. Sonic officially recommends using JDK15. You can go [here](https://docs.aws.amazon.com/corretto/latest/corretto-15-ug/downloads-list.html) to install the downloads.
3. The config/application-sonic-agent.yml field of Agent has changed, please refer to the latest version yml notes for configuration.
4. The Agent's local environment no longer depends on node, npm, Google Chrome, and chromedriver, and can be uninstalled to reduce Agent space.
   :::


## Other old versions upgrade to v1.4.1-release

0. Before upgrading the server, back up the database first.
1. **Attention! ** The picture path has changed after the upgrade, so the old picture will be invalid!

::: tip solution

1. You can replace the **ip:port** of the old image path with **ip:front port/server** in the database, and it will be restored (recommended).
2. Temporarily add the gateway service of the docker-compose.yml file to the ports mapping (not recommended), the following is the sample code:

:::

```
sonic-server-gateway:
     image: "registry.cn-hangzhou.aliyuncs.com/sonic-cloud/sonic-server-gateway:v1.4.1-beta"
     hostname: sonic-server-gateway
     environment:
       - SONIC_EUREKA_USERNAME
       - SONIC_EUREKA_PASSWORD
       - SONIC_EUREKA_PORT
       -SONIC_EUREKA_HOST=sonic-server-eureka
       - SECRET_KEY
       - EXPIRE_DAY
     volumes:
       - ./logs/:/logs/
     depends_on:
       - sonic-server-eureka
     networks:
       - sonic-network
     restart: on-failure
     ports:
       -8094:8094
```

2. Because the new version **combines multiple front-end and back-end ports into a single interface** exposed, you need to pay attention when configuring. (Note that both the env file and the docker-compose.yml file need to be replaced)
3. Due to many adjustments to the overall structure, you can go to the **front-end and back-end deployment** page to redeploy.
4. After the server is upgraded, migrate the contents of logs, keepFiles, imageFiles, recordFiles, and packageFiles in the old mount directory to the new directory.
5. The Agent has changed a lot, and all old files need to be deleted and redeployed. Note that the port of the server should be **SONIC_SERVER_PORT** when configuring yml.

## Other old versions upgrade to v1.4.0-release

1. Before upgrading the server, back up the database first.
2. To adjust the device data due to the new version, try to delete the old version of **duplicate serial number (udId)** devices to one remaining. (See FAQs below)
3. Due to many adjustments to the overall structure, you can go to the **front-end and back-end deployment** page to redeploy.
4. After the server is upgraded, migrate the contents of logs, keepFiles, imageFiles, recordFiles, and packageFiles in the old mount directory to the new directory.
5. If the old version does not have a custom mount path (especially for simple version users), and you do not know where your local files are stored by default, you can [refer to here](https://blog.csdn.net/wu_qing_song/article /details/113253437) (If you don't want to use this method, you can refer to the second question of FAQ).
6. The Agent has changed a lot, and all old files need to be deleted and redeployed.

## About the simple version

Considering factors such as registration structure, communication logic, and performance optimization, starting from v1.4.0-beta, the cluster version and the simple version are merged, and continue to be maintained on the sonic-server, so the sonic-server-simple version is no longer maintained.

## Frequently Asked Questions (Q&A)

Q1: What will happen if I directly use the folders that come with the new version without migrating the folders mentioned above?

A1: The pictures, videos, screenshots and other information of the old version will be invalid. Of course, if there are not many files, it is also possible to use the new version directly.

---

Q2: If you don't use the method in the fourth point above, is there any other method?

A2: You can use the docker cp command to copy the files in the container to the host, and then migrate them to the new version folder.

---

Q3: Why do I need to delete the duplicate serial number device when upgrading the old version before 1.4.0?

A3: The old version is non-repeatable within a single Agent. In the future, considering that the user will migrate the same device between multiple Agents, it will be directly identified by the serial number. At present, it is extremely rare for Android to have devices with the same serial number (even if they are the same, there are ways to modify them), while Apple’s serial numbers are unique, so don’t worry.

---

::: tip
For more questions, please go to 👉[Community](https://sonic-cloud.wiki)👈 to communicate
:::

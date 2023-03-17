---
contributors:
- 'ZhouYixun'
---

# Client端

本文将介绍如何搭建前端开发环境。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-client-web)

<div style="display: flex">
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-client-web?style=social">
<img style="margin-left: 10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-client-web?style=social">
</div>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-client-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-client-web" />
</a>

## 搭建步骤

**准备工作**：node

1. Fork [sonic-client-web](https://github.com/SonicCloudOrg/sonic-client-web) 仓库。
2. 执行git clone指令，将您的仓库代码克隆到本地。
3. 执行以下代码
```bash
npm install
```
4. 执行以下代码
```bash
npm run dev
```
5. 完成！浏览器打开 [localhost:3000](http://localhost:3000) 。（v2.4.0开始，本地端口更改为3002）
6. 开发完毕后，push到自己的仓库，然后可以给Sonic原仓库提起pr哦！（建议贡献前先开启issue讨论，防止跟组织计划进度有冲突哦）

## 二次开发部署
如果在您的团队内部对前端页面进行了二次开发，可以执行以下步骤部署。

1. 执行以下代码
```bash
npm run build
```
2. 将产物dist文件夹替换docker容器内部dist。
3. 执行以下代码
```bash
nginx -s reload
```
4. 完成！（如果不生效，可以再执行docker restart指令重启前端的容器）


# sonic-go-mitmproxy
本文为Sonic网络抓包代理sonic-go-mitmproxy的介绍与原理简述。 👉[Github地址](https://github.com/SonicCloudOrg/sonic-go-mitmproxy)

<a href="#">  
<img src="https://img.shields.io/github/stars/SonicCloudOrg/sonic-go-mitmproxy?style=social">
<img style="margin-left:10px" src="https://img.shields.io/github/forks/SonicCloudOrg/sonic-go-mitmproxy?style=social">
</a>

## 本仓库贡献者

<a href="https://github.com/SonicCloudOrg/sonic-go-mitmproxy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SonicCloudOrg/sonic-go-mitmproxy" />
</a>

## 介绍

> **sonic-go-mitmproxy** 是基于 [go-mitmproxy](https://github.com/lqqyt2423/go-mitmproxy) 建设的抓包代理助手。
> > Sonic组织也在持续将代理抓包的探索 **共建** 到go-mitmproxy上，以下是Sonic组织目前参与建设的提交：
> >1. 新增可自定义证书生成路径与cer文件生成。[feat: 增加自定义证书生成路径、增加cer文件生成](https://github.com/lqqyt2423/go-mitmproxy/commit/8522ebedb0cbd52fae1bef2423697a9eba5ca161)
> >2. 调整抓包页面顶部置顶样式调整。[feat: 顶部样式置顶调整](https://github.com/lqqyt2423/go-mitmproxy/commit/29cf59bbbf1f21ff0c524743f32b693f632f7af5)
> >3. 调整抓包页面表格自适应宽度。[feat: 更改表宽度自适应](https://github.com/lqqyt2423/go-mitmproxy/commit/6d5ce792ce8e76db92f915eb6969696be1f8224e)
>
> 后续会继续扩展更多新鲜好玩的功能，也欢迎大家一起参与建设~

## 快速使用
> 1. 选择下方 **PC对应的平台压缩包** 下载并解压到任意目录。如 **加速链接失效** 或 **想查找旧版本**，请前往 <a href="https://github.com/SonicCloudOrg/sonic-go-mitmproxy/releases" target="_blank">这里</a> 下载
>
> > **Linux:**
> >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_linux_arm64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_linux_arm64.tar.gz</a>
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_linux_x86.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_linux_x86.tar.gz</a>
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_linux_x86_64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_linux_x86_64.tar.gz</a>
>
>  > **Macosx:**
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_macosx_arm64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_macosx_arm64.tar.gz</a>
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_macosx_x86_64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_macosx_x86_64.tar.gz</a>
>
>  > **Windows:**
>  >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_windows_arm64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_windows_arm64.tar.gz</a>
> >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_windows_x86.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_windows_x86.tar.gz</a>
> >
>  > 👉<a href="https://download.fastgit.org/SonicCloudOrg/sonic-go-mitmproxy/releases/download/v1.3.3/sonic-go-mitmproxy_1.3.3_windows_x86_64.tar.gz" target="_blank">sonic-go-mitmproxy_1.3.3_windows_x86_64.tar.gz</a>
>
> 2. 执行指令（Windows不需要）。
> ```
> sudo chmod 777 sonic-go-mitmproxy
> ```
> 3. 执行指令有输出版本号即可（Windows不需要./）。
> ```
> ./sonic-go-mitmproxy -version
> ```
> 4. 🎉恭喜！您已经可以开始使用了！。
> 5. （附）如果想任意目录下都可以使用sonic-go-mitmproxy，需要将sonic-go-mitmproxy路径添加到系统环境变量PATH中。
> 6. 可用指令如下：
> 
> ```
> Usage of sonic-go-mitmproxy:
>   -addr string
>     	proxy listen addr (default ":9080")
>   -dump string
>     	dump filename
>   -dump_level int
>     	dump level: 0 - header, 1 - header + body
>   -mapper_dir string
>     	mapper files dirpath
>   -ssl_insecure
>     	not verify upstream server SSL/TLS certificates.
>   -version
>     	show version
>   -web_addr string
>     	web interface listen addr (default ":9081")
>   -cert_path string
>     	path of generate cert files
> ```
>

## 本文贡献者
<div class="cont">
<a href="https://gitee.com/ZhouYixun" target="_blank">
<img src="https://portrait.gitee.com/uploads/avatars/user/2698/8096045_ZhouYixun_1645499109.png!avatar100" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/sgm/re-sgm.md) 发起贡献改善此页

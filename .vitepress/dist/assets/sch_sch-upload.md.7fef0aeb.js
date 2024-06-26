import{_ as i,o as l,c as e,a as n}from"./app.57a3dbd1.js";const k=JSON.parse('{"title":"批量装包流程","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"插件必要配置","slug":"插件必要配置","link":"#插件必要配置","children":[]},{"level":2,"title":"将安装包上传至Sonic平台","slug":"将安装包上传至sonic平台","link":"#将安装包上传至sonic平台","children":[]},{"level":2,"title":"测试套件达到批量装包效果","slug":"测试套件达到批量装包效果","link":"#测试套件达到批量装包效果","children":[]}],"relativePath":"sch/sch-upload.md","lastUpdated":1716537034000}'),a={name:"sch/sch-upload.md"},o=n('<h1 id="批量装包流程" tabindex="-1">批量装包流程 <a class="header-anchor" href="#批量装包流程" aria-hidden="true">#</a></h1><p>这里是Sonic推荐批量装包流程。本文将讲述如何用sonic-ci-helper插件与Sonic结合。</p><div class="tip custom-block"><p class="custom-block-title">大致流程</p><ol><li>安装插件后，配置信息。</li><li>通过Jenkins将打包产物（apk或ipa）通过插件上传至Sonic。</li><li>通过插件触发上传后续的运行测试套件任务。</li><li>通过测试套件完成设备批量安装效果。</li></ol></div><h2 id="插件必要配置" tabindex="-1">插件必要配置 <a class="header-anchor" href="#插件必要配置" aria-hidden="true">#</a></h2><p>以下为使用插件前的必要配置，配置项名称会因为Jenkins的安装语言而有差异。</p><ol><li>前往【系统管理】-&gt;【系统设置】</li><li>将【Jenkins Location】的Jenkins URL填写正确，正常为 http://[Jenkins服务的ipv4]:[Jenkins服务的端口]/jenkins/</li><li>将【Sonic云测平台配置】的Sonic云测平台Url填写正确，例：http://SONIC_SERVER_HOST:SONIC_SERVER_PORT</li></ol><h2 id="将安装包上传至sonic平台" tabindex="-1">将安装包上传至Sonic平台 <a class="header-anchor" href="#将安装包上传至sonic平台" aria-hidden="true">#</a></h2><p>配置项名称会因为Jenkins的安装语言而有差异。</p><ol><li>在Jenkins原有打包Job中，在 <strong>Build</strong> 阶段选择【上传安装包至Sonic】。</li><li>填写安装包所在目录。例您的安装包在/abc/def/sonic.apk，那么填写/abc/def。</li><li>选择对应的项目。（如果遇到报错，可能是因为上方的Sonic Url配置不正确）。</li><li>输入鉴权Token，可前往Sonic平台右上角用户头像处生成填入。</li><li>（附）如果需要上传包后触发测试套件，可以点击【高级/Advance】输入测试套件id。</li><li>点击保存，触发构建，成功后可以前往Sonic对应项目中的安装包列表信息查看。</li></ol><h2 id="测试套件达到批量装包效果" tabindex="-1">测试套件达到批量装包效果 <a class="header-anchor" href="#测试套件达到批量装包效果" aria-hidden="true">#</a></h2><ol><li>新增用例。</li><li>测试步骤中选择【安装应用】-&gt;【已有安装包列表安装】即可。</li><li>自动检测对应平台，默认选取最新包，您也可以加上分支名进行筛选。</li><li>将用例添加到测试套件中。</li><li>将测试套件id添加到Jenkins插件中。</li></ol>',11),c=[o];function s(t,r,d,h,p,_){return l(),e("div",null,c)}const u=i(a,[["render",s]]);export{k as __pageData,u as default};

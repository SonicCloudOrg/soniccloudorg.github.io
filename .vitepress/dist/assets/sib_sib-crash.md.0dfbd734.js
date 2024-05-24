import{_ as s,o as a,c as t,a as e}from"./app.57a3dbd1.js";const _=JSON.parse('{"title":"崩溃日志收集","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"获取设备崩溃日志","slug":"获取设备崩溃日志","link":"#获取设备崩溃日志","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-crash.md","lastUpdated":1716537034000}'),n={name:"sib/sib-crash.md"},l=e(`<h1 id="崩溃日志收集" tabindex="-1">崩溃日志收集 <a class="header-anchor" href="#崩溃日志收集" aria-hidden="true">#</a></h1><p>崩溃信息的获取与筛选。</p><h2 id="获取设备崩溃日志" tabindex="-1">获取设备崩溃日志 <a class="header-anchor" href="#获取设备崩溃日志" aria-hidden="true">#</a></h2><p>获取设备上已有的崩溃日志。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crash</span></span>
<span class="line"></span></code></pre></div><hr><p>如果想保留设备上的崩溃报告，仅仅复制到本地，可以加上 -k 选项。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span></span>
<span class="line"></span></code></pre></div><hr><p>如果想指定崩溃日志拉取到本地的路径，可以加上 -p 选项。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./myDic</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-k</td><td>--keep</td><td></td><td>仅仅复制崩溃报告到本地，不删除设备上已有的崩溃报告</td></tr><tr><td>-p</td><td>--path</td><td>string</td><td>复制到本地的路径</td></tr><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,16),p=[l];function d(o,r,c,i,h,C){return a(),t("div",null,p)}const y=s(n,[["render",d]]);export{_ as __pageData,y as default};

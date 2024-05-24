import{_ as s,o as t,c as a,a as e}from"./app.57a3dbd1.js";const b=JSON.parse('{"title":"挂载开发者镜像","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"马上挂载","slug":"马上挂载","link":"#马上挂载","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-mount.md","lastUpdated":1716537034000}'),n={name:"sib/sib-mount.md"},l=e(`<h1 id="挂载开发者镜像" tabindex="-1">挂载开发者镜像 <a class="header-anchor" href="#挂载开发者镜像" aria-hidden="true">#</a></h1><p>给您的设备挂载开发者镜像。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>一般地，sonic-agent会自动帮您挂载开发者镜像，但是特殊情况下发生报错时或者单独使用sib时，用户也可以使用本章指令进行手动挂载。</p></div><h2 id="马上挂载" tabindex="-1">马上挂载 <a class="header-anchor" href="#马上挂载" aria-hidden="true">#</a></h2><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mount</span></span>
<span class="line"></span></code></pre></div><p>一般地，如果指定设备，可以加上 -u</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxxxxxxx</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,10),o=[l];function d(i,p,c,r,h,u){return t(),a("div",null,o)}const C=s(n,[["render",d]]);export{b as __pageData,C as default};

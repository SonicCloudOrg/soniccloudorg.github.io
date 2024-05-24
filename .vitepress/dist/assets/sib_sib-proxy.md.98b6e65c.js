import{_ as t,o as a,c as e,a as s}from"./app.57a3dbd1.js";const C=JSON.parse('{"title":"代理转发","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"转发TCP端口","slug":"转发tcp端口","link":"#转发tcp端口","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]},{"level":2,"title":"转发unix服务","slug":"转发unix服务","link":"#转发unix服务","children":[]}],"relativePath":"sib/sib-proxy.md","lastUpdated":1716537034000}'),n={name:"sib/sib-proxy.md"},d=s(`<h1 id="代理转发" tabindex="-1">代理转发 <a class="header-anchor" href="#代理转发" aria-hidden="true">#</a></h1><p>系统服务端口或unix进程转发。</p><h2 id="转发tcp端口" tabindex="-1">转发TCP端口 <a class="header-anchor" href="#转发tcp端口" aria-hidden="true">#</a></h2><p>转发TCP服务请求。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8100</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8101</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-r</td><td>--remote-port</td><td>int</td><td>设备TCP服务端口</td></tr><tr><td>-l</td><td>--local-port</td><td>int</td><td>转发到本机的端口</td></tr><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table><h2 id="转发unix服务" tabindex="-1">转发unix服务 <a class="header-anchor" href="#转发unix服务" aria-hidden="true">#</a></h2><p>暂未开放。</p>`,10),r=[d];function l(o,i,p,c,h,u){return a(),e("div",null,r)}const b=t(n,[["render",l]]);export{C as __pageData,b as default};

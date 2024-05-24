import{_ as s,o as a,c as n,a as l}from"./app.57a3dbd1.js";const h=JSON.parse('{"title":"进程相关","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"查看当前设备Process","slug":"查看当前设备process","link":"#查看当前设备process","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-ps.md","lastUpdated":1716537034000}'),p={name:"sib/sib-ps.md"},o=l(`<h1 id="进程相关" tabindex="-1">进程相关 <a class="header-anchor" href="#进程相关" aria-hidden="true">#</a></h1><p>这里是iOS运行进程相关内容。</p><h2 id="查看当前设备process" tabindex="-1">查看当前设备Process <a class="header-anchor" href="#查看当前设备process" aria-hidden="true">#</a></h2><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><p>您会获得类似的输出</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipelined</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">431</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/libexec/pipelined</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2022</span><span style="color:#C3E88D;">-</span><span style="color:#F78C6C;">07</span><span style="color:#C3E88D;">-</span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">07</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">UTC</span></span>
<span class="line"></span></code></pre></div><hr><p>一般地，如果想输出格式更友好，可以加上 -f</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span></code></pre></div><p>您会获得类似的输出</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#89DDFF;">               &quot;</span><span style="color:#C3E88D;">isApplication</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">               &quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">calaccessd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">               &quot;</span><span style="color:#C3E88D;">pid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">120</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">               &quot;</span><span style="color:#C3E88D;">realAppName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/System/Library/PrivateFrameworks/CalendarDaemon.framework/Support/calaccessd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">               &quot;</span><span style="color:#C3E88D;">startDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-07-20T15:39:00Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-j</td><td>--json</td><td></td><td>json格式输出</td></tr><tr><td>-f</td><td>--format</td><td></td><td>格式化输出</td></tr><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,14),t=[o];function e(c,r,i,d,C,y){return a(),n("div",null,t)}const F=s(p,[["render",e]]);export{h as __pageData,F as default};

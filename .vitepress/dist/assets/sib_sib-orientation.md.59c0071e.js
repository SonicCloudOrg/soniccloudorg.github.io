import{_ as t,o as a,c as s,a as n}from"./app.57a3dbd1.js";const u=JSON.parse('{"title":"屏幕旋转方向","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"获取屏幕旋转方向","slug":"获取屏幕旋转方向","link":"#获取屏幕旋转方向","children":[]},{"level":2,"title":"屏幕方向结果对应","slug":"屏幕方向结果对应","link":"#屏幕方向结果对应","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-orientation.md","lastUpdated":1716537034000}'),e={name:"sib/sib-orientation.md"},d=n(`<h1 id="屏幕旋转方向" tabindex="-1">屏幕旋转方向 <a class="header-anchor" href="#屏幕旋转方向" aria-hidden="true">#</a></h1><p>获取手机屏幕旋转方向。</p><h2 id="获取屏幕旋转方向" tabindex="-1">获取屏幕旋转方向 <a class="header-anchor" href="#获取屏幕旋转方向" aria-hidden="true">#</a></h2><p>获取当前屏幕旋转方向。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">orientation</span></span>
<span class="line"></span></code></pre></div><p>您会获得类似的输出</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">orientation:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><hr><p>一般地，如果想持续监听，可以加上 -w 选项。 输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">orientation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span></span>
<span class="line"></span></code></pre></div><p>您会获得类似的输出</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">orientation:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">orientation:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre></div><h2 id="屏幕方向结果对应" tabindex="-1">屏幕方向结果对应 <a class="header-anchor" href="#屏幕方向结果对应" aria-hidden="true">#</a></h2><table><thead><tr><th>旋转结果</th><th>对应方向</th><th>方向描述</th></tr></thead><tbody><tr><td>0</td><td>unknown</td><td>设备的方向未知。</td></tr><tr><td>1</td><td>portrait</td><td>设备处于纵向模式，设备直立，底部有 Home 按钮。(0°)</td></tr><tr><td>2</td><td>portraitUpsideDown</td><td>该设备处于纵向模式，但上下颠倒，设备直立，Home 按钮位于顶部。(180°)</td></tr><tr><td>3</td><td>landscapeRight</td><td>设备处于横向模式，设备直立，Home 按钮位于右侧。(270°)</td></tr><tr><td>4</td><td>landscapeLeft</td><td>设备处于横向模式，设备直立，Home 按钮位于左侧。(90°)</td></tr></tbody></table><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-w</td><td>--watch</td><td></td><td>持续监听屏幕旋转</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,17),l=[d];function o(p,r,i,c,h,b){return a(),s("div",null,l)}const y=t(e,[["render",o]]);export{u as __pageData,y as default};

import{_ as s,o as a,c as n,a as o}from"./app.57a3dbd1.js";const A=JSON.parse('{"title":"实时输入法","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"启用Sonic输入法","slug":"启用sonic输入法","link":"#启用sonic输入法","children":[]},{"level":2,"title":"直接使用","slug":"直接使用","link":"#直接使用","children":[]},{"level":2,"title":"禁用Sonic输入法","slug":"禁用sonic输入法","link":"#禁用sonic输入法","children":[]}],"relativePath":"saa/saa-keyboard.md","lastUpdated":1716537034000}'),l={name:"saa/saa-keyboard.md"},e=o(`<h1 id="实时输入法" tabindex="-1">实时输入法 <a class="header-anchor" href="#实时输入法" aria-hidden="true">#</a></h1><h2 id="启用sonic输入法" tabindex="-1">启用Sonic输入法 <a class="header-anchor" href="#启用sonic输入法" aria-hidden="true">#</a></h2><p>先启用Sonic输入法</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.cloud.sonic.android/.keyboard.SonicKeyboard</span></span>
<span class="line"></span></code></pre></div><p>再设置Sonic输入法为当前输入法</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.cloud.sonic.android/.keyboard.SonicKeyboard</span></span>
<span class="line"></span></code></pre></div><h2 id="直接使用" tabindex="-1">直接使用 <a class="header-anchor" href="#直接使用" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">broadcast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SONIC_KEYBOARD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--es</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;xxxxx&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>输入时有特殊用法，如果输入内容为以下字符，会有不同效果:</p><table><thead><tr><th>输入内容</th><th>效果</th></tr></thead><tbody><tr><td>其他任意字符</td><td>输入对应任意字符</td></tr><tr><td>CODE_AC_ENTER</td><td>回车</td></tr><tr><td>CODE_AC_BACK</td><td>删除一个字符</td></tr><tr><td>CODE_AC_CLEAN</td><td>清空输入框</td></tr></tbody></table><p>例如输入CODE_AC_CLEAN，执行步骤时就会清空输入框，再输入sonic，就可以看到输入框输入了sonic。</p><h2 id="禁用sonic输入法" tabindex="-1">禁用Sonic输入法 <a class="header-anchor" href="#禁用sonic输入法" aria-hidden="true">#</a></h2><p>直接使用ADB指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.cloud.sonic.android/.keyboard.SonicKeyboard</span></span>
<span class="line"></span></code></pre></div>`,14),t=[e];function p(c,r,i,d,C,y){return a(),n("div",null,t)}const D=s(l,[["render",p]]);export{A as __pageData,D as default};

import{_ as s,o as a,c as l,a as n}from"./app.57a3dbd1.js";const o="/assets/offsets.c97725dd.png",d=JSON.parse('{"title":"POCO 控件","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"注意事项与介绍","slug":"注意事项与介绍","link":"#注意事项与介绍","children":[]},{"level":2,"title":"POCO 定位语法","slug":"poco-定位语法","link":"#poco-定位语法","children":[{"level":3,"title":"poco 类型定位","slug":"poco-类型定位","link":"#poco-类型定位","children":[]},{"level":3,"title":"xpath 类型定位","slug":"xpath-类型定位","link":"#xpath-类型定位","children":[]},{"level":3,"title":"cssSelector 类型定位","slug":"cssselector-类型定位","link":"#cssselector-类型定位","children":[]}]},{"level":2,"title":"关于非全屏应用定位偏移","slug":"关于非全屏应用定位偏移","link":"#关于非全屏应用定位偏移","children":[]},{"level":2,"title":"偏移量设置","slug":"偏移量设置","link":"#偏移量设置","children":[]}],"relativePath":"doc/doc-poco.md","lastUpdated":1716537034000}'),p={name:"doc/doc-poco.md"},e=n(`<h1 id="poco-控件" tabindex="-1">POCO 控件 <a class="header-anchor" href="#poco-控件" aria-hidden="true">#</a></h1><p>使用 POCO 控件相关步骤的注意事项以及教学。</p><h2 id="注意事项与介绍" tabindex="-1">注意事项与介绍 <a class="header-anchor" href="#注意事项与介绍" aria-hidden="true">#</a></h2><p>目前 Sonic 已支持游戏自动化的引擎有：</p><ol><li>Unity3D</li><li>UE4</li><li>Egret</li><li>Cocos2dx-js</li><li>Cocos2dx-lua</li><li>Cocos2dx-c++</li><li>cocos-creator</li></ol><div class="tip custom-block"><p class="custom-block-title">注意</p><p>接入 POCO-SDK 时，如果有更改默认的 socket 启动端口，可以在【启动 PocoDriver】步骤中指定连接端口的值。</p></div><p>使用 POCO 相关步骤时，需确保：</p><ol><li>被测控件类型为游戏控件</li><li>对应游戏包已经接入 POCO-SDK。 👉<a href="https://poco.readthedocs.io/en/latest/source/doc/integration.html" target="_blank" rel="noreferrer">POCO 官方接入指南</a></li><li>已经打开接入 SDK 的对应引擎页面。</li></ol><h2 id="poco-定位语法" tabindex="-1">POCO 定位语法 <a class="header-anchor" href="#poco-定位语法" aria-hidden="true">#</a></h2><p>poco 控件默认属性如下：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> layer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> tag</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> text</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> texture</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> _instanceId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> _ilayer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> type</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ZOrders</span><span style="color:#A6ACCD;"> zOrders</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> anchorPoint</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> scale</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> pos</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> clickable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZOrders</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> global</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> local</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>POCO 游戏控件目前支持三种定位方式:</p><ol><li>poco 类型</li><li>xpath 类型</li><li>cssSelector 类型</li></ol><h3 id="poco-类型定位" tabindex="-1">poco 类型定位 <a class="header-anchor" href="#poco-类型定位" aria-hidden="true">#</a></h3><p>定位时，需要以 poco 开头如：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>poco 后的括号内可填入属性值进行筛选，不填属性值默认查找 name 字段。如：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">_instanceId</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">visible</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">true</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>poco 后可以接上 child 来搜索子控件列表，默认搜索第一个结果，如果指定了数组 index，会获取数组 index 下标的控件，当子控件数组长度小于 index 时，自动获取最末位。如：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">child</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Star</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="xpath-类型定位" tabindex="-1">xpath 类型定位 <a class="header-anchor" href="#xpath-类型定位" aria-hidden="true">#</a></h3><p>只需跟普通 xpath 相同语法即可，如：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">//*[@text=&quot;Hello&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="cssselector-类型定位" tabindex="-1">cssSelector 类型定位 <a class="header-anchor" href="#cssselector-类型定位" aria-hidden="true">#</a></h3><p>只需跟普通 cssSelector 相同语法即可，如：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Root </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Camera </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span></span>
<span class="line"></span></code></pre></div><h2 id="关于非全屏应用定位偏移" tabindex="-1">关于非全屏应用定位偏移 <a class="header-anchor" href="#关于非全屏应用定位偏移" aria-hidden="true">#</a></h2><p>有的应用不支持全屏展示，导致出现黑边而引起定位偏差。</p><p>Sonic 已经兼容自动了大部分机型的非全屏偏移，如果自动兼容效果不够友好：</p><ol><li>先关闭手机的<strong>虚拟键盘</strong>，查看应用是否能占用全屏。</li><li>如果仍然出现黑边，可以使用【设置偏移量】步骤。</li></ol><h2 id="偏移量设置" tabindex="-1">偏移量设置 <a class="header-anchor" href="#偏移量设置" aria-hidden="true">#</a></h2><p>偏移量设置有四个值，分别是：</p><ol><li>offsetWidth</li><li>offsetHeight</li><li>windowWidth</li><li>windowHeight</li></ol><p>其代表的内容如下图所述：</p><p><img src="`+o+'" alt="offsets"></p><p>例如分辨率是 1080x2220，上方黑边高度为 100px，屏幕高度为 2020px，底部黑边高度为 100px，因此四个值为（0, 100, 1080, 2020）</p>',36),t=[e];function c(r,i,y,C,D,A){return a(),l("div",null,t)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};

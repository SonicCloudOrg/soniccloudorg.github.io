import{_ as s,o as n,c as a,a as o}from"./app.57a3dbd1.js";const l="/assets/offsets.c97725dd.png",d=JSON.parse('{"title":"POCO elements","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Precautions and introduction","slug":"precautions-and-introduction","link":"#precautions-and-introduction","children":[]},{"level":2,"title":"POCO positioning syntax","slug":"poco-positioning-syntax","link":"#poco-positioning-syntax","children":[{"level":3,"title":"poco type positioning","slug":"poco-type-positioning","link":"#poco-type-positioning","children":[]},{"level":3,"title":"xpath type positioning","slug":"xpath-type-positioning","link":"#xpath-type-positioning","children":[]},{"level":3,"title":"cssSelector type positioning","slug":"cssselector-type-positioning","link":"#cssselector-type-positioning","children":[]}]},{"level":2,"title":"About non-full screen application positioning offset","slug":"about-non-full-screen-application-positioning-offset","link":"#about-non-full-screen-application-positioning-offset","children":[]},{"level":2,"title":"Offset setting","slug":"offset-setting","link":"#offset-setting","children":[]}],"relativePath":"en/doc/doc-poco.md","lastUpdated":1716537034000}'),e={name:"en/doc/doc-poco.md"},t=o(`<h1 id="poco-elements" tabindex="-1">POCO elements <a class="header-anchor" href="#poco-elements" aria-hidden="true">#</a></h1><p>Precautions and teaching of steps related to using POCO elements.</p><h2 id="precautions-and-introduction" tabindex="-1">Precautions and introduction <a class="header-anchor" href="#precautions-and-introduction" aria-hidden="true">#</a></h2><p>The engines currently supported by Sonic for game automation are:</p><ol><li>Unity3D</li><li>UE4</li><li>Egret</li><li>Cocos2dx-js</li><li>Cocos2dx-lua</li><li>Cocos2dx-c++</li><li>cocos-creator</li></ol><div class="tip custom-block"><p class="custom-block-title">note</p><p>When accessing POCO-SDK, if you change the default socket startup port, you can specify the value of the connection port in the [Start PocoDriver] step.</p></div><p>When using POCO-related steps, make sure that:</p><ol><li>The tested element type is a game element</li><li>The corresponding game package has been connected to POCO-SDK. 👉<a href="https://poco.readthedocs.io/en/latest/source/doc/integration.html" target="_blank" rel="noreferrer">POCO Official Access Guide</a></li><li>The corresponding engine page connected to the SDK has been opened.</li></ol><h2 id="poco-positioning-syntax" tabindex="-1">POCO positioning syntax <a class="header-anchor" href="#poco-positioning-syntax" aria-hidden="true">#</a></h2><p>The default properties of poco elements are as follows:</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> layer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> tag</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> text</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> texture</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> _instanceId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> Integer_ilayer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> type</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ZOrders</span><span style="color:#A6ACCD;"> zOrders</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> anchorPoint</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> scale</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Float</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> pos</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> clickable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZOrders</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> global</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> local</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>POCO game elements currently support three positioning methods:</p><ol><li>poco type</li><li>xpath type</li><li>cssSelector type</li></ol><h3 id="poco-type-positioning" tabindex="-1">poco type positioning <a class="header-anchor" href="#poco-type-positioning" aria-hidden="true">#</a></h3><p>When positioning, it needs to start with poco, such as:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>You can fill in the attribute value in the parentheses after poco to filter. If you don&#39;t fill in the attribute value, the name field will be searched by default. like:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">_instanceId</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">visible</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">true</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>After poco, child can be connected to search the child element list. By default, the first result is searched. If the array index is specified, the element subscripted by the array index will be obtained. When the child element array length is less than index, the last digit will be automatically obtained. like:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">poco</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">child</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Star</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="xpath-type-positioning" tabindex="-1">xpath type positioning <a class="header-anchor" href="#xpath-type-positioning" aria-hidden="true">#</a></h3><p>Just use the same syntax as ordinary xpath, such as:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">//*[@text=&quot;Hello&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="cssselector-type-positioning" tabindex="-1">cssSelector type positioning <a class="header-anchor" href="#cssselector-type-positioning" aria-hidden="true">#</a></h3><p>Just use the same syntax as ordinary cssSelector, such as:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Root </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Camera </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span></span>
<span class="line"></span></code></pre></div><h2 id="about-non-full-screen-application-positioning-offset" tabindex="-1">About non-full screen application positioning offset <a class="header-anchor" href="#about-non-full-screen-application-positioning-offset" aria-hidden="true">#</a></h2><p>Some applications do not support full-screen display, resulting in black borders and positioning deviation.</p><p>Sonic has been compatible with the non-full-screen offset of most models automatically. If the automatic compatibility effect is not friendly enough:</p><ol><li>Close the <strong>virtual keyboard</strong> of the phone first, and check whether the application can occupy the full screen.</li><li>If the black border still appears, you can use the [Set Offset] step.</li></ol><h2 id="offset-setting" tabindex="-1">Offset setting <a class="header-anchor" href="#offset-setting" aria-hidden="true">#</a></h2><p>The offset setting has four values, which are:</p><ol><li>offsetWidth</li><li>offsetHeight</li><li>windowWidth</li><li>windowHeight</li></ol><p>Its representative content is described in the following figure:</p><p><img src="`+l+'" alt="offsets"></p><p>For example, the resolution is 1080x2220, the height of the upper black border is 100px, the height of the screen is 2020px, and the height of the bottom black border is 100px, so the four values are (0, 100, 1080, 2020)</p>',36),p=[t];function c(i,r,y,C,D,A){return n(),a("div",null,p)}const F=s(e,[["render",c]]);export{d as __pageData,F as default};

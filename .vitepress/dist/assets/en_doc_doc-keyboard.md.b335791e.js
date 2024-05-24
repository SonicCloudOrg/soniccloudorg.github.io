import{_ as t,o as e,c as n,a as i}from"./app.57a3dbd1.js";const m=JSON.parse('{"title":"Sonic input","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Precautions and introduction","slug":"precautions-and-introduction","link":"#precautions-and-introduction","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[]},{"level":2,"title":"Special usage","slug":"special-usage","link":"#special-usage","children":[]}],"relativePath":"en/doc/doc-keyboard.md","lastUpdated":1716537034000}'),a={name:"en/doc/doc-keyboard.md"},o=i('<h1 id="sonic-input" tabindex="-1">Sonic input <a class="header-anchor" href="#sonic-input" aria-hidden="true">#</a></h1><p>Instructions using the Sonic input method.</p><h2 id="precautions-and-introduction" tabindex="-1">Precautions and introduction <a class="header-anchor" href="#precautions-and-introduction" aria-hidden="true">#</a></h2><p>This function can only be used after v2.0.5. When applied to automation, it is mainly used for:</p><ol><li>For controls that cannot be entered with automated sendKeys</li><li>Input for game controls</li><li>In some cases, the input box cannot use automatic input, but only the input method</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In order to facilitate switching back to the system input method after the mobile phone is separated from Sonic, after upgrading to Sonic v2.3.0, you can directly click the gray area below the Sonic input method to quickly jump to the system input method setting page to switch input methods.</p></div><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-hidden="true">#</a></h2><p>Normal text can be entered directly, and the input is [append] input.</p><h2 id="special-usage" tabindex="-1">Special usage <a class="header-anchor" href="#special-usage" aria-hidden="true">#</a></h2><p>There are special usages when inputting, if the input content is the following characters, there will be different effects:</p><table><thead><tr><th>input content</th><th>effect</th></tr></thead><tbody><tr><td>Any other character</td><td>Input corresponds to any character</td></tr><tr><td>CODE_AC_ENTER</td><td>Enter</td></tr><tr><td>CODE_AC_BACK</td><td>delete a character</td></tr><tr><td>CODE_AC_CLEAN</td><td>Clear the input box</td></tr></tbody></table><p>For example, enter CODE_AC_CLEAN, the input box will be cleared when the steps are executed, and then input sonic, you can see that the input box has entered sonic.</p>',12),r=[o];function c(s,d,u,h,l,p){return e(),n("div",null,r)}const b=t(a,[["render",c]]);export{m as __pageData,b as default};

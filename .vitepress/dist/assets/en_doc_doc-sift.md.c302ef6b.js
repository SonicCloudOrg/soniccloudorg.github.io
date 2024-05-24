import{_ as e,o as t,c as i,a}from"./app.57a3dbd1.js";const n="/assets/tem.c1c4238f.png",f=JSON.parse('{"title":"Image recognition class","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"Image click","slug":"image-click","link":"#image-click","children":[]},{"level":2,"title":"Similarity matching","slug":"similarity-matching","link":"#similarity-matching","children":[]}],"relativePath":"en/doc/doc-sift.md","lastUpdated":1716537034000}'),o={name:"en/doc/doc-sift.md"},r=a('<h1 id="image-recognition-class" tabindex="-1">Image recognition class <a class="header-anchor" href="#image-recognition-class" aria-hidden="true">#</a></h1><p>Precautions and teaching for using image recognition operations.</p><h2 id="precautions" tabindex="-1">Precautions <a class="header-anchor" href="#precautions" aria-hidden="true">#</a></h2><p>The image library currently used by Sonic is based on <a href="https://github.com/SonicCloudOrg/sonic-vision-core" target="_blank" rel="noreferrer">sonic-vision-core</a>. If your image type operation reports an error similar to missing dependencies, please check whether the jar package of the Agent matches your platform.</p><div class="warning custom-block"><p class="custom-block-title">note</p><p>It is known that some Mac arm64 systems will have problems using this function. You can try to download the Mac x86_64 Agent and replace the original arm64 jar with the Mac x86_64 jar (only the jar can be replaced, and there is no need to replace the binary files under plugins, otherwise the The plugin failed to use because there is no corresponding system architecture)</p></div><h2 id="image-click" tabindex="-1">Image click <a class="header-anchor" href="#image-click" aria-hidden="true">#</a></h2><p>When using image clicks, make sure that:</p><ol><li>The picture is complex enough, not a single simple picture. <strong>The more complicated the picture, the higher the recognition accuracy</strong>.</li><li>The picture will not change much in the future, only the location may change.</li></ol><p>Instructions:</p><ol><li>You can directly obtain the current real-time element tree on the [Element] page, and use [Snapshot] to save the screenshot information of the element in the corresponding element details.</li><li>Select the [Image click] step, and select the corresponding element.</li><li>If it is a custom screenshot information, you can directly go to the element element page to upload the picture yourself, and then add it to the project.</li></ol><p>The effect is as shown in the figure:</p><p><img src="'+n+'" alt="tem"></p><div class="warning custom-block"><p class="custom-block-title">default image recognition algorithm sequence</p><p>SIFT algorithm -&gt; AKAZE algorithm -&gt; template matching method</p></div><h2 id="similarity-matching" tabindex="-1">Similarity matching <a class="header-anchor" href="#similarity-matching" aria-hidden="true">#</a></h2><p>That is, it is asserted how similar the corresponding picture is to the screenshot of the current device. An exception will be thrown if it is not within the expected range.</p>',15),c=[r];function s(l,h,m,d,p,g){return t(),i("div",null,c)}const _=e(o,[["render",s]]);export{f as __pageData,_ as default};

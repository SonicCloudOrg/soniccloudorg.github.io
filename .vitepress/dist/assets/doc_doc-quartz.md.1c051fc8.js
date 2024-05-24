import{_ as l,o as i,c as e,a}from"./app.57a3dbd1.js";const f=JSON.parse('{"title":"定时任务","description":"","frontmatter":{"contributors":["ZhouYixun","小蓝枣"]},"headers":[{"level":2,"title":"添加定时任务","slug":"添加定时任务","link":"#添加定时任务","children":[]},{"level":2,"title":"关闭/开启定时任务","slug":"关闭-开启定时任务","link":"#关闭-开启定时任务","children":[]},{"level":2,"title":"立即运行定时任务","slug":"立即运行定时任务","link":"#立即运行定时任务","children":[]},{"level":2,"title":"编辑定时任务","slug":"编辑定时任务","link":"#编辑定时任务","children":[]},{"level":2,"title":"删除定时任务","slug":"删除定时任务","link":"#删除定时任务","children":[]}],"relativePath":"doc/doc-quartz.md","lastUpdated":1716537034000}'),r={name:"doc/doc-quartz.md"},t=a('<h1 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-hidden="true">#</a></h1><p>对项目进行定时任务管理。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>假如部署 sonic-server 时将 <strong>sonic-server-controller</strong> 多节点部署，同一个定时任务在不同sonic-server-controller节点也不会重复下发，Quartz会自动确保只会触发一次。</p></div><h2 id="添加定时任务" tabindex="-1">添加定时任务 <a class="header-anchor" href="#添加定时任务" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试用例管理】选项。</li><li>点击【定时任务】选项。</li><li>点击【添加定时任务】按钮。</li><li>输入定时任务名和Corn表达式，并选择需要定时执行的测试套件。</li><li>点击【确定】按钮。</li><li>定时任务添加完毕！</li></ol><h2 id="关闭-开启定时任务" tabindex="-1">关闭/开启定时任务 <a class="header-anchor" href="#关闭-开启定时任务" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试用例管理】选项。</li><li>点击【定时任务】选项。</li><li>点击目标任务的【状态】开关。</li><li>开关绿底色为启用状态，开关灰底色为停用状态，同时切换过程会有响应提示。</li></ol><h2 id="立即运行定时任务" tabindex="-1">立即运行定时任务 <a class="header-anchor" href="#立即运行定时任务" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试用例管理】选项。</li><li>点击【定时任务】选项。</li><li>点击目标任务的【立即运行】按钮。</li><li>开始运行当前任务。</li></ol><h2 id="编辑定时任务" tabindex="-1">编辑定时任务 <a class="header-anchor" href="#编辑定时任务" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试用例管理】选项。</li><li>点击【定时任务】选项。</li><li>点击目标任务的【编辑】按钮。</li><li>编辑你需要更改的信息。</li><li>点击【确定】按钮。</li><li>定时任务编辑完毕！</li></ol><h2 id="删除定时任务" tabindex="-1">删除定时任务 <a class="header-anchor" href="#删除定时任务" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试用例管理】选项。</li><li>点击【定时任务】选项。</li><li>点击目标任务的【删除】按钮。</li><li>再次点击【确定】按钮。</li><li>定时任务删除完毕！</li></ol>',13),o=[t];function d(n,s,c,h,_,u){return i(),e("div",null,o)}const v=l(r,[["render",d]]);export{f as __pageData,v as default};

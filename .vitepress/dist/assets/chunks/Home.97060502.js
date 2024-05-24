import{S as g}from"./SectionBox.23c1a04e.js";import{g as M,q as G,o as r,c as m,b as t,F as Q,j as I,t as C,d as A,w as o,u as n,r as a,e as i,p as y,k as O,_ as x}from"../app.57a3dbd1.js";const Z="/assets/demo.8f946f13.mp4",T="/assets/mtsc.3e94e944.png",U="/assets/gvp.536b4b91.png",v="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAM1BMVEX///893IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ6Mze+AAAAEXRSTlMAEGCAIHBA0P8w8KDgwFCwkG0VS0IAAAMCSURBVHgB7MGBAAAAAICg/akXqQIAAAAAAACmxg6SJARhKIAGgvABUO9/2unuKRcsukY0MOZdwBSGT+A/GcuWZnIL+7s1BwDB0DQxAch0S8Yb0zQFb5HuqHhLjiZhfLBA0cg0h0n4sHSHxS9PU2R8JEMSSx1ohohfC93jIfHD5FdI5o8JWMV60SRMij1T8LHJpRAcCZj2oXYBhnHHL5VttSlxV4zopi4kQCCmROJTdGUqSdkFYm/60XvE3j586MgkZxkde4wB42RpOk6cwy8esrdXGmLrzye52HPeMm/1JQFAqS87s/dGfkkEfmC0XAvwXc38tfQwqvn4a+yZlSvOKdsSv2/zOCuUPAf0Sdvi+uNOLv7XnHBJ2OOko+vovHsVHwq7drcsw0caxwW3Vdvk0tg0NX6DjMRu9OB7jOkFglLbdPIYw7jhV095Ow3jCwbZHI3hKsZJTAMYxljFK+mM1mZIktkxQ1pJTiw4qFlsxjwlkgRTMdWiqjXkWsRivuAE3pamS1HgJXM+S1eZgH9jFdYMsMKagaywZiArrBnICmvu3o0BUFd1xkOs88e6mWejxXMUQ6fEhAcJ8x83Zj2JVBz0bMYFT5Mc/SHieYKKk7Bz4tvxSPHMY7+qBin4Q9g5F4iqO2/pRoPwuQdZHyAmO3qz5eqju0tnn1EyhNizCVDpi+380VQhYjl/EPtLu7A0PwUS6pXPt2rPG9smf0CXCxcC25WVFgK6zohkLsSdfKInanB/7Fk8vehk+s8VLz8MtlXk7hNm7RzGKwTYvmUr/aN/MuJDSunc2rZ/jN7kr2R73820XHjoyMdauwAhe1tz174yOKVYejGcICas9OIYp+RrWVBrgLBay6W8CVBiabahEkH0Zjj/tligQxM30KMo7A4g6uqOJj8cNKnHyaKKkbruzX/5TVBl1xR4h6CwpYFjlFbF65nw2vsttNmIPLQJRBbqEDHUiVShzkoB6jBBn52gT1VatD6J/E97cEADAACAMMj+qc3xDQhaBgAAAAAAABybPXKYz8h51AAAAABJRU5ErkJggg==",V="/assets/APPLE.e4bdf72e.jpg",J="/assets/CAR.1ab3f8ed.png",H="/assets/WATCH.19802696.png",f="/assets/team.ba4db59f.png",N="/assets/team2.2b6c4d13.png",D="/assets/team3.1e46bd26.png",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAADJlJREFUeF7tnG2MXGUZhp/n7K6NltLO7EJBpFaYs61fMYGG1hgNBlExwagB/FESgyaUPbOFiDEhGkNrjPzQWOnHTJuIEiH8cFNJjLGGVNqooZL6BxSlO7PQBlPSsHu2DcH0a89jdiuKH9s9z857Pt7z3JPsr73P8773/d7XTk/n7DLhhQSQwLwJMLJBAkhg/gQACNqBBC6SAABBPZAAAEEHkMDiEsA7yOJyw1VGEgAgRg4aNheXAABZXG64ykgCNgD5mfTVp7qfIOJVJLRKSFYR0ewXXkTERKeZ+GgicoyC5Chz8Hx8T/gXhDOXTTVfy1vHan189mYivoVENhLRQDWdZubqBSJ5MpDg6clm40Bmq5R8cOUAGXrktWVy5uSoEDWJ6KqS5+/H9pgOkdC2OArH/Niwu11WCpDBVqcpIqPEvNZdRJj0lgTGKKFt8Wh4yEoqlQBkZbt7+TmRx4jok1YOrkifTPKtqWj4O0XuIa+1vQek1u5+gBPZT0wr8woN68wlsC+Ows9UPQuvARncOb5eAv5D1Q+pxP5OxVG4osT763lr3gIytOfolcnMueM9J4ABvSbwbByFG3odUtbrvQRk5feeW3pu6Tt+Q0TryxqsqX0xbYtHwvur6NlLQOrtzhgJ3VbFA/HWkyRb4+aaLd7uf56NewdIrdW5k4lm/8cKr3IlcDzoG1g3uWn1q+XaVm+78QuQ7Z0ltQF6hoWu6802rs4kAaYt8Ui4NZPZBQ31CpBau/MACz1UUFZYduEEKvcu4hcguzodZmosfE5QFJUAE987FTV2FLW+63W9AWRw98RNkiT7XQeAec4TqNQHiN4AUm93fkBCX3V+nBjoPAHpC1ZMb7r2lPPBBQz0B5BW9wiRDBeQEZZUJiAkG6ej4SeUl5VS7gUgje2dJXE/nS5lgtjU/yZQoQ8OvQDkn0/rnkAXvUlgbxyFlfgg1wtALts9Ec4kybg39TC/UT4cR40bqhCDF4AM7Z5YlyTJ4SoEbsID84l4pHFFFbx6AciKHZ0bgz4y+3vRPhYtjkIvurVQtl6YACALHWP5vg9AcjwTAJJj2I6WAiCOgkwzBoCkSalcGgCS43m4ACSZoY/nuGWvl+I+epCJbuzFBADpJT3lta4AObk5PKhc2qS81uocACAXjt7MTfrsOwgAScc7APl3TgAkXWdMqQAIADFVeK1ZAAJAtJ0xpQcgAMRU4bVmAQgA0XbGlB6AABBThdeaBSAARNsZU3oAAkBMFV5rFoAAEG1nTOkBCAAxVXitWQACQLSdMaUHIADEVOG1ZgEIANF2xpQegAAQU4XXmgUgAETbGVN6AAJATBVeaxaAABBtZ0zpAQgAMVV4rVkAAkC0nTGlByAAxFThtWYBCADRdsaUHoAAEFOF15oFIABE2xlTegACQEwVXmsWgAAQbWdM6QEIADFVeK1ZAAJAtJ0xpQcgAMRU4bVmAQgA0XbGlB6AABBThdeaBSAARNsZU3oAAkBMFV5rFoAAEG1nTOkBCAAxVXitWQACQLSdMaUHIADEVOG1ZgEIANF2xpQegAAQU4XXmgUgAETbGVN6AAJATBVeaxaAABBtZ0zpAQgAMVV4rVkAAkC0nTGlByAAxFThtWYBCADRdsaUHoAAEFOF15oFIABE2xlTegACQEwVXmsWgAAQbWdM6QEIADFVeK1ZAAJAtJ0xpQcgAMRU4bVmAQgA0XbGlB6AABBThdeaBSAARNsZU3oAAkBMFV5rFoAAEG1nTOkBCAAxVXitWQACQLSdMaUHIADEVOG1ZgEIANF2xpQegAAQU4XXmgUgAETbGVN6AAJATBVeaxaAABBtZ0zpAQgAMVV4rVkAAkC0nTGlByAAxFThtWYBCADRdsaUHoAAEFOF15oFIABE2xlTegACQEwVXmsWgAAQbWdM6QEIADFVeK1ZAAJAtJ0xpQcgAMRU4bVmAQgA0XbGlB6AABBThdeaBSAARNsZU3oAAkBMFV5rFoAAEG1nTOkBCAAxVXitWQACQLSdMaUHIADEVOG1ZgEIANF2xpQegAAQU4XXmgUgAETbGVN6AAJATBVeaxaAABBtZ0zpAQgAMVV4rVkAAkC0nTGlByAAxFThtWYBCADRdsaUHoAAEFOF15oFIABE2xlTegACQEwVXmsWgAAQbWdM6QEIADFVeK1ZAAJAtJ0xpQcgAMRU4bVmAQgA0XbGlB6AABBThdeaBSAARNsZU3oAAkBMFV5rFoAAEG1nTOkBCAAxVXitWQACQLSdMaUHIADEVOG1ZgEIANF2xpQegAAQU4XXmgUgAETbGVN6AAJATBVeaxaAABBtZ0zpAQgAMVV4rVkAYhAQbUmg7y2BOAq5twnluNoLEyt2dG4M+uhAOSLDLtIkAEDSpORIA0AcBZnjGACSY9gAJMewHS0FQBwFmWYMAEmTUrk0ACTH8wAgOYbtaCkA4ijINGMASJqUyqUBIDmeBwDJMWxHSwEQR0GmGVMxQJ5iooMk8qoQH6dAljEFV0qShMR8MxG9N00mZdcAkBxPyHtARN4Q5ocTkkdORcMvXSy6wZ3j6yXgrxHR7TlG7HwpAOI80vkHeg7ImDB/e3qk8WdNZPXW+F0ktIOYl2quK4sWgOR4Eh4DMhZH4R2LjWqo9dKaRM7vI+b3LHZGUdcBkByT9xIQSbbGzTVbXMTk4uFBF/vQzAAgmrR61PoGiBD9dDoKv9Sj7X9dvmzPkaGBmWA/EX3I1cys5wCQrBN+y3yvAJm9IQ+CDdp7joXiHGx37xWRhxfSleX7ACTHk/AJECH67nQUftN1PMtbx2p9dPY5Irra9ews5gGQLFKdZ6ZPgAQ0s3YyWnski3gGW+MtIR7JYrbrmQDEdaIXmecPIPy7OGp8LKto6ru6nyaWfVnNdzkXgLhMc4FZvgDCRN+YisKHsoym3ho/Q8Rvy3INF7MBiIsUU87wBhCRu6aaw4+mtLUoWb3VfZlIVi/q4hwvAiA5hu0LICT0qbgZPpVlNPVdnWeI6cNZruFiNgBxkWLKGUO7J9YlSXI4pbw4Gctt8cjw3iw3UG93nyeRD2a5Rs+zmU/EI40rep5TggFe/NGGy3ZPhDNJMl6CvC66BWbePDXS2JnlPuut8UkiHsxyjd5n8+E4atzQ+5ziJ3gByMp29/JzIieKj2uBHYhsj5vD92W1z0t/9Eq9/+zpqazmO5y7N47C2xzOK2yUF4A0tneWxP10urCU0i/81zgK35derlPW2p2NLPS47qoC1Ezb4pHw/gJWdr6kF4DMuq63OrOPi7/feQKOB3IiG6ZGh591PHZu3OCuzuPCtDGL2Y5n3hFH4ZjjmYWM8weQdudBEnLydGzGSff0iPt8extqda9PSP6Y8d6djA+WzFw6+ZW1rzsZVvAQbwCptbsfYZHfF5xXyuXly3E0/JOU4lSyemt8DxHfnUpcrCiTHxBFWfIGkAv/zBp/kYjXFBVW6nVF3gi4//rJ6Bonz2TVd43fR8w/TL1+gUJhiqZHwnaBW3C6tFeA1NqdB1go00c5nKUr8nLcHL7Gxbx6qyMu5uQw43jQN7BuctPqV3NYK5clvAKEtneW1AboGRa6Lpd0elxEiA6e70tuf33TmsnFjKq1urcwya8Wc20h1zj8LcpC9v9/FvULECKqtTp3MtFjZQkwxT6eY+Yfn5eBx05F755OoacLN+TJ3Z7cc7xpqXLvHrPGvANk7l5k1/jPifnzacpWIs0rTPJLkeAXcbPx6//e1yXbO5cN9NHtzDT7uPwXS7TvdFup4LuHt4Asbz1f66e3Hxaia9OdXtlUcpYoOD77x+Mo4EtIkneW//GRi2Qo8mTcHP5C2VJ2sR8v30FmjQ+1XlyTUN+LLkLAjMUnwEQTU1HYWPyEcl/pLSCzsdZaRz7KFPy23BFXeHdCJ+JmWImnduc7Ja8BuXA/0r1aSJ5mpsr+FCsnYvL9OBr+ejn35m5X3gMy906yZ2I5zSSPMtHn3EWDSfMlIMz3TI809lhIqBKAvHlQg61OU0RGiXmthcMrwOMYJbQtHg0PFbB2IUtWCpC5m/dHXlsmZ06OClGTiK4qJNWqLcp0iIS2VeUJXc3xVA6QN80v2/m3wYHg758loVuJ+VYi6tcEY10rQt0Lf2Io2DcdNbz4U0NZnFllAfmPsLYc6K+vfNdNRLyKhFYJySoimv3C68KnxaeZ+GgicoyC5Cid739hevO1f0I4nn6SjoNDAnklYOMdJK80sU7lEgAglTtSGHKZAABxmSZmVS4BAFK5I4UhlwkAEJdpYlblEgAglTtSGHKZAABxmSZmVS6BfwAPpY0yMA5a7wAAAABJRU5ErkJggg==",j="/assets/team5.755a7919.png",X="data:image/png;base64,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",W="/assets/team7.c5468420.png",L="/assets/docker.7061ea9f.png",P="/assets/msg.d8fabdeb.png",s=d=>(y("data-v-53cc04e1"),d=d(),O(),d),Y={class:"hero"},z={class:"hero__left"},K=s(()=>t("div",{class:"os-bg-base"},null,-1)),q=s(()=>t("div",{class:"os-bg-base os-bg1"},null,-1)),$=s(()=>t("div",{class:"os-bg-base os-bg2"},null,-1)),tt=s(()=>t("h1",{class:"brand-slogan"},"“ For You，For Free，Forever ”",-1)),st={class:"statistics"},At=["href"],ot=["src"],et={class:"brand-desc"},nt={class:"entry-operation"},ct=s(()=>t("h5",{class:"footmark"},"Made with 🧡 by SonicCloudOrg",-1)),it={class:"hero__right"},lt=["src"],at={class:"container"},gt={class:"honor-card"},dt=["onClick"],ht=["src"],rt={class:"honor-name"},mt={class:"devices"},Qt=["src"],ut={class:"use-case"},Bt=["src"],It=s(()=>t("h3",null,"0编码UI自动化",-1)),Ct=s(()=>t("p",null,"积木式创建步骤",-1)),pt=s(()=>t("p",null,"一键分发多设备任务",-1)),Et=["src"],_t=s(()=>t("h3",null,"在线代理抓包",-1)),kt=s(()=>t("p",null,"一键连接代理抓包",-1)),wt=s(()=>t("p",null,"团队协作轻松快捷",-1)),Ft=["src"],bt=s(()=>t("h3",null,"设备分布式集群",-1)),St=s(()=>t("p",null,"支持跨网段多机房",-1)),Mt=s(()=>t("p",null,"支持Windows、Mac、Linux平台",-1)),Gt=["src"],yt=s(()=>t("h3",null,"优秀周边生态",-1)),Ot=s(()=>t("p",null,"安卓Apk、iOS调试工具",-1)),xt=s(()=>t("p",null,"Jenkins插件、在线抓包工具",-1)),Zt=["src"],Tt=s(()=>t("h3",null,"低成本维护",-1)),Ut=s(()=>t("p",null,"拖拽式排序交互",-1)),vt=s(()=>t("p",null,"使用简单便捷",-1)),Vt=["src"],Jt=s(()=>t("h3",null,"在线WebView",-1)),Ht=s(()=>t("p",null,"提供在线调试WebView",-1)),ft=s(()=>t("p",null,"一键便利连接devtools",-1)),Nt=["src"],Dt=s(()=>t("h3",null,"可视化报表",-1)),Rt=s(()=>t("p",null,"测试截图、日志、录像",-1)),jt=s(()=>t("p",null,"图表展示项目运行情况",-1)),Xt=["src"],Wt=s(()=>t("h3",null,"轻松部署维护",-1)),Lt=s(()=>t("p",null,"Docker一键去中心化分布式",-1)),Pt=s(()=>t("p",null,"扩容缩容不再繁琐",-1)),Yt={class:"capacity-wrapper"},zt=["src"],Kt={class:"sponsor"},qt=s(()=>t("div",{class:"sponsor__list"},[t("a",{href:"http://qrcode.testing-studio.com/f?from=Sonic&url=https://ceshiren.com/",target:"_blank"},[t("img",{src:"https://ceshiren.com/uploads/default/original/3X/7/0/70299922296e93e2dcab223153a928c4bfb27df9.jpeg",alt:"霍格沃兹测试开发学社",width:"350"})]),t("a",{style:{"margin-left":"20px"},href:"https://ec.diwork.com/",target:"_blank"},[t("img",{src:"https://ec.diwork.com/html/index/img/newlogo.png",alt:"友空间",width:"350"})])],-1)),$t={class:"",href:"mailto:291028775@qq.com",target:"_blank"},ts=M({__name:"Home",setup(d){const E=[{name:"MTSC 2022年度最佳开源项目评选第一名",img:T,url:"https://sonic-cloud.wiki/d/1471-sonicmtsc-2022"},{name:"开源中国GVP - Gitee最有价值开源项目",img:U,url:"https://sonic-cloud.wiki/d/2955-sonicgvp-gitee"}],_=[{tipContent:"Sonic组织Gitee镜像Star数量",linkUrl:"https://gitee.com/sonic-cloud/sonic-server/stargazers",img:"https://gitee.com/sonic-cloud/sonic-server/badge/star.svg?theme=gvp"},{tipContent:"Sonic组织Github Follower数量",linkUrl:"https://github.com/SonicCloudOrg",img:"https://img.shields.io/github/followers/SonicCloudOrg?style=social"},{tipContent:"Sonic组织Github仓库总Star数量",linkUrl:"https://github.com/SonicCloudOrg",img:"https://img.shields.io/github/stars/soniccloudorg?style=social"},{tipContent:"Agent端Release总下载量",linkUrl:"https://github.com/SonicCloudOrg/sonic-agent/releases",img:"https://img.shields.io/github/downloads/SonicCloudOrg/sonic-agent/total"},{tipContent:"Sonic用户社区在线人数",linkUrl:"https://discord.gg/c9ZD6jSyTE",img:"https://img.shields.io/discord/1182530185749344307?color=%235865F2&logo=discord&logoColor=%23FFFFFF&style=flat-square"}],k=[{image:v,name:"安卓设备"},{image:V,name:"iOS设备"},{image:J,name:"车载设备"},{image:H,name:"智能手表"}],p=u=>{window.open(u,"_blank")},w=G();return(u,h)=>{const F=a("el-tooltip"),b=a("client-only"),B=a("el-button"),c=a("el-card"),l=a("el-timeline-item"),S=a("el-timeline");return r(),m(Q,null,[t("section",Y,[t("div",z,[K,q,$,tt,t("div",st,[(r(),m(Q,null,I(_,e=>A(b,{key:e.tipContent},{default:o(()=>[A(F,{content:e.tipContent,placement:"top"},{default:o(()=>[t("a",{href:e.linkUrl,class:"statistics-link",target:"_blank"},[t("img",{src:e.img},null,8,ot)],8,At)]),_:2},1032,["content"])]),_:2},1024)),64))]),t("h4",et,C(u.$t("home.desc")),1),t("div",nt,[A(B,{type:"primary",size:"large",round:"",onClick:h[0]||(h[0]=e=>n(w).go("/deploy/back-end-deploy"))},{default:o(()=>[i(" 马上使用 ")]),_:1}),A(B,{type:"primary",size:"large",round:"",onClick:h[1]||(h[1]=e=>p("https://discord.gg/c9ZD6jSyTE"))},{default:o(()=>[i(" 用户社区 ")]),_:1})]),ct]),t("div",it,[t("video",{width:"800",controls:"",src:n(Z)},null,8,lt)])]),t("div",at,[A(g,{title:"Sonic荣誉及认证"},{default:o(()=>[t("div",gt,[(r(),m(Q,null,I(E,e=>A(c,{class:"honor-card-wrapper",shadow:"hover"},{default:o(()=>[t("div",{class:"honor-card-content",onClick:ss=>p(e.url)},[t("img",{class:"honor-img",src:e.img},null,8,ht),t("h4",rt,C(e.name),1)],8,dt)]),_:2},1024)),64))])]),_:1}),A(g,{title:"Sonic支持哪些设备？"},{default:o(()=>[t("div",mt,[(r(),m(Q,null,I(k,e=>A(c,{class:"card-content","body-style":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"180px"},shadow:"hover"},{default:o(()=>[t("img",{width:"50",src:e.image},null,8,Qt),t("p",null,C(e.name),1)]),_:2},1024)),64))])]),_:1}),A(g,{title:"为什么使用Sonic？"},{default:o(()=>[t("div",ut,[A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(R),width:"40"},null,8,Bt),It,Ct,pt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(f),width:"40"},null,8,Et),_t,kt,wt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(N),width:"40"},null,8,Ft),bt,St,Mt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(D),width:"40"},null,8,Gt),yt,Ot,xt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(j),width:"40"},null,8,Zt),Tt,Ut,vt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(X),width:"40"},null,8,Vt),Jt,Ht,ft]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(W),width:"40"},null,8,Nt),Dt,Rt,jt]),_:1}),A(c,{class:"case-content",shadow:"hover"},{default:o(()=>[t("img",{src:n(L),width:"40"},null,8,Xt),Wt,Lt,Pt]),_:1})])]),_:1}),A(g,{title:"Sonic的价值与产出"},{default:o(()=>[t("div",Yt,[t("img",{class:"capacity-img",src:n(P)},null,8,zt),A(S,{class:"capacity-list",style:{"text-align":"left"}},{default:o(()=>[A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" Sonic提供图像识别，支持获取poco控件，助力游戏公司测试效率。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 使用Sonic进行跨网段部署，助力海外业务的公司进行专项检测。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 提供定时任务充分利用无人值守时间回归UI测试，省时省力。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 完全开源免费的平台，快速的更新迭代速度，创造了多个领域新技术。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 支持打通Jenkins的DevOps流程，推进项目自动化流程。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 支持无限扩容设备，一键使用Android、iOS设备调试，设备管理不再繁琐。 ")]),_:1}),A(l,{type:"primary",hollow:!0},{default:o(()=>[i(" 丰富图表展示，用户实时洞察用例执行情况，把控产品质量。 ")]),_:1})]),_:1})])]),_:1}),A(g,{title:"金牌赞助商"},{default:o(()=>[t("div",Kt,[qt,t("a",$t,[A(B,{round:"",plain:"",style:{width:"150px","margin-top":"30px"}},{default:o(()=>[i(" 成为赞助商！ ")]),_:1})])])]),_:1})])],64)}}});const es=x(ts,[["__scopeId","data-v-53cc04e1"]]);export{es as H};

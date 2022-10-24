# POCO控件

使用POCO控件相关步骤的注意事项以及教学。

## 注意事项与介绍

目前Sonic已支持游戏自动化的引擎有：
1. Unity3D
2. UE4
3. Egret
4. Cocos2dx-js
5. Cocos2dx-lua
6. Cocos2dx-c++
7. cocos-creator

使用POCO相关步骤时，需确保：
1. 被测控件类型为游戏控件
2. 对应游戏包已经接入POCO-SDK。 👉[POCO官方接入指南](https://poco.readthedocs.io/en/latest/source/doc/integration.html)
3. 已经打开接入SDK的对应引擎页面。
 
注：接入POCO-SDK时，如果有更改默认的socket启动端口，可以在【启动PocoDriver】步骤中指定连接端口的值。

## POCO定位语法

poco控件默认属性如下：
```
        private String layer;
        private String name;
        private String tag;
        private String text;
        private String texture;
        private Integer _instanceId;
        private Integer _ilayer;
        private String type;
        private Boolean visible;
        private ZOrders zOrders;
        private List<String> components;
        private List<Float> anchorPoint;
        private List<Float> scale;
        private List<Float> size;
        private List<Float> pos;
        private Boolean clickable;

        public class ZOrders{
            private Integer global;
            private Integer local;
        }
```

POCO游戏控件目前支持三种定位方式: 
1. poco类型
2. xpath类型
3. cssSelector类型


### poco类型定位
> 定位时，需要以poco开头如：
> ```
> poco("Hello")
> ```
> 
> poco后的括号内可填入属性值进行筛选，不填属性值默认查找name字段。如：
> ```
> poco(type="Button", name="Hello")
> poco(_instanceId=123)
> poco(visible=true)
> ```
> 
> poco后可以接上child来搜索子控件列表，默认搜索第一个结果，如果指定了数组index，会获取数组index下标的控件，当子控件数组长度小于index时，自动获取最末位。如：
> ```
> poco(type="Button", name="Hello").child(text="Star")[1]
> ```

### xpath类型定位
> 只需跟普通xpath相同语法即可，如：
> ```
> //*[@text="Hello" and @type="button"]
> ```

### cssSelector类型定位

> 只需跟普通cssSelector相同语法即可，如：
> ```
> Root > Camera > Button > Text
> ```

## 关于非全屏应用定位偏移

有的应用不支持全屏展示，导致出现黑边而引起定位偏差。
 
Sonic已经兼容自动了大部分机型的非全屏偏移，如果自动兼容效果不够友好：
1. 先关闭手机的**虚拟键盘**，查看应用是否能占用全屏。
2. 如果仍然出现黑边，可以使用【设置偏移量】步骤。

## 偏移量设置

偏移量设置有四个值，分别是：

1. offsetWidth
2. offsetHeight
3. windowWidth
4. windowHeight

其代表的内容如下图所述：

<el-image hide-on-click-modal src="https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/offsets.png" :preview-src-list="['https://gitee.com/sonic-cloud/sonic-cloud/raw/main/src/assets/offsets.png']" style="width: 500px"/>

例如分辨率是1080x2220，上方黑边高度为100px，屏幕高度为2020px，底部黑边高度为100px，因此四个值为（0, 100, 1080, 2020）

## 本文贡献者
<div class="cont">
<a href="https://github.com/ZhouYixun" target="_blank">
<img src="https://avatars.githubusercontent.com/u/56339314?v=4" width="50"/>
<span>ZhouYixun</span>
</a>
</div>


&nbsp;
&nbsp;
***
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-poco.md) 发起贡献改善此页

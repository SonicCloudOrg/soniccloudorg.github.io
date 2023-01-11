---
contributors:
- 'ZhouYixun'
---

# 图像识别类

使用图像识别类操作注意事项与教学。

## 注意事项

Sonic目前使用的图像库基于 [sonic-vision-core](https://github.com/SonicCloudOrg/sonic-vision-core) 建设。如果您的图像类操作报类似丢失依赖的错误，请检查Agent的jar包与您的平台是否匹配。

## 图片点击
使用图片点击时，需确保：
1. 图片足够复杂，不是单一简洁图片，**越复杂识别精确度越高**。
2. 该图片后续变动不大，仅仅可能有位置变动。

使用方法：
1. 可以直接在【控件元素】页面获取当前实时控件树，在对应控件详细信息使用【控件快照】保存控件的截图信息。
2. 选择【图片点击控件】步骤，选择对应控件即可。
3. 如果为自定义截图信息，可以直接前往控件元素页面自行上传图片，然后添加到项目中。

效果如图：

<ElImage style="width: 300px" hide-on-click-modal src="./images/tem.png" :preview-src-list="['./images/tem.png']"/>

::: warning 默认图像识别算法顺序
SIFT算法 -> AKAZE算法 -> 模版匹配方法
:::

## 相似度匹配

即断言对应图片与当前设备截图的相似程度。如果不在期望范围内，将抛出异常。


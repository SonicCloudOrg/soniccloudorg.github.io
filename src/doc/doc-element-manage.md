---
contributors:
- 'ZhouYixun'
---

# 控件元素
管理测试的控件元素。

## 创建控件元素

1. 前往控件元素页面，点击【新增控件】。
2. 填入相关信息。
3. 点击提交。
4. 创建完毕！

## 名词解释

| 字段名   | 解释                   | 示例                    |
|-------|----------------------|-----------------------|
| 控件名称  | 控件的名称，用于后续所有展示       | 测试                    |
| 定位类型  | 控件用于定位时使用的类型         | xpath                 |
| 控件元素值 | 控件用于定位时使用的值          | /android.view.View[1] |
| 所属模块  | 控件元素所属模块，用于搜索时筛选，可不填 | 模块A                   |

## 控件类型

| 类型               | 注意事项/提示                                                                                                                                             | 示例                                                   |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| id（resource-id）  | id类型的控件                                                                                                                                             | hello                                                |
| xpath            | xpath类型，可参考xpath语法                                                                                                                                  | /android.view.View[1]                                |
| nsPredicate      | 仅适用于iOS10或以上，可参考语法                                                                                                                                  | name == "login_default_icon"                         |
| uiautomator      | 仅支持安卓                                                                                                                                               | new UiSelector().resourceId("com.test:id/close_btn") |
| accessibilityId  | accessibilityId类型的控件                                                                                                                                | hello                                                |
| classChain       | 仅支持iOS                                                                                                                                              | XCUIElementTypeWindow[2]/XCUIElementTypeAny          |
| 坐标               | 支持绝对坐标与相对坐标，注意坐标(0,0)为当前屏幕旋转方向左上角。                                                                                                                  | 0.8,0.2 或 456,789                                             |
| 图片               | 图片类型控件                                                                                                                                              | 无                                                    |
| poco             | 仅支持Poco控件，支持多属性筛选，支持child筛选，如果筛选结果为多个，默认返回首个控件。详细语法可点击 <a href="https://soniccloudorg.github.io/doc/doc-poco.html" target="_blank">这里</a> （需升级至Sonic v2.0.0） | poco("star").child(type="Text",name="Hello")[0]      |
| name、linkText和其他 | 都为webView定位方式，注意cssSelectorAndText可用className+text同时定位                                                                                              | van-button--default,购物车                              |

## 复制控件元素

1. 前往控件元素页面，点击【复制】。
2. 创建完毕！

## 编辑信息

1. 前往控件元素页面，点击【编辑】。
2. 填入相关信息。
3. 点击提交。
4. 创建完毕！

## 删除控件元素

1. 前往控件元素页面，点击【删除】。
2. 点击确认。
3. 删除完毕！

::: danger 警告
从v2.2.0开始，当控件元素已存在于步骤中时，删除当前控件不再要求强制删除所在步骤，删除后步骤中的控件重置为空控件，需用户后续前往步骤调整。
:::

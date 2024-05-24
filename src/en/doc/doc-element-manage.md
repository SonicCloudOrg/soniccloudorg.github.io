---
contributors:
- 'ZhouYixun'
---

# Elements
Element for managing tests.

## Create elements

1. Go to the element page and click [Add Element].
2. Fill in the relevant information.
3. Click Submit.
4. Created!

## Glossary

| Field Name | Explanation | Example |
|--------|----------------------|------------------ -----|
| name | the name of the element, used for all subsequent display | test |
| positioning type | the type used by the element for positioning | xpath |
| element value | The value used by the element for positioning | /android.view.View[1] |
| Belonging module | The module to which the element belongs, used for filtering when searching, can be left blank | Module A |

## Type

| Type | Precautions/Tips | Example |
|------------------|------------------------------ -------------------------------------------------- -------------------------------------------------- -------------------|------------------------------ ------------------------|
| id (resource-id) | id type | hello |
| xpath | xpath type, refer to xpath syntax | /android.view.View[1] |
| nsPredicate | Only applicable to iOS10 or above, please refer to syntax | name == "login_default_icon" |
| uiautomator | Android only | new UiSelector().resourceId("com.test:id/close_btn") |
| accessibilityId | elements of type accessibilityId | hello |
| classChain | iOS only | XCUIElementTypeWindow[2]/XCUIElementTypeAny |
| Coordinates | Absolute and relative coordinates are supported. Note that the coordinate (0,0) is the upper left corner of the current screen rotation direction. | 0.8, 0.2 or 456,789 |
| Image | Image Type | None |
| poco | Only Poco elements are supported, multi-attribute filtering is supported, and child filtering is supported. If there are multiple filtering results, the first element will be returned by default. For detailed syntax, please click <a href="https://soniccloudorg.github.io/doc/doc-poco.html" target="_blank">here</a> (need to upgrade to Sonic v2.0.0) | poco( "star").child(type="Text",name="Hello")[0] |
| name, linkText and others | are all webView positioning methods, note that cssSelectorAndText can be simultaneously positioned by className+text | van-button--default, shopping cart |

## Duplicate element

1. Go to the element page and click [Copy].
2. Created!

## Edit information

1. Go to the element page and click [Edit].
2. Fill in the relevant information.
3. Click Submit.
4. Created!

## Delete element

1. Go to the element page and click [Delete].
2. Click OK.
3. Deleted!

::: danger warning
Starting from v2.2.0, when the element already exists in the step, deleting the current element no longer requires the forced deletion of the step. After deletion, the element in the step is reset to an empty element, and the user needs to go to the step to adjust.
:::

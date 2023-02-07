---
contributors:
- 'ZhouYixun'
---

# 实时输入法

## 启用Sonic输入法

先启用Sonic输入法
```bash
adb shell ime enable org.cloud.sonic.android/.keyboard.SonicKeyboard
```
再设置Sonic输入法为当前输入法
```bash
adb shell ime set org.cloud.sonic.android/.keyboard.SonicKeyboard
```

## 直接使用

```bash
adb shell am broadcast -a SONIC_KEYBOARD --es msg "xxxxx"
```

输入时有特殊用法，如果输入内容为以下字符，会有不同效果:

| 输入内容          | 效果       |
|---------------|----------|
| 其他任意字符        | 输入对应任意字符 |
| CODE_AC_ENTER | 回车       |
| CODE_AC_BACK  | 删除一个字符   |
| CODE_AC_CLEAN | 清空输入框    |

例如输入CODE_AC_CLEAN，执行步骤时就会清空输入框，再输入sonic，就可以看到输入框输入了sonic。

## 禁用Sonic输入法

直接使用ADB指令
```bash
adb shell ime disable org.cloud.sonic.android/.keyboard.SonicKeyboard
```

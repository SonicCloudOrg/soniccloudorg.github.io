---
contributors:
- 'ZhouYixun'
---

# Sonic input

Instructions using the Sonic input method.

## Precautions and introduction

This function can only be used after v2.0.5. When applied to automation, it is mainly used for:
1. For controls that cannot be entered with automated sendKeys
2. Input for game controls
3. In some cases, the input box cannot use automatic input, but only the input method

::: tip
In order to facilitate switching back to the system input method after the mobile phone is separated from Sonic, after upgrading to Sonic v2.3.0, you can directly click the gray area below the Sonic input method to quickly jump to the system input method setting page to switch input methods.
:::

## Instructions

Normal text can be entered directly, and the input is [append] input.

## Special usage

There are special usages when inputting, if the input content is the following characters, there will be different effects:

| input content       | effect                             |
|---------------------|------------------------------------|
| Any other character | Input corresponds to any character |
| CODE_AC_ENTER       | Enter                              |
| CODE_AC_BACK        | delete a character                 |
| CODE_AC_CLEAN       | Clear the input box                |

For example, enter CODE_AC_CLEAN, the input box will be cleared when the steps are executed, and then input sonic, you can see that the input box has entered sonic.

# Sonic输入法输入

使用Sonic输入法说明

## 注意事项与介绍

该功能在v2.0.5后才可以使用。应用到自动化时主要用于：
1. 用于无法用自动化的sendKeys来输入的控件
2. 用于游戏类控件的输入
3. 部分情况下，input框不能用自动化输入，只能输入法输入的情况

## 使用方法

正常文本直接输入内容就行，输入为【追加】输入。

## 特殊用法

输入时有特殊用法，如果输入内容为以下字符，会有不同效果:
1. CODE_AC_ENTER   --->  回车
2. CODE_AC_BACK    --->  删除
3. CODE_AC_CLEAN   --->  清空输入框

例如输入CODE_AC_CLEAN，执行步骤时就会清空输入框，再输入sonic，就可以看到输入框输入了sonic。

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
不够详细？[点此](https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/markdown/doc/doc-keyboard.md) 发起贡献改善此页
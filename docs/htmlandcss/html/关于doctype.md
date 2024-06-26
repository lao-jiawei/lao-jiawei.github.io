---
id: htmlAndCss-html-aboutDoctype
slug: /htmlAndCss-html-aboutDoctype
title: 关于doctype
date: 2022-05-10
---

# 前言

【目的】

- 通过总结小伙伴们面试涉及到的问题，来进行前端知识的查漏补缺
- 给准备面试的小伙伴总结知识，也帮助自己更深入的了解前端知识。



【内容】

- 首先将介绍相关内容
- 然后列出常见的面试题型。



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。



---



# 知识介绍

## 啥是doctype?

【图示】高亮部分

![1654350414738](D:\Data\9_Typora图片缓存\1654350414738.png)

* 文档类型声明
* 不是HTML标签，是一个用于告诉浏览器当前 HTMl 版本的指令
* 必须出现在文件的第一行
  * 【目的】*告诉浏览器以何种方式来渲染页面*



## 渲染方式

### 严格模式

* 又称**标准模式**
* 浏览器按 W3C 标准解析执行代码
  * 排版和JS 运作模式是 以该浏览器支持的最高标准运行。（瞻前）



### 混杂模式

* 又称**怪异模式**
* 使用浏览器自己的方式解析执行代码
  * 向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。（顾后）
* DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。



【==注意==】

* 两种不同的渲染方式也会导致盒子模型的不同，具体可以跳转我另外一篇博客[ W3C盒模型和怪异盒模型](https://www.cnblogs.com/lao-jiaweijarvee/p/16341282.html)



## 常见doctype

【==注意==】下列版本具体声明自行百度。

|         版本          | 使用表现性、废弃元素 | frameset |
| :-------------------: | :------------------: | :------: |
|    HTML4.01 strict    |        不允许        |  不允许  |
| HTML4.01 Transitional |         允许         |  不允许  |
|   HTML4.01 Frameset   |         允许         |   允许   |
|    XHTML1.0 Strict    |        不允许        |  不允许  |
| XHTML1.0 Transitional |         允许         |  不允许  |
|  XHTML 1.0 Frameset   |         允许         |   允许   |
|        HTML 5         |                      |          |

【巧记】

* 带`strict`（严格版）的都不允许，带`frameset`（基于框架版）的都允许
* 带`transitional`（过渡版）的允许一半，拒绝一半。



## 如何触发这两种模式？

* 浏览器根据doctype是否存在以及声明使用哪种DTD来呈现

* 浏览器渲染方式的选择，与你网页中的 DTD 声明直接相关
  * DTD 声明定义了标准文档的类型（严格模式解析）文档类型
    * 会使浏览器使用相应的方式加载网页并显示
  * 忽略 DTD 声明
    * 将使网页进入混杂模式



## 如何判断目前使用的模式？ 

1. `F12`打开控制台

2. 输入`alert($.support.boxModel);`
   * `true`：严格模式
   * `false`：混杂模式

# 面试常见题目

> 简答题

【相关题型】

[doctype 是什么,举例常见 doctype 及特点](https://www.mianshiya.com/qd/5b049cc861ff71520ad7b1cc476d52bd)

[Doctype作用?严格模式与混杂模式如何区分？它们有何意义?](https://www.mianshiya.com/qd/54ad1eea61fc92e20d86d84466ecae0e)

[`doctype`（文档类型）的作用是什么？](https://www.mianshiya.com/qd/54ad1eea61c6c25f007c462071b1fc41)

......



# 结语

【感谢】

***感谢程序员鱼皮提供[面试鸭](https://www.mianshiya.com/)平台!!!***

***感谢各位读者能看到最后!!!***


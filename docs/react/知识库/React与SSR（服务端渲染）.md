### 什么是SSR（服务端渲染）？

* 前端代码可以在服务端作渲染，进而达到在同步 HTML 时，直接返回渲染好的页面。——《深入React技术栈》

### 为什么要用SSR？

* react解决首屏加载白屏问题的解决方案。

### 这样做的好处？

* 利于SEO（搜索引擎）：可以让搜索引擎更容易读取页面的meta信息及其他的SEO的相关信息。增加网站在搜索引擎中的可见度。——《深入React技术栈》
* 加速首屏渲染：
  * 客户端渲染的缺点：第一次进入站点是，浏览器中没有缓存，需要下载代码后在本地缓存，耗时长。
  * 服务端渲染：用户在下载时已经渲染好页面，打开速度比本地渲染快。
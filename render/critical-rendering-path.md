# Critical Rendering Path (关键渲染路径)

## 参考资料
[谷歌开发者文档](https://web.dev/articles/critical-rendering-path?hl=zh-cn)


## 构建对象模型
DOM 生成流程
1. 字节：(bytes)请求响应的字节
2. 字符: (characters)根据文档指定的编码将字节转成
3. 令牌：(tokens)将字符串进行分词生成令牌
4. 节点：(nodes)根据令牌生成node节点对象
5. DOM: 根据 HTML 标记定义的不同标记之间的关系，确定 node 之间的关系

CSSOM 生成流程
1. 字节：(bytes)请求响应的字节
2. 字符: (characters)根据文档指定的编码将字节转成
3. 令牌：(tokens)将字符串进行分词生成令牌
4. 节点：(nodes)根据令牌生成node节点对象
5. CSSOM: document.styleSheets


## 渲染树构建、布局和绘制
- DOM 树和 CSSOM 树会组合成渲染树。
- 渲染树仅包含渲染网页所需的节点。
- 布局计算每个对象的精确位置和大小。
- 最后一步是绘制，它接受最终的渲染树并将像素渲染到屏幕上。


## 阻塞渲染的 CSS
- 默认情况下，CSS 被视为阻塞渲染的资源。
- 我们可以通过媒体类型和媒体查询将一些 CSS 资源标记为不阻塞渲染。
- 浏览器会下载所有 CSS 资源（无论阻塞行为还是非阻塞行为）。

备注：因为渲染树的构建需要 DOM 和 CSSOM。DOM 确定了文档的结构， CSSOM 确定了哪些 DOM 节点是可见的，并确认了节点的样式。
所以默认情况下，CSS 被视为阻塞渲染的资源。

## 使用 JavaScript 添加互动
- 脚本在文档中的位置非常重要。
- 当浏览器遇到脚本标记时(除非明确声明为异步)，DOM 构建将暂停，直到脚本执行完毕。
- JavaScript 可以查询和修改 DOM 和 CSSOM。
- 浏览器将延迟脚本执行和 DOM 构建，直到其完成 CSSOM 的下载和构建。


## 衡量关键渲染路径
- domLoading：这是整个过程的起始时间戳，浏览器将开始解析 HTML 文档的第一个收到的字节。
- domInteractive：DOM 已就绪。标记浏览器解析完所有 HTML 且 DOM 构建完成的时间点。
- domContentLoaded： DOM 和 CSSOM 均已准备就绪。表示 DOM 准备就绪且没有样式表阻止 JavaScript 执行的时间点。
  也就是说，我们现在可以（有可能）构建渲染树。许多 JavaScript 框架都会等待此事件，然后才会开始执行自己的逻辑。
- domComplete：顾名思义，所有处理已完成，网页上的所有资源（图片等）都已下载完毕，也就是说，加载旋转图标已停止旋转。
- loadEvent：作为每个网页加载的最后一步，浏览器会触发 onload 事件，该事件可以触发其他应用逻辑。


## 分析关键渲染路径性能
描述关键渲染路径的词汇：
- 关键资源：可能阻止网页首次呈现的资源。
- 关键路径长度：获取所有关键资源所需的往返次数或总时间。从接收到第一个关键资源的第一个字节到最后一个关键资源的最后一个字节所花的时间。
- 关键字节数：首次渲染网页所需的总字节数，即所有关键资源的传输文件大小的总和。


## 优化关键渲染路径
为了尽可能快地完成首次渲染，我们需要最大限度地减少以下三个变量：
- 关键资源的数量。
- 关键路径长度。
- 关键字节数。

优化关键渲染路径的一般步骤如下：
- 分析关键路径并总结其特点：资源数量、字节数、长度。
- 最大限度地减少关键资源的数量：删除、延迟下载、标记为异步等。
- 优化关键字节数以缩短下载时间（往返次数）。
- 优化其余关键资源的加载顺序：尽早下载所有关键资源，以缩短关键路径长度。

备注: TCP 传输有慢启动性质，

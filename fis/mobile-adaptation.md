# 移动端适配

## SYNOPSIS
- 屏幕尺寸
- 关于像素
- 屏幕分辨率 与 物理像素（设备像素）
- 图片尺寸 与 逻辑像素（设备独立像素）
- 设备像素比(DRP = 设备像素/设备独立像素)
- 可视视口
- 移动端适配的几种方案
- 使用 vw 适配（推荐）
- 使用 rem 适配（vw的过渡方案）

## 屏幕尺寸
各种设备屏幕的尺寸是以“英寸”为单位的，英寸是一个长度单位，有固定大小。     
各种电子设备的屏幕尺寸指的是屏幕斜对角线的大小。      
因为屏幕的比例一般是按 ”16：9“，”4.3“等固定比例生产的，因此屏幕的具体宽高是可以计算出来的。


## 关于像素
像素没有固定的大小。

对于尺寸相同的屏幕来说：分辨率越高，屏幕含有的像素越多，1个像素所占的物理尺寸越小。     

图片的大小：“300 * 300”的图片指的是图片的水平和垂直方向都包含了 300 个像素。


## 屏幕分辨率与物理像素
屏幕的分辨率是指：屏幕的水平和垂直方向包含的像素个数。同尺寸的屏幕，分辨率越高，所包含的像素越多

屏幕设备中的像素叫物理像素，也叫设备像素。


## 图片尺寸 与 逻辑像素
图片尺寸、可时刻改变的像素称作 逻辑像素，也叫 设备独立像素。


## 设备像素比
DRP = 设备像素/设备独立像素。这个值可通过 `window.devicePixelRatio`查看。
网页缩小则 devicePixelRatio 也会变小，网页放大 devicePixelRatio 也会变大

window.devicePixelRatio = 0.5:   
  表示设备的分辨率是图片分辨率的一半。将会使用1个物理像素表示4个逻辑像素。

放大或缩小网页的尺寸时（非js代码层面的缩放），DPR 是不一样的。


为什么要有物理像素和逻辑像素之分呢？直接用物理像素表示一个图片的大小不行吗？    
从原则上是可以，但是如果将图片的尺寸用物理像素表示，那么会带来很大的问题。    
如果有两台电脑，屏幕尺寸完全一样，一个分辨率是 1920 * 1080 ，一个是 960 * 540 ，    
那么二者同时放一个 300 * 300 物理像素大小的图片。    
分辨率高的看到的图片就比较小，分辨率低的看到的就比较大。    

因此，为了使网络资源浏览起来更舒服，也就是让两个屏幕尺寸一样大的设备，   
呈现的同一个图片看起来差不多是一样大的，因此就出现了设备像素比。   
在分辨率高的屏幕上使用多个物理像素表示1个逻辑像素。在分辨率低的屏幕上使用一个物理像素表示一个逻辑像素


## 可视视口
```
视口当前可见的部分叫做可视视口（visual viewport）。
可视视口可能会比布局视口（layout viewport）更小，因为当用户缩小浏览器缩放比例时，布局视口不变，而可视视口变小了。   
```

可视视口是当前一屏的内容，当用户缩小浏览器缩放比例时，之前一屏可看到的内容缩小了。

设置文档缩放比例:   
- `meta`标签可用于提供 名称 - 值 对形式的文档元数据，name 属性为元数据条目提供名称，而 content 属性提供值。
- CSS 设备适配规范定义了元数据名称 viewport， 为视口的初始大小提供指示（hint），目前**仅用于移动设备**。（即设置初始文档的显示大小）


initial-scale = 0.5：   
~~表示 设备宽度/可视视口 = 0.5。说明屏幕的尺寸是文档尺寸的一半，即文档的尺寸是屏幕尺寸的2倍。~~   
~~如果屏幕的宽是 375px。则文档的 `html`标签的宽是 750px。即表示文档需要放大2倍，但是字体不一定是等比放大两倍(原因不详)。~~

TODO:
动态改变 meta initial-scale 效果不对

## vw 适配（推荐）
使用 postcss 将 px 转成 vw。

缺点：
- vw 是等比缩放的，在大于 540px 的屏幕，如 PC 端，字体显示较大。所以 vw 适合移动端开发。


## rem 适配
方案一：媒体查询    
思路：通过媒体查询来设置不同尺寸屏幕下 html 的 font-size

缺点：
  - 需要针对不同的屏幕编写大量的媒体查询
  - 如果动态改变尺寸，不会实时更新，只是一个个区间

方案二: 动态设置 html font-size    
思路：通过监听屏幕尺寸的变化来动态修改 html 元素的 font-size 大小


方案三：lib-flexible 库    
lib-flexible 是淘宝团队出品的一个移动端自适应解决方案，通过动态计算 viewport 设置 font-size 实现不同屏幕宽度下的 UI 自适应缩放。

由于viewport单位得到众多浏览器的兼容，lib-flexible这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用viewport来替代此方。


## Reference
- [掘金: 像素/分辨率/物理像素和逻辑像素](https://juejin.cn/post/6844904094344151054)
- [掘金: 移动端适配](https://juejin.cn/post/6844903951012200456)
- [MDN: viewport](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)
- [MDN: meta 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name)
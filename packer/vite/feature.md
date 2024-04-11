# FEATURE
- 启动速度快
- 更新快
- 生产环境打包

## 启动速度快
Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类。

1. **依赖** Vite 将会使用 `esbuild` 预构建依赖，并且将CommonJS / UMD 转换为 ESM 格式，重写导入合法的 URL
2. Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能
3. **源码** Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
4. 不需要等到将整个应用构建完毕就能提供服务

## 更新快
1. 依赖模块强缓存，源码模块进行协商缓存

## 生产环境打包
1. 开发环境使用 esbuild 预备构建依赖，生产环境使用 rollup 进行打包
2. 将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）
3. 将多个依赖合并到一个 chunk，减少网络请求

## 构建优化
- CSS 代码分割
- 预加载指令生成
- [异步 Chunk 加载优化](https://vitejs.cn/vite3-cn/guide/features.html#build-optimizations)

## 支持自定义依赖项
- 显式地从列表中包含/排除依赖项
  
## 环境变量替换
- `.env` 支持内置的环境变量替换，构建时使用完全静态的字符串替换,自定义的环境变量不会被替换（待确定）
- 通过 `define` 选项实现

## 浏览器支持
默认的构建目标是能支持 `原生 ESM 语法的 script 标签`、`原生 ESM 动态导入` 和 `import.meta` 的浏览器。传统浏览器可以通过官方插件 @vitejs/plugin-legacy 支持
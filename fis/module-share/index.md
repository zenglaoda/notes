# 模块联邦 (module federation)

概念层面:
  模块联邦：是 Webpack 5 引入的一种功能特性，它主要**聚焦于模块**层面的共享和协作。通过模块联邦，不同的构建可以动态地共享 块，允许一个项目直接使用另一个项目中的模块。

  微前端：是一种前端架构模式，强调将大型前端应用拆分成多个小型、自治的**前端应用**（微前端）。每个微前端可以独立开发、测试、部署，然后再组合成一个完整的应用，更侧重于前端应用整体的拆分和组织。通用的运行方式是监听路由的变化，切换不同的子应用

耦合程度
  模块联邦：模块之间的耦合度相对较高，因为共享的模块通常需要遵循一定的接口规范和版本管理。如果一个共享模块的接口发生变化，可能会影响到使用该模块的其他项目。

  微前端：微前端之间的耦合度相对较低，每个微前端都是独立的应用，可以使用不同的技术栈和开发方式。微前端之间主要通过约定好的通信机制和组合方式进行协作，一个微前端的修改通常不会直接影响到其他微前端。


## Reference
- [blog 模块联邦](https://jonny-wei.github.io/blog/devops/webpack/module-federation.html)

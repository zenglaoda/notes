# TS Module Resolution
TS模块解析系统，支持以下几种解析策略:

- classic: TypeScript 最早的模块解析模式，并计划在 TypeScript 6.0 中弃用

- node10: 官方不建议使用

- node16: Node.js v12 及更高版本同时支持 ESM 和 CJS，每个 ESM 和 CJS 都使用自己的模块解析算法。在Node.js中，import 语句和动态 import() 调用中的模块说明符不允许省略文件扩展名或 /index.js 后缀，而调用中的 require 模块说明符可以省略

- nodenext

- bundler: Node.js v12 引入了一些用于导入 npm 包的新 package.json 模块解析功能（和 "exports" "imports" 的字段），许多打包器采用了这些功能，但没有采用更严格的 ESM 导入规则。此模块解析模式为面向打包器的代码提供了基本算法。默认情况下，它支持 package.json "exports" 和 "imports"

## Reference
- [ts config 配置模板](https://github.com/tsconfig/bases?tab=readme-ov-file)

- [TypeScript 模块解析](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-is-host-defined)

- [typescript 的模块系统介绍](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext)

# gl 常量

## 着色器类型
|  中文 |  属性 | 描述
| :---: | :---: | :---|
| 顶点着色器 | VERTEXT_SHADER | - |
| 片段着色器 | FRAGMENT_SHADER | - |


## 变量类型
| 属性 | 范围 | 描述 |
| :---: | :---: | :---: |
| UNSIGNED_BYTE | [0, 255] | 无符号8位 |
| UNSIGNED_SHORT | - | 无符号16位 |
| FLOAT | - | - |


## 着色器状态
| 属性  | 描述 |
| :---: | :---: |
| COMPILE_STATUS | 获取着色器的编译状态 |
| LINK_STATUS    | 获取着色程序的连接状态 |


## BUFFER
| 属性 | 描述 |
| :---: | :---: |
| ARRAY_BUFFER | - |
| ELEMENT_ARRAY_BUFFER  | - |


## 绘制模式
首先需要开启正反面绘制模式, 未开启时正反面都绘制
gl.enable(CULL_FACE)
gl.cullFace(gl.FRONT)

| 属性 | 描述 |
| :---: | :---: |
| BACK | 默认值，只绘制背面 |
| FRONT  | 只绘制正面 |
| FRONT_AND_BACK  | 正反面都绘制 |


## 正反面设置
| 属性 | 描述 |
| :---: | :---: |
| CW | 顶点坐标顺时针绘制表示正面 |
| CCW  | 默认值，顶点坐标逆时针绘制表示正面 |

## 指定绘制像素条件
指定一个将传入像素深度与当前深度缓冲区值进行比较的函数。
即指定一个比较函数，用于顶点坐标深度缓冲(值)与

| 属性 | 描述 |
| :---: | :---: |
| NEVER    | 永远不通过 |
| ALWAYS   | 永远绘制 |
| LESS     | 默认值，小于 depth 时绘制 |
| EQUAL    | = |
| LEQUAL   | <= |
| GREATER  | > |
| NOTEQUAL | != |
| GEQUAL   | >= |


## 纹理范围
| 属性 | 描述 |
| :---: | :---: |
| NEVER    | 永远不通过 |
| CLAMP_TO_EDGE |  -  |
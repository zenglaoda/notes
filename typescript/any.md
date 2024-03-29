# any 类型

## 基本含义
any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值，也可以赋值给其他任何类型的变量。
变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。


## 类型推断问题
对于开发者没有指定类型、TypeScript 必须自己推断类型的那些变量，如果无法推断出类型，TypeScript 就会认为该变量的类型是any。
所以对于那些类型不明显的变量，一定要显式声明类型，防止被推断为any


## unknown
unknown 类型表示没有任何限制，该类型的变量可以赋予任意类型的值，
但是不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
其次，不能直接调用unknown类型变量的方法和属性


## never
never类型的变量不能赋给它任何值，否则都会报错，但是可以赋值给任意其他类型。

TypeScript 有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个
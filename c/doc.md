# DOC

## 编译
`gcc index.c`

## 变量
1. 变量最好在声明时就赋值，否则可能会使用该分配的内存之前**未清理**的值
2. C 语言的变量作用域主要有两种：文件作用域（file scope）和块作用域（block scope）。支持语句块嵌套，如 if, for 语句块作用域
3. 变量可以定义在文件任何地方

## 运算符
除法: 
- C 语言里面的整数除法是整除，只会返回**整数部分**，丢弃小数部分

求模: 
- 回两个整数相除的余值。这个运算符只能用于整数，不能用于浮点数。
- 负数求模的规则是，结果的正负号由**第一个运算数**的正负号决定。

比较运算符:
- 关系表达式通常返回0或1，表示真伪。C 语言中，0表示伪，所有非零值表示真
- `5 || 0`会返回1，`5 && 0` 会返回0。

逗号运算符：
- 返回最后一个逗号表达式的值
  
位运算符:
- 注意，右移运算符最好只用于无符号整数，不要用于负数。因为不同系统对于右移后如何处理负数的符号位，有不同的做法，可能会得到不一样的结果

sizeof():
1. 返回某种数据类型或某个值，某个变量占用的字节数量，
2. sizeof运算符的返回值类型取决于系统
3. C 语言提供了一个解决方法，创造了一个类型别名size_t，用来统一表示sizeof的返回值类型。
4. 格式化输出时可以使用`%zd`,`%zu`表示


  
## 数据类型
字符类型:
1. 字符类型指的是单个字符
2. 字符常量必须放在**单引号**里面
```c
char c = 66;
// 等同于
char c = 'B';
```

整数类型:
1. short int（简写为short）：占用空间不多于int，一般占用2个字节（整数范围为-32768～32767)。
2. int
3. long int（简写为long）：占用空间不少于int，至少为4个字节。
4. long long int（简写为long long）：占用空间多于long，至少为8个字

浮点数类型:
- float类型占用4个字节（32位），其中8位存放指数的值和符号，剩下24位存放小数的值和符号。float类型至少能够提供（十进制的）6位有效数字，指数部分的范围为（十进制的）-37到37，即数值范围为10-37到1037。
- double：占用8个字节（64位），至少提供13位有效数字。
- long double：通常占用16个字节。

布尔类型
- c语言中布尔类型，使用 1/0替代，但是`<stdbool.h>`定义了布尔
```c
#include <stdbool.h>

bool flag = false;
```

字面量的类型
1. 整数默认是 int 类型
2. 浮点数默认是 double 类型

字面量后缀
```c
int x = 123L;
int x = 123U;
int x = 123LU;
```

溢出：
1. 有符号溢出丢弃最高位
2. 无符号溢出返回最大值

类型的隐式转换:
1. 赋值运算，浮点数赋值给整数变量
2. 整数与浮点数混合运算时，整数转为浮点数类型，与另一个运算数类型相同
3. 不同的浮点数类型混合运算时，宽度较小的类型转为宽度较大的类型
4. 不同的整数类型混合运算时，宽度较小的类型会提升为宽度较大的类型

类型的显示转换:


## 指针
1. 指针变量的初始化，
2. “*” 与 "&" 运算符
3. 指针的运算：指针与整数值的加减运算，指针与指针的减法
4. void 指针
```c
int *p = NULL;
```

## 数组
1. 数组名指向的地址是不能更改的。声明数组时，编译器自动为数组分配了内存地址，这个**地址与数组名是绑定的**，不可更改
2. 数组名就是指向**第一个成员**（array[0]）的指针。
3. 支持变长数组: 使用变量表示数组的长度
4. 数组名可以进行加法和减法运算，等同于在数组成员之间前后**移动**
5. 数组的复制可以使用 `<string.h> memcpy`方法
6. 数组字面量


## 字符串
1. C 语言没有单独的字符串类型，字符串被当作字符数组
2. 字符串的结尾编译器默认会加上一个字节长度的 "\0" 字符。
3. 长字符串如何表示：C 语言允许合并多个字符串字面量，只要这些字符串之间没有间隔，或者只有空格，C 语言会将它们自动合并。
4. 字符数组的长度，不能小于字符串的实际长度。字符串的实际长度需要加1个结束字符的长度
5. 字符指针，在 C 语言内部被当作常量，不能修改字符串本身

**字符串操作相关函数**
1. strlen() 返回字符串的字节长度，不包括末尾的空字符
2. strcpy(dest, src) 字符数组的复制，返回的是一个指针，指向拷贝开始的位置
3. strncpy(dest, src, n)
4. strcat(dest, src)
5. strncat(dest, src, n)
6. strcmp(s1, s2)
7. strncmp(s1, s2, n)

## 函数
1. 函数只能定义在源码文件的顶层，不能在语句块内部定义函数
2. 函数需要包含返回值，参数类型。 函数可以作为参数使用
3. 函数支持可变参数，通过`...`表示
4. 函数名**既是变量名，也是指针**
5. 只要在程序开头处给出函数原型，函数就可以先使用、后声明
6. 使用 extern 关键字定义当前文件依赖的外部函数。即 声明函数原型
7. static 修饰 函数内部声明变量时，表示该变量只需要初始化一次，不需要在每次调用时都进行初始化
8. static 修饰函数时，表示该函数只能在当前文件里使用，如果没有这个关键字，其他文件也可以使用这个函数（通过声明函数原型）
9. const 修饰符，可修饰指针所指向的内存地址的值不能改变，也可修饰指针本身所存储的内存地址是不可变的


```c
// 修饰变量p不能被修改，且p所指向的值也不能修改
void f(const int* const p) {
  // ...
}
```

## 内存管理
1. 函数执行时非手动分配（malloc）的内存存储在 "栈"中，由系统管理，函数执行完毕之后，系统会自动释放内存。
2. 手动分配的内存（malloc）存储在 “堆”中，手动分配的内存在函数执行结束时不会自动释放，需要手动释放(free)
3. restrict 说明符


## struct
1. struct 的作用：允许自定义复合数据类型，将不同类型的值组合在一起
2. struct 的复制：等同于值的复制
3. 无法用比较运算符（比如==和!=）比较两个数据结构是否相等或不等
4. 对于 struct 变量名，使用点运算符（.）获取属性；对于 struct 变量指针，使用箭头运算符（->）获取属性
5. typedef命令可以为 struct 结构指定一个别名

## typedef

## union

## enum

## 预处理器
1. 预处理指令，宏，宏本质上是字符串替换，不涉及数据类型，不像函数必须定义数据类型
2. `#define` 允许**多重替换**，即一个宏可以包含另一个宏。
3. 注意，如果宏出现在字符串里面（即出现在双引号中），或者是其他标识符的一部分，就会失效，并不会发生替换。
4. 带参数的宏
5. `#`: 运算符将宏转成字符串, `##`：标识符连接组成新的标识符
6. `#define` 与 `#undef`
7. #include最常见的用途，就是用来加载包含函数原型的头文件（后缀名为.h），参见《多文件编译》一章。多个#include指令的顺序无关紧要，多次包含同一个头文件也是合法的。

## 常用的头文件
- `<stdio.h>`
  - printf()
  - scanf()
  - sscanf()
  - getchar()
  - putchar()
  - fgetc()
  - getc()
  - fgets()
  - gets()
  - putc()
  - fputc()
  - puts()
  - fputs()
  - fsopen()
  - freopen()
  - fclose()
  - fprintf()
  - fscanf()
  - fwrite()
  - fread()
  - feof()
  - fseek()
  - ftell()

- `<string.h>`
  - memcpy()用于将一块内存拷贝到另一块内存


- `<math.h>`

- `<limits.h>`:查看当前系统数据类型支持的最大值和最小值

- `<stdbool.h>`: 提供布尔类型，true代表1、false代表0

- `stddef.h`: 引入 `<stdio.h>` 会自动引入

- `stdint.h`:
  - 程序员有时控制准确的字节宽度，这样的话，代码可以有更好的可移植性，头文件stdint.h创造了一些新的类型别名

- `stdlib.h`:
  - malloc(size): 该函数向系统要求一段内存，系统就在“堆”里面分配一段**连续**的内存块给它
  - calloc(n, size): 分配内存
  - realloc(p, size): 内存放大或缩小
  - 定义了 `exit()`, `atexit()`函数。
  - atexit()函数，用来登记exit()执行时额外执行的函数，用来做一些退出程序时的收尾工作
  - getenv()

- `stdarg.h` 定义了一些宏，可以操作可变参数。

## `<string.h>`
- memcpy()用于将一块内存拷贝到另一块内存
- memmove()函数用于将一段内存数据复制到另一段内存
- memcmp()函数用来比较两个内存区域。
```c
  void* memcpy(
    void* restrict dest, 
    void* restrict source, 
    size_t n
  );
  void* memmove(
    void* dest, 
    void* source, 
    size_t n
  );
  int memcmp(
    const void* s1,
    const void* s2,
    size_t n
  );
```


## FAQ
```c
unsigned int i = 5;
unsigned int j = 7;

if (i - j < 0) // 0, unsigned 类型的最小值为0
```

# Endian 字节顺序

一个字符编码成二进制进行存储时，根据不同的字符编码格式，所需存储的内存(字节)也不同。
这就涉及到字节排放顺序问题，高位字节和低位字节哪个放前面。

## 大端字节序 Big-endian 
大端模式，是指数据的高字节保存在内存的低地址中，而数据的低字节保存在内存的高地址中，
这样的存储模式有点儿类似于把数据当作字符串顺序处理：地址由小向大增加，
而数据从高位往低位放；这和我们的阅读习惯一致。

## 小端字节序 Little-Endian
小端模式，是指数据的高位字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中，
这种存储模式将地址的高低和数据位权有效地结合起来，高地址部分权值高，低地址部分权值低。


## 拓展
- 网络传输一般采用大端序，也被称之为网络字节序。
- 浏览器默认使用小字节序
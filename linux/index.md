# linux

## 推荐书籍
- linux 内核源码解析
- linux 内核设计与实现
- 30天自制操作系统

## 文件查看相关命令
cat
head
tail
more
less
stat: 查看文件信息
file： 查看文件类型



## 文件操作命令
touch
cp
mv
mkdir
rmdir
rename
rm
chmod: 设置文件的读，写，执行权限
chown: 修改文件的所有者


## 目录查看
ls
tree
pwd
find: 文件目录查找

## 文件内容操作
grep
wc
join
split
cut
paste


## 工具命令
man
whatis: 功能类似 man
type: 查看命令类型

source: 用来执行某个脚本，一般用来重新加载变更的脚本文件
which: 查找某个命令对应的二进制可执行程序文件所在的路径

echo

set: 显示所有环境变量
`env`命令或`printenv`命令，可以显示所有环境变量

查看命令的操作历史记录
HISTTIMEFORMAT，HISTSIZE





## type
```shell
type echo;
```
命令用来判断命令的来源

## echo
-e 参数会解释引号（双引号和单引号）里面的特殊字符（比如换行符\n）。
如果不使用-e参数，即默认情况下，引号会让特殊字符变成普通字符，echo不解释它们，原样输出。

## set
set命令可以显示所有变量（包括环境变量和自定义变量），以及所有的 Bash 函数
```shell
# 查看全部环境变量,函数
set
```
## `env`与`printenv`
`env`命令或`printenv`命令，可以显示所有环境变量

## wc
统计文本行数，字符数，字节数，单词数

## chmod
修改当前用户，用户组，其他用户对该文件的读，写，执行权限。
```shell
# 设置当前用户，用户组，其他用户可对 update.sh 文件进行读，写，执行
# 4=读，2=写，1=执行
chmod 777 update.sh
```

## chown
修改文件的所属用户

## ln
创建连接

## system
system 控制注册到system的服务的启动与停止

## ls

## find
find 查找目录的起始目录 【选项】

-type: 查找指定类型的文件， f(file)是普通文件，d(direcory)是目录

-name: 查找指定名称

-iname: 名称忽略大小写

-path<范本样式>：指定字符串作为寻找目录的范本样式；

-maxdepth<目录层级>：设置最大目录层级；


## cp
-a：此参数的效果和同时指定"-dpR"参数相同；
-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
-p：保留源文件或目录的属性；
-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
-i：覆盖既有文件之前先询问用户；
-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；

## mv
-f
-i
-n

## rm

## mkdir
-p 递归创建目录


## grep
grep 正则 文件

-A <显示行数>   --after-context=<显示行数>   除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-B <显示行数>   --before-context=<显示行数>   除了显示符合样式的那一行之外，并显示该行之前的内容。
-e<范本样式> --regexp=<范本样式>   指定字符串作为查找文件内容的范本样式。
-l --file-with-matches   列出文件内容符合指定的范本样式的文件名称。
-i --ignore-case    忽略字符大小写的差别。
-R/-r  --recursive  递归目录查找


grep -A 3 "\-type" ./index.md

## history
查看命令的操作历史记录
HISTTIMEFORMAT，HISTSIZE
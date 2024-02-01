# npm CLI 

## npm view
> 查看指定包的`package.json`相关配置    

```
# 语法
npm view [<package-spec>] [<field>[.subfield]...]

# 查看 vue 的所有版本
npm view vue versions

aliases: info, show, v
e.g. npm view vue@3.0.0 dependencies
```


## 参考文章
- [npm scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts)
- [阮一峰: npm_scripts](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
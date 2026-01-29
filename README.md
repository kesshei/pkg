# 基于 node.js PKG

```
https://github.com/yao-pkg/pkg/releases/tag/v6.12.0
```

# 目的

实现基于 node.js 的项目打包成可执行文件，但是不打包所有环境的问题，没有虚拟文件环境，只有单独一个node.exe + app.js + other 等文件

# 新增另外打包非单文件的方式

默认打开 app.js 文件，如果文件不存在则打开 package.json 中的 main 字段，否则，通过自有配置进行打开。

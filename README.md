# write a webpack loader

参考 [Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/) | [中文](https://webpack.docschina.org/contribute/writing-a-loader/)

**main.js：**

```js
import mdString from './demo.md'

document.write(mdString)
```

其实我们要做的是获取 md 文件的内容，并对内容进行一些转换（转为大写，单词替换）

**webpack.config.js 配置：**

```js
module: {
  rules: [
    {
      test: /\.md$/,
      use: [
        {
          loader: 'replace-loader',
          options: {
            origin: 'HELLO',
            target: 'HI'
          }
        },
        {
          loader: 'touppercase-loader'
        },
      ]
    }
  ]
}
```

loader 是从下到上（从右往左）执行的，第一个执行的 loader 接收 **源文件内容** 作为参数，其他 loader 接收前一个执行的 loader 的返回值作为参数。**最后执行的 loader 会返回此模块的 JavaScript 源码**

所以先会将 demo.md 的内容当作参数放入 touppercase-loader 进行转换（转为大写），然后 replace-loader 会将上一步转换结果当作参数传入（单词替换），最后导出一个函数

这样就实现了一个最简单的入门 loader，[raw-loader](https://github.com/webpack-contrib/raw-loader) 可以作为生产中的入门 loader 看看

---

loader 除了可以接收源文件内容作为参数，也可以是源文件 buffer 值，需要设置 ["Raw" Loader](https://webpack.js.org/api/loaders/#raw-loader)

移步 [use-raw](https://github.com/webpack-demo/wite-a-webpack-loader/tree/use-raw) 分支，简单实现一个 url-loader
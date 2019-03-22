const loaderUtils = require('loader-utils')

// source 就是传进来的文件
module.exports = function(source) {
  // 通过 this 可以访问 Loader API
  // 获取 webpack 配置文件中配置的 loader 的 options
  const options = loaderUtils.getOptions(this)
  const result = JSON.stringify(source).replace(options.origin, options.target)

  // return 出来的就是 source 经过 loader 转换后的内容
  // 因为是最后一个 loader，需要用 js 导出一个函数
  return `module.exports = ${result}`
}
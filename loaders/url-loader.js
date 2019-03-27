const mime = require('mime')

module.exports = function(buf) {
  const file = this.resourcePath
  const mimetype = mime.getType(file)
  const url = JSON.stringify(`data:${mimetype || ''};base64,${buf.toString('base64')}`)
  
  return `module.exports = ${url}`
} 

module.exports.raw = true

const path = require('path')
const fs = require('fs')
const debug = require('debug')('mock')
let mock = {}
function walk (dirPath) {
  fs.readdirSync(dirPath).forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      walk(dirPath + '/' + file)
    } else {
      Object.assign(mock, require(dirPath + '/' + file))
    }
  })
}

walk(path.resolve(__dirname, '../../../mock'))
debug(JSON.stringify(mock))
module.exports = mock

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// mock数据 start
const express = require('express')
const app = express()
let router = express.Router()
// 通过路由请求本地数据
app.use('/api', router)

let mock = require('./src/lib/mock')
let debug = require('debug')('mock')
let Mock = require('mockjs')

const __config = {
  dev: {
    enableMock: false // 是否开启本地数据mock
  }
}

module.exports = {
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/horizon': { target: 'http://10.179.180.246:8000' }
    },
    before (app) {
      if (!__config.dev.enableMock) {
        return
      }
      Object.keys(mock).forEach(key => {
        debug(key)
        let keyParsed = key.split(' ')
        app[keyParsed[0].toLowerCase()](keyParsed[1], (req, res) => {
          res.json({
            errno: 0,
            data: Mock.mock(mock[key])
          })
        })
      })
    }
  }
}

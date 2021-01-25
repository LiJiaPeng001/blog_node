const { sendData } = require('../utils/utils')

module.exports = (ctx, next) => {
  if (ctx.status === 404) {
    ctx.body = sendData({
      m: '这里没有您找的东西喔',
    })
  }
  return next().catch((err) => {
    let data = {
      m: '',
    }
    ctx.status = err.status || 500
    if (err.status === 401) {
      data.m = '请登录喔'
    } else {
      data.m = err.message
    }
    console.log(err.message)
    ctx.body = sendData(data)
  })
}

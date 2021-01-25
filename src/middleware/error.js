module.exports = (ctx, next) => {
  return next().catch((err) => {
    let data = {
      message: '',
    }
    ctx.status = err.status || 500
    if (err.status === 401) {
      data.message = '请登录喔'
    } else {
      data.message = err.message
    }
    ctx.body = data
  })
}

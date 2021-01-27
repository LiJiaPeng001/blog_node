const userApi = require('../services/user')

module.exports = {
  login: async (ctx) => {
    let { phone = '', password = '' } = ctx.request.body

    let data = await userApi.login({ phone, password }).catch((e) => {
      ctx.throw(500, e)
    })
    ctx.body = {
      message: '登录成功',
      data,
    }
  },
}

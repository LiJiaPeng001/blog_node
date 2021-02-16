const userApi = require('../services/user')
const uploadToken = require('../utils/qn')

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
  uploadToken: async (ctx) => {
    ctx.body = {
      mesage: '获取token成功',
      data: {
        token: uploadToken,
      },
    }
  },
}

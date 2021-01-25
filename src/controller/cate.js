const cateApi = require('../services/cate')

module.exports = {
  update: async (ctx) => {
    let { id = '', name = '' } = ctx.request.body
    await cateApi.update({ id, name })
    ctx.body = {
      message: 'success',
    }
  },
  add: async (ctx) => {
    let { name = '' } = ctx.request.body
    await cateApi.add({ name })
    ctx.body = {
      message: 'success',
    }
  },
  list: async (ctx) => {
    let { name = '' } = ctx.query
    let { list, total } = await cateApi.list({ name })
    ctx.body = {
      message: 'success',
      data: {
        list,
        total,
      },
    }
  },
}

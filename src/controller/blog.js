const blogApi = require('../services/blog')

module.exports = {
  remove: async (ctx) => {
    let { id = '' } = ctx.params
    await blogApi.remove(id)
    ctx.body = {
      message: 'success',
    }
  },
  update: async (ctx) => {
    let { title = '', cateId = '', content = '', id = '' } = ctx.request.body
    await blogApi.update({ title, cateId, content, id })
    ctx.body = {
      message: 'success',
    }
  },
  add: async (ctx) => {
    let { title = '', cateId = '', content = '' } = ctx.request.body
    await blogApi.add({ title, cateId, content })
    ctx.body = {
      message: 'success',
    }
  },
  detail: async (ctx) => {
    let { id = '' } = ctx.params
    let data = await blogApi.detail(id)
    ctx.body = {
      data,
      message: 'success',
    }
  },
  list: async (ctx) => {
    let { page = 1, per_page = 12, title = '', cate_id = '' } = ctx.query
    let { list, total } = await blogApi.list({
      page: Number(page),
      per_page: Number(per_page),
      title,
      cate_id,
    })
    ctx.body = {
      message: 'success',
      data: {
        list,
        total,
      },
    }
  },
}

const moment = require('dayjs')
const { Blog, Cate } = require('../mysql/model')

module.exports = {
  remove: async (id) => {
    await Blog.destroy({ where: { id } })
  },
  detail: async (id) => {
    let data = await Blog.findOne({
      where: {
        id,
      },
    })
    return data
  },
  update: async ({ title, cateId, content, id }) => {
    await Blog.update(
      { title, cateId, content },
      {
        where: {
          id,
        },
      }
    )
  },
  add: async ({ title = '', cateId = '', content = '' }) => {
    await Blog.create({
      title,
      cateId,
      content,
    })
  },
  list: async ({ page = 1, per_page = 12, title = '' }) => {
    let { count: total, rows } = await Blog.findAndCountAll({
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'title', 'cateId', 'content', 'createdAt'],
      offset: (page - 1) * per_page,
      limit: per_page,
      where: {
        title,
      },
      include: [
        {
          model: Cate,
          attributes: ['id', 'name'],
        },
      ],
    })
    return {
      list: rows.map((item) => ({
        ...item.dataValues,
        createdAt: moment(item.dataValues.createdAt.getTime()).format('YYYY-MM-DD HH:mm:ss'),
      })),
      total,
    }
  },
}

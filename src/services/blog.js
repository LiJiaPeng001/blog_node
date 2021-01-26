const moment = require('dayjs')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { Blog, Cate } = require('../mysql/model')

module.exports = {
  remove: async (id) => {
    await Blog.destroy({ where: { id } })
  },
  detail: async (id) => {
    let { dataValues: data } = await Blog.findOne({
      include: [
        {
          model: Cate,
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id,
      },
    })
    data.createdAt = moment(data.createdAt).format('YYYY-MM-DD HH:mm:ss')
    data.updatedAt = moment(data.updatedAt).format('YYYY-MM-DD HH:mm:ss')
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
      attributes: ['id', 'title', 'cateId', 'content', 'createdAt', 'updatedAt'],
      offset: (page - 1) * per_page,
      limit: per_page,
      where: {
        title: {
          [Op.like]: `%${title}%`,
        },
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
        updatedAt: moment(item.dataValues.updatedAt.getTime()).format('YYYY-MM-DD HH:mm:ss'),
      })),
      total,
    }
  },
}

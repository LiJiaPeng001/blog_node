const { Cate } = require('../mysql/model')
const moment = require('dayjs')

module.exports = {
  add: async ({ name = '' }) => {
    await Cate.create({
      name,
    })
  },
  update: async ({ name = '', id = '' }) => {
    await Cate.update(
      { name },
      {
        where: {
          id,
        },
      }
    )
  },
  list: async () => {
    console.log('请求')
    let { count: total, rows } = await Cate.findAndCountAll({
      attributes: ['id', 'name', 'createdAt'],
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

const { Cate } = require('../mysql/model')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
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
  list: async ({ name = '' }) => {
    let { count: total, rows } = await Cate.findAndCountAll({
      attributes: ['id', 'name', 'createdAt'],
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
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

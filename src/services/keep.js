const moment = require("dayjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Keep } = require("../mysql/model");

module.exports = {
  remove: async (id) => {
    await Keep.destroy({ where: { id } });
  },
  update: async (params) => {
    let { date, weight, id } = params;
    await Keep.update(
      { date, weight },
      {
        where: {
          id,
        },
      }
    );
  },
  add: async (params) => {
    await Keep.create(params);
  },
  list: async ({ page = 1, per_page = 12, date = "" }) => {
    let { count: total, rows } = await Keep.findAndCountAll({
      order: [["updatedAt", "DESC"]],
      attributes: ["id", "date", "weight", "createdAt", "updatedAt"],
      offset: (page - 1) * per_page,
      limit: per_page,
    });
    return {
      list: rows.map((item) => ({
        ...item.dataValues,
        date: moment(item.dataValues.date.getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        createdAt: moment(item.dataValues.createdAt.getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        updatedAt: moment(item.dataValues.updatedAt.getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
      })),
      total,
    };
  },
};

const moment = require("dayjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Card } = require("../mysql/model");

module.exports = {
  marryForm: async (params) => {
    await Card.create(params);
  },
  remove: async (id) => {
    await Card.destroy({ where: { id } });
  },
  update: async (params) => {
    let { name, num, link, mode, express, id } = params;
    await Card.update(
      { name, num, link, mode, express },
      {
        where: {
          id,
        },
      }
    );
  },
  add: async (params) => {
    await Card.create(params);
  },
  list: async ({ page = 1, per_page = 12, name = "" }) => {
    let { count: total, rows } = await Card.findAndCountAll({
      order: [["updatedAt", "DESC"]],
      attributes: [
        "id",
        "name",
        "num",
        "link",
        "mode",
        "express",
        "createdAt",
        "updatedAt",
      ],
      offset: (page - 1) * per_page,
      limit: per_page,
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return {
      list: rows.map((item) => ({
        ...item.dataValues,
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

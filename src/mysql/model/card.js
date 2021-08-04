/**
 * @description 创建博客
 */
const sequelize = require("sequelize");
const seq = require("../index");

const Card = seq.define("card", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "名称",
  },
  num: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "博客内容",
  },
  link: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "参与环节",
  },
  mode: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "送达方式",
  },
  express: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "快递信息",
  },
});
module.exports = Card;

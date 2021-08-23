/**
 * @description 体重变化表
 */
const sequelize = require("sequelize");
const seq = require("../index");

const Keep = seq.define("keep", {
  date: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
    allowNull: false,
    comment: "记录日期",
  },
  weight: {
    type: sequelize.STRING,
    allowNull: false,
    comment: "体重",
  },
});
module.exports = Keep;

/**
 * @description 数据模型入口文件
 */

const User = require("./user");
const Blog = require("./blog");
const Cate = require("./cate");
const Card = require("./card");

Blog.belongsTo(Cate);

module.exports = {
  User,
  Blog,
  Cate,
  Card,
};

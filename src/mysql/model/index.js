/**
 * @description 数据模型入口文件
 */

const User = require('./user')
const Blog = require('./blog')
const Cate = require('./cate')

Blog.belongsTo(Cate)

module.exports = {
  User,
  Blog,
  Cate,
}

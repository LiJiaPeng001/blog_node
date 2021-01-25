/**
 * @description 创建博客
 */
const { bigString } = require('../../utils/types')
const seq = require('../index')

const Blog = seq.define('blog', {
  content: {
    type: bigString,
    allowNull: false,
    comment: '微博内容',
  },
})
module.exports = Blog

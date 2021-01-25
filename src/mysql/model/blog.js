/**
 * @description 创建博客
 */
const { bigString, string, int } = require('../../utils/types')
const seq = require('../index')

const Blog = seq.define('blog', {
  title: {
    type: string,
    allowNull: false,
    comment: '标题',
  },
  // cate_id: {
  //   type: int,
  //   allowNull: false,
  //   comment: '类型ID',
  // },
  content: {
    type: bigString,
    allowNull: false,
    comment: '博客内容',
  },
})
module.exports = Blog

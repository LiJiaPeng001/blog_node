/**
 * @description 创建博客
 */
const { string } = require('../../utils/types')
const seq = require('../index')

module.exports = seq.define('cate', {
  name: {
    type: string,
    allowNull: false,
    comment: '类型名称',
  },
})

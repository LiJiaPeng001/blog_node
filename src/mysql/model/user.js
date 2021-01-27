/**
 * @description User数据模型
 */
const { string, bigInt } = require('../../utils/types')
const seq = require('../index')

const User = seq.define('user', {
  phone: {
    type: bigInt,
    allowNull: false,
    unique: true,
    comment: '电话号，唯一',
  },
  password: {
    type: string,
    allowNull: false,
    comment: '密码',
  },
  nickName: {
    type: string,
    comment: '昵称',
  },
  avatar: {
    type: string,
    comment: '头像',
  },
})
module.exports = User

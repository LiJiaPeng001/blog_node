/**
 *  sequelize 同步数据库
 */
const seq = require('./index')

require('./model/index')

seq
  .authenticate()
  .then(() => {
    console.log('connecnt success!')
  })
  .catch(() => {
    console.error('connect error!!!')
  })
//   { force: true }
seq.sync().then(() => {
  seq.close()
})

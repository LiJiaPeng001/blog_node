/**
 * @description 封装sequelize数据类型
 */
const sequelize = require('sequelize')

module.exports = {
  string: sequelize.STRING,
  bigString: sequelize.STRING(12000),
  int: sequelize.INTEGER,
  bool: sequelize.BOOLEAN,
}

const jwt = require("jsonwebtoken");
const { User } = require("../mysql/model");
const doCrypto = require("../utils/cryp");
const { jwtSecret, maxAge } = require("../utils/utils");

async function checkUser({ phone, password }) {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { phone } }).then((data = {}) => {
      let { dataValues: user = {} } = data;
      if (user.id) {
        if (user.password != doCrypto(password)) reject("密码输入错误");
        else resolve(user);
      } else reject("没有当前用户哟～");
    });
  });
}

module.exports = {
  login: async ({ phone, password }) => {
    // 检查
    let user = await checkUser({ phone, password });
    // 生成token
    let token = jwt.sign(user, jwtSecret, { expiresIn: maxAge });
    return {
      ...user,
      token,
    };
  },
};

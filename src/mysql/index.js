const Sequelize = require("sequelize");
const { isProd } = require("../contants");

const conf = {
  host: "47.97.109.250",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  timezone: "+08:00",
};

if (isProd) {
  conf.logging = () => {};
}

const seq = new Sequelize("my_blog", "root", "l201314520", conf);

module.exports = seq;

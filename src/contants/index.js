const ENV = process.env.NODE_ENV;
// const ENV = "production";

module.exports = {
  isDev: ENV === "development",
  isProd: ENV === "production",
};

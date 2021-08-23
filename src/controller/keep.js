const cardApi = require("../services/keep");

module.exports = {
  remove: async (ctx) => {
    let { id = "" } = ctx.params;
    await cardApi.remove(id);
    ctx.body = {
      message: "success",
    };
  },
  update: async (ctx) => {
    await cardApi.update(ctx.request.body);
    ctx.body = {
      message: "success",
    };
  },
  add: async (ctx) => {
    await cardApi.add(ctx.request.body);
    ctx.body = {
      message: "success",
    };
  },
  list: async (ctx) => {
    let { page = 1, per_page = 12, date = "" } = ctx.query;
    let { list, total } = await cardApi.list({
      page: Number(page),
      per_page: Number(per_page),
      date,
    });
    ctx.body = {
      message: "success",
      data: {
        list,
        total,
      },
    };
  },
};

const fs = require("fs");
const fsExtra = require("fs-extra");
const path = require("path");
const userApi = require("../services/user");
const uploadToken = require("../utils/qn");
const { uploadImageUrl } = require("../utils/utils");

module.exports = {
  login: async (ctx) => {
    let { phone = "", password = "" } = ctx.request.body;

    let data = await userApi.login({ phone, password }).catch((e) => {
      ctx.throw(500, e);
    });
    ctx.body = {
      message: "登录成功",
      data,
    };
  },
  upload: async (ctx) => {
    let { name } = ctx.request.body;
    let { file } = ctx.request.files;
    // 接收读出流
    const reader = fs.createReadStream(file.path);
    // 创建写入流
    // 指定图片路径文件名（即上传图片存储目录）
    const stream = fs.createWriteStream(
      path.resolve(__dirname, uploadImageUrl, name)
    );
    // 用管道将读出流 "倒给" 输入流
    reader.pipe(stream);
    ctx.body = {
      message: "上传成功",
      data: {
        url: `https://ljpeng.fun/static/images/${name}`,
      },
    };
  },
  uploadToken: async (ctx) => {
    ctx.body = {
      mesage: "获取token成功",
      data: {
        token: uploadToken,
      },
    };
  },
};
